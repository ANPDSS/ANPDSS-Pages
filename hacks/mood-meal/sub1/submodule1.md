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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MoodMeal - Dietary Restrictions</title>
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
      max-width: 1200px;
      margin: 0 auto;
    }

    h1, h2, h3 {
      color: #4a9eff;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }

    .header p {
      color: #999;
      font-size: 1.1rem;
    }

    .section-card {
      background: #1a1a1a;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      border-left: 4px solid #4a9eff;
    }

    .section-card h2 {
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
    }

    .section-description {
      color: #999;
      margin-bottom: 1.5rem;
    }

    .restrictions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .restriction-card {
      background: #0a0a0a;
      border: 2px solid #444;
      border-radius: 8px;
      padding: 1.25rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
    }

    .restriction-card:hover {
      border-color: #4a9eff;
      background: rgba(74, 158, 255, 0.05);
      transform: translateY(-2px);
    }

    .restriction-card.selected {
      border-color: #4a9eff;
      background: rgba(74, 158, 255, 0.15);
      box-shadow: 0 0 20px rgba(74, 158, 255, 0.2);
    }

    .restriction-card .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .restriction-card .name {
      font-weight: 600;
      font-size: 1rem;
      color: #e0e0e0;
    }

    .restriction-card .description {
      font-size: 0.85rem;
      color: #999;
      margin-top: 0.5rem;
    }

    .restriction-card.selected .name {
      color: #4a9eff;
    }

    .allergy-card {
      border-color: #ff4a4a;
    }

    .allergy-card:hover {
      border-color: #ff4a4a;
      background: rgba(255, 74, 74, 0.05);
    }

    .allergy-card.selected {
      border-color: #ff4a4a;
      background: rgba(255, 74, 74, 0.15);
      box-shadow: 0 0 20px rgba(255, 74, 74, 0.2);
    }

    .allergy-card.selected .name {
      color: #ff4a4a;
    }

    .cuisine-card {
      border-color: #aa4aff;
    }

    .cuisine-card:hover {
      border-color: #aa4aff;
      background: rgba(170, 74, 255, 0.05);
    }

    .cuisine-card.selected {
      border-color: #aa4aff;
      background: rgba(170, 74, 255, 0.15);
      box-shadow: 0 0 20px rgba(170, 74, 255, 0.2);
    }

    .cuisine-card.selected .name {
      color: #aa4aff;
    }

    .actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      flex-wrap: wrap;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      border-radius: 6px;
      transition: all 0.2s ease;
      font-weight: 600;
    }

    .btn-primary {
      background: #4a9eff;
      color: white;
    }

    .btn-primary:hover {
      background: #6ab4ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(74, 158, 255, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #4a9eff;
      border: 2px solid #4a9eff;
    }

    .btn-secondary:hover {
      background: rgba(74, 158, 255, 0.1);
    }

    .btn-clear {
      background: transparent;
      color: #ff4a4a;
      border: 2px solid #ff4a4a;
    }

    .btn-clear:hover {
      background: rgba(255, 74, 74, 0.1);
    }

    .summary-panel {
      background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      border: 2px solid #4a9eff;
    }

    .summary-panel h2 {
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .summary-section {
      margin-bottom: 1.5rem;
    }

    .summary-section:last-child {
      margin-bottom: 0;
    }

    .summary-section h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .summary-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .summary-tag {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: rgba(74, 158, 255, 0.2);
      border: 1px solid #4a9eff;
      border-radius: 20px;
      font-size: 0.9rem;
      color: #4a9eff;
    }

    .summary-tag.allergy {
      background: rgba(255, 74, 74, 0.2);
      border-color: #ff4a4a;
      color: #ff4a4a;
    }

    .summary-tag.cuisine {
      background: rgba(170, 74, 255, 0.2);
      border-color: #aa4aff;
      color: #aa4aff;
    }

    .empty-state {
      color: #666;
      font-style: italic;
    }

    .message {
      padding: 1rem;
      border-radius: 6px;
      margin-bottom: 1.5rem;
      animation: slideIn 0.3s ease;
    }

    .message-success {
      background: rgba(74, 255, 158, 0.1);
      border: 1px solid #4aff9e;
      color: #4aff9e;
    }

    .message-info {
      background: rgba(74, 158, 255, 0.1);
      border: 1px solid #4a9eff;
      color: #4a9eff;
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

    .hidden {
      display: none !important;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background: #1a1a1a;
      border-radius: 12px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      border: 2px solid #4a9eff;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      animation: slideUp 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .close-modal {
      color: #999;
      font-size: 2rem;
      cursor: pointer;
      line-height: 1;
      transition: color 0.2s ease;
    }

    .close-modal:hover {
      color: #4a9eff;
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

    .text-link {
      color: #4a9eff;
      cursor: pointer;
      text-decoration: underline;
    }

    .text-link:hover {
      color: #6ab4ff;
    }

    @media (max-width: 768px) {
      .restrictions-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }

      .actions {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>

<main>
  <!-- Navigation Bar -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding: 1rem; background: #1a1a1a; border-radius: 8px;">
    <div>
      <h3 style="margin: 0; color: #4a9eff;">MoodMeal</h3>
    </div>
    <div id="nav-buttons">
      <button class="btn btn-secondary" id="nav-login" style="margin-right: 0.5rem;">Login</button>
      <button class="btn btn-primary" id="nav-signup">Sign Up</button>
    </div>
    <div id="user-info" class="hidden" style="display: flex; align-items: center; gap: 1rem;">
      <span style="color: #999;">Welcome, <span id="user-name-display">User</span>!</span>
      <button class="btn btn-secondary" id="nav-logout">Logout</button>
    </div>
  </div>

  <div class="header">
    <h1>🥗 Dietary Restrictions</h1>
    <p>Customize your meal preferences to get personalized recommendations</p>
  </div>

  <div id="message-container"></div>

  <!-- Login Modal -->
  <div id="login-modal" class="modal hidden">
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 style="margin: 0;">Sign In</h2>
        <span class="close-modal" data-modal="login-modal">&times;</span>
      </div>
      
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
        <span class="text-link" id="show-signup-from-login">Sign up here</span>
      </p>
    </div>
  </div>

  <!-- Signup Modal -->
  <div id="signup-modal" class="modal hidden">
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h2 style="margin: 0;">Create Account</h2>
        <span class="close-modal" data-modal="signup-modal">&times;</span>
      </div>

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
        <span class="text-link" id="show-login-from-signup">Sign in here</span>
      </p>
    </div>
  </div>

  <!-- Summary Panel -->
  <div class="summary-panel">
    <h2>📋 Your Current Selections</h2>
    
    <div class="summary-section">
      <h3>Dietary Restrictions</h3>
      <div id="summary-dietary" class="summary-tags">
        <span class="empty-state">None selected</span>
      </div>
    </div>

    <div class="summary-section">
      <h3>Allergies & Intolerances</h3>
      <div id="summary-allergies" class="summary-tags">
        <span class="empty-state">None selected</span>
      </div>
    </div>

    <div class="summary-section">
      <h3>Favorite Cuisines</h3>
      <div id="summary-cuisines" class="summary-tags">
        <span class="empty-state">None selected</span>
      </div>
    </div>
  </div>

  <!-- Dietary Restrictions Section -->
  <div class="section-card">
    <h2>🌱 Dietary Restrictions</h2>
    <p class="section-description">Select the dietary restrictions you follow</p>
    
    <div class="restrictions-grid" id="dietary-grid"></div>

    <div class="actions">
      <button class="btn btn-clear" id="clear-dietary">Clear All</button>
    </div>
  </div>

  <!-- Allergies Section -->
  <div class="section-card" style="border-left-color: #ff4a4a;">
    <h2>⚠️ Allergies & Intolerances</h2>
    <p class="section-description">Let us know about any food allergies or intolerances you have</p>
    
    <div class="restrictions-grid" id="allergies-grid"></div>

    <div class="actions">
      <button class="btn btn-clear" id="clear-allergies">Clear All</button>
    </div>
  </div>

  <!-- Cuisines Section -->
  <div class="section-card" style="border-left-color: #aa4aff;">
    <h2>🍽️ Favorite Cuisines</h2>
    <p class="section-description">Choose the types of cuisine you enjoy most</p>
    
    <div class="restrictions-grid" id="cuisines-grid"></div>

    <div class="actions">
      <button class="btn btn-clear" id="clear-cuisines">Clear All</button>
    </div>
  </div>

  <!-- Save Actions -->
  <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
    <button class="btn btn-secondary" id="reset-all">Reset Everything</button>
    <button class="btn btn-primary" id="save-preferences" style="min-width: 200px;">
      💾 Save All Preferences
    </button>
  </div>

</main>

<script>
(function() {
  'use strict';

  // Data
  const dietaryRestrictions = [
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬', description: 'No meat or fish' },
    { id: 'vegan', name: 'Vegan', icon: '🌱', description: 'No animal products' },
    { id: 'pescatarian', name: 'Pescatarian', icon: '🐟', description: 'Fish but no meat' },
    { id: 'gluten-free', name: 'Gluten-Free', icon: '🌾', description: 'No gluten' },
    { id: 'dairy-free', name: 'Dairy-Free', icon: '🥛', description: 'No dairy products' },
    { id: 'keto', name: 'Keto', icon: '🥑', description: 'Low carb, high fat' },
    { id: 'paleo', name: 'Paleo', icon: '🍖', description: 'Whole foods only' },
    { id: 'halal', name: 'Halal', icon: '☪️', description: 'Islamic dietary laws' },
    { id: 'kosher', name: 'Kosher', icon: '✡️', description: 'Jewish dietary laws' },
    { id: 'low-carb', name: 'Low-Carb', icon: '🥗', description: 'Reduced carbohydrates' },
    { id: 'low-sodium', name: 'Low-Sodium', icon: '🧂', description: 'Reduced salt' },
    { id: 'sugar-free', name: 'Sugar-Free', icon: '🍬', description: 'No added sugar' }
  ];

  const allergies = [
    { id: 'nuts', name: 'Tree Nuts', icon: '🥜', description: 'Almonds, walnuts, etc.' },
    { id: 'peanuts', name: 'Peanuts', icon: '🥜', description: 'Peanut allergy' },
    { id: 'shellfish', name: 'Shellfish', icon: '🦐', description: 'Shrimp, crab, lobster' },
    { id: 'fish', name: 'Fish', icon: '🐠', description: 'All fish' },
    { id: 'eggs', name: 'Eggs', icon: '🥚', description: 'Egg allergy' },
    { id: 'dairy', name: 'Dairy', icon: '🧀', description: 'Milk products' },
    { id: 'soy', name: 'Soy', icon: '🫘', description: 'Soy products' },
    { id: 'wheat', name: 'Wheat', icon: '🌾', description: 'Wheat allergy' },
    { id: 'gluten', name: 'Gluten', icon: '🍞', description: 'Gluten intolerance' },
    { id: 'sesame', name: 'Sesame', icon: '🫘', description: 'Sesame seeds' },
    { id: 'mustard', name: 'Mustard', icon: '🌭', description: 'Mustard allergy' },
    { id: 'sulfites', name: 'Sulfites', icon: '🍷', description: 'Preservative allergy' }
  ];

  const cuisines = [
    { id: 'italian', name: 'Italian', icon: '🍝', description: 'Pasta, pizza' },
    { id: 'asian', name: 'Asian', icon: '🍜', description: 'Various Asian' },
    { id: 'mexican', name: 'Mexican', icon: '🌮', description: 'Tacos, burritos' },
    { id: 'mediterranean', name: 'Mediterranean', icon: '🫒', description: 'Healthy cuisine' },
    { id: 'indian', name: 'Indian', icon: '🍛', description: 'Curry, spices' },
    { id: 'thai', name: 'Thai', icon: '🥘', description: 'Spicy and sweet' },
    { id: 'american', name: 'American', icon: '🍔', description: 'Classic comfort' },
    { id: 'japanese', name: 'Japanese', icon: '🍣', description: 'Sushi, ramen' },
    { id: 'chinese', name: 'Chinese', icon: '🥟', description: 'Dim sum, stir-fry' },
    { id: 'french', name: 'French', icon: '🥐', description: 'Elegant cuisine' },
    { id: 'greek', name: 'Greek', icon: '🥙', description: 'Mediterranean style' },
    { id: 'korean', name: 'Korean', icon: '🍲', description: 'BBQ, kimchi' }
  ];

  // State
  let selectedDietary = [];
  let selectedAllergies = [];
  let selectedCuisines = [];
  let currentUser = null;
  let users = [];

  // DOM Elements
  const dietaryGrid = document.getElementById('dietary-grid');
  const allergiesGrid = document.getElementById('allergies-grid');
  const cuisinesGrid = document.getElementById('cuisines-grid');
  const messageContainer = document.getElementById('message-container');

  // Modals
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const navLogin = document.getElementById('nav-login');
  const navSignup = document.getElementById('nav-signup');
  const navLogout = document.getElementById('nav-logout');
  const navButtons = document.getElementById('nav-buttons');
  const userInfo = document.getElementById('user-info');
  const userNameDisplay = document.getElementById('user-name-display');

  // Modal Functions
  function openModal(modal) {
    modal.classList.remove('hidden');
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
  }

  // Close modal when clicking X
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.target.dataset.modal;
      const modal = document.getElementById(modalId);
      closeModal(modal);
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target);
    }
  });

  // Navigation
  navLogin.addEventListener('click', () => openModal(loginModal));
  navSignup.addEventListener('click', () => openModal(signupModal));

  document.getElementById('show-signup-from-login').addEventListener('click', () => {
    closeModal(loginModal);
    openModal(signupModal);
  });

  document.getElementById('show-login-from-signup').addEventListener('click', () => {
    closeModal(signupModal);
    openModal(loginModal);
  });

  // Update UI based on login state
  function updateAuthUI() {
    if (currentUser) {
      navButtons.classList.add('hidden');
      userInfo.classList.remove('hidden');
      userNameDisplay.textContent = currentUser.name;
    } else {
      navButtons.classList.remove('hidden');
      userInfo.classList.add('hidden');
    }
  }

  // Login Handler
  document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
      showMessage('Please fill in all fields', 'info');
      return;
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      showMessage('No account found with this email', 'info');
      return;
    }

    if (user.password !== password) {
      showMessage('Incorrect password', 'info');
      return;
    }

    currentUser = user;
    
    // Load user's saved preferences
    if (user.preferences) {
      selectedDietary = user.preferences.dietary || [];
      selectedAllergies = user.preferences.allergies || [];
      selectedCuisines = user.preferences.cuisines || [];
      
      renderCards(dietaryGrid, dietaryRestrictions, selectedDietary, '');
      renderCards(allergiesGrid, allergies, selectedAllergies, 'allergy-card');
      renderCards(cuisinesGrid, cuisines, selectedCuisines, 'cuisine-card');
      updateSummary();
    }

    closeModal(loginModal);
    updateAuthUI();
    showMessage(`Welcome back, ${currentUser.name}!`, 'success');
    
    // Clear form
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
  });

  // Signup Handler
  document.getElementById('signup-btn').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (!name || !email || !password || !confirmPassword) {
      showMessage('Please fill in all fields', 'info');
      return;
    }

    if (password.length < 6) {
      showMessage('Password must be at least 6 characters', 'info');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('Passwords do not match', 'info');
      return;
    }

    if (users.find(u => u.email === email)) {
      showMessage('An account with this email already exists', 'info');
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
      preferences: {
        dietary: [],
        allergies: [],
        cuisines: []
      },
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    currentUser = newUser;

    closeModal(signupModal);
    updateAuthUI();
    showMessage(`Account created successfully! Welcome, ${currentUser.name}!`, 'success');

    // Clear form
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('signup-confirm-password').value = '';
  });

  // Logout Handler
  navLogout.addEventListener('click', () => {
    currentUser = null;
    
    // Clear selections
    selectedDietary = [];
    selectedAllergies = [];
    selectedCuisines = [];
    
    renderCards(dietaryGrid, dietaryRestrictions, selectedDietary, '');
    renderCards(allergiesGrid, allergies, selectedAllergies, 'allergy-card');
    renderCards(cuisinesGrid, cuisines, selectedCuisines, 'cuisine-card');
    updateSummary();
    
    updateAuthUI();
    showMessage('Logged out successfully', 'info');
  });

  // Render cards
  function renderCards(container, items, selectedArray, cardClass = '') {
    container.innerHTML = items.map(item => `
      <div class="restriction-card ${cardClass} ${selectedArray.includes(item.id) ? 'selected' : ''}" 
           data-id="${item.id}">
        <div class="icon">${item.icon}</div>
        <div class="name">${item.name}</div>
        <div class="description">${item.description}</div>
      </div>
    `).join('');
  }

  // Update summary
  function updateSummary() {
    const summaryDietary = document.getElementById('summary-dietary');
    const summaryAllergies = document.getElementById('summary-allergies');
    const summaryCuisines = document.getElementById('summary-cuisines');

    summaryDietary.innerHTML = selectedDietary.length > 0
      ? selectedDietary.map(id => {
          const item = dietaryRestrictions.find(d => d.id === id);
          return `<span class="summary-tag">${item.icon} ${item.name}</span>`;
        }).join('')
      : '<span class="empty-state">None selected</span>';

    summaryAllergies.innerHTML = selectedAllergies.length > 0
      ? selectedAllergies.map(id => {
          const item = allergies.find(a => a.id === id);
          return `<span class="summary-tag allergy">${item.icon} ${item.name}</span>`;
        }).join('')
      : '<span class="empty-state">None selected</span>';

    summaryCuisines.innerHTML = selectedCuisines.length > 0
      ? selectedCuisines.map(id => {
          const item = cuisines.find(c => c.id === id);
          return `<span class="summary-tag cuisine">${item.icon} ${item.name}</span>`;
        }).join('')
      : '<span class="empty-state">None selected</span>';
  }

  // Show message
  function showMessage(text, type = 'success') {
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.textContent = text;
    messageContainer.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  }

  // Handle card click
  function handleCardClick(e, array, grid, items, cardClass) {
    const card = e.target.closest('.restriction-card');
    if (!card) return;

    const id = card.dataset.id;
    const index = array.indexOf(id);

    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(id);
    }

    renderCards(grid, items, array, cardClass);
    updateSummary();
  }

  // Event listeners
  dietaryGrid.addEventListener('click', (e) => {
    handleCardClick(e, selectedDietary, dietaryGrid, dietaryRestrictions, '');
  });

  allergiesGrid.addEventListener('click', (e) => {
    handleCardClick(e, selectedAllergies, allergiesGrid, allergies, 'allergy-card');
  });

  cuisinesGrid.addEventListener('click', (e) => {
    handleCardClick(e, selectedCuisines, cuisinesGrid, cuisines, 'cuisine-card');
  });

  // Clear buttons
  document.getElementById('clear-dietary').addEventListener('click', () => {
    selectedDietary = [];
    renderCards(dietaryGrid, dietaryRestrictions, selectedDietary, '');
    updateSummary();
    showMessage('Dietary restrictions cleared', 'info');
  });

  document.getElementById('clear-allergies').addEventListener('click', () => {
    selectedAllergies = [];
    renderCards(allergiesGrid, allergies, selectedAllergies, 'allergy-card');
    updateSummary();
    showMessage('Allergies cleared', 'info');
  });

  document.getElementById('clear-cuisines').addEventListener('click', () => {
    selectedCuisines = [];
    renderCards(cuisinesGrid, cuisines, selectedCuisines, 'cuisine-card');
    updateSummary();
    showMessage('Cuisines cleared', 'info');
  });

  // Reset all
  document.getElementById('reset-all').addEventListener('click', () => {
    selectedDietary = [];
    selectedAllergies = [];
    selectedCuisines = [];
    renderCards(dietaryGrid, dietaryRestrictions, selectedDietary, '');
    renderCards(allergiesGrid, allergies, selectedAllergies, 'allergy-card');
    renderCards(cuisinesGrid, cuisines, selectedCuisines, 'cuisine-card');
    updateSummary();
    showMessage('All preferences reset', 'info');
  });

  // Save preferences
  document.getElementById('save-preferences').addEventListener('click', () => {
    const totalSelections = selectedDietary.length + selectedAllergies.length + selectedCuisines.length;
    
    if (totalSelections === 0) {
      showMessage('Please select at least one preference before saving', 'info');
      return;
    }

    if (!currentUser) {
      showMessage('Please sign in to save your preferences', 'info');
      openModal(loginModal);
      return;
    }

    // Save to current user
    currentUser.preferences = {
      dietary: selectedDietary,
      allergies: selectedAllergies,
      cuisines: selectedCuisines,
      savedAt: new Date().toISOString()
    };

    console.log('Saved preferences for user:', currentUser.email, currentUser.preferences);
    showMessage(`Successfully saved ${totalSelections} preference(s)!`, 'success');
  });

  // Initialize
  renderCards(dietaryGrid, dietaryRestrictions, selectedDietary, '');
  renderCards(allergiesGrid, allergies, selectedAllergies, 'allergy-card');
  renderCards(cuisinesGrid, cuisines, selectedCuisines, 'cuisine-card');
  updateSummary();
  updateAuthUI();

  console.log('MoodMeal Dietary Restrictions Page Loaded');
})();
</script>

</body>
</html>
