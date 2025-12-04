---
layout: post
title: "Submodule 1"
description: "User Accounts & Preferences"
permalink: /mood-meal/submodule_1/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 1
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/
  home: /mood-meal/
  next: /mood-meal/submodule_2/
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mood Life - Your Profile</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
      padding: 20px;
      line-height: 1.6;
    }

    main {
      max-width: 1000px;
      margin: 0 auto;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      background: #111111;
      border-radius: 8px;
      border: 2px solid #2196F3;
      margin-bottom: 2rem;
    }

    .nav-bar h2 {
      color: #2196F3;
      margin: 0;
    }

    .nav-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: #2196F3;
      color: white;
    }

    .btn-primary:hover {
      background: #1976D2;
    }

    .btn-secondary {
      background: transparent;
      color: #2196F3;
      border: 2px solid #2196F3;
    }

    .btn-secondary:hover {
      background: #001a33;
    }

    .dropdown-section {
      background: #111111;
      border: 2px solid #2196F3;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      overflow: hidden;
    }

    .dropdown-header {
      padding: 1.5rem;
      background: #1a1a1a;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s ease;
    }

    .dropdown-header:hover {
      background: #222222;
    }

    .dropdown-header h3 {
      color: #2196F3;
      margin: 0;
      font-size: 1.3rem;
    }

    .dropdown-arrow {
      font-size: 1.5rem;
      color: #2196F3;
      transition: transform 0.3s ease;
    }

    .dropdown-arrow.open {
      transform: rotate(180deg);
    }

    .dropdown-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .dropdown-content.open {
      max-height: 2000px;
    }

    .dropdown-inner {
      padding: 1.5rem;
    }

    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: #000000;
      border: 2px solid #333;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .checkbox-item:hover {
      border-color: #2196F3;
      background: #001a33;
    }

    .checkbox-item input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #2196F3;
    }

    .checkbox-item label {
      cursor: pointer;
      flex: 1;
      color: #ffffff;
    }

    .sub-dropdown {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #333;
    }

    .sub-dropdown-header {
      padding: 1rem;
      background: #0a0a0a;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 6px;
      margin-bottom: 0.5rem;
    }

    .sub-dropdown-header:hover {
      background: #1a1a1a;
    }

    .sub-dropdown-header h4 {
      color: #2196F3;
      margin: 0;
      font-size: 1.1rem;
    }

    .sub-dropdown-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .sub-dropdown-content.open {
      max-height: 1000px;
      padding-top: 0.5rem;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal.hidden {
      display: none;
    }

    .modal-content {
      background: #111111;
      border: 2px solid #2196F3;
      border-radius: 8px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .modal-header h2 {
      color: #2196F3;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      color: #888;
      font-size: 2rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }

    .close-btn:hover {
      color: #2196F3;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #ccc;
      font-weight: 500;
    }

    .form-group input {
      width: 100%;
      padding: 0.75rem;
      background: #000000;
      border: 1px solid #333;
      border-radius: 6px;
      color: #ffffff;
      font-size: 1rem;
    }

    .form-group input:focus {
      outline: none;
      border-color: #2196F3;
    }

    .form-group input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .demo-info {
      background: #001a33;
      border: 1px solid #2196F3;
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .demo-info strong {
      color: #2196F3;
    }

    .text-link {
      color: #2196F3;
      text-decoration: underline;
      cursor: pointer;
    }

    .text-link:hover {
      color: #1976D2;
    }

    .message {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 6px;
      animation: slideIn 0.3s ease;
    }

    .message-success {
      background: #001a33;
      border: 1px solid #2196F3;
      color: #2196F3;
    }

    .message-info {
      background: #001a33;
      border: 1px solid #2196F3;
      color: #2196F3;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .save-section {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }

    .hidden {
      display: none !important;
    }

    @media (max-width: 768px) {
      .checkbox-grid {
        grid-template-columns: 1fr;
      }

      .nav-actions {
        flex-direction: column;
        width: 100%;
      }

      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>

<main>
  <div class="nav-bar">
    <h2>Mood Life</h2>
    <div class="nav-actions">
      <div id="guest-buttons">
        <button class="btn btn-secondary" id="login-btn">Login</button>
        <button class="btn btn-primary" id="signup-btn">Sign Up</button>
      </div>
      <div id="user-section" class="hidden">
        <button class="btn btn-secondary" id="profile-btn">👤 Profile</button>
        <button class="btn btn-secondary" id="logout-btn">Logout</button>
      </div>
    </div>
  </div>

  <div id="message-container"></div>

  <!-- Cuisines Dropdown with Sub-dropdowns -->
  <div class="dropdown-section">
    <div class="dropdown-header" data-dropdown="cuisines">
      <h3>🍽️ Food Preferences</h3>
      <span class="dropdown-arrow">▼</span>
    </div>
    <div class="dropdown-content" id="cuisines-content">
      <div class="dropdown-inner">
        
        <!-- Dietary Restrictions Sub-dropdown -->
        <div class="sub-dropdown">
          <div class="sub-dropdown-header" data-subdropdown="dietary">
            <h4>🌱 Dietary Restrictions</h4>
            <span class="dropdown-arrow">▼</span>
          </div>
          <div class="sub-dropdown-content" id="dietary-subdropdown">
            <div class="checkbox-grid" id="dietary-options"></div>
          </div>
        </div>

        <!-- Allergies Sub-dropdown -->
        <div class="sub-dropdown">
          <div class="sub-dropdown-header" data-subdropdown="allergies">
            <h4>⚠️ Allergies & Intolerances</h4>
            <span class="dropdown-arrow">▼</span>
          </div>
          <div class="sub-dropdown-content" id="allergies-subdropdown">
            <div class="checkbox-grid" id="allergies-options"></div>
          </div>
        </div>

        <!-- Cuisines Sub-dropdown -->
        <div class="sub-dropdown">
          <div class="sub-dropdown-header" data-subdropdown="cuisines-list">
            <h4>🍽️ Favorite Cuisines</h4>
            <span class="dropdown-arrow">▼</span>
          </div>
          <div class="sub-dropdown-content" id="cuisines-subdropdown">
            <div class="checkbox-grid" id="cuisines-options"></div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Music Dropdown -->
  <div class="dropdown-section">
    <div class="dropdown-header" data-dropdown="music">
      <h3>🎵 Music Preferences</h3>
      <span class="dropdown-arrow">▼</span>
    </div>
    <div class="dropdown-content" id="music-content">
      <div class="dropdown-inner">
        <div class="checkbox-grid" id="music-options"></div>
      </div>
    </div>
  </div>

  <!-- Activities Dropdown -->
  <div class="dropdown-section">
    <div class="dropdown-header" data-dropdown="activities">
      <h3>🎯 Favorite Activities</h3>
      <span class="dropdown-arrow">▼</span>
    </div>
    <div class="dropdown-content" id="activities-content">
      <div class="dropdown-inner">
        <div class="checkbox-grid" id="activities-options"></div>
      </div>
    </div>
  </div>

  <div class="save-section">
    <button class="btn btn-secondary" id="reset-btn">Reset All</button>
    <button class="btn btn-primary" id="save-btn">💾 Save Preferences</button>
  </div>

  <!-- Login Modal -->
  <div id="login-modal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Sign In</h2>
        <button class="close-btn" data-modal="login-modal">&times;</button>
      </div>

      <div class="demo-info">
        <strong>Demo Account:</strong><br>
        Email: demo@moodmeal.com<br>
        Password: demo123
      </div>

      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="login-email" placeholder="your@email.com">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="login-password" placeholder="Enter password">
      </div>

      <button class="btn btn-primary" id="do-login" style="width: 100%; margin-bottom: 1rem;">Sign In</button>

      <p style="text-align: center; color: #888;">
        Don't have an account? 
        <span class="text-link" id="switch-to-signup">Sign up here</span>
      </p>
    </div>
  </div>

  <!-- Signup Modal -->
  <div id="signup-modal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Create Account</h2>
        <button class="close-btn" data-modal="signup-modal">&times;</button>
      </div>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="signup-name" placeholder="John Doe">
      </div>

      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="signup-email" placeholder="your@email.com">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" id="signup-password" placeholder="At least 6 characters">
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" id="signup-confirm" placeholder="Re-enter password">
      </div>

      <button class="btn btn-primary" id="do-signup" style="width: 100%; margin-bottom: 1rem;">Create Account</button>

      <p style="text-align: center; color: #888;">
        Already have an account? 
        <span class="text-link" id="switch-to-login">Sign in here</span>
      </p>
    </div>
  </div>

  <!-- Profile Modal -->
  <div id="profile-modal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Your Profile</h2>
        <button class="close-btn" data-modal="profile-modal">&times;</button>
      </div>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="profile-name" disabled>
      </div>

      <div class="form-group">
        <label>Email Address</label>
        <input type="email" id="profile-email" disabled>
      </div>

      <div class="form-group">
        <label>Member Since</label>
        <input type="text" id="profile-created" disabled>
      </div>

      <button class="btn btn-primary" style="width: 100%;" onclick="document.getElementById('profile-modal').classList.add('hidden')">Close</button>
    </div>
  </div>

</main>

<script>
(function() {
  'use strict';

  // Data
  var dietary = [
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'pescatarian', name: 'Pescatarian' },
    { id: 'gluten-free', name: 'Gluten-Free' },
    { id: 'dairy-free', name: 'Dairy-Free' },
    { id: 'keto', name: 'Keto' },
    { id: 'paleo', name: 'Paleo' },
    { id: 'halal', name: 'Halal' },
    { id: 'kosher', name: 'Kosher' },
    { id: 'low-carb', name: 'Low-Carb' },
    { id: 'low-sodium', name: 'Low-Sodium' },
    { id: 'sugar-free', name: 'Sugar-Free' }
  ];

  var allergies = [
    { id: 'nuts', name: 'Tree Nuts' },
    { id: 'peanuts', name: 'Peanuts' },
    { id: 'shellfish', name: 'Shellfish' },
    { id: 'fish', name: 'Fish' },
    { id: 'eggs', name: 'Eggs' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'soy', name: 'Soy' },
    { id: 'wheat', name: 'Wheat' },
    { id: 'gluten', name: 'Gluten' },
    { id: 'sesame', name: 'Sesame' }
  ];

  var cuisines = [
    { id: 'italian', name: 'Italian' },
    { id: 'asian', name: 'Asian' },
    { id: 'mexican', name: 'Mexican' },
    { id: 'mediterranean', name: 'Mediterranean' },
    { id: 'indian', name: 'Indian' },
    { id: 'thai', name: 'Thai' },
    { id: 'american', name: 'American' },
    { id: 'japanese', name: 'Japanese' },
    { id: 'chinese', name: 'Chinese' },
    { id: 'french', name: 'French' },
    { id: 'greek', name: 'Greek' },
    { id: 'korean', name: 'Korean' }
  ];

  var music = [
    { id: 'pop', name: 'Pop' },
    { id: 'rock', name: 'Rock' },
    { id: 'jazz', name: 'Jazz' },
    { id: 'classical', name: 'Classical' },
    { id: 'hiphop', name: 'Hip-Hop' },
    { id: 'electronic', name: 'Electronic' },
    { id: 'country', name: 'Country' },
    { id: 'rnb', name: 'R&B' },
    { id: 'indie', name: 'Indie' },
    { id: 'latin', name: 'Latin' }
  ];

  var activities = [
    { id: 'reading', name: 'Reading' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'sports', name: 'Sports' },
    { id: 'cooking', name: 'Cooking' },
    { id: 'hiking', name: 'Hiking' },
    { id: 'movies', name: 'Watching Movies' },
    { id: 'art', name: 'Art & Crafts' },
    { id: 'photography', name: 'Photography' },
    { id: 'travel', name: 'Traveling' },
    { id: 'music', name: 'Playing Music' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'dancing', name: 'Dancing' }
  ];

  var currentUser = null;
  var users = [
    {
      name: 'Demo User',
      email: 'demo@moodmeal.com',
      password: 'demo123',
      preferences: {
        dietary: ['vegetarian', 'gluten-free'],
        allergies: ['nuts', 'dairy'],
        cuisines: ['italian', 'mediterranean'],
        music: ['jazz', 'classical'],
        activities: ['reading', 'cooking', 'hiking']
      },
      createdAt: new Date().toISOString()
    }
  ];

  function renderCheckboxes(containerId, items, selectedIds) {
    var container = document.getElementById(containerId);
    var html = '';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var checked = selectedIds.indexOf(item.id) > -1 ? 'checked' : '';
      html += '<div class="checkbox-item">';
      html += '<input type="checkbox" id="' + item.id + '" ' + checked + '>';
      html += '<label for="' + item.id + '">' + item.name + '</label>';
      html += '</div>';
    }
    container.innerHTML = html;
  }

  function loadUserPreferences() {
    if (currentUser && currentUser.preferences) {
      renderCheckboxes('dietary-options', dietary, currentUser.preferences.dietary || []);
      renderCheckboxes('allergies-options', allergies, currentUser.preferences.allergies || []);
      renderCheckboxes('cuisines-options', cuisines, currentUser.preferences.cuisines || []);
      renderCheckboxes('music-options', music, currentUser.preferences.music || []);
      renderCheckboxes('activities-options', activities, currentUser.preferences.activities || []);
    } else {
      renderCheckboxes('dietary-options', dietary, []);
      renderCheckboxes('allergies-options', allergies, []);
      renderCheckboxes('cuisines-options', cuisines, []);
      renderCheckboxes('music-options', music, []);
      renderCheckboxes('activities-options', activities, []);
    }
  }

  function getSelectedIds(containerId) {
    var container = document.getElementById(containerId);
    var checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
    var selected = [];
    for (var i = 0; i < checkboxes.length; i++) {
      selected.push(checkboxes[i].id);
    }
    return selected;
  }

  function showMessage(text) {
    var container = document.getElementById('message-container');
    var msg = document.createElement('div');
    msg.className = 'message message-success';
    msg.textContent = text;
    container.appendChild(msg);
    setTimeout(function() {
      msg.remove();
    }, 3000);
  }

  function updateAuthUI() {
    if (currentUser) {
      document.getElementById('guest-buttons').classList.add('hidden');
      document.getElementById('user-section').classList.remove('hidden');
    } else {
      document.getElementById('guest-buttons').classList.remove('hidden');
      document.getElementById('user-section').classList.add('hidden');
    }
  }

  // Dropdown toggles
  var headers = document.querySelectorAll('.dropdown-header');
  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function() {
      var dropdown = this.getAttribute('data-dropdown');
      var content = document.getElementById(dropdown + '-content');
      var arrow = this.querySelector('.dropdown-arrow');
      
      content.classList.toggle('open');
      arrow.classList.toggle('open');
    });
  }

  // Sub-dropdown toggles
  var subHeaders = document.querySelectorAll('.sub-dropdown-header');
  for (var i = 0; i < subHeaders.length; i++) {
    subHeaders[i].addEventListener('click', function() {
      var subdropdown = this.getAttribute('data-subdropdown');
      var content = document.getElementById(subdropdown + '-subdropdown');
      var arrow = this.querySelector('.dropdown-arrow');
      
      content.classList.toggle('open');
      arrow.classList.toggle('open');
    });
  }

  // Modal controls
  var closeBtns = document.querySelectorAll('.close-btn');
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
      var modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).classList.add('hidden');
    });
  }

  document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-modal').classList.remove('hidden');
  });

  document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-modal').classList.remove('hidden');
  });

  document.getElementById('profile-btn').addEventListener('click', function() {
    if (currentUser) {
      document.getElementById('profile-name').value = currentUser.name;
      document.getElementById('profile-email').value = currentUser.email;
      document.getElementById('profile-created').value = new Date(currentUser.createdAt).toLocaleDateString();
      document.getElementById('profile-modal').classList.remove('hidden');
    }
  });

  document.getElementById('switch-to-signup').addEventListener('click', function() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('signup-modal').classList.remove('hidden');
  });

  document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('signup-modal').classList.add('hidden');
    document.getElementById('login-modal').classList.remove('hidden');
  });

  // Login
  document.getElementById('do-login').addEventListener('click', function() {
    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (!email || !password) {
      showMessage('Please fill in all fields');
      return;
    }

    var user = null;
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        user = users[i];
        break;
      }
    }

    if (!user) {
      showMessage('Invalid email or password');
      return;
    }

    currentUser = user;
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    updateAuthUI();
    loadUserPreferences();
    showMessage('Welcome back, ' + currentUser.name + '!');
  });

  // Signup
  document.getElementById('do-signup').addEventListener('click', function() {
    var name = document.getElementById('signup-name').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var password = document.getElementById('signup-password').value;
    var confirm = document.getElementById('signup-confirm').value;

    if (!name || !email || !password || !confirm) {
      showMessage('Please fill in all fields');
      return;
    }

    if (password !== confirm) {
      showMessage('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      showMessage('Password must be at least 6 characters');
      return;
    }

    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        showMessage('Email already exists');
        return;
      }
    }

    var newUser = {
      name: name,
      email: email,
      password: password,
      preferences: {
        dietary: [],
        allergies: [],
        cuisines: [],
        music: [],
        activities: []
      },
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    currentUser = newUser;
    document.getElementById('signup-modal').classList.add('hidden');
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-confirm').value = '';
    updateAuthUI();
    loadUserPreferences();
    showMessage('Account created! Welcome, ' + currentUser.name + '!');
  });

  // Logout
  document.getElementById('logout-btn').addEventListener('click', function() {
    currentUser = null;
    updateAuthUI();
    loadUserPreferences();
    showMessage('Logged out successfully');
  });

  // Save
  document.getElementById('save-btn').addEventListener('click', function() {
    if (!currentUser) {
      showMessage('Please log in to save preferences');
      document.getElementById('login-modal').classList.remove('hidden');
      return;
    }

    currentUser.preferences = {
      dietary: getSelectedIds('dietary-options'),
      allergies: getSelectedIds('allergies-options'),
      cuisines: getSelectedIds('cuisines-options'),
      music: getSelectedIds('music-options'),
      activities: getSelectedIds('activities-options')
    };

    showMessage('Preferences saved successfully!');
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', function() {
    renderCheckboxes('dietary-options', dietary, []);
    renderCheckboxes('allergies-options', allergies, []);
    renderCheckboxes('cuisines-options', cuisines, []);
    renderCheckboxes('music-options', music, []);
    renderCheckboxes('activities-options', activities, []);
    showMessage('All selections reset');
  });

  // Initialize
  loadUserPreferences();
  updateAuthUI();
})();
</script>

</body>
</html>