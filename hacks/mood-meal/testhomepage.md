---
layout: post
title: "MoodLife - Complete Wellness App"
description: "Personalized mood tracking, meal recommendations, activities, and music in one unified experience"
permalink: /mood-meal1/
microblog: True
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
  <script defer src="https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js"></script>
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
/* Navigation - replaces the site header */
    .top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(17, 17, 17, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid #2196F3;
      z-index: 10000;
      padding: 0.6rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* Hide the site header so MoodLife nav takes over */
    .site-header {
      display: none !important;
    }
.logo {
      font-size: 1.3rem;
      font-weight: bold;
      background: linear-gradient(45deg, #2196F3, #4eff9e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
.nav-links {
      display: flex;
      gap: 0.75rem;
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
.admin-nav-btn {
      background: linear-gradient(135deg, #2196F3, #4eff9e) !important;
      color: white !important;
      border: none !important;
    }
 .admin-nav-btn:hover {
      box-shadow: 0 0 15px rgba(33, 150, 243, 0.5), 0 0 20px rgba(78, 255, 158, 0.3);
    }
.nav-btn-accent {
      padding: 0.5rem 1rem;
      background: linear-gradient(135deg, #2196F3, #1976D2);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      font-weight: 500;
    }
.nav-btn-accent:hover {
      background: linear-gradient(135deg, #1976D2, #1565C0);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
    }
/* Main Container */
    .container {
      max-width: 1200px;
      margin: 70px auto 2rem;
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
/* Table Styling */
    table {
      border: 1px solid #2a2a2a;
      border-radius: 8px;
      overflow: hidden;
    }
table tbody tr:hover {
      background: rgba(33, 150, 243, 0.1);
    }
/* Weather Animations */
    @keyframes rain {
      0% { background-position: 0 0; }
      100% { background-position: 20px 20px; }
    }
@keyframes snow {
      0% { transform: translateY(-10px); }
      100% { transform: translateY(10px); }
    }
@keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
@keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
/* Weather Display Styles */
    .weather-display {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin: 1.5rem 0;
    }
.weather-stat {
      background: #1e1e1e;
      border: 1px solid #333;
      padding: 1.25rem 1.5rem;
      border-radius: 12px;
      text-align: center;
      min-width: 130px;
      flex: 1;
      max-width: 180px;
      transition: all 0.3s ease;
    }
.weather-stat:hover {
      border-color: #444;
      transform: translateY(-3px);
    }
.weather-stat .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
    }
.weather-stat .label {
      color: #666;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.25rem;
    }
.weather-stat .value {
      font-size: 1.25rem;
      font-weight: 700;
      color: #e0e0e0;
    }
/* Forecast Grid Styles */
    .forecast-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }
.forecast-card {
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 12px;
      padding: 1rem;
      text-align: center;
      transition: all 0.3s ease;
      min-width: 110px;
      flex: 1;
      max-width: 140px;
    }
.forecast-card:hover {
      border-color: #444;
      transform: translateY(-3px);
    }
.forecast-card .time {
      color: #aaa;
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
.forecast-card .icon {
      font-size: 1.75rem;
      margin: 0.4rem 0;
    }
.forecast-card .temp {
      font-size: 1.1rem;
      font-weight: 700;
      color: #e0e0e0;
    }
.forecast-card .desc {
      color: #666;
      font-size: 0.75rem;
      margin-top: 0.3rem;
      text-transform: capitalize;
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
.nav-btn-accent {
        padding: 0.4rem 0.75rem;
        font-size: 0.85rem;
      }
.results-grid {
        grid-template-columns: 1fr;
      }
.weather-display {
        flex-wrap: wrap;
        gap: 0.75rem;
      }
.weather-stat {
        min-width: calc(50% - 0.5rem);
        max-width: calc(50% - 0.5rem);
        padding: 1rem;
      }
.weather-stat .icon {
        font-size: 1.5rem;
      }
.weather-stat .value {
        font-size: 1.1rem;
      }
#weather-hero {
        padding: 1.5rem !important;
      }
#weather-hero > div > div:last-child {
        text-align: center !important;
      }
#temp-large {
        font-size: 2.5rem !important;
      }
#location-name-hero {
        font-size: 1.4rem !important;
      }
table {
        font-size: 0.9rem;
      }
table th, table td {
        padding: 0.5rem !important;
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
      <button class="nav-btn" data-section="history">📊 History</button>
      <button class="nav-btn" id="friends-btn">👥 Friends</button>
      <button class="nav-btn" id="user-btn">👤 Guest Profile</button>
      <a href="#weather-section" class="nav-btn-accent" onclick="scrollToWeather(event)">Weather & Outfit Below</a>
      <a href="{{ site.baseurl }}/mood-meal/admin/" class="nav-btn admin-nav-btn" id="admin-nav-btn" style="display: none; text-decoration: none;">⚙️ Admin</a>
    </div>
  </nav>

  <!-- Toast Notification -->
  <div class="toast" id="toast"></div>

  <!-- Global Loader (shown while Gemini / plan is generating recommendations) -->
  <div class="modal" id="global-loader" aria-hidden="true" style="z-index:4000;">
    <div class="modal-content" style="max-width:420px; text-align:center;">
      <div class="loading" style="width:36px; height:36px; border-width:4px; border-top-color: #4eff9e; margin: 0 auto;"></div>
      <h3 id="global-loader-msg" style="color:#fff; margin-top:1rem;">Generating recommendations...</h3>
      <p style="color:#bbb; margin-top:0.5rem; font-size:0.95rem;">This may take a few seconds while the AI responds.</p>
    </div>
  </div>

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
          <button class="btn btn-primary" onclick="showSection('mood'); getLocationForOutfit();" style="min-width: 220px; font-size: 1.1rem;">🎭 Check Your Mood</button>
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

        <!-- AI Face Detection -->
        <div style="margin: 2rem 0; padding: 1.5rem; background: rgba(33, 150, 243, 0.1); border-radius: 12px; border: 2px solid #2196F3;">
          <h3 style="margin-top: 0;">📸 Try AI Mood Detection!</h3>
          <p style="color: #bbb; margin-bottom: 1rem;">Let AI detect your mood from your facial expression</p>

          <div style="padding: 0.75rem; background: rgba(78, 255, 158, 0.1); border-left: 3px solid #4eff9e; margin-bottom: 1rem;">
            <strong>🔒 Privacy:</strong> Facial analysis happens entirely in your browser.
            No images are uploaded. Only your mood score and tags are saved.
          </div>

          <button id="start-camera-btn" class="btn btn-primary" style="width: 100%;" onclick="startFaceDetection()">
            📸 Detect Mood from Camera
          </button>
        </div>

        <div style="text-align: center; margin: 1.5rem 0; color: #666; font-weight: bold;">OR USE MANUAL SELECTION</div>

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

  <!-- Weather & Outfit (added) -->
  <div class="card" id="weather-section">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="margin: 0;">🌤️ Weather Dashboard</h2>
          <p style="color: #bbb; margin: 0.5rem 0 0 0;">Real-time weather data with personalized insights</p>
        </div>
        <div id="weather-last-updated" style="display: none; color: #888; font-size: 0.85rem;">
          <span id="last-update-time"></span>
          <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; margin-left: 0.5rem;" onclick="refreshWeather()">🔄 Refresh</button>
        </div>
      </div>

  <div id="location-status" style="margin: 1.5rem 0;">
        <div style="background: rgba(30, 30, 30, 0.9); border: 1px solid #333; border-radius: 12px; padding: 2rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🌍</div>
          <h3 style="margin: 0 0 0.5rem 0;">Detect Your Location</h3>
          <p style="color: #888; margin-bottom: 1.5rem;">Get personalized weather data and outfit recommendations based on your current location</p>
          <button class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem; background: #2a2a2a; border: 1px solid #444;" onclick="getLocation()">
            📍 Get My Location & Weather
          </button>
        </div>
      </div>

  <div id="manual-location" class="hidden">
        <h3>Enter Your ZIP Code</h3>
        <p style="color: #bbb; margin-bottom: 1rem;">We couldn't detect your location automatically. Please enter your ZIP code:</p>
        <div style="display: flex; gap: 1rem;">
          <input type="text" id="zip-input" placeholder="Enter ZIP code (e.g., 92067)" maxlength="5">
          <button class="btn btn-primary" onclick="getWeatherByZip()">Get Weather</button>
        </div>
      </div>

  <div id="weather-container" class="hidden">
        <!-- Location Header with animated background -->
        <div id="weather-hero" style="background: #1a1a1a; border: 1px solid #333; border-radius: 16px; padding: 2rem; margin-bottom: 1.5rem; position: relative; overflow: hidden;">
          <div id="weather-animation" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; opacity: 0.2;"></div>
          <div style="position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="color: #666; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">📍 CURRENT LOCATION</div>
              <h3 id="location-name-hero" style="font-size: 1.8rem; margin: 0; color: #e0e0e0;">--</h3>
              <p style="color: #666; margin: 0.25rem 0 0 0;" id="weather-date">--</p>
            </div>
            <div style="text-align: center;">
              <div id="weather-icon-large" style="font-size: 4rem; line-height: 1;">🌤️</div>
              <div id="weather-condition-hero" style="color: #aaa; font-weight: 600; text-transform: capitalize;">--</div>
            </div>
            <div style="text-align: right;">
              <div id="temp-large" style="font-size: 3.5rem; font-weight: 700; color: #e0e0e0;">--°</div>
              <div style="color: #666;">Feels like <span id="feels-like-hero" style="color: #888;">--°</span></div>
            </div>
          </div>
        </div>

  <!-- Weather Stats Grid -->
  <h3 style="margin-bottom: 1rem;">📊 Weather Details</h3>
        <div class="weather-display">
          <div class="weather-stat">
            <div class="icon">🌡️</div>
            <div class="label">Temperature</div>
            <div class="value" id="temperature">--°F</div>
          </div>
          <div class="weather-stat">
            <div class="icon">🤒</div>
            <div class="label">Feels Like</div>
            <div class="value" id="feels-like">--°F</div>
          </div>
          <div class="weather-stat">
            <div class="icon">💧</div>
            <div class="label">Humidity</div>
            <div class="value" id="humidity">--%</div>
          </div>
          <div class="weather-stat">
            <div class="icon">💨</div>
            <div class="label">Wind Speed</div>
            <div class="value" id="wind-speed">-- mph</div>
          </div>
          <div class="weather-stat">
            <div class="icon">👁️</div>
            <div class="label">Visibility</div>
            <div class="value" id="visibility">-- mi</div>
          </div>
          <div class="weather-stat">
            <div class="icon">📊</div>
            <div class="label">Pressure</div>
            <div class="value" id="pressure">-- hPa</div>
          </div>
        </div>

  <!-- Comfort Index -->
  <div style="background: #1e1e1e; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid #333;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h4 style="margin: 0; color: #e0e0e0;">🎯 Comfort Index</h4>
              <p style="color: #666; margin: 0.25rem 0 0 0; font-size: 0.9rem;">Based on temperature, humidity, and wind</p>
            </div>
            <div style="text-align: center;">
              <div id="comfort-score" style="font-size: 2.5rem; font-weight: 700; color: #e0e0e0;">--</div>
              <div id="comfort-label" style="color: #666; font-size: 0.85rem;">Calculating...</div>
            </div>
            <div id="comfort-bar" style="width: 100%; height: 8px; background: #333; border-radius: 4px; overflow: hidden; margin-top: 0.5rem;">
              <div id="comfort-fill" style="height: 100%; width: 0%; background: #555; transition: width 0.5s ease; border-radius: 4px;"></div>
            </div>
          </div>
        </div>

  <!-- Weather-Mood Impact -->
  <div id="weather-mood-impact" style="background: #1e1e1e; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid #333;">
          <h4 style="margin: 0 0 1rem 0; color: #e0e0e0;">🧠 Weather & Mood Connection</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="background: #252525; padding: 1rem; border-radius: 8px; border: 1px solid #333;">
              <div style="font-size: 1.5rem; margin-bottom: 0.5rem;" id="mood-impact-icon">😊</div>
              <div style="color: #e0e0e0; font-weight: 600;" id="mood-impact-title">Positive Impact</div>
              <p style="color: #888; font-size: 0.85rem; margin: 0.5rem 0 0 0;" id="mood-impact-desc">Loading...</p>
            </div>
            <div style="background: #252525; padding: 1rem; border-radius: 8px; border: 1px solid #333;">
              <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💡</div>
              <div style="color: #e0e0e0; font-weight: 600;">Mood Tip</div>
              <p style="color: #888; font-size: 0.85rem; margin: 0.5rem 0 0 0;" id="mood-tip">Loading...</p>
            </div>
          </div>
        </div>

  <!-- Suggested Activities Based on Weather -->
  <div style="background: #1e1e1e; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid #333;">
          <h4 style="margin: 0 0 1rem 0; color: #e0e0e0;">🎯 Weather-Based Activity Suggestions</h4>
          <div id="weather-activities" style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
            <!-- Activities will be populated here -->
          </div>
        </div>

  <!-- Today's Hourly Forecast -->
  <h3 style="margin-top: 1.5rem;">⏰ Hourly Forecast</h3>
        <div id="forecast-container" style="margin-top: 1rem;">
          <div class="loading"></div> Loading forecast...
        </div>

  <!-- 5-Day Extended Forecast -->
  <h3 style="margin-top: 2rem;">📅 5-Day Extended Forecast</h3>
        <div id="extended-forecast" style="margin-top: 1rem;">
          <div class="loading"></div> Loading extended forecast...
        </div>

  <!-- Weather Insights -->
  <div style="background: #1e1e1e; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid #333;">
          <h4 style="margin: 0 0 1rem 0; color: #e0e0e0;">💡 Weather Insights</h4>
          <div id="weather-insights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.5rem;">🌅</span>
              <div>
                <div style="color: #ccc; font-weight: 600;">Sunrise & Sunset</div>
                <p style="color: #888; font-size: 0.85rem; margin: 0.25rem 0 0 0;"><span id="sunrise-time">--</span> / <span id="sunset-time">--</span></p>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.5rem;">🕐</span>
              <div>
                <div style="color: #ccc; font-weight: 600;">Day Length</div>
                <p style="color: #888; font-size: 0.85rem; margin: 0.25rem 0 0 0;" id="day-length">-- hours</p>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.5rem;" id="uv-icon">☀️</span>
              <div>
                <div style="color: #ccc; font-weight: 600;">UV Index</div>
                <p style="color: #888; font-size: 0.85rem; margin: 0.25rem 0 0 0;" id="uv-index">-- (Low)</p>
              </div>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.5rem;">🌙</span>
              <div>
                <div style="color: #ccc; font-weight: 600;">Moon Phase</div>
                <p style="color: #888; font-size: 0.85rem; margin: 0.25rem 0 0 0;" id="moon-phase">--</p>
              </div>
            </div>
          </div>
        </div>

  </div>

  <!-- Outfit Recommendations (Enhanced) -->
  <div id="outfit-recommendations" class="hidden">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="margin: 0;">👔 Personalized Outfit Recommendations</h3>
          <button class="btn btn-secondary" style="padding: 0.5rem 1rem; background: #2a2a2a; border: 1px solid #444;" onclick="generateOutfit()">🔄 New Suggestions</button>
        </div>
        <div class="outfit-section">
          <div class="outfit-category" style="background: #1e1e1e; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; border: 1px solid #333;">
            <h4 style="margin: 0 0 0.75rem 0; color: #e0e0e0;">💡 General Advice</h4>
            <p id="general-advice" style="color: #999; line-height: 1.6; margin: 0;"></p>
          </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div class="outfit-category" style="background: #1e1e1e; border-radius: 12px; padding: 1.25rem; border: 1px solid #333;">
              <h4 style="margin: 0 0 0.75rem 0; color: #ccc;">👕 Clothing</h4>
              <div class="outfit-items" id="clothing-items"></div>
            </div>

  <div class="outfit-category" style="background: #1e1e1e; border-radius: 12px; padding: 1.25rem; border: 1px solid #333;">
              <h4 style="margin: 0 0 0.75rem 0; color: #ccc;">🎒 Accessories</h4>
              <div class="outfit-items" id="accessories-items"></div>
            </div>

  <div class="outfit-category" style="background: #1e1e1e; border-radius: 12px; padding: 1.25rem; border: 1px solid #333;">
              <h4 style="margin: 0 0 0.75rem 0; color: #ccc;">👟 Footwear</h4>
              <div class="outfit-items" id="footwear-items"></div>
            </div>
          </div>
        </div>
      </div>
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

  <!-- Mood History Section -->
  <section class="section" id="history-section">
      <div class="card">
        <h2>📊 Your Mood History</h2>
        <p style="color: #bbb;">Track your mood entries over time</p>

  <div id="history-loading" style="text-align: center; padding: 2rem; display: none;">
          <div class="loading"></div> Loading...
        </div>

  <div id="history-error" style="color: #ff4a4a; padding: 1rem; display: none; text-align: center;">
          Failed to load mood history. Please log in.
        </div>

  <div style="overflow-x: auto; margin-top: 1.5rem;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 2px solid #2196F3;">
                <th style="padding: 0.75rem; text-align: left; color: #2196F3;">Date & Time</th>
                <th style="padding: 0.75rem; text-align: center; color: #2196F3;">Score</th>
                <th style="padding: 0.75rem; text-align: left; color: #2196F3;">Category</th>
                <th style="padding: 0.75rem; text-align: left; color: #2196F3;">Tags</th>
              </tr>
            </thead>
            <tbody id="history-tbody">
              <tr>
                <td colspan="4" style="padding: 2rem; text-align: center; color: #666;">No mood entries yet. Save your first mood!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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

  <!-- Recommendations Section (Unified) -->
  <section class="section" id="recommendations-section">
      <div class="card">
        <h2>✨ Personalized Recommendations</h2>
        <p style="color: #bbb;">Based on your mood, here are some suggestions for food, activities, and music.</p>
      </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div class="card">
          <h3 style="margin-top: 0;">🍽️ Food</h3>
          <div id="rec-meals"></div>
        </div>

  <div class="card">
          <h3 style="margin-top: 0;">🎯 Activities</h3>
          <div id="rec-activities"></div>
        </div>

  <div class="card">
          <h3 style="margin-top: 0;">🎵 Music</h3>
          <div id="rec-music"></div>
        </div>
  
  <div class="card">
          <h3 style="margin-top: 0;">👕 Clothing</h3>
          <div id="rec-clothing"></div>
        </div>
      </div>

  <!-- Get New Recommendations Section -->
  <div class="card" style="margin-top: 1.5rem; padding: 1.5rem;">
        <h3 style="margin-top: 0; margin-bottom: 1rem; color: #2196F3;">🔄 Want Different Recommendations?</h3>
        <p style="color: #bbb; margin-bottom: 1rem; font-size: 0.9rem;">Tell us what you'd like to change and we'll generate new suggestions tailored to your feedback.</p>
        <div style="margin-bottom: 1rem;">
          <label for="recommendation-feedback" style="display: block; color: #fff; margin-bottom: 0.5rem; font-weight: 500;">Your Feedback (optional):</label>
          <textarea
            id="recommendation-feedback"
            rows="3"
            placeholder="Examples: 'I want vegetarian meals only', 'Suggest more relaxing activities', 'I prefer upbeat pop music', 'Give me quick 10-minute recipes'"
            style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 2px solid #444; background: rgba(0, 0, 0, 0.5); color: #fff; font-size: 1rem; resize: vertical; min-height: 80px; box-sizing: border-box;"
          ></textarea>
        </div>
        <div style="text-align: center;">
          <button class="btn btn-primary" onclick="getNewRecommendations()" style="padding: 0.75rem 2rem; font-size: 1rem;">
            🔄 Get New Recommendations
          </button>
        </div>
      </div>
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
  
<!-- Friends Modal (loads friends/messages in an iframe like microblog) -->
  <div class="modal" id="friends-modal">
      <div class="modal-content" style="max-width:900px; width:95%;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <h2>👥 Friends</h2>
          <button id="friends-modal-close" onclick="closeFriendsModal()" style="background:none; border:none; color:#888; font-size:2rem; cursor:pointer;">&times;</button>
        </div>

  <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
          <button class="btn btn-secondary" id="friends-tab-btn" onclick="loadFriendsTab()">Friends List</button>
          <button class="btn btn-secondary" id="messages-tab-btn" onclick="loadMessagesTab()">Messages</button>
        </div>

  <div id="friends-iframe-wrap" style="height:60vh; border-radius:8px; overflow:hidden; border:1px solid #222; background:#000;">
          <div style="color:#bbb; text-align:center; padding:2rem;">Click a tab to load content.</div>
        </div>

  <div style="margin-top:1rem; display:flex; gap:0.5rem;">
          <button class="btn btn-primary" onclick="closeFriendsModal()" style="flex:1;">Close</button>
        </div>
      </div>
    </div>

  <!-- Joke Modal for Low Mood (added) -->
  <div id="joke-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 1000; align-items: center; justify-content: center;">
      <div style="background: #1a1a1a; padding: 2rem; border-radius: 12px; max-width: 600px; width: 90%; border: 2px solid #4a9eff; box-shadow: 0 8px 32px rgba(74, 158, 255, 0.3);">
        <h3 style="color: #4a9eff; margin-top: 0; font-size: 1.5rem; text-align: center;">Here's a joke to cheer you up! 😊</h3>
        <p id="joke-text" style="font-size: 1.1rem; line-height: 1.6; color: #fff; margin: 1.5rem 0; text-align: center; font-style: italic;"></p>
        <div style="text-align: center; margin-top: 1.5rem;">
          <button id="joke-modal-close" style="padding: 0.6rem 1.5rem; font-size: 1rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;">Thanks! 😊</button>
        </div>
      </div>
    </div>

  <script>
    // State Management
    // Global application state
// -------------------------------------------------
// Single source of truth for the UI.
// This avoids passing state between functions manually.
//
// currentMood:
//   score       -> number from 0–100
//   primaryTag  -> main mood label (e.g. "happy")
//   tags        -> additional descriptors
//
// savedMeals / Activities / Music:
//   store IDs of user-saved items
    const state = {
      currentMood: { score: 50, tags: [], primaryTag: null },
      savedMeals: [],
      savedActivities: [],
      savedMusic: []
    };

    // Admin Check - Show admin button if user is admin
    (async function checkAdminStatus() {
      try {
        const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
          ? 'http://localhost:8309'
          : 'https://moodlife.opencodingsociety.com';

        const response = await fetch(`${pythonURI}/api/admin/check`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.is_admin) {
            const adminBtn = document.getElementById('admin-nav-btn');
            if (adminBtn) {
              adminBtn.style.display = 'inline-block';
            }
          }
        }
      } catch (error) {
        // Silently fail - user just won't see admin button
      }
    })();

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
    // SPA navigation controller
    // -------------------------------------------------
    // Hides all sections, then shows exactly one.
    // Also updates active nav button state.
    // Special case: loads mood history when needed.
    function showSection(sectionName) {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

      const section = document.getElementById(sectionName + '-section');
      if (section) {
        section.classList.add('active');
      }

      const navBtn = document.querySelector(`[data-section="${sectionName}"]`);
      if (navBtn) {
        navBtn.classList.add('active');
      }

      // Load mood history when showing history section
      if (sectionName === 'history') {
        loadMoodHistory();
      }
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

    async function getRandomJoke() {
      // Determine pythonURI similar to the shared config
      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:7'
        : 'https://moodlife.opencodingsociety.com';

      const fetchOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Origin': 'client'
        }
      };

      // Local fallback jokes
      const fallbackJokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a bear with no teeth? A gummy bear!",
        "Why did the scarecrow win an award? He was outstanding in his field!",
        "Why do programmers prefer dark mode? Because light attracts bugs!"
      ];

      try {
        const url = `${pythonURI}/api/jokes/random`;
        const resp = await fetch(url, fetchOptions);
        if (!resp.ok) {
          console.warn('Jokes API returned non-ok status', resp.status);
          return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
        }
        const data = await resp.json();
        return data.joke || fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
      } catch (err) {
        console.warn('Error fetching joke, using fallback:', err);
        return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
      }
    }

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
        if (e.target === modal) modal.style.display = 'none';
      };
    }

    function getMoodCategory(score) {
      if (score <= 40) return 'Stressed/Anxious';
      if (score <= 60) return 'Tired/Low Energy';
      if (score <= 80) return 'Happy/Neutral';
      return 'Energetic/Excited';
    }

    async function saveMood() {
      // If low mood, show a joke first
      if (state.currentMood.score < 40) {
        const joke = await getRandomJoke();
        showJokeModal(joke);
      }

      // Save locally immediately
      localStorage.setItem('moodlife_mood', JSON.stringify(state.currentMood));

      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:8309'
        : 'https://moodlife.opencodingsociety.com';

      // Build mood data for backend
      const allTags = state.currentMood.primaryTag
        ? [state.currentMood.primaryTag, ...state.currentMood.tags].filter((v, i, a) => a.indexOf(v) === i)
        : state.currentMood.tags;

      const moodData = {
        mood_score: state.currentMood.score,
        mood_tags: allTags,
        mood_category: getMoodCategory(state.currentMood.score),
        timestamp: new Date().toISOString()
      };

      // Render unified recommendations using Gemini plan endpoint (falls back to mock if needed)
      try {
        // Show a global loading overlay while saving mood and getting recommendations
        showGlobalLoader('Saving mood and generating personalized recommendations...');

        // IMPORTANT: Save mood to backend FIRST and wait for response to get mood_id
        let savedMoodId = null;
        try {
          const moodResp = await fetch(`${pythonURI}/api/moodmeal/mood`, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', 'X-Origin': 'client' },
            body: JSON.stringify(moodData)
          });
          if (moodResp.ok) {
            const savedMood = await moodResp.json();
            savedMoodId = savedMood.id || null;
            console.log('[saveMood] Mood saved successfully with id:', savedMoodId);
          } else {
            console.warn('[saveMood] Mood save failed:', moodResp.status);
          }
        } catch (moodErr) {
          console.warn('[saveMood] Mood save error:', moodErr);
        }

        // Now call plan endpoint with the actual mood_id from the saved mood
        const planPayload = { mood_id: savedMoodId, weather: weatherState.raw || null };
        const planResp = await fetch(`${pythonURI}/api/moodmeal/plan`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-store',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-Origin': 'client' },
          body: JSON.stringify(planPayload)
        });

        if (!planResp.ok) {
          const txt = await planResp.text().catch(() => '');
          throw new Error(`Plan failed (${planResp.status}): ${txt}`);
        }

        const planData = await planResp.json();

        // IMPORTANT: This function must exist (the Gemini renderer)
        renderRecommendationsFromPlan(planData.generated);
        // Also generate outfit suggestions based on fetched weather
        try { generateOutfit(); } catch(e){ console.warn('generateOutfit failed', e); }

        // Hide loader after successful render
        hideGlobalLoader();

      } catch (e) {
        console.warn('Gemini plan failed, falling back to mock recommendations:', e);
        // Ensure loader is hidden before fallback UI updates
        hideGlobalLoader();

        // Create mock recommendations based on mood score
        const mockPlan = {
          meals: [
            { title: 'Comfort Food Bowl', time_minutes: 20, difficulty: 'Easy', why: 'Perfect for your current mood' },
            { title: 'Energy Smoothie', time_minutes: 5, difficulty: 'Easy', why: 'Quick boost to lift your spirits' }
          ],
          activities: [
            { name: 'Take a Walk', energy: 'Low', why: 'Fresh air helps clear your mind' },
            { name: 'Listen to Music', energy: 'Low', why: 'Music is therapeutic' }
          ],
          music: [
            { song: 'Feel Good Hit', artist: 'Various Artists', why: 'Uplifting tune for your mood' },
            { song: 'Calm Vibes', artist: 'Chill Collective', why: 'Relaxing melody' }
          ]
        };
        renderRecommendationsFromPlan(mockPlan);
        try { generateOutfit(); } catch(e){ console.warn('generateOutfit failed', e); }
      }

      // Ensure loader is hidden (safety) and show recommendations
      hideGlobalLoader();
      showSection('recommendations');
      updateStats();

    }

    // Get new/different recommendations if user doesn't like current ones
    async function getNewRecommendations() {
      try {
        const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
          ? 'http://localhost:8309'
          : 'https://moodlife.opencodingsociety.com';

        // Get user feedback from the textarea
        const feedbackInput = document.getElementById('recommendation-feedback');
        const feedback = feedbackInput ? feedbackInput.value.trim() : '';

        // Show appropriate loading message based on whether feedback was provided
        if (feedback) {
          showGlobalLoader('Generating recommendations based on your feedback...');
        } else {
          showGlobalLoader('Getting new recommendations...');
        }

        // Pass refresh: true to get different recommendations, plus user feedback
        const planPayload = {
          mood_id: state.currentMood.id || null,
          weather: weatherState.raw || null,
          refresh: true,
          feedback: feedback || null
        };

        console.log('[getNewRecommendations] Sending request with payload:', planPayload);
        console.log('[getNewRecommendations] User feedback:', feedback || '(none provided)');

        const planResp = await fetch(`${pythonURI}/api/moodmeal/plan`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-store',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-Origin': 'client' },
          body: JSON.stringify(planPayload)
        });

        if (!planResp.ok) {
          const txt = await planResp.text().catch(() => '');
          console.error('[getNewRecommendations] Request failed:', planResp.status, txt);
          throw new Error(`Plan failed (${planResp.status}): ${txt}`);
        }

        const planData = await planResp.json();
        console.log('[getNewRecommendations] Received response:', planData);

        // Check if we got valid generated data
        if (!planData.generated) {
          console.error('[getNewRecommendations] No generated data in response:', planData);
          throw new Error(planData.message || 'No recommendations returned');
        }

        // Render the new recommendations
        renderRecommendationsFromPlan(planData.generated);
        try { generateOutfit(); } catch(e){ console.warn('generateOutfit failed', e); }

        // Clear the feedback input after successful refresh
        if (feedbackInput) {
          feedbackInput.value = '';
        }

        hideGlobalLoader();
        if (feedback) {
          showToast('Recommendations updated based on your feedback!');
        } else {
          showToast('New recommendations loaded!');
        }

      } catch (e) {
        console.error('[getNewRecommendations] Error:', e);
        hideGlobalLoader();
        showToast('Failed to get new recommendations. Please try again.');
      }
    }

    // Render recommendations from Gemini plan output (generated JSON)
    function renderRecommendationsFromPlan(generated) {
      const meals = generated?.meals ?? [];
      const activities = generated?.activities ?? [];
      const music = generated?.music ?? [];
      const clothing = generated?.clothing ?? [];

      // debug: log clothing for visibility
      console.log('[renderRecommendationsFromPlan] clothing=', clothing);

      const mealsDiv = document.getElementById('rec-meals');
      const actsDiv = document.getElementById('rec-activities');
      const musicDiv = document.getElementById('rec-music');
      const clothingDiv = document.getElementById('clothing-items');

      // Safety: if containers missing, don’t crash
      if (!mealsDiv || !actsDiv || !musicDiv) return;
      // By default hide the "why" reasoning and provide a button to reveal it.
      mealsDiv.innerHTML = meals.length ? meals.map(m => `
        <div class="result-card" style="margin-bottom: 0.75rem;">
          <div style="font-size: 2.2rem; text-align: center;">🍽️</div>
          <h4 style="margin: 0.5rem 0;">${m.title ?? 'Meal idea'}</h4>
          <div style="color:#bbb;">⏱ ${m.time_minutes ?? '-'} min • Difficulty: ${m.difficulty ?? '-'}</div>
          <div class="why-text hidden" style="color:#ddd; margin-top: 0.35rem;">${m.why ?? ''}</div>
          <div style="margin-top:0.5rem;"><button class="btn btn-secondary" onclick="toggleWhy(this)">Why?</button></div>
        </div>
      `).join('') : `<div style="color:#bbb;">No meal ideas returned.</div>`;

      actsDiv.innerHTML = activities.length ? activities.map(a => `
        <div class="result-card" style="margin-bottom: 0.75rem;">
          <div style="font-size: 2.2rem; text-align: center;">🎯</div>
          <h4 style="margin: 0.5rem 0;">${a.name ?? 'Activity idea'}</h4>
          <div style="color:#bbb;">Energy: ${a.energy ?? '-'}</div>
          <div class="why-text hidden" style="color:#ddd; margin-top: 0.35rem;">${a.why ?? ''}</div>
          <div style="margin-top:0.5rem;"><button class="btn btn-secondary" onclick="toggleWhy(this)">Why?</button></div>
        </div>
      `).join('') : `<div style="color:#bbb;">No activities returned.</div>`;

      musicDiv.innerHTML = music.length ? music.map(s => `
        <div class="result-card" style="margin-bottom: 0.75rem;">
          <div style="font-size: 2.2rem; text-align: center;">🎵</div>
          <h4 style="margin: 0.5rem 0;">${s.song ?? 'Song'}</h4>
          <div style="color:#bbb;">${s.artist ?? ''}</div>
          <div class="why-text hidden" style="color:#ddd; margin-top: 0.35rem;">${s.why ?? ''}</div>
          <div style="margin-top:0.5rem;"><button class="btn btn-secondary" onclick="toggleWhy(this)">Why?</button></div>
        </div>
      `).join('') : `<div style="color:#bbb;">No music returned.</div>`;

      // Clothing recommendations (from Gemini schema)
      if (clothingDiv) {
        clothingDiv.innerHTML = clothing.length ? clothing.map(c => `
          <div class="result-card" style="margin-bottom: 0.75rem;">
            <div style="font-size: 2.2rem; text-align: center;">👕</div>
            <h4 style="margin: 0.5rem 0;">${c.item ?? 'Clothing item'}</h4>
            <div style="color:#bbb;">Layers: ${c.layers ?? '-'}</div>
            <div class="why-text hidden" style="color:#ddd; margin-top: 0.35rem;">${c.why ?? ''}</div>
            <div style="margin-top:0.5rem;"><button class="btn btn-secondary" onclick="toggleWhy(this)">Why?</button></div>
          </div>
        `).join('') : `<div style="color:#bbb;">No clothing recommendations returned.</div>`;
      }

      // Also populate unified recommendations clothing container (if present on recommendations page)
      const recClothing = document.getElementById('rec-clothing');
      if (recClothing) {
        recClothing.innerHTML = clothing.length ? clothing.map(c => `
          <div class="result-card" style="margin-bottom: 0.75rem;">
            <div style="font-size: 2.2rem; text-align: center;">👕</div>
            <h4 style="margin: 0.5rem 0;">${c.item ?? 'Clothing item'}</h4>
            <div style="color:#bbb;">Layers: ${c.layers ?? '-'}</div>
            <div class="why-text hidden" style="color:#ddd; margin-top: 0.35rem;">${c.why ?? ''}</div>
            <div style="margin-top:0.5rem;"><button class="btn btn-secondary" onclick="toggleWhy(this)">Why?</button></div>
          </div>
        `).join('') : `<div style="color:#bbb;">No clothing recommendations returned.</div>`;
      }
    }

    // Toggle helper to show/hide reasoning text inside a recommendation card
    function toggleWhy(btn) {
      try {
        const card = btn.closest('.result-card');
        if (!card) return;
        const why = card.querySelector('.why-text');
        if (!why) return;
        why.classList.toggle('hidden');
        btn.textContent = why.classList.contains('hidden') ? 'Why?' : 'Hide';
      } catch (e) {
        console.warn('toggleWhy failed', e);
      }
    }


    async function loadMoodHistory() {
      const tbody = document.getElementById('history-tbody');
      const loadingDiv = document.getElementById('history-loading');
      const errorDiv = document.getElementById('history-error');

      loadingDiv.style.display = 'block';
      errorDiv.style.display = 'none';

      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? 'http://localhost:8309'
        : 'https://moodlife.opencodingsociety.com';

      const fetchOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Origin': 'client'
        }
      };

      try {
        const response = await fetch(`${pythonURI}/api/moodmeal/mood`, fetchOptions);

        if (!response.ok) {
          throw new Error('Failed to load mood history');
        }

        const moods = await response.json();
        loadingDiv.style.display = 'none';

        if (moods.length === 0) {
          tbody.innerHTML = '<tr><td colspan="4" style="padding: 2rem; text-align: center; color: #666;">No mood entries yet. Save your first mood!</td></tr>';
          return;
        }

        // Populate table
        tbody.innerHTML = moods.map(mood => {
          const date = new Date(mood.timestamp);
          const dateStr = date.toLocaleDateString();
          const timeStr = date.toLocaleTimeString();
          const tags = mood.mood_tags.join(', ') || 'None';

          return `
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 0.75rem;">${dateStr} ${timeStr}</td>
              <td style="padding: 0.75rem; text-align: center; font-weight: bold; color: #2196F3;">${mood.mood_score}</td>
              <td style="padding: 0.75rem;">${mood.mood_category}</td>
              <td style="padding: 0.75rem;">${tags}</td>
            </tr>
          `;
        }).join('');

      } catch (error) {
        console.error('Error loading mood history:', error);
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
      }
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

    // Friends modal controls (use iframe to load existing /friends and /messages pages)
    function showFriendsModal() {
      const el = document.getElementById('friends-modal');
      if (!el) return;
      el.classList.add('show');
      // focus the close button for accessibility
      document.getElementById('friends-modal-close')?.focus();
      // default: load friends tab
      loadFriendsTab();
    }

    function closeFriendsModal() {
      const el = document.getElementById('friends-modal');
      if (!el) return;
      el.classList.remove('show');
      // remove iframe to stop any running scripts
      const wrap = document.getElementById('friends-iframe-wrap');
      if (wrap) wrap.innerHTML = '<div style="color:#bbb; text-align:center; padding:2rem;">Click a tab to load content.</div>';
    }

    function makeIframeFor(path) {
      const wrap = document.getElementById('friends-iframe-wrap');
      if (!wrap) return;
      wrap.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src = path;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      // Keep scripts/forms/popups and allow same-origin so iframe keeps its real origin
      // (without allow-same-origin the iframe gets an opaque 'null' origin which can
      // cause CORS failures when the framed page requests resources from the server)
      iframe.sandbox = 'allow-scripts allow-forms allow-popups allow-same-origin';
      iframe.title = 'Friends panel';
      // show a simple loading state while iframe loads
      const loader = document.createElement('div');
      loader.style.color = '#bbb';
      loader.style.textAlign = 'center';
      loader.style.padding = '2rem';
      loader.textContent = 'Loading...';
      wrap.appendChild(loader);
      iframe.onload = () => { try { loader.remove(); } catch(e){} };
      iframe.onerror = () => {
        loader.textContent = 'Failed to load. Open in new tab.';
      };
      wrap.appendChild(iframe);
    }

    function loadFriendsTab() {
      document.getElementById('friends-tab-btn')?.classList.add('active');
      document.getElementById('messages-tab-btn')?.classList.remove('active');
      // Build permalink using top-level site segment (e.g. /ANPDSS-Pages)
      const siteBase = '/' + (location.pathname.split('/')[1] || '');
      const url = `${location.origin}${siteBase}/friends`;
      makeIframeFor(url);
    }

    function loadMessagesTab() {
      document.getElementById('messages-tab-btn')?.classList.add('active');
      document.getElementById('friends-tab-btn')?.classList.remove('active');
      // Build permalink using top-level site segment (e.g. /ANPDSS-Pages)
      const siteBase = '/' + (location.pathname.split('/')[1] || '');
      const url = `${location.origin}${siteBase}/messages`;
      makeIframeFor(url);
    }

    document.getElementById('user-btn').addEventListener('click', () => {
      showModal('user-modal');
      updateProfile();
    });
    // Friends button opens the friends modal
    const friendsBtnEl = document.getElementById('friends-btn');
    if (friendsBtnEl) friendsBtnEl.addEventListener('click', () => showFriendsModal());

    function updateProfile() {
      const totalSaved = state.savedMeals.length + state.savedActivities.length + state.savedMusic.length;
      document.getElementById('profile-mood').textContent = state.currentMood.score + '/100';
      document.getElementById('profile-saved').textContent = totalSaved;
    }

    // Scroll to Weather Section
    function scrollToWeather(event) {
      event.preventDefault();
      const weatherSection = document.getElementById('weather-section');
      if (weatherSection) {
        weatherSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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

    // Global loader for long-running AI requests
    function showGlobalLoader(message) {
      const el = document.getElementById('global-loader');
      if (!el) return;
      const msgEl = document.getElementById('global-loader-msg');
      if (msgEl && message) msgEl.textContent = message;
      el.classList.add('show');
    }
    // This shows where we pull the ai from 
    function hideGlobalLoader() {
      const el = document.getElementById('global-loader');
      if (!el) return;
      el.classList.remove('show');
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

    // --- Weather & Outfit functionality (new) ---
    const weatherState = {
      weather: null,
      forecast: null,
      location: null,
      timeOfDay: null
    };

    function getLocationForOutfit(){
      try {
        console.log('[getLocationForOutfit] triggered');
        showToast('📍 Detecting location for weather...');
        getLocation();
      } catch (e) {
        console.warn('getLocationForOutfit failed', e);
      }
    }

    function getLocation() {
      document.getElementById('location-status').innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
          <div class="loading"></div>
          <span>Detecting your location...</span>
        </div>
      `;
      console.log('[getLocation] requesting geolocation');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => handleLocationSuccess(pos),
          err => handleLocationError(err),
          { timeout: 30000, enableHighAccuracy: true }
        );
      } else {
        console.log('[getLocation] navigator.geolocation not available');
        showManualInput('Geolocation not supported by your browser');
      }
    }

    function handleLocationSuccess(position){
      console.log('[handleLocationSuccess] position=', position);
      weatherState.location = { lat: position.coords.latitude, lon: position.coords.longitude };
      showToast('✅ Location detected');
      getWeatherByCoords(weatherState.location.lat, weatherState.location.lon);
    }

    function handleLocationError(error){
      console.log('[handleLocationError] error=', error);
      let message = 'Could not detect your location. ';
      switch(error.code){
        case error.PERMISSION_DENIED: message += 'Permission denied.'; break;
        case error.POSITION_UNAVAILABLE: message += 'Location unavailable.'; break;
        case error.TIMEOUT: message += 'Location request timed out.'; break;
        default: message += 'Unknown error.';
      }
      showManualInput(message);
    }

    function showManualInput(message){
      console.log('[showManualInput] message=', message);
      document.getElementById('location-status').innerHTML = `<div class="error-message">${message}</div>`;
      document.getElementById('manual-location').classList.remove('hidden');
    }

    async function getWeatherByZip(){
      const zip = (document.getElementById('zip-input')||{}).value || '';
      if (!/^\d{5}$/.test(zip)) { showToast('❌ Please enter a valid 5-digit ZIP code'); return; }
      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:8309' : 'https://moodlife.opencodingsociety.com';
      try {
        const url = `${pythonURI}/api/outfit/weather/current?zip=${zip}`;
        console.log('[getWeatherByZip] zip=', zip, 'url=', url);
        const resp = await fetch(url, { method: 'GET', credentials: 'include', headers: {'Content-Type':'application/json','X-Origin':'client'} });
        console.log('[getWeatherByZip] status=', resp.status, 'ok=', resp.ok);
        if (!resp.ok) throw new Error(`Weather API ${resp.status}`);
        const data = await resp.json();
        console.log('[getWeatherByZip] data=', data);
        weatherState.location = { lat: data.coord.lat, lon: data.coord.lon, name: data.name };
        displayWeather(data);
      } catch (e) {
        console.error('Error getting weather by zip', e);
        showToast('❌ Could not get weather data.');
      }
    }

    async function getWeatherByCoords(lat, lon){
      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:8309' : 'https://moodlife.opencodingsociety.com';
      try {
        const url = `${pythonURI}/api/outfit/weather/current?lat=${lat}&lon=${lon}`;
        console.log('[getWeatherByCoords] url=', url);
        const resp = await fetch(url, { method: 'GET', credentials: 'include', headers: {'Content-Type':'application/json','X-Origin':'client'} });
        console.log('[getWeatherByCoords] status=', resp.status);
        if (!resp.ok) throw new Error(`Weather API ${resp.status}`);
        const data = await resp.json();
        console.log('[getWeatherByCoords] data=', data);
        weatherState.location.name = data.name;
        displayWeather(data);
      } catch (e) {
        console.error('Error fetching weather', e);
        showManualInput('Failed to get weather data. Please try entering your ZIP code.');
      }
    }

    function displayWeather(data){
      console.log('[displayWeather] data=', data);
      // keep full API response for sending to Gemini and debugging
      weatherState.raw = data;
      weatherState.weather = {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed),
        icon: data.weather[0].icon,
        visibility: data.visibility ? Math.round(data.visibility / 1609.34) : null, // meters to miles
        pressure: data.main.pressure,
        sunrise: data.sys?.sunrise,
        sunset: data.sys?.sunset
      };

      document.getElementById('location-status').classList.add('hidden');
      document.getElementById('manual-location').classList.add('hidden');
      document.getElementById('weather-container').classList.remove('hidden');

      const locationName = weatherState.location.name || 'Your Location';

      // Update hero section
      document.getElementById('location-name-hero').textContent = locationName;
      document.getElementById('weather-date').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById('weather-icon-large').textContent = getWeatherEmoji(weatherState.weather.condition.toLowerCase());
      document.getElementById('weather-condition-hero').textContent = weatherState.weather.description;
      document.getElementById('temp-large').textContent = `${weatherState.weather.temp}°`;
      document.getElementById('feels-like-hero').textContent = `${weatherState.weather.feelsLike}°F`;

      // Update stats grid
      document.getElementById('temperature').textContent = `${weatherState.weather.temp}°F`;
      document.getElementById('feels-like').textContent = `${weatherState.weather.feelsLike}°F`;
      document.getElementById('humidity').textContent = `${weatherState.weather.humidity}%`;
      document.getElementById('wind-speed').textContent = `${weatherState.weather.windSpeed} mph`;
      document.getElementById('visibility').textContent = weatherState.weather.visibility ? `${weatherState.weather.visibility} mi` : 'N/A';
      document.getElementById('pressure').textContent = `${weatherState.weather.pressure} hPa`;

      // Time of day
      const hour = new Date().getHours();
      let timeOfDay;
      if (hour >= 6 && hour < 12) timeOfDay = 'Morning';
      else if (hour >= 12 && hour < 17) timeOfDay = 'Afternoon';
      else if (hour >= 17 && hour < 21) timeOfDay = 'Evening';
      else timeOfDay = 'Night';
      weatherState.timeOfDay = timeOfDay;

      // Calculate and display comfort index
      updateComfortIndex();

      // Update weather-mood impact
      updateWeatherMoodImpact();

      // Update weather-based activities
      updateWeatherActivities();

      // Update weather insights (sunrise/sunset, UV, moon phase)
      updateWeatherInsights(data);

      // Update last updated time
      document.getElementById('weather-last-updated').style.display = 'flex';
      document.getElementById('last-update-time').textContent = `Updated: ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;

      // Add weather animation
      updateWeatherAnimation();

      showToast('✅ Weather data loaded!');
      getForecast(weatherState.location.lat, weatherState.location.lon);
    }

    function refreshWeather() {
      if (weatherState.location) {
        showToast('🔄 Refreshing weather data...');
        getWeatherByCoords(weatherState.location.lat, weatherState.location.lon);
      }
    }

    function updateComfortIndex() {
      const temp = weatherState.weather.temp;
      const humidity = weatherState.weather.humidity;
      const wind = weatherState.weather.windSpeed;

      // Calculate comfort score (0-100)
      let score = 100;

      // Temperature factor (ideal: 65-75°F)
      if (temp < 50) score -= (50 - temp) * 1.5;
      else if (temp > 85) score -= (temp - 85) * 2;
      else if (temp < 65) score -= (65 - temp) * 0.5;
      else if (temp > 75) score -= (temp - 75) * 0.5;

      // Humidity factor (ideal: 30-60%)
      if (humidity > 70) score -= (humidity - 70) * 0.5;
      else if (humidity < 30) score -= (30 - humidity) * 0.3;

      // Wind factor (high wind reduces comfort)
      if (wind > 20) score -= (wind - 20) * 1;
      else if (wind > 10) score -= (wind - 10) * 0.3;

      score = Math.max(0, Math.min(100, Math.round(score)));

      let label, color;
      if (score >= 80) { label = 'Excellent'; color = '#a0a0a0'; }
      else if (score >= 60) { label = 'Good'; color = '#888888'; }
      else if (score >= 40) { label = 'Moderate'; color = '#707070'; }
      else { label = 'Poor'; color = '#606060'; }

      document.getElementById('comfort-score').textContent = score;
      document.getElementById('comfort-score').style.color = '#e0e0e0';
      document.getElementById('comfort-label').textContent = label;
      document.getElementById('comfort-fill').style.width = `${score}%`;
      document.getElementById('comfort-fill').style.background = '#666';
    }

    function updateWeatherMoodImpact() {
      const condition = weatherState.weather.condition.toLowerCase();
      const temp = weatherState.weather.temp;

      let icon, title, desc, tip;

      if (condition.includes('clear') || condition.includes('sun')) {
        icon = '😊'; title = 'Mood Booster';
        desc = 'Sunny weather increases serotonin production, naturally boosting your mood and energy levels.';
        tip = 'Take advantage of the sunshine! Even 15 minutes outdoors can improve your mood significantly.';
      } else if (condition.includes('cloud')) {
        icon = '😌'; title = 'Calm & Reflective';
        desc = 'Overcast skies can promote introspection and creativity. Great for focused work.';
        tip = 'Perfect weather for indoor creative activities or catching up on reading.';
      } else if (condition.includes('rain') || condition.includes('drizzle')) {
        icon = '🧘'; title = 'Cozy & Relaxing';
        desc = 'Rain sounds are naturally calming and can reduce stress. Embrace the cozy vibes!';
        tip = 'Listen to the rain while enjoying a warm drink. It\'s nature\'s white noise machine.';
      } else if (condition.includes('snow')) {
        icon = '❄️'; title = 'Magical & Peaceful';
        desc = 'Snow creates a quiet, peaceful atmosphere that can feel magical and calming.';
        tip = 'Bundle up and take a short walk in the snow—it\'s great for mindfulness.';
      } else if (condition.includes('thunder') || condition.includes('storm')) {
        icon = '⚡'; title = 'Energizing';
        desc = 'Storms can be exciting! The change in air pressure can make some people feel energized.';
        tip = 'Stay safe indoors and use this time for high-energy indoor activities.';
      } else {
        icon = '🌤️'; title = 'Balanced';
        desc = 'Current weather conditions are neutral for mood—make of the day what you will!';
        tip = 'A great day to tackle whatever\'s on your to-do list.';
      }

      // Temperature impact
      if (temp < 40) {
        tip += ' Bundle up warmly—cold can affect energy levels.';
      } else if (temp > 85) {
        tip += ' Stay hydrated and cool—heat can cause fatigue.';
      }

      document.getElementById('mood-impact-icon').textContent = icon;
      document.getElementById('mood-impact-title').textContent = title;
      document.getElementById('mood-impact-desc').textContent = desc;
      document.getElementById('mood-tip').textContent = tip;
    }

    function updateWeatherActivities() {
      const condition = weatherState.weather.condition.toLowerCase();
      const temp = weatherState.weather.temp;
      const activities = [];

      // Outdoor activities for good weather
      if ((condition.includes('clear') || condition.includes('cloud')) && temp >= 50 && temp <= 85) {
        activities.push({ icon: '🚶', name: 'Go for a walk', type: 'outdoor' });
        activities.push({ icon: '🚴', name: 'Bike ride', type: 'outdoor' });
        activities.push({ icon: '📸', name: 'Photography', type: 'outdoor' });
        if (temp >= 65) {
          activities.push({ icon: '🧺', name: 'Picnic', type: 'outdoor' });
        }
      }

      // Indoor activities
      if (condition.includes('rain') || condition.includes('storm') || temp < 40 || temp > 90) {
        activities.push({ icon: '📚', name: 'Read a book', type: 'indoor' });
        activities.push({ icon: '🎮', name: 'Video games', type: 'indoor' });
        activities.push({ icon: '🎬', name: 'Movie marathon', type: 'indoor' });
        activities.push({ icon: '🧘', name: 'Indoor yoga', type: 'indoor' });
      }

      // Cozy activities for cold/rainy
      if (condition.includes('rain') || temp < 50) {
        activities.push({ icon: '☕', name: 'Coffee/tea time', type: 'cozy' });
        activities.push({ icon: '🍳', name: 'Cook comfort food', type: 'cozy' });
      }

      // Hot weather activities
      if (temp > 80 && condition.includes('clear')) {
        activities.push({ icon: '🏊', name: 'Swimming', type: 'outdoor' });
        activities.push({ icon: '🍦', name: 'Get ice cream', type: 'treat' });
      }

      // Snow activities
      if (condition.includes('snow')) {
        activities.push({ icon: '⛷️', name: 'Skiing/Sledding', type: 'outdoor' });
        activities.push({ icon: '☃️', name: 'Build a snowman', type: 'outdoor' });
        activities.push({ icon: '🍫', name: 'Hot chocolate', type: 'cozy' });
      }

      // Default activities
      if (activities.length < 4) {
        activities.push({ icon: '🎧', name: 'Listen to music', type: 'any' });
        activities.push({ icon: '✍️', name: 'Journaling', type: 'any' });
      }

      const container = document.getElementById('weather-activities');
      container.innerHTML = activities.slice(0, 6).map(a => `
        <div style="background: #252525; padding: 0.75rem 1rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; border: 1px solid #333;">
          <span style="font-size: 1.25rem;">${a.icon}</span>
          <span style="color: #ccc;">${a.name}</span>
          <span style="font-size: 0.7rem; color: #666; text-transform: uppercase; margin-left: auto;">${a.type}</span>
        </div>
      `).join('');
    }

    function updateWeatherInsights(data) {
      // Sunrise/Sunset
      if (data.sys?.sunrise && data.sys?.sunset) {
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);
        document.getElementById('sunrise-time').textContent = sunrise.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        document.getElementById('sunset-time').textContent = sunset.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

        // Day length
        const dayLengthMs = (data.sys.sunset - data.sys.sunrise) * 1000;
        const hours = Math.floor(dayLengthMs / 3600000);
        const minutes = Math.floor((dayLengthMs % 3600000) / 60000);
        document.getElementById('day-length').textContent = `${hours}h ${minutes}m`;
      }

      // UV Index (estimate based on conditions and time)
      const hour = new Date().getHours();
      const condition = weatherState.weather.condition.toLowerCase();
      let uvIndex = 0;
      if (hour >= 10 && hour <= 16) {
        if (condition.includes('clear')) uvIndex = hour >= 11 && hour <= 14 ? 8 : 5;
        else if (condition.includes('cloud')) uvIndex = 3;
        else uvIndex = 1;
      }
      let uvLabel, uvIcon;
      if (uvIndex <= 2) { uvLabel = 'Low'; uvIcon = '🟢'; }
      else if (uvIndex <= 5) { uvLabel = 'Moderate'; uvIcon = '🟡'; }
      else if (uvIndex <= 7) { uvLabel = 'High'; uvIcon = '🟠'; }
      else { uvLabel = 'Very High'; uvIcon = '🔴'; }
      document.getElementById('uv-index').textContent = `${uvIndex} (${uvLabel})`;
      document.getElementById('uv-icon').textContent = uvIcon;

      // Moon phase (simplified calculation)
      const moonPhases = ['🌑 New Moon', '🌒 Waxing Crescent', '🌓 First Quarter', '🌔 Waxing Gibbous', '🌕 Full Moon', '🌖 Waning Gibbous', '🌗 Last Quarter', '🌘 Waning Crescent'];
      const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
      const moonIndex = Math.floor(((dayOfYear % 29.5) / 29.5) * 8) % 8;
      document.getElementById('moon-phase').textContent = moonPhases[moonIndex];
    }

    function updateWeatherAnimation() {
      const condition = weatherState.weather.condition.toLowerCase();
      const container = document.getElementById('weather-animation');
      let animation = '';

      if (condition.includes('rain') || condition.includes('drizzle')) {
        animation = '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(transparent, rgba(100,149,237,0.1));animation:rain 1s linear infinite;"></div>';
      } else if (condition.includes('snow')) {
        animation = '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(white 1px, transparent 1px);background-size:20px 20px;animation:snow 3s linear infinite;"></div>';
      } else if (condition.includes('clear')) {
        animation = '<div style="position:absolute;top:10px;right:20px;width:60px;height:60px;background:radial-gradient(circle,rgba(255,200,50,0.3),transparent);border-radius:50%;animation:pulse 2s ease-in-out infinite;"></div>';
      }

      container.innerHTML = animation;
    }

    async function getForecast(lat, lon){
      const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'http://localhost:8309' : 'https://moodlife.opencodingsociety.com';
      try {
        const url = `${pythonURI}/api/outfit/weather/forecast?lat=${lat}&lon=${lon}`;
        const resp = await fetch(url, { method: 'GET', credentials: 'include', headers: {'Content-Type':'application/json','X-Origin':'client'} });
        if (!resp.ok) throw new Error(`Forecast API ${resp.status}`);
        const data = await resp.json();

        // Hourly forecast (next 8 entries = 24 hours)
        const todayForecasts = data.list.slice(0,8);
        weatherState.forecast = todayForecasts.map(item => ({ time: new Date(item.dt*1000), temp: Math.round(item.main.temp), condition: item.weather[0].main, description: item.weather[0].description, pop: Math.round(item.pop*100) }));

        // 5-day forecast (get one entry per day at noon)
        const dailyForecasts = [];
        const seenDates = new Set();
        for (const item of data.list) {
          const date = new Date(item.dt * 1000);
          const dateStr = date.toDateString();
          const hour = date.getHours();
          // Get midday forecast for each day
          if (!seenDates.has(dateStr) && hour >= 11 && hour <= 14) {
            seenDates.add(dateStr);
            dailyForecasts.push({
              date: date,
              temp: Math.round(item.main.temp),
              tempMin: Math.round(item.main.temp_min),
              tempMax: Math.round(item.main.temp_max),
              condition: item.weather[0].main,
              description: item.weather[0].description,
              pop: Math.round(item.pop * 100),
              humidity: item.main.humidity,
              wind: Math.round(item.wind.speed)
            });
          }
        }
        weatherState.extendedForecast = dailyForecasts.slice(0, 5);

        displayForecast();
        displayExtendedForecast();
      } catch (e) {
        console.error('Error fetching forecast', e);
        document.getElementById('forecast-container').innerHTML = '<div style="color: #ff4a4a;">Could not load forecast data</div>';
        document.getElementById('extended-forecast').innerHTML = '<div style="color: #ff4a4a;">Could not load extended forecast</div>';
      }
    }

    function displayForecast(){
      const container = document.getElementById('forecast-container');
      if (!weatherState.forecast || !weatherState.forecast.length) { container.innerHTML = '<div style="color: #666;">No forecast data available</div>'; return; }
      const html = weatherState.forecast.map(f => {
        const timeStr = f.time.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true});
        const icon = getWeatherEmoji(f.condition.toLowerCase());
        return `
          <div class="forecast-card">
            <div class="time">${timeStr}</div>
            <div class="icon">${icon}</div>
            <div class="temp">${f.temp}°F</div>
            <div class="desc">${f.description}</div>
            ${f.pop>20?`<div style="color:#888;font-size:0.8rem;margin-top:0.3rem;">💧 ${f.pop}%</div>`:''}
          </div>
        `;
      }).join('');
      container.innerHTML = `<div class="forecast-grid">${html}</div>`;
    }

    function displayExtendedForecast() {
      const container = document.getElementById('extended-forecast');
      if (!weatherState.extendedForecast || !weatherState.extendedForecast.length) {
        container.innerHTML = '<div style="color: #bbb;">No extended forecast data available</div>';
        return;
      }

      const html = weatherState.extendedForecast.map((f, idx) => {
        const dayName = idx === 0 ? 'Today' : f.date.toLocaleDateString('en-US', { weekday: 'short' });
        const dateStr = f.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const icon = getWeatherEmoji(f.condition.toLowerCase());

        return `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: #1e1e1e; border-radius: 12px; border: 1px solid #333; margin-bottom: 0.5rem; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#444'" onmouseout="this.style.borderColor='#333'">
            <div style="min-width: 80px;">
              <div style="font-weight: 600; color: #ccc;">${dayName}</div>
              <div style="font-size: 0.8rem; color: #666;">${dateStr}</div>
            </div>
            <div style="font-size: 2rem;">${icon}</div>
            <div style="text-align: center; flex: 1; max-width: 150px;">
              <div style="font-size: 0.85rem; color: #888; text-transform: capitalize;">${f.description}</div>
            </div>
            <div style="display: flex; gap: 1rem; align-items: center;">
              ${f.pop > 20 ? `<div style="color: #888; font-size: 0.85rem;">💧 ${f.pop}%</div>` : ''}
              <div style="color: #666; font-size: 0.85rem;">💨 ${f.wind} mph</div>
            </div>
            <div style="text-align: right; min-width: 80px;">
              <span style="font-size: 1.25rem; font-weight: 700; color: #e0e0e0;">${f.temp}°</span>
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = html;
    }

    function getWeatherEmoji(condition){
      const map = { 'clear':'☀️','clouds':'☁️','rain':'🌧️','drizzle':'🌦️','thunderstorm':'⛈️','snow':'❄️','mist':'🌫️','fog':'🌫️' };
      for (let k in map) if (condition.includes(k)) return map[k];
      return '🌤️';
    }

    function generateOutfit(){
      if (!weatherState.weather) {
        console.warn('No weather data yet; cannot generate outfit');
        showToast('⚠️ Weather not ready for outfit recommendations');
        return;
      }

      const temp = weatherState.weather.temp;
      const condition = weatherState.weather.condition.toLowerCase();
      const timeOfDay = (weatherState.timeOfDay||'').toLowerCase();

      let advice=''; let clothing=[]; let accessories=[]; let footwear=[];

      if (temp <= 40) {
        advice = "It's very cold outside! Layer up with warm clothing to stay comfortable.";
        clothing = ['Heavy winter coat','Thermal underwear','Thick sweater','Long pants','Warm socks'];
        accessories = ['Winter hat','Scarf','Insulated gloves'];
        footwear = ['Insulated boots'];
      } else if (temp <= 55) {
        advice = "It's cool outside. Wear layers so you can adjust if you warm up.";
        clothing = ['Light jacket','Long-sleeve shirt','Jeans or long pants'];
        accessories = ['Light scarf'];
        footwear = ['Sneakers','Casual shoes'];
      } else if (temp <= 70) {
        advice = "The weather is pleasant! Dress comfortably with light layers.";
        clothing = ['T-shirt','Light cardigan','Jeans or casual pants'];
        accessories = ['Sunglasses'];
        footwear = ['Sneakers','Loafers'];
      } else if (temp <= 85) {
        advice = "It's warm out! Dress in light, breathable fabrics to stay cool.";
        clothing = ['T-shirt','Shorts or light pants','Light dress'];
        accessories = ['Sunglasses','Sunscreen'];
        footwear = ['Sandals','Sneakers'];
      } else {
        advice = "It's hot outside! Wear minimal, light clothing and stay hydrated.";
        clothing = ['Tank top','Shorts','Light dress'];
        accessories = ['Sunscreen','Wide-brimmed hat'];
        footwear = ['Sandals','Flip-flops'];
      }

      if (condition.includes('rain')||condition.includes('drizzle')) {
        advice += ' It might rain—bring an umbrella or rain jacket.';
        accessories.push('Umbrella','Rain jacket');
        footwear = ['Waterproof boots','Rain boots'];
      }

      if (condition.includes('snow')) {
        advice += ' Snow expected—wear waterproof, insulated gear.';
        accessories.push('Waterproof gloves');
        footwear = ['Snow boots'];
      }

      if (weatherState.weather.windSpeed > 15) {
        advice += ' It is windy—consider a windbreaker.';
        if (temp > 60) clothing.push('Light windbreaker');
      }

      document.getElementById('general-advice').textContent = advice;
      document.getElementById('clothing-items').innerHTML = clothing.map(i=>`<span class="outfit-item">${i}</span>`).join('');
      document.getElementById('accessories-items').innerHTML = accessories.map(i=>`<span class="outfit-item">${i}</span>`).join('');
      document.getElementById('footwear-items').innerHTML = footwear.map(i=>`<span class="outfit-item">${i}</span>`).join('');
      document.getElementById('outfit-recommendations').classList.remove('hidden');
      document.getElementById('outfit-recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast('✨ Outfit generated!');
    }

    // Ensure existing init still runs after enhancements
    init();
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
          <button class="btn btn-primary" onclick="requestCameraAccess()" style="width: 100%; margin-top: 1rem;">
            ✓ Allow Camera Access
          </button>
          <button class="btn" onclick="showSliderMode()" style="width: 100%; margin-top: 1rem; background: transparent; border: 1px solid #666;">
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
            <button id="capture-btn" class="btn btn-primary" onclick="captureMood()" style="width: 100%; display: none;">
              📸 Capture My Mood
            </button>
            <button class="btn" onclick="showSliderMode()" style="width: 100%; margin-top: 1rem; background: transparent; border: 1px solid #666;">
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
              <span class="tag selected">happy</span>
              <span class="tag selected">energetic</span>
            </div>
            <div style="color: #888; font-size: 0.9rem; margin-top: 1rem;">
              Confidence: <span id="review-confidence">85%</span>
            </div>
          </div>

  <button class="btn btn-primary" onclick="confirmDetectedMood()" style="width: 100%; margin-bottom: 1rem;">
            ✓ Confirm & Use This Mood
          </button>
          <button class="btn" onclick="retryDetection()" style="width: 100%; background: transparent; border: 1px solid #2196F3;">
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
          <button class="btn btn-primary" onclick="retryDetection()" style="width: 100%; margin-bottom: 1rem;">
            🔄 Try Again
          </button>
          <button class="btn" onclick="showSliderMode()" style="width: 100%; background: transparent; border: 1px solid #666;">
            Use Manual Slider Instead
          </button>
        </div>
      </div>
    </div>
  </div>

  <script type="module">
    // Import face detection modules
    import { calculateMoodScore } from '{{ site.baseurl }}/assets/js/face-detection/expression-mapper.js';
    import { FaceMoodDetector, ERROR_CODES } from '{{ site.baseurl }}/assets/js/face-detection/face-mood-detector.js';

    // Make functions globally available
    window.calculateMoodScore = calculateMoodScore;
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
      console.log('captureMood called, detectedMoodData:', window.faceDetectionState.detectedMoodData);

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
      console.log('Calculated mood result:', moodResult);

      // Show review screen
      document.getElementById('captured-preview').src = window.faceDetectionState.capturedImageData;
      document.getElementById('review-score').textContent = moodResult.score;
      document.getElementById('review-expression').textContent = moodResult.primaryExpression.charAt(0).toUpperCase() + moodResult.primaryExpression.slice(1);
      document.getElementById('review-category').textContent = moodResult.category;
      document.getElementById('review-confidence').textContent = Math.round(moodResult.confidence * 100) + '%';

      // Display tags
      const tagsHtml = moodResult.tags.map(tag =>
        `<span class="tag selected">${tag}</span>`
      ).join('');
      document.getElementById('review-tags').innerHTML = tagsHtml;

      // Store mood result on the state object
      window.faceDetectionState.detectedMoodData.moodResult = moodResult;
      console.log('Stored moodResult, full state:', window.faceDetectionState.detectedMoodData);

      showModalStep('review');
    };

    // Confirm detected mood
    window.confirmDetectedMood = function() {
      console.log('confirmDetectedMood called, state:', window.faceDetectionState.detectedMoodData);

      if (!window.faceDetectionState.detectedMoodData || !window.faceDetectionState.detectedMoodData.moodResult) {
        console.error('No mood data available!', window.faceDetectionState);
        alert('No mood data available');
        return;
      }

      const moodResult = window.faceDetectionState.detectedMoodData.moodResult;
      console.log('Using mood result:', moodResult);

      // Apply to state object
      state.currentMood.score = moodResult.score;
      state.currentMood.tags = [...moodResult.tags];
      state.currentMood.primaryTag = moodResult.primaryExpression;
      state.currentMood.detectionMethod = 'face-api';
      state.currentMood.detectionConfidence = moodResult.confidence;

      // Update UI
      document.getElementById('mood-slider').value = moodResult.score;
      document.getElementById('mood-value').textContent = moodResult.score;

      // Clear manual emoji selection
      document.querySelectorAll('.emoji-btn').forEach(btn => btn.classList.remove('active'));

      // Update tag selection
      document.querySelectorAll('#mood-tags .tag').forEach(tag => {
        const tagValue = tag.dataset.tag;
        if (moodResult.tags.includes(tagValue)) {
          tag.classList.add('selected');
        } else {
          tag.classList.remove('selected');
        }
      });

      // Close modal and cleanup
      closeCameraModal();

      // Show success message
      showToast(`✓ Mood detected: ${moodResult.category} (${moodResult.score})`);

      // Scroll to recommendations button
      document.querySelector('#mood-section .btn-primary').scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      showToast('Use the slider below to set your mood');
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

      // Hide modal.
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

    // Update state object to include detection fields
    if (typeof state !== 'undefined' && state.currentMood) {
      state.currentMood.detectionMethod = null;
      state.currentMood.detectionConfidence = null;
    }
  </script>
</body>
</html>

