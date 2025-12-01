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

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MoodMeal - User Accounts & Preferences</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #0a0a0a;
      color: #e0e0e0;
      margin: 0;
      padding: 20px;
      line-height: 1.6;
    }
 
    main {
      max-width: 900px;
      margin: 0 auto;
    }

    h1, h2, h3 {
      color: #4a9eff;
    }

    section {
      margin-bottom: 2rem;
    }

    hr {
      border: none;
      border-top: 1px solid #333;
      margin: 2rem 0;
    }

    .auth-container {
      background: #1a1a1a;
      border-radius: 12px;
      padding: 2rem;
      border-left: 4px solid #4a9eff;
      max-width: 500px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #ccc;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 0.75rem;
      background: #0a0a0a;
      border: 1px solid #444;
      border-radius: 6px;
      color: #e0e0e0;
      font-size: 1rem;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus {
      outline: none;
      border-color: #4a9eff;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background: #4a9eff;
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background: #6ab4ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: #4a9eff;
      border: 1px solid #4a9eff;
    }

    .btn-secondary:hover {
      background: rgba(74, 158, 255, 0.1);
    }

    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .tag-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }

    .tag-label {
      padding: 0.5rem 1rem;
      border: 1px solid #666;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-block;
    }

    .tag-label:hover {
      background: rgba(74, 158, 255, 0.1);
      border-color: #4a9eff;
    }

    .tag-label input[type="checkbox"] {
      margin-right: 0.4rem;
    }

    .tag-label.selected {
      background: rgba(74, 158, 255, 0.2);
      border-color: #4a9eff;
    }

    .profile-card {
      background: #1a1a1a;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid #4a9eff;
      margin-bottom: 1rem;
    }

    .profile-card h3 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .profile-stat {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #333;
    }

    .profile-stat:last-child {
      border-bottom: none;
    }

    .message {
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1rem;
    }

    .message-success {
      background: rgba(74, 255, 158, 0.1);
      border: 1px solid #4aff9e;
      color: #4aff9e;
    }

    .message-error {
      background: rgba(255, 74, 74, 0.1);
      border: 1px solid #ff4a4a;
      color: #ff4a4a;
    }

    .text-link {
      color: #4a9eff;
      cursor: pointer;
      text-decoration: underline;
    }

    .text-link:hover {
      color: #6ab4ff;
    }

    .hidden {
      display: none !important;
    }

    .tag-badge {
      display: inline-block;
      padding: 0.3rem 0.8rem;
      background: rgba(74, 158, 255, 0.2);
      border: 1px solid #4a9eff;
      border-radius: 15px;
      font-size: 0.85rem;
      margin: 0.25rem;
    }

    .tag-badge.dietary {
      background: rgba(255, 170, 74, 0.2);
      border-color: #ffaa4a;
      color: #ffaa4a;
    }

    .tag-badge.allergy {
      background: rgba(255, 74, 74, 0.2);
      border-color: #ff4a4a;
      color: #ff4a4a;
    }

    .tag-badge.cuisine {
      background: rgba(170, 74, 255, 0.2);
      border-color: #aa4aff;
      color: #aa4aff;
    }

    @media (max-width: 600px) {
      .auth-container {
        padding: 1.5rem;
      }

      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>

<!-- Main container for User Accounts & Preferences -->
<main id="user-accounts-page">

  <!-- LOGIN VIEW -->
  <div id="login-view">
    <section id="login-section" aria-label="Login">
      <h1 style="text-align: center; margin-bottom: 0.5rem;">Welcome to MoodMeal</h1>
      <p style="text-align: center; color: #999; margin-bottom: 2rem;">Sign in to access personalized meal recommendations</p>

      <div class="auth-container">
        <h2>1. Sign In</h2>

        <div id="login-message" class="hidden"></div>

        <div class="form-group">
          <label for="login-email">Email Address</label>
          <input type="email" id="login-email" placeholder="your@email.com" required>
        </div>

        <div class="form-group">
          <label for="login-password">Password</label>
          <input type="password" id="login-password" placeholder="Enter your password" required>
        </div>

        <button id="login-btn" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">
          Sign In
        </button>

        <p style="text-align: center; color: #999;">
          Don't have an account? 
          <span class="text-link" id="show-signup-link">Sign up here</span>
        </p>
      </div>
    </section>
  </div>

  <!-- SIGNUP VIEW -->
  <div id="signup-view" class="hidden">
    <section id="signup-section" aria-label="Sign Up">
      <h1 style="text-align: center; margin-bottom: 0.5rem;">Create Your Account</h1>
      <p style="text-align: center; color: #999; margin-bottom: 2rem;">Join MoodMeal and start your personalized food journey</p>

      <div class="auth-container">
        <h2>1. Account Information</h2>

        <div id="signup-message" class="hidden"></div>

        <div class="form-group">
          <label for="signup-name">Full Name</label>
          <input type="text" id="signup-name" placeholder="John Doe" required>
        </div>

        <div class="form-group">
          <label for="signup-email">Email Address</label>
          <input type="email" id="signup-email" placeholder="your@email.com" required>
        </div>

        <div class="form-group">
          <label for="signup-password">Password</label>
          <input type="password" id="signup-password" placeholder="At least 6 characters" required>
        </div>

        <div class="form-group">
          <label for="signup-confirm-password">Confirm Password</label>
          <input type="password" id="signup-confirm-password" placeholder="Re-enter your password" required>
        </div>

        <button id="signup-btn" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">
          Create Account
        </button>

        <p style="text-align: center; color: #999;">
          Already have an account? 
          <span class="text-link" id="show-login-link">Sign in here</span>
        </p>
      </div>
    </section>
  </div>

  <!-- PROFILE SETUP VIEW -->
  <div id="profile-setup-view" class="hidden">
    <section id="profile-setup-section" aria-label="Profile Setup">
      <h1 style="text-align: center; margin-bottom: 0.5rem;">Complete Your Profile</h1>
      <p style="text-align: center; color: #999; margin-bottom: 2rem;">Help us personalize your meal recommendations</p>

      <div id="profile-setup-message" class="hidden"></div>

      <!-- 2. Dietary Restrictions -->
      <section style="margin-bottom: 2rem;">
        <h2>2. Dietary Restrictions</h2>
        <p>Select any dietary restrictions you follow:</p>

        <div class="tag-container">
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="gluten">
            Gluten
          </label>
        </div>
      </section>

      <hr>

      <!-- 4. Favorite Cuisines -->
      <section style="margin-bottom: 2rem;">
        <h2>4. Favorite Cuisines</h2>
        <p>What types of food do you enjoy most?</p>

        <div class="tag-container">
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="italian">
            Italian
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="asian">
            Asian
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="mexican">
            Mexican
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="mediterranean">
            Mediterranean
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="indian">
            Indian
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="thai">
            Thai
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="american">
            American
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="japanese">
            Japanese
          </label>
          <label class="tag-label">
            <input type="checkbox" name="cuisine" value="chinese">
            Chinese
          </label>
        </div>
      </section>

      <hr>

      <!-- 5. Cooking Preferences -->
      <section style="margin-bottom: 2rem;">
        <h2>5. Cooking Preferences</h2>

        <div class="form-group">
          <label for="cooking-skill">Cooking Skill Level:</label>
          <select id="cooking-skill" style="width: 100%; padding: 0.75rem; background: #0a0a0a; border: 1px solid #444; border-radius: 6px; color: #e0e0e0; font-size: 1rem;">
            <option value="beginner">Beginner</option>
            <option value="intermediate" selected>Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div class="form-group">
          <label for="max-prep-time">Maximum Prep Time:</label>
          <select id="max-prep-time" style="width: 100%; padding: 0.75rem; background: #0a0a0a; border: 1px solid #444; border-radius: 6px; color: #e0e0e0; font-size: 1rem;">
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45" selected>45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90+ minutes</option>
          </select>
        </div>

        <div class="form-group">
          <label for="spice-preference">Spice Preference:</label>
          <select id="spice-preference" style="width: 100%; padding: 0.75rem; background: #0a0a0a; border: 1px solid #444; border-radius: 6px; color: #e0e0e0; font-size: 1rem;">
            <option value="none">No spice</option>
            <option value="mild">Mild</option>
            <option value="medium" selected>Medium</option>
            <option value="hot">Hot</option>
            <option value="very-hot">Very Hot</option>
          </select>
        </div>
      </section>

      <hr>

      <!-- 6. Save Profile -->
      <section style="margin-bottom: 2rem;">
        <h2>6. Save Your Preferences</h2>
        <p>Save your profile to get personalized meal recommendations.</p>

        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <button id="skip-profile-btn" class="btn btn-secondary">
            Skip for Now
          </button>
          <button id="save-profile-btn" class="btn btn-primary" style="flex: 1;">
            Save Profile & Continue
          </button>
        </div>
      </section>
    </section>
  </div>

  <!-- DASHBOARD VIEW -->
  <div id="dashboard-view" class="hidden">
    <section id="dashboard-section" aria-label="User Dashboard">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <div>
          <h1 style="margin-bottom: 0.5rem;">Your MoodMeal Profile</h1>
          <p style="color: #999; margin: 0;">Welcome back, <span id="dashboard-user-name">User</span>!</p>
        </div>
        <button id="logout-btn" class="btn btn-secondary">
          Logout
        </button>
      </div>

      <div id="dashboard-message" class="hidden"></div>

      <!-- Profile Overview Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        
        <!-- Dietary Restrictions Card -->
        <div class="profile-card">
          <h3>🥗 Dietary Restrictions</h3>
          <div id="display-dietary">
            <p style="color: #999;">None set</p>
          </div>
        </div>

        <!-- Allergies Card -->
        <div class="profile-card" style="border-left-color: #ff4a4a;">
          <h3>⚠️ Allergies</h3>
          <div id="display-allergies">
            <p style="color: #999;">None set</p>
          </div>
        </div>

        <!-- Favorite Cuisines Card -->
        <div class="profile-card" style="border-left-color: #aa4aff;">
          <h3>🍽️ Favorite Cuisines</h3>
          <div id="display-cuisines">
            <p style="color: #999;">None set</p>
          </div>
        </div>
      </div>

      <hr>

      <!-- Full Profile Settings -->
      <section style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2>Profile Settings</h2>
          <button id="edit-profile-btn" class="btn btn-primary">
            Edit Profile
          </button>
        </div>

        <div class="profile-card">
          <h3>Account Information</h3>
          <div class="profile-stat">
            <span style="color: #999;">Email:</span>
            <span id="display-email">-</span>
          </div>
          <div class="profile-stat">
            <span style="color: #999;">Member Since:</span>
            <span id="display-member-since">-</span>
          </div>
          <div class="profile-stat">
            <span style="color: #999;">Cooking Skill:</span>
            <span id="display-cooking-skill">-</span>
          </div>
          <div class="profile-stat">
            <span style="color: #999;">Max Prep Time:</span>
            <span id="display-max-prep">-</span>
          </div>
          <div class="profile-stat">
            <span style="color: #999;">Spice Preference:</span>
            <span id="display-spice">-</span>
          </div>
        </div>
      </section>
    </section>
  </div>

</main>

<script>
// MoodMeal - User Accounts & Preferences JavaScript
(function() {
  'use strict';

  // State
  let currentUser = null;
  let users = [];
  let currentView = 'login';

  // DOM Elements
  const loginView = document.getElementById('login-view');
  const signupView = document.getElementById('signup-view');
  const profileSetupView = document.getElementById('profile-setup-view');
  const dashboardView = document.getElementById('dashboard-view');

  // Navigation
  const showSignupLink = document.getElementById('show-signup-link');
  const showLoginLink = document.getElementById('show-login-link');

  // Login
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const loginBtn = document.getElementById('login-btn');
  const loginMessage = document.getElementById('login-message');

  // Signup
  const signupName = document.getElementById('signup-name');
  const signupEmail = document.getElementById('signup-email');
  const signupPassword = document.getElementById('signup-password');
  const signupConfirmPassword = document.getElementById('signup-confirm-password');
  const signupBtn = document.getElementById('signup-btn');
  const signupMessage = document.getElementById('signup-message');

  // Profile Setup
  const dietaryCheckboxes = document.querySelectorAll('input[name="dietary"]');
  const allergyCheckboxes = document.querySelectorAll('input[name="allergy"]');
  const cuisineCheckboxes = document.querySelectorAll('input[name="cuisine"]');
  const cookingSkillSelect = document.getElementById('cooking-skill');
  const maxPrepTimeSelect = document.getElementById('max-prep-time');
  const spicePreferenceSelect = document.getElementById('spice-preference');
  const saveProfileBtn = document.getElementById('save-profile-btn');
  const skipProfileBtn = document.getElementById('skip-profile-btn');
  const profileSetupMessage = document.getElementById('profile-setup-message');

  // Dashboard
  const logoutBtn = document.getElementById('logout-btn');
  const editProfileBtn = document.getElementById('edit-profile-btn');
  const dashboardUserName = document.getElementById('dashboard-user-name');
  const dashboardMessage = document.getElementById('dashboard-message');

  // Helper: Show view
  function showView(view) {
    loginView.classList.add('hidden');
    signupView.classList.add('hidden');
    profileSetupView.classList.add('hidden');
    dashboardView.classList.add('hidden');

    switch(view) {
      case 'login':
        loginView.classList.remove('hidden');
        break;
      case 'signup':
        signupView.classList.remove('hidden');
        break;
      case 'profile-setup':
        profileSetupView.classList.remove('hidden');
        break;
      case 'dashboard':
        dashboardView.classList.remove('hidden');
        updateDashboard();
        break;
    }
    currentView = view;
  }

  // Helper: Show message
  function showMessage(element, message, isError = false) {
    element.textContent = message;
    element.className = isError ? 'message message-error' : 'message message-success';
    element.classList.remove('hidden');
  }

  // Helper: Hide message
  function hideMessage(element) {
    element.classList.add('hidden');
  }

  // Helper: Get selected checkboxes
  function getSelectedValues(checkboxes) {
    return Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  // Helper: Set selected checkboxes
  function setSelectedValues(checkboxes, values) {
    checkboxes.forEach(cb => {
      cb.checked = values.includes(cb.value);
    });
  }

  // Helper: Update tag label styling
  function updateTagLabels() {
    document.querySelectorAll('.tag-label').forEach(label => {
      const checkbox = label.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        label.classList.add('selected');
      } else {
        label.classList.remove('selected');
      }
    });
  }

  // Navigation: Switch to signup
  if (showSignupLink) {
    showSignupLink.addEventListener('click', () => {
      showView('signup');
      hideMessage(loginMessage);
    });
  }

  // Navigation: Switch to login
  if (showLoginLink) {
    showLoginLink.addEventListener('click', () => {
      showView('login');
      hideMessage(signupMessage);
    });
  }

  // Login Handler
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = loginEmail.value.trim();
      const password = loginPassword.value;

      if (!email || !password) {
        showMessage(loginMessage, 'Please fill in all fields', true);
        return;
      }

      const user = users.find(u => u.email === email);
      if (!user) {
        showMessage(loginMessage, 'No account found with this email', true);
        return;
      }

      if (user.password !== password) {
        showMessage(loginMessage, 'Incorrect password', true);
        return;
      }

      currentUser = user;
      showMessage(loginMessage, 'Login successful! Redirecting...', false);
      
      setTimeout(() => {
        showView('dashboard');
        hideMessage(loginMessage);
        loginEmail.value = '';
        loginPassword.value = '';
      }, 1000);
    });
  }

  // Signup Handler
  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      const name = signupName.value.trim();
      const email = signupEmail.value.trim();
      const password = signupPassword.value;
      const confirmPassword = signupConfirmPassword.value;

      if (!name || !email || !password || !confirmPassword) {
        showMessage(signupMessage, 'Please fill in all fields', true);
        return;
      }

      if (password.length < 6) {
        showMessage(signupMessage, 'Password must be at least 6 characters', true);
        return;
      }

      if (password !== confirmPassword) {
        showMessage(signupMessage, 'Passwords do not match', true);
        return;
      }

      if (users.find(u => u.email === email)) {
        showMessage(signupMessage, 'An account with this email already exists', true);
        return;
      }

      const newUser = {
        name: name,
        email: email,
        password: password,
        profile: {
          dietary: [],
          allergies: [],
          cuisines: [],
          cookingSkill: 'intermediate',
          maxPrepTime: 45,
          spicePreference: 'medium'
        },
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      currentUser = newUser;

      showMessage(signupMessage, 'Account created successfully! Redirecting...', false);

      setTimeout(() => {
        showView('profile-setup');
        hideMessage(signupMessage);
        signupName.value = '';
        signupEmail.value = '';
        signupPassword.value = '';
        signupConfirmPassword.value = '';
      }, 1000);
    });
  }

  // Profile Setup: Save Profile
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      if (!currentUser) return;

      currentUser.profile = {
        dietary: getSelectedValues(dietaryCheckboxes),
        allergies: getSelectedValues(allergyCheckboxes),
        cuisines: getSelectedValues(cuisineCheckboxes),
        cookingSkill: cookingSkillSelect.value,
        maxPrepTime: parseInt(maxPrepTimeSelect.value),
        spicePreference: spicePreferenceSelect.value
      };

      showMessage(profileSetupMessage, 'Profile saved successfully! Redirecting...', false);

      setTimeout(() => {
        showView('dashboard');
        hideMessage(profileSetupMessage);
      }, 1000);
    });
  }

  // Profile Setup: Skip
  if (skipProfileBtn) {
    skipProfileBtn.addEventListener('click', () => {
      showView('dashboard');
    });
  }

  // Dashboard: Update display
  function updateDashboard() {
    if (!currentUser) return;

    dashboardUserName.textContent = currentUser.name;

    // Display dietary restrictions
    const dietaryDiv = document.getElementById('display-dietary');
    if (currentUser.profile.dietary.length > 0) {
      dietaryDiv.innerHTML = currentUser.profile.dietary
        .map(d => `<span class="tag-badge dietary">${d}</span>`)
        .join('');
    } else {
      dietaryDiv.innerHTML = '<p style="color: #999;">None set</p>';
    }

    // Display allergies
    const allergiesDiv = document.getElementById('display-allergies');
    if (currentUser.profile.allergies.length > 0) {
      allergiesDiv.innerHTML = currentUser.profile.allergies
        .map(a => `<span class="tag-badge allergy">${a}</span>`)
        .join('');
    } else {
      allergiesDiv.innerHTML = '<p style="color: #999;">None set</p>';
    }

    // Display cuisines
    const cuisinesDiv = document.getElementById('display-cuisines');
    if (currentUser.profile.cuisines.length > 0) {
      cuisinesDiv.innerHTML = currentUser.profile.cuisines
        .map(c => `<span class="tag-badge cuisine">${c}</span>`)
        .join('');
    } else {
      cuisinesDiv.innerHTML = '<p style="color: #999;">None set</p>';
    }

    // Display account info
    document.getElementById('display-email').textContent = currentUser.email;
    document.getElementById('display-member-since').textContent = 
      new Date(currentUser.createdAt).toLocaleDateString();
    document.getElementById('display-cooking-skill').textContent = 
      currentUser.profile.cookingSkill.charAt(0).toUpperCase() + 
      currentUser.profile.cookingSkill.slice(1);
    document.getElementById('display-max-prep').textContent = 
      currentUser.profile.maxPrepTime + ' minutes';
    document.getElementById('display-spice').textContent = 
      currentUser.profile.spicePreference.charAt(0).toUpperCase() + 
      currentUser.profile.spicePreference.slice(1);
  }

  // Dashboard: Edit Profile
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      if (!currentUser) return;

      // Pre-fill profile setup form with current values
      setSelectedValues(dietaryCheckboxes, currentUser.profile.dietary);
      setSelectedValues(allergyCheckboxes, currentUser.profile.allergies);
      setSelectedValues(cuisineCheckboxes, currentUser.profile.cuisines);
      cookingSkillSelect.value = currentUser.profile.cookingSkill;
      maxPrepTimeSelect.value = currentUser.profile.maxPrepTime;
      spicePreferenceSelect.value = currentUser.profile.spicePreference;

      updateTagLabels();
      showView('profile-setup');
    });
  }

  // Dashboard: Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      showView('login');
      showMessage(loginMessage, 'Logged out successfully', false);
      setTimeout(() => hideMessage(loginMessage), 2000);
    });
  }

  // Tag label click handling
  document.querySelectorAll('.tag-label').forEach(label => {
    label.addEventListener('click', () => {
      setTimeout(updateTagLabels, 10);
    });
  });

  // Initialize
  showView('login');
  console.log('MoodMeal User Accounts & Preferences - Submodule 1 Loaded');
})();
</script>

</body>
</html><input type="checkbox" name="dietary" value="vegetarian">
            Vegetarian
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="vegan">
            Vegan
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="pescatarian">
            Pescatarian
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="gluten-free">
            Gluten-Free
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="dairy-free">
            Dairy-Free
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="keto">
            Keto
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="paleo">
            Paleo
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="halal">
            Halal
          </label>
          <label class="tag-label">
            <input type="checkbox" name="dietary" value="kosher">
            Kosher
          </label>
        </div>
      </section>

      <hr>

      <!-- 3. Allergies & Intolerances -->
      <section style="margin-bottom: 2rem;">
        <h2>3. Allergies & Intolerances</h2>
        <p>Let us know about any food allergies or intolerances:</p>

        <div class="tag-container">
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="nuts">
            Nuts
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="peanuts">
            Peanuts
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="shellfish">
            Shellfish
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="fish">
            Fish
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="eggs">
            Eggs
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="dairy">
            Dairy
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="soy">
            Soy
          </label>
          <label class="tag-label">
            <input type="checkbox" name="allergy" value="wheat">
            Wheat
          </label>
          <label class="tag-label"> 