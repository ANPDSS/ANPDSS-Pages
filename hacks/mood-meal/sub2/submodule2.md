---
layout: post
title: "Submodule 2"
description: "Mood Input & Emotion Analyzer"
permalink: /mood-meal/submodule_2/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 2
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/submodule_1/
  home: /mood-meal/
  next: /mood-meal/submodule_3/
---

# MoodMeal – Mood Input & Emotion Analyzer

<!-- Main container for the Mood Input page -->
<main id="mood-input-page">

  <!-- 1. How Are You Feeling? -->
  <section id="mood-selection" aria-label="Mood selection" style="margin-bottom: 1.5rem;">
    <h2>1. How Are You Feeling?</h2>
    <p>Select your current mood or use the slider to rate how you're feeling today:</p>

    <!-- Mood Slider -->
    <div style="margin: 1.5rem 0;">
      <label for="mood-slider"><strong>Mood Level (0-100):</strong></label>
      <div style="display: flex; align-items: center; gap: 1rem; margin-top: 0.5rem;">
        <span style="font-size: 0.9rem;">😔 Low</span>
        <input
          type="range"
          id="mood-slider"
          name="moodScore"
          min="0"
          max="100"
          value="50"
          step="1"
          style="flex: 1; max-width: 400px;"
        />
        <span style="font-size: 0.9rem;">😊 High</span>
        <strong id="mood-slider-value" style="min-width: 3rem; text-align: center;">50</strong>
      </div>
    </div>

    <!-- Quick Mood Emoji Buttons -->
    <div style="margin: 1.5rem 0;">
      <p><strong>Or pick a quick mood:</strong></p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem;">
        <button type="button" class="mood-emoji-btn" data-mood-score="20" data-mood-tag="stressed"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          😰 Stressed
        </button>
        <button type="button" class="mood-emoji-btn" data-mood-score="35" data-mood-tag="anxious"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          😟 Anxious
        </button>
        <button type="button" class="mood-emoji-btn" data-mood-score="45" data-mood-tag="tired"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          😴 Tired
        </button>
        <button type="button" class="mood-emoji-btn" data-mood-score="65" data-mood-tag="neutral"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          😐 Neutral
        </button>
        <button type="button" class="mood-emoji-btn" data-mood-score="75" data-mood-tag="happy"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          😊 Happy
        </button>
        <button type="button" class="mood-emoji-btn" data-mood-score="90" data-mood-tag="energetic"
          style="padding: 0.5rem 1rem; font-size: 1.5rem; cursor: pointer; border: 2px solid transparent; border-radius: 8px;">
          🤩 Energetic
        </button>
      </div>
    </div>
  </section>

  <hr />

  <!-- 2. Additional Mood Tags -->
  <section id="mood-tags-section" aria-label="Mood tags" style="margin: 1.5rem 0;">
    <h2>2. Add More Details (Optional)</h2>
    <p>Select any tags that describe your current state:</p>

    <div style="margin-top: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="overwhelmed" style="margin-right: 0.3rem;" />
          Overwhelmed
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="calm" style="margin-right: 0.3rem;" />
          Calm
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="creative" style="margin-right: 0.3rem;" />
          Creative
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="lazy" style="margin-right: 0.3rem;" />
          Lazy
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="motivated" style="margin-right: 0.3rem;" />
          Motivated
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="sad" style="margin-right: 0.3rem;" />
          Sad
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="excited" style="margin-right: 0.3rem;" />
          Excited
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="frustrated" style="margin-right: 0.3rem;" />
          Frustrated
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="peaceful" style="margin-right: 0.3rem;" />
          Peaceful
        </label>
        <label style="padding: 0.4rem 0.8rem; border: 1px solid #666; border-radius: 20px; cursor: pointer;">
          <input type="checkbox" name="moodTag" value="restless" style="margin-right: 0.3rem;" />
          Restless
        </label>
      </div>
    </div>
  </section>

  <hr />

  <!-- 3. Current Mood Summary Display -->
  <section id="mood-summary-display" aria-label="Current mood summary" style="margin: 1.5rem 0;">
    <h2>3. Your Current Mood</h2>
    <div id="mood-summary-card"
      style="padding: 1rem; background: #0a0a0a; border-radius: 8px; border-left: 4px solid #4a9eff;">
      <p>
        <strong>Mood Score:</strong>
        <span id="display-mood-score" style="font-size: 1.2rem; color: #4a9eff;">50</span>/100
      </p>
      <p>
        <strong>Selected Tags:</strong>
        <span id="display-mood-tags" style="color: #ccc;">None selected</span>
      </p>
      <p>
        <strong>Mood Category:</strong>
        <span id="display-mood-category" style="color: #4a9eff;">Neutral</span>
      </p>
    </div>
  </section>

  <hr />

  <!-- 4. Save Mood Entry -->
  <section id="save-mood-section" aria-label="Save mood" style="margin: 1.5rem 0;">
    <h2>4. Save Your Mood</h2>
    <p>Save this mood entry to track your emotions over time and get better recommendations.</p>

    <div style="margin-top: 1rem;">
      <button
        id="save-mood-btn"
        type="button"
        style="padding: 0.6rem 1.5rem; font-size: 1rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;"
      >
        Save Mood & Continue
      </button>

      <!-- Loading indicator -->
      <span id="save-mood-loading" style="margin-left: 1rem; display: none;">
        Saving...
      </span>

      <!-- Success message -->
      <div id="save-mood-success" style="color: #4eff9e; margin-top: 0.5rem; display: none;">
        ✓ Mood saved successfully!
      </div>

      <!-- Error message -->
      <div id="save-mood-error" style="color: #ff4a4a; margin-top: 0.5rem; display: none;">
        Something went wrong. Please try again.
      </div>
    </div>
  </section>

  <!-- Joke Modal for Low Mood -->
  <div id="joke-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 1000; align-items: center; justify-content: center;">
    <div style="background: #1a1a1a; padding: 2rem; border-radius: 12px; max-width: 500px; width: 90%; border: 2px solid #4a9eff; box-shadow: 0 8px 32px rgba(74, 158, 255, 0.3);">
      <h3 style="color: #4a9eff; margin-top: 0; font-size: 1.5rem; text-align: center;">Here's a joke to cheer you up! 😊</h3>
      <p id="joke-text" style="font-size: 1.1rem; line-height: 1.6; color: #fff; margin: 1.5rem 0; text-align: center; font-style: italic;"></p>
      <div style="text-align: center; margin-top: 1.5rem;">
        <button id="joke-modal-close" style="padding: 0.6rem 1.5rem; font-size: 1rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;">
          Thanks! 😊
        </button>
      </div>
    </div>
  </div>


