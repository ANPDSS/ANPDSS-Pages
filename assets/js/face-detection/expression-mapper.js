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

  const primary = expressionArray[0];

  // Compute a continuous score using all expressions (confidence-weighted)
  // For each expression, map confidence into the expression's min..max range,
  // then compute a weighted average using the confidences.
  let totalConf = 0;
  let weightedSum = 0;
  const tagScores = {};

  expressionArray.forEach(({ expression, confidence }) => {
    const mapping = EXPRESSION_SCORE_MAP[expression];
    const conf = Number(confidence) || 0;
    totalConf += conf;

    let exprScore = 50; // default neutral
    if (mapping) {
      // Interpolate inside the mapping range based on confidence (0..1)
      exprScore = mapping.min + (mapping.max - mapping.min) * conf;
      // accumulate tag weights
      (mapping.tags || []).forEach(tag => { tagScores[tag] = (tagScores[tag] || 0) + conf; });
    }

    weightedSum += exprScore * conf;
  });

  const finalScore = Math.round((totalConf > 0 ? weightedSum / totalConf : 50));

  // Build tag list ordered by aggregated confidence weight
  const tags = Object.entries(tagScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([t]) => t);

  return {
    score: Math.max(0, Math.min(100, finalScore)),
    primaryExpression: primary.expression,
    confidence: primary.confidence,
    tags: tags.length ? tags : (EXPRESSION_SCORE_MAP[primary.expression]?.tags || ['neutral']),
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
