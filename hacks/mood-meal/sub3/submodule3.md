---
layout: post
title: "Submodule 3"
description: "Recommendation Engine"
permalink: /mood-meal/submodule_3/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 3
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/submodule_2/
  home: /mood-meal/
  next: /mood-meal/submodule_4/
---

# MoodMeal – Meal Recommendation Engine

<!-- Main container for the Recommendation Engine page -->
<main id="recommendation-page">

  <!-- 1. Mood Summary (placeholder data from Module 2) -->
  <section id="mood-summary" aria-label="Mood summary" style="margin-bottom: 1.5rem;">
    <h2>Today's Mood</h2>
    <p>
      Mood score:
      <span id="mood-score" style="font-weight: bold;">72</span>/100
    </p>
    <p>
      Mood tags:
      <span id="mood-tags">tired, stressed</span>
    </p>
    <!-- Your JS will later replace the score/tags above with real data -->
  </section>

  <hr />

  <!-- 2. Optional Filters Section -->
  <section id="filters-section" aria-label="Recommendation filters" style="margin: 1.5rem 0;">
    <h2>2. Optional Filters</h2>
    <p>You can refine your meal recommendations before sending the request.</p>

    <!-- Meal type dropdown -->
    <div style="margin-bottom: 0.75rem;">
      <label for="meal-type-select"><strong>Meal type:</strong></label>
      <select id="meal-type-select" name="mealType">
        <option value="">Any</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
    </div>

    <!-- Prep time dropdown -->
    <div style="margin-bottom: 0.75rem;">
      <label for="prep-time-select"><strong>Max prep time:</strong></label>
      <select id="prep-time-select" name="maxPrepTimeMinutes">
        <option value="">Any</option>
        <option value="15">&lt; 15 min</option>
        <option value="30">&lt; 30 min</option>
        <option value="45">&lt; 45 min</option>
        <option value="60">&lt; 60 min</option>
      </select>
    </div>

    <!-- Difficulty dropdown -->
    <div style="margin-bottom: 0.75rem;">
      <label for="difficulty-select"><strong>Difficulty:</strong></label>
      <select id="difficulty-select" name="difficulty">
        <option value="">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <!-- Pantry boost checkbox -->
    <div style="margin-bottom: 0.75rem;">
      <label>
        <input type="checkbox" id="boost-pantry-checkbox" name="boostPantry" />
        Use pantry ingredients to boost matches
      </label>
    </div>
  </section>

  <hr />

  <!-- 3. Extra Notes Textbox -->
  <section id="extra-notes-section" aria-label="Extra preferences" style="margin: 1.5rem 0;">
    <h2>3. Extra Preferences</h2>
    <p>
      Add anything else you want MoodMeal to consider
      (e.g. “no soup”, “something warm”, “spicy but quick”):
    </p>
    <textarea
      id="extra-notes-input"
      name="extraNotes"
      rows="4"
      style="width: 100%; max-width: 600px;"
      placeholder="Type any extra notes here..."
    ></textarea>
  </section>

  <hr />

  <!-- 4. Submit Button -->
  <section id="submit-section" style="margin: 1.5rem 0;">
    <button
      id="get-recommendations-btn"
      type="button"
      style="padding: 0.6rem 1.2rem; font-size: 1rem; cursor: pointer;"
    >
      Get Recommendations
    </button>

    <!-- Simple loading text placeholder, your JS can toggle display -->
    <span id="recommendations-loading" style="margin-left: 1rem; display: none;">
      Loading recommendations...
    </span>

    <!-- Simple error text placeholder -->
    <div id="recommendations-error" style="color: red; margin-top: 0.5rem; display: none;">
      Something went wrong. Please try again.
    </div>
  </section>

  <hr />

  <!-- 5. Recommendations List -->
  <section id="recommendations-section" aria-label="Recommended meals" style="margin: 1.5rem 0;">
    <h2>4. Recommended Meals</h2>

    <!-- This container will be filled/updated by JS. Static examples below. -->
    <div id="recommendations-container">

      <!-- Static example card 1 -->
      <article class="meal-card" data-meal-id="example-1"
        style="border: 1px solid #444; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
        <h3>Creamy Veggie Stir Fry</h3>
        <p>Warm, quick, veggie-based comfort food.</p>
        <p><strong>Prep time:</strong> 20 min</p>
        <p><strong>Tags:</strong> comfort, warm, quick</p>
        <p><strong>Uses pantry items:</strong> rice, broccoli</p>
        <p><strong>Mood match:</strong> 87%</p>
        <button type="button" class="view-recipe-btn" style="margin-top: 0.5rem;">
          View Recipe
        </button>
      </article>

      <!-- Static example card 2 -->
      <article class="meal-card" data-meal-id="example-2"
        style="border: 1px solid #444; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
        <h3>Spicy Lentil Bowl</h3>
        <p>High-protein spicy bowl to boost your energy.</p>
        <p><strong>Prep time:</strong> 25 min</p>
        <p><strong>Tags:</strong> energizing, spicy</p>
        <p><strong>Uses pantry items:</strong> none</p>
        <p><strong>Mood match:</strong> 81%</p>
        <button type="button" class="view-recipe-btn" style="margin-top: 0.5rem;">
          View Recipe
        </button>
      </article>

      <!-- Your JS will remove/replace these examples with real data from the backend. -->

    </div>
  </section>

</main>