</main>

<script type="module">
// MoodMeal - Mood Input & Emotion Analyzer JavaScript
import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

(function() {
  'use strict';

  // State
  let currentMoodScore = 50;
  let selectedTags = [];
  let selectedPrimaryTag = null;

  // DOM Elements
  const moodSlider = document.getElementById('mood-slider');
  const moodSliderValue = document.getElementById('mood-slider-value');
  const moodEmojiButtons = document.querySelectorAll('.mood-emoji-btn');
  const moodTagCheckboxes = document.querySelectorAll('input[name="moodTag"]');
  const displayMoodScore = document.getElementById('display-mood-score');
  const displayMoodTags = document.getElementById('display-mood-tags');
  const displayMoodCategory = document.getElementById('display-mood-category');
  const saveMoodBtn = document.getElementById('save-mood-btn');
  const saveMoodLoading = document.getElementById('save-mood-loading');
  const saveMoodSuccess = document.getElementById('save-mood-success');
  const saveMoodError = document.getElementById('save-mood-error');

  // Helper: Get mood category from score
  function getMoodCategory(score) {
    if (score <= 40) return 'Stressed/Anxious';
    if (score <= 60) return 'Tired/Low Energy';
    if (score <= 80) return 'Happy/Neutral';
    return 'Energetic/Excited';
  }

  // Helper: Update mood summary display
  function updateMoodSummary() {
    displayMoodScore.textContent = currentMoodScore;
    displayMoodCategory.textContent = getMoodCategory(currentMoodScore);

    const allTags = selectedPrimaryTag
      ? [selectedPrimaryTag, ...selectedTags].filter((v, i, a) => a.indexOf(v) === i)
      : selectedTags;

    displayMoodTags.textContent = allTags.length > 0
      ? allTags.join(', ')
      : 'None selected';
  }

  // Mood Slider Handler
  if (moodSlider) {
    moodSlider.addEventListener('input', (e) => {
      currentMoodScore = parseInt(e.target.value);
      moodSliderValue.textContent = currentMoodScore;
      updateMoodSummary();

      // Clear emoji button selection
      moodEmojiButtons.forEach(btn => {
        btn.style.borderColor = 'transparent';
        btn.style.background = 'transparent';
      });
      selectedPrimaryTag = null;
      updateMoodSummary();
    });
  }

  // Mood Emoji Button Handlers
  moodEmojiButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const score = parseInt(btn.dataset.moodScore);
      const tag = btn.dataset.moodTag;

      currentMoodScore = score;
      selectedPrimaryTag = tag;

      // Update slider
      if (moodSlider) {
        moodSlider.value = score;
        moodSliderValue.textContent = score;
      }

      // Visual feedback
      moodEmojiButtons.forEach(b => {
        b.style.borderColor = 'transparent';
        b.style.background = 'transparent';
      });
      btn.style.borderColor = '#4a9eff';
      btn.style.background = 'rgba(74, 158, 255, 0.1)';

      updateMoodSummary();
    });
  });

  // Mood Tag Checkbox Handlers
  moodTagCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const tag = e.target.value;
      if (e.target.checked) {
        if (!selectedTags.includes(tag)) {
          selectedTags.push(tag);
        }
      } else {
        selectedTags = selectedTags.filter(t => t !== tag);
      }
      updateMoodSummary();
    });
  });

  // Fetch random joke from backend API (ANPDSS-flask/hacks/jokes.py)
  async function getRandomJoke() {
    try {
      const url = `${pythonURI}/api/jokes/random`;
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        console.error('Failed to fetch joke:', response.status);
        // Fallback joke if API fails
        return "Why do programmers prefer dark mode? Because light attracts bugs!";
      }

      const data = await response.json();
      return data.joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
      // Fallback joke if API fails
      return "Why do programmers prefer dark mode? Because light attracts bugs!";
    }
  }

  // Show joke modal
  function showJokeModal(joke) {
    const modal = document.getElementById('joke-modal');
    const jokeText = document.getElementById('joke-text');
    const closeBtn = document.getElementById('joke-modal-close');

    jokeText.textContent = joke;
    modal.style.display = 'flex';

    closeBtn.onclick = () => {
      modal.style.display = 'none';
    };

    // Close on backdrop click
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  // Save Mood Button Handler
  if (saveMoodBtn) {
    saveMoodBtn.addEventListener('click', async () => {
      // Check if mood is under 40 and show a joke from backend
      if (currentMoodScore < 40) {
        const joke = await getRandomJoke();
        showJokeModal(joke);
      }

      // Hide previous messages
      saveMoodSuccess.style.display = 'none';
      saveMoodError.style.display = 'none';
      saveMoodLoading.style.display = 'inline';
      saveMoodBtn.disabled = true;

      try {
        // Prepare mood data
        const allTags = selectedPrimaryTag
          ? [selectedPrimaryTag, ...selectedTags].filter((v, i, a) => a.indexOf(v) === i)
          : selectedTags;

        const moodData = {
          moodScore: currentMoodScore,
          moodTags: allTags,
          moodCategory: getMoodCategory(currentMoodScore),
          timestamp: new Date().toISOString()
        };

        // TODO: Replace with actual API call
        // const response = await fetch('/api/mood/save', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(moodData)
        // });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Store in localStorage for now (temporary until backend is ready)
        const userId = 'user123'; // TODO: Get from auth
        const storageKey = `moodmeal_mood_${userId}`;
        localStorage.setItem(storageKey, JSON.stringify(moodData));

        // Success
        saveMoodLoading.style.display = 'none';
        saveMoodSuccess.style.display = 'block';

        // Redirect to recommendations page after 1.5 seconds
        setTimeout(() => {
          // Use Jekyll's relative_url filter so the generated HTML includes the site's baseurl
          // This ensures the redirect works both locally and on GitHub Pages when a baseurl is set.
          window.location.href = "{{ '/mood-meal/submodule_3/' | relative_url }}";
        }, 1500);

      } catch (error) {
        console.error('Error saving mood:', error);
        saveMoodLoading.style.display = 'none';
        saveMoodError.style.display = 'block';
        saveMoodBtn.disabled = false;
      }
    });
  }

  // Initialize mood summary on page load
  updateMoodSummary();

  console.log('MoodMeal Mood Input & Emotion Analyzer - Submodule 2 Loaded');
})();
</script>

