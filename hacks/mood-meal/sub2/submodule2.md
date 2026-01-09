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

<script defer src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"></script>

<!-- Main container for the Mood Input page -->
<main id="mood-input-page">

  <!-- 1. How Are You Feeling? -->
  <section id="mood-selection" aria-label="Mood selection" style="margin-bottom: 1.5rem;">
    <h2>1. How Are You Feeling?</h2>
    <p>Select your current mood or use the slider to rate how you're feeling today:</p>

    <!-- AI Face Detection -->
    <div style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(33, 150, 243, 0.1); border-radius: 12px; border: 2px solid #2196F3;">
      <h3 style="margin-top: 0;">📸 Try AI Mood Detection!</h3>
      <p style="margin-bottom: 1rem;">Let AI detect your mood from your facial expression</p>

      <div style="padding: 0.75rem; background: rgba(78, 255, 158, 0.1); border-left: 3px solid #4eff9e; margin-bottom: 1rem;">
        <strong>🔒 Privacy:</strong> Facial analysis happens entirely in your browser.
        No images are uploaded. Only your mood score and tags are saved.
      </div>

      <button id="start-camera-btn" class="mood-emoji-btn" onclick="startFaceDetection()" style="width: 100%; font-size: 1rem; padding: 1rem;">
        📸 Detect Mood from Camera
      </button>
    </div>

    <div style="text-align: center; margin: 1.5rem 0; color: #666; font-weight: bold;">OR USE MANUAL SELECTION</div>

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

  // Save Mood Button Handler
  if (saveMoodBtn) {
    saveMoodBtn.addEventListener('click', async () => {
      // Check if mood is under 40 and show a joke from backend
      if (currentMoodScore < 40) {
        const joke = await getRandomJoke();
        alert(`Here's a joke to cheer you up! 😊\n\n${joke}`);
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

<!-- Camera Modal for Face Detection -->
<div id="camera-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); z-index: 10000; overflow-y: auto;">
  <div style="max-width: 800px; margin: 2rem auto; padding: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h2 style="margin: 0;">📸 AI Mood Detection</h2>
      <button onclick="closeCameraModal()" style="background: transparent; border: none; color: #fff; font-size: 2rem; cursor: pointer; padding: 0.5rem;">&times;</button>
    </div>

    <!-- Step 1: Loading -->
    <div id="modal-step-loading" class="modal-step">
      <div style="text-align: center; padding: 3rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">⏳</div>
        <h3 id="loading-message">Loading AI models...</h3>
        <p style="color: #bbb; margin-top: 1rem;" id="loading-progress">Preparing face detection...</p>
        <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 1.5rem; overflow: hidden;">
          <div id="loading-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #2196F3, #4eff9e); transition: width 0.3s ease;"></div>
        </div>
      </div>
    </div>

    <!-- Step 2: Permission -->
    <div id="modal-step-permission" class="modal-step" style="display: none;">
      <div style="text-align: center; padding: 3rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">📷</div>
        <h3>Camera Access Required</h3>
        <p style="color: #bbb; margin: 1.5rem 0;">We need access to your camera to detect your facial expression and determine your mood.</p>
        <div style="padding: 1rem; background: rgba(78, 255, 158, 0.1); border-left: 3px solid #4eff9e; margin: 1.5rem 0; text-align: left;">
          <strong>🔒 Your Privacy is Protected:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: #bbb;">
            <li>All processing happens in your browser</li>
            <li>No images are uploaded to any server</li>
            <li>Only mood scores are saved locally</li>
            <li>Camera access ends when you close this window</li>
          </ul>
        </div>
        <button class="mood-emoji-btn" onclick="requestCameraAccess()" style="width: 100%; margin-top: 1rem; font-size: 1rem; padding: 1rem;">
          ✓ Allow Camera Access
        </button>
        <button class="mood-emoji-btn" onclick="showSliderMode()" style="width: 100%; margin-top: 1rem; background: transparent; border: 1px solid #666; font-size: 1rem; padding: 1rem;">
          Use Manual Slider Instead
        </button>
      </div>
    </div>

    <!-- Step 3: Detection -->
    <div id="modal-step-detection" class="modal-step" style="display: none;">
      <div style="text-align: center;">
        <h3 style="margin-bottom: 1rem;">Position Your Face</h3>
        <p id="detection-status" style="color: #4eff9e; margin-bottom: 1rem;">Looking for your face...</p>

        <div style="position: relative; display: inline-block; border-radius: 12px; overflow: hidden;">
          <video id="face-video" autoplay playsinline style="width: 100%; max-width: 640px; border-radius: 12px; background: #000;"></video>
          <canvas id="face-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></canvas>
        </div>

        <div style="margin-top: 1.5rem;">
          <button id="capture-btn" class="mood-emoji-btn" onclick="captureMood()" style="width: 100%; display: none; font-size: 1rem; padding: 1rem;">
            📸 Capture My Mood
          </button>
          <button class="mood-emoji-btn" onclick="showSliderMode()" style="width: 100%; margin-top: 1rem; background: transparent; border: 1px solid #666; font-size: 1rem; padding: 1rem;">
            Use Manual Slider Instead
          </button>
        </div>

        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: left;">
          <strong>Tips for best results:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: #bbb;">
            <li>Face the camera directly</li>
            <li>Ensure good lighting</li>
            <li>Remove any obstructions (hat, mask, etc.)</li>
            <li>Stay still when capturing</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Step 4: Review -->
    <div id="modal-step-review" class="modal-step" style="display: none;">
      <div style="text-align: center;">
        <h3 style="margin-bottom: 1rem;">Review Your Mood</h3>

        <img id="captured-preview" style="width: 100%; max-width: 640px; border-radius: 12px; margin-bottom: 1.5rem; border: 3px solid #4eff9e;" alt="Captured face">

        <div style="background: rgba(33, 150, 243, 0.1); border: 2px solid #2196F3; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
          <h4 style="margin-top: 0;">Detected Mood</h4>
          <div style="font-size: 3rem; margin: 1rem 0;" id="review-score">75</div>
          <div style="font-size: 1.5rem; color: #4eff9e; margin-bottom: 1rem;" id="review-expression">Happy</div>
          <div style="color: #bbb; margin-bottom: 0.5rem;" id="review-category">Happy/Neutral</div>
          <div id="review-tags" style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <span style="padding: 0.25rem 0.75rem; background: rgba(74, 158, 255, 0.2); border-radius: 12px;">happy</span>
            <span style="padding: 0.25rem 0.75rem; background: rgba(74, 158, 255, 0.2); border-radius: 12px;">energetic</span>
          </div>
          <div style="color: #888; font-size: 0.9rem; margin-top: 1rem;">
            Confidence: <span id="review-confidence">85%</span>
          </div>
        </div>

        <button class="mood-emoji-btn" onclick="confirmDetectedMood()" style="width: 100%; margin-bottom: 1rem; font-size: 1rem; padding: 1rem;">
          ✓ Confirm & Use This Mood
        </button>
        <button class="mood-emoji-btn" onclick="retryDetection()" style="width: 100%; background: transparent; border: 1px solid #2196F3; font-size: 1rem; padding: 1rem;">
          🔄 Retake
        </button>
      </div>
    </div>

    <!-- Error Display -->
    <div id="modal-step-error" class="modal-step" style="display: none;">
      <div style="text-align: center; padding: 3rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
        <h3 id="error-title">Something Went Wrong</h3>
        <p style="color: #bbb; margin: 1.5rem 0;" id="error-message">Please try again or use the manual slider.</p>
        <button class="mood-emoji-btn" onclick="retryDetection()" style="width: 100%; margin-bottom: 1rem; font-size: 1rem; padding: 1rem;">
          🔄 Try Again
        </button>
        <button class="mood-emoji-btn" onclick="showSliderMode()" style="width: 100%; background: transparent; border: 1px solid #666; font-size: 1rem; padding: 1rem;">
          Use Manual Slider Instead
        </button>
      </div>
    </div>
  </div>
</div>

<script type="module">
  // Import face detection modules
  import { calculateMoodScore, getMoodCategory } from '{{ site.baseurl }}/assets/js/face-detection/expression-mapper.js';
  import { FaceMoodDetector, ERROR_CODES } from '{{ site.baseurl }}/assets/js/face-detection/face-mood-detector.js';

  // Make functions globally available
  window.calculateMoodScore = calculateMoodScore;
  window.getMoodCategoryFromMapper = getMoodCategory;
  window.FaceMoodDetector = FaceMoodDetector;
  window.ERROR_CODES = ERROR_CODES;

  // Global variables for face detection - store on window to ensure persistence
  window.faceDetectionState = {
    faceDetector: null,
    detectedMoodData: null,
    capturedImageData: null,
    detectionLoop: null,
    failureCount: 0,
    MAX_FAILURES: 3
  };

  // Start face detection flow
  window.startFaceDetection = async function() {
    // Check browser support
    const browserSupport = FaceMoodDetector.checkBrowserSupport();
    if (!browserSupport.supported) {
      alert('⚠️ Camera access is not supported in your browser. Please use a modern browser like Chrome, Firefox, or Safari.');
      return;
    }

    // Open modal and show loading step
    document.getElementById('camera-modal').style.display = 'block';
    showModalStep('loading');

    // Initialize detector
    const videoElement = document.getElementById('face-video');
    const canvasElement = document.getElementById('face-canvas');
    window.faceDetectionState.faceDetector = new FaceMoodDetector(videoElement, canvasElement);

    // Load models with progress
    const initResult = await window.faceDetectionState.faceDetector.initialize((message, progress) => {
      document.getElementById('loading-message').textContent = message;
      document.getElementById('loading-bar').style.width = progress + '%';
    });

    if (!initResult.success) {
      showCameraError('Model Loading Failed', initResult.message);
      return;
    }

    // Show permission step
    setTimeout(() => showModalStep('permission'), 500);
  };

  // Request camera access
  window.requestCameraAccess = async function() {
    showModalStep('loading');
    document.getElementById('loading-message').textContent = 'Starting camera...';
    document.getElementById('loading-bar').style.width = '50%';

    const cameraResult = await window.faceDetectionState.faceDetector.startCamera();

    if (!cameraResult.success) {
      if (cameraResult.error === ERROR_CODES.PERMISSION_DENIED) {
        showCameraError(
          'Camera Access Denied',
          'To use AI mood detection, please enable camera access in your browser settings. Or use the manual slider below.'
        );
      } else {
        showCameraError('Camera Error', cameraResult.message);
      }
      return;
    }

    // Show detection step and start continuous detection
    showModalStep('detection');
    startContinuousDetection();
  };

  // Start continuous detection loop
  window.startContinuousDetection = function() {
    let noFaceCount = 0;
    const NO_FACE_THRESHOLD = 50; // ~10 seconds at 150ms intervals

    window.faceDetectionState.detectionLoop = setInterval(async () => {
      const result = await window.faceDetectionState.faceDetector.detectExpression();

      if (result.success) {
        noFaceCount = 0;
        window.faceDetectionState.failureCount = 0;

        // Update status
        if (result.warning === ERROR_CODES.MULTIPLE_FACES) {
          document.getElementById('detection-status').textContent = '⚠️ Multiple faces detected. Using the closest one.';
          document.getElementById('detection-status').style.color = '#ff9800';
        } else {
          document.getElementById('detection-status').textContent = '✓ Face detected! Click capture when ready.';
          document.getElementById('detection-status').style.color = '#4eff9e';
        }

        // Show capture button
        document.getElementById('capture-btn').style.display = 'block';

        // Store detection result
        window.faceDetectionState.detectedMoodData = {
          detection: result.detection,
          expressions: result.expressions
        };
      } else {
        // Handle detection failure
        document.getElementById('capture-btn').style.display = 'none';

        if (result.error === ERROR_CODES.NO_FACE_DETECTED) {
          noFaceCount++;
          document.getElementById('detection-status').textContent = 'Looking for your face...';
          document.getElementById('detection-status').style.color = '#2196F3';

          // Timeout after 10 seconds
          if (noFaceCount >= NO_FACE_THRESHOLD) {
            clearInterval(window.faceDetectionState.detectionLoop);
            showCameraError(
              'No Face Detected',
              'Please ensure you\'re in a well-lit area facing the camera directly.'
            );
          }
        } else if (result.error === ERROR_CODES.FACE_TOO_SMALL) {
          document.getElementById('detection-status').textContent = '↔️ Move closer to the camera';
          document.getElementById('detection-status').style.color = '#ff9800';
        } else if (result.error === ERROR_CODES.POOR_LIGHTING) {
          document.getElementById('detection-status').textContent = '💡 Try improving lighting';
          document.getElementById('detection-status').style.color = '#ff9800';
        } else {
          window.faceDetectionState.failureCount++;
          if (window.faceDetectionState.failureCount >= window.faceDetectionState.MAX_FAILURES) {
            clearInterval(window.faceDetectionState.detectionLoop);
            showCameraError(
              'Detection Not Working',
              'We\'re having trouble detecting your face. Would you like to use the manual slider instead?'
            );
          }
        }
      }
    }, 150);
  };

  // Capture mood
  window.captureMood = function() {
    if (!window.faceDetectionState.detectedMoodData) {
      alert('No face detected yet. Please wait...');
      return;
    }

    // Stop detection loop
    clearInterval(window.faceDetectionState.detectionLoop);

    // Capture frame
    window.faceDetectionState.capturedImageData = window.faceDetectionState.faceDetector.captureFrame();

    // Stop camera
    window.faceDetectionState.faceDetector.stopCamera();

    // Calculate mood score from expressions
    const moodResult = calculateMoodScore(window.faceDetectionState.detectedMoodData.expressions);

    // Show review screen
    document.getElementById('captured-preview').src = window.faceDetectionState.capturedImageData;
    document.getElementById('review-score').textContent = moodResult.score;
    document.getElementById('review-expression').textContent = moodResult.primaryExpression.charAt(0).toUpperCase() + moodResult.primaryExpression.slice(1);
    document.getElementById('review-category').textContent = moodResult.category;
    document.getElementById('review-confidence').textContent = Math.round(moodResult.confidence * 100) + '%';

    // Display tags
    const tagsHtml = moodResult.tags.map(tag =>
      `<span style="padding: 0.25rem 0.75rem; background: rgba(74, 158, 255, 0.2); border-radius: 12px;">${tag}</span>`
    ).join('');
    document.getElementById('review-tags').innerHTML = tagsHtml;

    // Store mood result
    window.faceDetectionState.detectedMoodData.moodResult = moodResult;

    showModalStep('review');
  };

  // Confirm detected mood
  window.confirmDetectedMood = function() {
    if (!window.faceDetectionState.detectedMoodData || !window.faceDetectionState.window.faceDetectionState.detectedMoodData.moodResult) {
      alert('No mood data available');
      return;
    }

    const moodResult = window.faceDetectionState.detectedMoodData.moodResult;

    // Update mood slider
    const moodSlider = document.getElementById('mood-slider');
    const moodSliderValue = document.getElementById('mood-slider-value');
    if (moodSlider && moodSliderValue) {
      moodSlider.value = moodResult.score;
      moodSliderValue.textContent = moodResult.score;
    }

    // Trigger change event to update the IIFE state
    const event = new Event('input', { bubbles: true });
    moodSlider.dispatchEvent(event);

    // Update display summary
    const displayMoodScore = document.getElementById('display-mood-score');
    const displayMoodCategory = document.getElementById('display-mood-category');
    const displayMoodTags = document.getElementById('display-mood-tags');

    if (displayMoodScore) displayMoodScore.textContent = moodResult.score;
    if (displayMoodCategory) displayMoodCategory.textContent = moodResult.category;
    if (displayMoodTags) displayMoodTags.textContent = moodResult.tags.join(', ');

    // Close modal and cleanup
    closeCameraModal();

    // Show success message
    alert(`✓ Mood detected: ${moodResult.category} (${moodResult.score})`);

    // Scroll to summary
    const summary = document.getElementById('mood-summary');
    if (summary) {
      summary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Retry detection
  window.retryDetection = function() {
    // Reset state
    window.faceDetectionState.detectedMoodData = null;
    window.faceDetectionState.capturedImageData = null;
    window.faceDetectionState.failureCount = 0;

    // Restart camera and detection
    showModalStep('loading');
    document.getElementById('loading-message').textContent = 'Restarting camera...';
    document.getElementById('loading-bar').style.width = '50%';

    setTimeout(async () => {
      const cameraResult = await window.faceDetectionState.faceDetector.startCamera();
      if (cameraResult.success) {
        showModalStep('detection');
        startContinuousDetection();
      } else {
        showCameraError('Camera Error', cameraResult.message);
      }
    }, 500);
  };

  // Show slider mode (fallback)
  window.showSliderMode = function() {
    closeCameraModal();

    // Scroll to slider
    document.getElementById('mood-slider').scrollIntoView({ behavior: 'smooth', block: 'center' });
    alert('Use the slider below to set your mood');
  };

  // Close camera modal
  window.closeCameraModal = function() {
    // Stop detection loop
    if (window.faceDetectionState.detectionLoop) {
      clearInterval(window.faceDetectionState.detectionLoop);
      window.faceDetectionState.detectionLoop = null;
    }

    // Cleanup detector
    if (window.faceDetectionState.faceDetector) {
      window.faceDetectionState.faceDetector.cleanup();
    }

    // Hide modal
    document.getElementById('camera-modal').style.display = 'none';

    // Reset state
    window.faceDetectionState.detectedMoodData = null;
    window.faceDetectionState.capturedImageData = null;
    window.faceDetectionState.failureCount = 0;
  };

  // Show modal step
  function showModalStep(step) {
    const steps = ['loading', 'permission', 'detection', 'review', 'error'];
    steps.forEach(s => {
      const element = document.getElementById('modal-step-' + s);
      if (element) {
        element.style.display = s === step ? 'block' : 'none';
      }
    });
  }

  // Show camera error
  function showCameraError(title, message) {
    // Stop detection loop
    if (window.faceDetectionState.detectionLoop) {
      clearInterval(window.faceDetectionState.detectionLoop);
    }

    // Stop camera
    if (window.faceDetectionState.faceDetector) {
      window.faceDetectionState.faceDetector.stopCamera();
    }

    // Show error step
    document.getElementById('error-title').textContent = title;
    document.getElementById('error-message').textContent = message;
    showModalStep('error');
  }
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

/* Responsive adjustments */
@media (max-width: 600px) {
  .mood-emoji-btn {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  input[type="range"] {
    max-width: 100%;
  }
}
</style>
