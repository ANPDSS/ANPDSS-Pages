/**
 * Expression Mapper Module
 * Maps face-api.js facial expressions to mood scores (0-100) and tags
 */

// Expression to mood score mapping with tags
const EXPRESSION_SCORE_MAP = {
  happy: { min: 75, max: 90, tags: ['happy', 'energetic'] },
  neutral: { min: 50, max: 65, tags: ['neutral', 'calm'] },
  sad: { min: 20, max: 40, tags: ['sad', 'tired'] },
  angry: { min: 10, max: 30, tags: ['stressed', 'frustrated'] },
  surprised: { min: 70, max: 80, tags: ['excited', 'energetic'] },
  fearful: { min: 15, max: 35, tags: ['anxious', 'overwhelmed'] },
  disgusted: { min: 25, max: 45, tags: ['frustrated', 'tired'] }
};

// Mood category mapping based on score
const MOOD_CATEGORIES = [
  { min: 0, max: 40, category: 'Stressed/Anxious' },
  { min: 41, max: 60, category: 'Tired/Low Energy' },
  { min: 61, max: 80, category: 'Happy/Neutral' },
  { min: 81, max: 100, category: 'Energetic/Excited' }
];

/**
 * Calculate mood score from facial expressions
 * @param {Object} expressions - face-api.js expressions object with confidence values
 * @returns {Object} { score, primaryExpression, confidence, tags, category }
 */
export function calculateMoodScore(expressions) {
  if (!expressions) {
    return {
      score: 50,
      primaryExpression: 'neutral',
      confidence: 0,
      tags: ['neutral'],
      category: 'Happy/Neutral'
    };
  }

  // Convert expressions object to sorted array by confidence
  const expressionArray = Object.entries(expressions)
    .map(([expression, confidence]) => ({ expression, confidence }))
    .sort((a, b) => b.confidence - a.confidence);

  // Get primary expression (highest confidence)
  const primary = expressionArray[0];

  // Check if there's a significant secondary expression (>25% confidence)
  const secondary = expressionArray[1];
  const hasSecondary = secondary && secondary.confidence > 0.25;

  let finalScore;
  let combinedTags = [];

  if (hasSecondary) {
    // Weighted average between primary and secondary expressions
    const primaryMapping = EXPRESSION_SCORE_MAP[primary.expression];
    const secondaryMapping = EXPRESSION_SCORE_MAP[secondary.expression];

    if (primaryMapping && secondaryMapping) {
      // Calculate mid-point score for each expression
      const primaryScore = (primaryMapping.min + primaryMapping.max) / 2;
      const secondaryScore = (secondaryMapping.min + secondaryMapping.max) / 2;

      // Weighted average
      const weight = primary.confidence / (primary.confidence + secondary.confidence);
      finalScore = Math.round(primaryScore * weight + secondaryScore * (1 - weight));

      // Combine tags (avoid duplicates)
      combinedTags = [...new Set([...primaryMapping.tags, ...secondaryMapping.tags])];
    } else {
      // Fallback to primary only
      finalScore = calculateSingleScore(primary.expression);
      combinedTags = EXPRESSION_SCORE_MAP[primary.expression]?.tags || ['neutral'];
    }
  } else {
    // Use primary expression only
    finalScore = calculateSingleScore(primary.expression);
    combinedTags = EXPRESSION_SCORE_MAP[primary.expression]?.tags || ['neutral'];
  }

  // Ensure score is within bounds
  finalScore = Math.max(0, Math.min(100, finalScore));

  return {
    score: finalScore,
    primaryExpression: primary.expression,
    confidence: primary.confidence,
    tags: combinedTags,
    category: getMoodCategory(finalScore)
  };
}

/**
 * Calculate score for a single expression
 * @param {string} expression - Expression name
 * @returns {number} Score (0-100)
 */
function calculateSingleScore(expression) {
  const mapping = EXPRESSION_SCORE_MAP[expression];
  if (!mapping) return 50; // Default to neutral

  // Return mid-point of the range
  return Math.round((mapping.min + mapping.max) / 2);
}

/**
 * Get mood category from score
 * @param {number} score - Mood score (0-100)
 * @returns {string} Mood category
 */
export function getMoodCategory(score) {
  for (const category of MOOD_CATEGORIES) {
    if (score >= category.min && score <= category.max) {
      return category.category;
    }
  }
  return 'Happy/Neutral'; // Default
}

/**
 * Get expression mapping for reference
 * @returns {Object} Expression score map
 */
export function getExpressionMap() {
  return { ...EXPRESSION_SCORE_MAP };
}