<style>
/* Mood Input & Emotion Analyzer Styling */

/* Mood emoji buttons hover effect */
.mood-emoji-btn {
  transition: all 0.2s ease;
}

.mood-emoji-btn:hover {
  background: rgba(74, 158, 255, 0.15) !important;
  border-color: #4a9eff !important;
  transform: scale(1.05);
}

/* Mood tag labels hover effect */
label:has(input[name="moodTag"]) {
  transition: all 0.2s ease;
}

label:has(input[name="moodTag"]):hover {
  background: rgba(74, 158, 255, 0.1);
  border-color: #4a9eff !important;
}

label:has(input[name="moodTag"]:checked) {
  background: rgba(74, 158, 255, 0.2);
  border-color: #4a9eff !important;
}

/* Mood slider styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: linear-gradient(to right, #ff4a4a 0%, #ffaa4a 25%, #ffff4a 50%, #aaff4a 75%, #4aff4a 100%);
  height: 8px;
  border-radius: 4px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #4a9eff;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  background: #6ab4ff;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #4a9eff;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.2);
  background: #6ab4ff;
}

/* Save button hover effect */
#save-mood-btn:hover:not(:disabled) {
  background: #6ab4ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
  transition: all 0.2s ease;
}

#save-mood-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Table styling */
table {
  font-size: 0.9rem;
}

table th {
  color: #4a9eff;
}

table tr:hover {
  background: rgba(74, 158, 255, 0.05);
}

/* Joke Modal Animations */
#joke-modal {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#joke-modal > div {
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#joke-modal-close:hover {
  background: #6ab4ff;
  transform: scale(1.05);
  transition: all 0.2s ease;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .mood-emoji-btn {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  input[type="range"] {
    max-width: 100%;
  }

  #joke-modal > div {
    padding: 1.5rem;
  }

  #joke-text {
    font-size: 1rem !important;
  }
}
</style>
