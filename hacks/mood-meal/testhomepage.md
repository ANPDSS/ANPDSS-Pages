---
layout: post
title: "MoodLife - Complete Wellness App"
description: "Personalized mood tracking, meal recommendations, activities, and music in one unified experience"
permalink: /mood-meal/
author: ANPDSS
date: 2025-12-05
categories: [CSP, MoodLife, Wellness]
tags: [mood-tracking, meals, activities, music, wellness]
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MoodLife - Your Complete Wellness Companion</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #000000 0%, #0a0a1a 100%);
      color: #ffffff;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Navigation */
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(17, 17, 17, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid #2196F3;
      z-index: 1000;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      background: linear-gradient(45deg, #2196F3, #4eff9e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-btn {
      padding: 0.5rem 1rem;
      background: transparent;
      color: #2196F3;
      border: 1px solid #2196F3;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nav-btn:hover {
      background: #2196F3;
      color: white;
      transform: translateY(-2px);
    }

    .nav-btn.active {
      background: #2196F3;
      color: white;
    }

    /* Main Container */
    .container {
      max-width: 1200px;
      margin: 80px auto 2rem;
      padding: 2rem;
    }

    /* Section Styles */
    .section {
      display: none;
      animation: fadeIn 0.5s ease;
    }

    .section.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Cards */
    .card {
      background: rgba(17, 17, 17, 0.8);
      border: 1px solid #2a2a2a;
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 40px rgba(33, 150, 243, 0.1);
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 50px rgba(33, 150, 243, 0.2);
    }

    /* Buttons */
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #2196F3, #1976D2);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #2196F3;
      border: 2px solid #2196F3;
    }

    .btn-secondary:hover {
      background: rgba(33, 150, 243, 0.1);
    }

    /* Modal/Popup */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      animation: fadeIn 0.3s ease;
    }

    .modal.show {
      display: flex;
    }

    .modal-content {
      background: #111111;
      border: 2px solid #2196F3;
      border-radius: 16px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* Mood Slider */
    .mood-slider {
      width: 100%;
      -webkit-appearance: none;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #ff4a4a 0%, #ffaa4a 25%, #ffff4a 50%, #aaff4a 75%, #4aff4a 100%);
      outline: none;
      margin: 1rem 0;
    }

    .mood-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 24px;
      height: 24px;
      background: #2196F3;
      border: 3px solid white;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .mood-slider::-webkit-slider-thumb:hover {
      transform: scale(1.3);
      box-shadow: 0 0 15px rgba(33, 150, 243, 0.8);
    }

    /* Emoji Buttons */
    .emoji-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .emoji-btn {
      padding: 1rem;
      background: rgba(33, 150, 243, 0.1);
      border: 2px solid transparent;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1.2rem;
    }

    .emoji-btn:hover {
      border-color: #2196F3;
      background: rgba(33, 150, 243, 0.2);
      transform: scale(1.05);
    }

    .emoji-btn.selected {
      border-color: #4eff9e;
      background: rgba(78, 255, 158, 0.2);
    }

    /* Tags */
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .tag {
      padding: 0.5rem 1rem;
      background: rgba(33, 150, 243, 0.1);
      border: 1px solid #333;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tag:hover {
      border-color: #2196F3;
      background: rgba(33, 150, 243, 0.2);
    }

    .tag.selected {
      border-color: #4eff9e;
      background: rgba(78, 255, 158, 0.2);
    }

    /* Results Grid */
    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }

    .result-card {
      background: rgba(11, 11, 11, 0.9);
      border: 1px solid #2a2a2a;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .result-card:hover {
      border-color: #2196F3;
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
    }

    /* Input Fields */
    input, select, textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #333;
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      margin: 0.5rem 0;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #2196F3;
      box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
    }

    /* Toast Notification */
    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: linear-gradient(135deg, #4eff9e, #2196F3);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(78, 255, 158, 0.3);
      display: none;
      animation: slideInRight 0.3s ease;
      z-index: 3000;
    }

    .toast.show {
      display: block;
    }

    @keyframes slideInRight {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    h2 {
      color: #2196F3;
      margin-bottom: 1rem;
    }

    h3 {
      color: #4eff9e;
      margin: 1.5rem 0 1rem;
    }

    .hidden {
      display: none !important;
    }

    /* Loading Animation */
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(33, 150, 243, 0.3);
      border-radius: 50%;
      border-top-color: #2196F3;
      animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Preference Pills */
    .pill {
      display: inline-block;
      padding: 0.4rem 1rem;
      margin: 0.3rem;
      background: rgba(33, 150, 243, 0.1);
      border: 1px solid #333;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .pill:hover {
      border-color: #2196F3;
      transform: scale(1.05);
    }

    .pill.active {
      background: rgba(33, 150, 243, 0.3);
      border-color: #2196F3;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
        margin-top: 70px;
      }

      .top-nav {
        padding: 0.75rem 1rem;
      }

      .nav-links {
        flex-wrap: wrap;
      }

      .results-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Top Navigation -->
  <nav class="top-nav">
    <div class="logo">🌟 MoodLife</div>
    <div class="nav-links">
      <button class="nav-btn active" data-section="home">🏠 Home</button>
      <button class="nav-btn" id="user-btn">👤 Guest Profile</button>
    </div>
  </nav>

  <!-- Toast Notification -->
  <div class="toast" id="toast"></div>

  <!-- Main Container -->
  <div class="container">

    <!-- Home Section -->
    <section class="section active" id="home-section">
      <div class="card" style="text-align: center; padding: 4rem 2rem;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; background: linear-gradient(45deg, #2196F3, #4eff9e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Welcome to MoodLife
        </h1>
        <p style="font-size: 1.2rem; color: #bbb; margin-bottom: 2rem;">
          Your complete wellness companion for mood tracking, meal planning, activities, and music
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="showSection('mood')">🎭 Check Your Mood</button>
          <button class="btn btn-secondary" onclick="showSection('meals')">🍽️ Find Meals</button>
          <button class="btn btn-secondary" onclick="showSection('activities')">🎯 Get Activities</button>
          <button class="btn btn-secondary" onclick="showSection('music')">🎵 Discover Music</button>
        </div>
      </div>

      <div class="card">
        <h2>Quick Stats</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div style="text-align: center; padding: 1rem; background: rgba(33, 150, 243, 0.1); border-radius: 8px; cursor: pointer;" onclick="showSection('mood')">
            <div style="font-size: 2rem;">😊</div>
            <div style="font-size: 1.5rem; font-weight: bold;" id="mood-score-home">--</div>
            <div style="color: #bbb;">Current Mood</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(78, 255, 158, 0.1); border-radius: 8px; cursor: pointer;" onclick="viewSavedItems('meals')">
            <div style="font-size: 2rem;">🍽️</div>
            <div style="font-size: 1.5rem; font-weight: bold;" id="saved-meals">0</div>
            <div style="color: #bbb;">Saved Meals</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(255, 170, 74, 0.1); border-radius: 8px; cursor: pointer;" onclick="viewSavedItems('activities')">
            <div style="font-size: 2rem;">🎯</div>
            <div style="font-size: 1.5rem; font-weight: bold;" id="saved-activities">0</div>
            <div style="color: #bbb;">Saved Activities</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(138, 43, 226, 0.1); border-radius: 8px; cursor: pointer;" onclick="viewSavedItems('music')">
            <div style="font-size: 2rem;">🎵</div>
            <div style="font-size: 1.5rem; font-weight: bold;" id="saved-songs">0</div>
            <div style="color: #bbb;">Saved Songs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mood Section -->
    <section class="section" id="mood-section">
      <div class="card">
        <h2>🎭 How Are You Feeling?</h2>
        <p style="color: #bbb;">Select your mood to get personalized recommendations</p>
        
        <div style="margin: 2rem 0;">
          <label style="font-size: 1.1rem; font-weight: bold;">Mood Level</label>
          <div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
            <span>😔</span>
            <input type="range" class="mood-slider" id="mood-slider" min="0" max="100" value="50">
            <span>😊</span>
            <strong id="mood-value" style="min-width: 3rem; text-align: center; font-size: 1.5rem; color: #2196F3;">50</strong>
          </div>
        </div>

        <h3>Quick Mood Selection</h3>
        <div class="emoji-grid">
          <button class="emoji-btn" data-mood="20" data-tag="stressed">
            <div style="font-size: 2rem;">😰</div>
            <div>Stressed</div>
          </button>
          <button class="emoji-btn" data-mood="35" data-tag="anxious">
            <div style="font-size: 2rem;">😟</div>
            <div>Anxious</div>
          </button>
          <button class="emoji-btn" data-mood="45" data-tag="tired">
            <div style="font-size: 2rem;">😴</div>
            <div>Tired</div>
          </button>
          <button class="emoji-btn" data-mood="65" data-tag="neutral">
            <div style="font-size: 2rem;">😐</div>
            <div>Neutral</div>
          </button>
          <button class="emoji-btn" data-mood="75" data-tag="happy">
            <div style="font-size: 2rem;">😊</div>
            <div>Happy</div>
          </button>
          <button class="emoji-btn" data-mood="90" data-tag="energetic">
            <div style="font-size: 2rem;">🤩</div>
            <div>Energetic</div>
          </button>
        </div>

        <h3>Additional Tags (Optional)</h3>
        <div class="tags-container" id="mood-tags">
          <span class="tag" data-tag="overwhelmed">Overwhelmed</span>
          <span class="tag" data-tag="calm">Calm</span>
          <span class="tag" data-tag="creative">Creative</span>
          <span class="tag" data-tag="lazy">Lazy</span>
          <span class="tag" data-tag="motivated">Motivated</span>
          <span class="tag" data-tag="sad">Sad</span>
          <span class="tag" data-tag="excited">Excited</span>
          <span class="tag" data-tag="frustrated">Frustrated</span>
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;" onclick="saveMood()">
          💾 Save Mood & Get Recommendations
        </button>
      </div>
    </section>

    <!-- Meals Section -->
    <section class="section" id="meals-section">
      <div class="card">
        <h2>🍽️ Meal Recommendations</h2>
        <p style="color: #bbb;">Discover meals that match your mood and preferences</p>

        <h3>Filters</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <label>Meal Type</label>
            <select id="meal-type">
              <option value="">Any</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          <div>
            <label>Max Prep Time</label>
            <select id="prep-time">
              <option value="">Any</option>
              <option value="15">< 15 min</option>
              <option value="30">< 30 min</option>
              <option value="45">< 45 min</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="getMealRecommendations()">
          Get Meal Recommendations
        </button>
      </div>

      <div class="results-grid" id="meals-results"></div>
    </section>

    <!-- Activities Section -->
    <section class="section" id="activities-section">
      <div class="card">
        <h2>🎯 Activity Recommendations</h2>
        <p style="color: #bbb;">Find activities that match your energy and mood</p>

        <h3>Preferences</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <label>Time Available</label>
            <select id="activity-time">
              <option value="15">15 minutes</option>
              <option value="30" selected>30 minutes</option>
              <option value="60">60 minutes</option>
            </select>
          </div>
          <div>
            <label>Setting</label>
            <select id="activity-location">
              <option value="either">Either</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="getActivityRecommendations()">
          Get Activity Ideas
        </button>
      </div>

      <div class="results-grid" id="activities-results"></div>
    </section>

    <!-- Music Section -->
    <section class="section" id="music-section">
      <div class="card">
        <h2>🎵 Music Recommendations</h2>
        <p style="color: #bbb;">Discover songs that match your current vibe</p>

        <h3>Music Preferences</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <label>Genre</label>
            <select id="music-genre">
              <option value="all">All Genres</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="jazz">Jazz</option>
              <option value="electronic">Electronic</option>
            </select>
          </div>
          <div>
            <label>Energy Level</label>
            <select id="music-energy">
              <option value="all">Any</option>
              <option value="low">Low/Calm</option>
              <option value="medium">Medium</option>
              <option value="high">High/Upbeat</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="getMusicRecommendations()">
          Get Music Recommendations
        </button>
      </div>

      <div class="results-grid" id="music-results"></div>
    </section>

  </div>

  <!-- User Modal -->
  <div class="modal" id="user-modal">
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2>Your Profile</h2>
        <button onclick="closeModal('user-modal')" style="background: none; border: none; color: #888; font-size: 2rem; cursor: pointer;">&times;</button>
      </div>
      
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #2196F3, #4eff9e); border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem;">
          👤
        </div>
        <h3 id="user-name">Guest User</h3>
        <p style="color: #bbb;">MoodLife Member</p>
      </div>

      <div style="background: rgba(33, 150, 243, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <p><strong>Current Mood:</strong> <span id="profile-mood">Not set</span></p>
        <p><strong>Saved Items:</strong> <span id="profile-saved">0</span></p>
      </div>

      <button class="btn btn-primary" style="width: 100%;" onclick="closeModal('user-modal')">Close</button>
    </div>
  </div>

  <!-- Saved Items Modal -->
  <div class="modal" id="saved-modal">
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 id="saved-modal-title">Saved Items</h2>
        <button onclick="closeModal('saved-modal')" style="background: none; border: none; color: #888; font-size: 2rem; cursor: pointer;">&times;</button>
      </div>
      
      <div id="saved-modal-content" style="max-height: 60vh; overflow-y: auto;">
        <!-- Saved items will be dynamically loaded here -->
      </div>

      <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="closeModal('saved-modal')">Close</button>
    </div>
  </div>

  <script>
    // State Management
    const state = {
      currentMood: { score: 50, tags: [], primaryTag: null },
      savedMeals: [],
      savedActivities: [],
      savedMusic: []
    };

    // Mock Data
    const mockMeals = [
      { id: 1, name: 'Avocado Toast', energy: 8, time: '10 min', mood: 'energetic', img: '🥑' },
      { id: 2, name: 'Berry Smoothie', energy: 9, time: '5 min', mood: 'happy', img: '🫐' },
      { id: 3, name: 'Chicken Stir Fry', energy: 7, time: '20 min', mood: 'focused', img: '🍗' },
      { id: 4, name: 'Greek Salad', energy: 6, time: '15 min', mood: 'calm', img: '🥗' },
      { id: 5, name: 'Pasta Carbonara', energy: 8, time: '25 min', mood: 'happy', img: '🍝' }
    ];

    const mockActivities = [
      { id: 1, name: 'Short Walk', time: 15, location: 'outdoor', vibe: 'alone', emoji: '🚶' },
      { id: 2, name: 'Yoga Session', time: 30, location: 'indoor', vibe: 'alone', emoji: '🧘' },
      { id: 3, name: 'Dance Party', time: 15, location: 'indoor', vibe: 'either', emoji: '💃' },
      { id: 4, name: 'Read a Book', time: 30, location: 'indoor', vibe: 'alone', emoji: '📚' },
      { id: 5, name: 'Play Sports', time: 60, location: 'outdoor', vibe: 'social', emoji: '⚽' }
    ];

    const mockMusic = [
      { id: 1, title: 'Good Vibes', artist: 'The Cheerful', genre: 'pop', energy: 'high', emoji: '🎵' },
      { id: 2, title: 'Calm Waters', artist: 'Peaceful Mind', genre: 'ambient', energy: 'low', emoji: '🎶' },
      { id: 3, title: 'Energy Boost', artist: 'Power Up', genre: 'electronic', energy: 'high', emoji: '🎧' },
      { id: 4, title: 'Focus Flow', artist: 'Study Beats', genre: 'lofi', energy: 'medium', emoji: '🎼' },
      { id: 5, title: 'Jazz Evening', artist: 'Smooth Sounds', genre: 'jazz', energy: 'low', emoji: '🎷' }
    ];

    // Navigation
    function showSection(sectionName) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      
      document.getElementById(sectionName + '-section').classList.add('active');
      document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    }

    document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
      btn.addEventListener('click', () => showSection(btn.dataset.section));
    });

    // Mood Functionality
    const moodSlider = document.getElementById('mood-slider');
    const moodValue = document.getElementById('mood-value');

    moodSlider.addEventListener('input', (e) => {
      const value = e.target.value;
      moodValue.textContent = value;
      state.currentMood.score = parseInt(value);
    });

    document.querySelectorAll('.emoji-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        const mood = parseInt(btn.dataset.mood);
        const tag = btn.dataset.tag;
        
        moodSlider.value = mood;
        moodValue.textContent = mood;
        state.currentMood.score = mood;
        state.currentMood.primaryTag = tag;
      });
    });

    document.querySelectorAll('#mood-tags .tag').forEach(tag => {
      tag.addEventListener('click', () => {
        tag.classList.toggle('selected');
        const tagValue = tag.dataset.tag;
        
        if (tag.classList.contains('selected')) {
          if (!state.currentMood.tags.includes(tagValue)) {
            state.currentMood.tags.push(tagValue);
          }
        } else {
          state.currentMood.tags = state.currentMood.tags.filter(t => t !== tagValue);
        }
      });
    });

    function saveMood() {
      if (state.currentMood.score < 40) {
        const jokes = [
          "Why don't scientists trust atoms? Because they make up everything!",
          "What do you call a bear with no teeth? A gummy bear!",
          "Why did the scarecrow win an award? He was outstanding in his field!"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        showToast(`Here's a joke to cheer you up! 😊\n\n${joke}`);
      }

      localStorage.setItem('moodlife_mood', JSON.stringify(state.currentMood));
      updateStats();
      showToast('✓ Mood saved successfully! Returning home...');
      
      setTimeout(() => {
        showSection('home');
      }, 1500);
    }

    // Meal Recommendations
    function getMealRecommendations() {
      const results = document.getElementById('meals-results');
      results.innerHTML = '';

      const filtered = mockMeals.map(meal => {
        let score = Math.random() * 50;
        if (state.currentMood.primaryTag && meal.mood === state.currentMood.primaryTag) {
          score += 30;
        }
        return { ...meal, score };
      }).sort((a, b) => b.score - a.score).slice(0, 4);

      filtered.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${meal.img}</div>
          <h3>${meal.name}</h3>
          <p style="color: #bbb;">⏱ ${meal.time} • Energy: ${meal.energy}/10</p>
          <p style="color: #4eff9e; margin-top: 0.5rem;">Mood: ${meal.mood}</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="viewMeal(${meal.id})">View</button>
            <button class="btn btn-secondary" onclick="saveMeal(${meal.id})">${state.savedMeals.includes(meal.id) ? '★ Saved' : '☆ Save'}</button>
          </div>
        `;
        results.appendChild(card);
      });
    }

    function saveMeal(id) {
      if (!state.savedMeals.includes(id)) {
        state.savedMeals.push(id);
      } else {
        state.savedMeals = state.savedMeals.filter(i => i !== id);
      }
      localStorage.setItem('moodlife_meals', JSON.stringify(state.savedMeals));
      updateStats();
      getMealRecommendations();
      showToast(state.savedMeals.includes(id) ? '✓ Meal saved! Returning home...' : 'Meal removed');
      
      if (state.savedMeals.includes(id)) {
        setTimeout(() => {
          showSection('home');
        }, 1500);
      }
    }

    function viewMeal(id) {
      const meal = mockMeals.find(m => m.id === id);
      showToast(`Viewing ${meal.name} - Full recipe would appear here!`);
    }

    // Activity Recommendations
    function getActivityRecommendations() {
      const results = document.getElementById('activities-results');
      results.innerHTML = '';

      const time = parseInt(document.getElementById('activity-time').value);
      const filtered = mockActivities.filter(a => a.time <= time).slice(0, 4);

      filtered.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${activity.emoji}</div>
          <h3>${activity.name}</h3>
          <p style="color: #bbb;">⏱ ${activity.time} min • ${activity.location}</p>
          <p style="color: #4eff9e; margin-top: 0.5rem;">${activity.vibe}</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="startActivity(${activity.id})">Start</button>
            <button class="btn btn-secondary" onclick="saveActivity(${activity.id})">${state.savedActivities.includes(activity.id) ? '★ Saved' : '☆ Save'}</button>
          </div>
        `;
        results.appendChild(card);
      });
    }

    function saveActivity(id) {
      if (!state.savedActivities.includes(id)) {
        state.savedActivities.push(id);
      } else {
        state.savedActivities = state.savedActivities.filter(i => i !== id);
      }
      localStorage.setItem('moodlife_activities', JSON.stringify(state.savedActivities));
      updateStats();
      getActivityRecommendations();
      showToast(state.savedActivities.includes(id) ? '✓ Activity saved! Returning home...' : 'Activity removed');
      
      if (state.savedActivities.includes(id)) {
        setTimeout(() => {
          showSection('home');
        }, 1500);
      }
    }

    function startActivity(id) {
      const activity = mockActivities.find(a => a.id === id);
      showToast(`Starting ${activity.name}! Enjoy your activity! 🎯`);
    }

    // Music Recommendations
    function getMusicRecommendations() {
      const results = document.getElementById('music-results');
      results.innerHTML = '';

      const genre = document.getElementById('music-genre').value;
      let filtered = mockMusic;
      if (genre !== 'all') {
        filtered = mockMusic.filter(m => m.genre === genre);
      }

      filtered.slice(0, 5).forEach(song => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${song.emoji}</div>
          <h3>${song.title}</h3>
          <p style="color: #bbb;">${song.artist}</p>
          <p style="color: #4eff9e; margin-top: 0.5rem;">${song.genre} • ${song.energy} energy</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="playSong(${song.id})">▶ Play</button>
            <button class="btn btn-secondary" onclick="saveMusic(${song.id})">${state.savedMusic.includes(song.id) ? '★ Saved' : '☆ Save'}</button>
          </div>
        `;
        results.appendChild(card);
      });
    }

    function saveMusic(id) {
      if (!state.savedMusic.includes(id)) {
        state.savedMusic.push(id);
      } else {
        state.savedMusic = state.savedMusic.filter(i => i !== id);
      }
      localStorage.setItem('moodlife_music', JSON.stringify(state.savedMusic));
      updateStats();
      getMusicRecommendations();
      showToast(state.savedMusic.includes(id) ? '✓ Song saved! Returning home...' : 'Song removed');
      
      if (state.savedMusic.includes(id)) {
        setTimeout(() => {
          showSection('home');
        }, 1500);
      }
    }

    function playSong(id) {
      const song = mockMusic.find(s => s.id === id);
      showToast(`🎵 Now playing: ${song.title} by ${song.artist}`);
    }

    // View Saved Items
    function viewSavedItems(type) {
      showModal('saved-modal');
      const title = document.getElementById('saved-modal-title');
      const content = document.getElementById('saved-modal-content');
      
      if (type === 'meals') {
        title.textContent = '🍽️ Saved Meals';
        const saved = mockMeals.filter(m => state.savedMeals.includes(m.id));
        if (saved.length === 0) {
          content.innerHTML = '<p style="text-align: center; color: #888; padding: 2rem;">No saved meals yet.</p>';
        } else {
          content.innerHTML = saved.map(meal => `
            <div class="result-card" style="margin-bottom: 1rem;">
              <div style="font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem;">${meal.img}</div>
              <h3>${meal.name}</h3>
              <p style="color: #bbb;">⏱ ${meal.time} • Energy: ${meal.energy}/10</p>
              <p style="color: #4eff9e;">Mood: ${meal.mood}</p>
              <button class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;" onclick="removeSavedMeal(${meal.id})">Remove</button>
            </div>
          `).join('');
        }
      } else if (type === 'activities') {
        title.textContent = '🎯 Saved Activities';
        const saved = mockActivities.filter(a => state.savedActivities.includes(a.id));
        if (saved.length === 0) {
          content.innerHTML = '<p style="text-align: center; color: #888; padding: 2rem;">No saved activities yet.</p>';
        } else {
          content.innerHTML = saved.map(activity => `
            <div class="result-card" style="margin-bottom: 1rem;">
              <div style="font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem;">${activity.emoji}</div>
              <h3>${activity.name}</h3>
              <p style="color: #bbb;">⏱ ${activity.time} min • ${activity.location}</p>
              <p style="color: #4eff9e;">${activity.vibe}</p>
              <button class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;" onclick="removeSavedActivity(${activity.id})">Remove</button>
            </div>
          `).join('');
        }
      } else if (type === 'music') {
        title.textContent = '🎵 Saved Songs';
        const saved = mockMusic.filter(s => state.savedMusic.includes(s.id));
        if (saved.length === 0) {
          content.innerHTML = '<p style="text-align: center; color: #888; padding: 2rem;">No saved songs yet.</p>';
        } else {
          content.innerHTML = saved.map(song => `
            <div class="result-card" style="margin-bottom: 1rem;">
              <div style="font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem;">${song.emoji}</div>
              <h3>${song.title}</h3>
              <p style="color: #bbb;">${song.artist}</p>
              <p style="color: #4eff9e;">${song.genre} • ${song.energy} energy</p>
              <button class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;" onclick="removeSavedMusic(${song.id})">Remove</button>
            </div>
          `).join('');
        }
      }
    }

    function removeSavedMeal(id) {
      state.savedMeals = state.savedMeals.filter(i => i !== id);
      localStorage.setItem('moodlife_meals', JSON.stringify(state.savedMeals));
      updateStats();
      viewSavedItems('meals');
      showToast('Meal removed');
    }

    function removeSavedActivity(id) {
      state.savedActivities = state.savedActivities.filter(i => i !== id);
      localStorage.setItem('moodlife_activities', JSON.stringify(state.savedActivities));
      updateStats();
      viewSavedItems('activities');
      showToast('Activity removed');
    }

    function removeSavedMusic(id) {
      state.savedMusic = state.savedMusic.filter(i => i !== id);
      localStorage.setItem('moodlife_music', JSON.stringify(state.savedMusic));
      updateStats();
      viewSavedItems('music');
      showToast('Song removed');
    }

    // Modal Functions
    function showModal(modalId) {
      document.getElementById(modalId).classList.add('show');
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('show');
    }

    document.getElementById('user-btn').addEventListener('click', () => {
      showModal('user-modal');
      updateProfile();
    });

    function updateProfile() {
      const totalSaved = state.savedMeals.length + state.savedActivities.length + state.savedMusic.length;
      document.getElementById('profile-mood').textContent = state.currentMood.score + '/100';
      document.getElementById('profile-saved').textContent = totalSaved;
    }

    // Toast Notifications
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // Update Stats
    function updateStats() {
      document.getElementById('mood-score-home').textContent = state.currentMood.score;
      document.getElementById('saved-meals').textContent = state.savedMeals.length;
      document.getElementById('saved-activities').textContent = state.savedActivities.length;
      document.getElementById('saved-songs').textContent = state.savedMusic.length;
    }

    // Initialize
    function init() {
      // Load saved data
      const savedMood = localStorage.getItem('moodlife_mood');
      if (savedMood) {
        state.currentMood = JSON.parse(savedMood);
        moodSlider.value = state.currentMood.score;
        moodValue.textContent = state.currentMood.score;
      }

      const savedMeals = localStorage.getItem('moodlife_meals');
      if (savedMeals) state.savedMeals = JSON.parse(savedMeals);

      const savedActivities = localStorage.getItem('moodlife_activities');
      if (savedActivities) state.savedActivities = JSON.parse(savedActivities);

      const savedMusic = localStorage.getItem('moodlife_music');
      if (savedMusic) state.savedMusic = JSON.parse(savedMusic);

      updateStats();
    }

    init();
  </script>
</body>
</html>