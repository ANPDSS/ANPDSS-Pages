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
            <input type="checkbox" name="dietary" value="vegetarian">
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