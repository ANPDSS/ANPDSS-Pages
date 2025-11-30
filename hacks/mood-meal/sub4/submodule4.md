---
layout: post
title: "Submodule 4"
description: "Recipe Viewer & Cooking Mode"
permalink: /mood-meal/submodule_4/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 4
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-30
footer:
  previous: /mood-meal/submodule_3/
  home: /mood-meal/
  next: /mood-meal/submodule_5/
---

# MoodMeal – Recipe Viewer & Cooking Mode

<main id="recipe-page" style="max-width: 980px; margin: 0 auto;">

  <!-- Header / Recipe Picker -->
  <section aria-label="Recipe header" style="margin: 1rem 0 1.25rem;">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 1rem; flex-wrap: wrap;">
      <div>
        <h2 id="recipe-title" style="margin: 0;">Recipe</h2>
        <p id="recipe-subtitle" style="margin: 0.35rem 0 0; color: #bbb;">
          View details, adjust servings, favorite recipes, and cook step-by-step with timers.
        </p>
      </div>

      <div style="display:flex; gap: 0.5rem; align-items:center; flex-wrap: wrap;">
        <label for="recipe-select" style="color:#bbb;">Pick a recipe:</label>
        <select id="recipe-select" style="padding: 0.45rem 0.55rem; border-radius: 10px; background:#121212; color:#eee; border: 1px solid #333;">
        </select>

        <button id="favorite-btn" type="button"
          style="padding:0.5rem 0.85rem; border-radius: 10px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
          ☆ Favorite
        </button>

        <button id="start-cooking-btn" type="button"
          style="padding:0.5rem 0.85rem; border-radius: 10px; border:none; background:#4a9eff; color:#fff; cursor:pointer;">
          Start Cooking Mode
        </button>
      </div>
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- 1) Recipe Detail Page (ingredients, steps, photos) -->
  <section id="recipe-detail" aria-label="Recipe detail" style="margin: 1.25rem 0;">
    <h2 style="margin-bottom: 0.5rem;">1. Recipe Details</h2>

    <!-- Photo area -->
    <div style="display:grid; grid-template-columns: 1.05fr 0.95fr; gap: 1rem; align-items: start;">
      <div id="photo-card"
        style="border: 1px solid #2a2a2a; border-radius: 16px; overflow: hidden; background:#0f0f0f; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">
        <div id="photo-preview"
          style="height: 280px; background: linear-gradient(135deg, rgba(74,158,255,0.18), rgba(78,255,158,0.12));
                 display:flex; align-items:center; justify-content:center; color:#aaa;">
          <div style="text-align:center; padding: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.25rem;">🍽️</div>
            <div style="color:#999;">Recipe photo will show here</div>
            <div style="font-size: 0.85rem; margin-top: 0.4rem; color:#666;">(Using placeholder images for now)</div>
          </div>
        </div>

        <div style="padding: 0.85rem;">
          <div style="display:flex; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap;">
            <div style="color:#bbb;">
              <span id="recipe-meta" style="font-size: 0.92rem;">—</span>
            </div>

            <div style="display:flex; gap: 0.5rem; align-items:center;">
              <button id="prev-photo" type="button"
                style="padding:0.35rem 0.6rem; border-radius: 10px; border: 1px solid #333; background:#131313; color:#eee; cursor:pointer;">
                ◀
              </button>
              <span id="photo-index" style="color:#888; font-size:0.9rem;">1/1</span>
              <button id="next-photo" type="button"
                style="padding:0.35rem 0.6rem; border-radius: 10px; border: 1px solid #333; background:#131313; color:#eee; cursor:pointer;">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Ingredients + Serving size adjustments -->
      <div id="ingredients-card"
        style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">
        <div style="display:flex; justify-content:space-between; align-items:center; gap: 1rem; flex-wrap: wrap;">
          <h3 style="margin: 0;">Ingredients</h3>

          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap: wrap;">
            <span style="color:#bbb;">Servings:</span>
            <button id="servings-minus" type="button"
              style="width:34px; height:34px; border-radius: 10px; border:1px solid #333; background:#131313; color:#eee; cursor:pointer;">−</button>
            <strong id="servings-value" style="min-width: 2.5rem; text-align:center;">1</strong>
            <button id="servings-plus" type="button"
              style="width:34px; height:34px; border-radius: 10px; border:1px solid #333; background:#131313; color:#eee; cursor:pointer;">+</button>
          </div>
        </div>

        <p style="margin: 0.5rem 0 0.85rem; color:#aaa; font-size:0.95rem;">
          Adjust servings and ingredients will scale automatically.
        </p>

        <ul id="ingredients-list" style="margin:0; padding-left: 1.1rem; color:#e8e8e8; line-height: 1.6;">
        </ul>

        <div style="margin-top: 0.9rem; display:flex; gap:0.6rem; flex-wrap: wrap;">
          <button id="copy-ingredients" type="button"
            style="padding:0.55rem 0.9rem; border-radius: 12px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
            Copy Ingredients
          </button>
          <span id="copy-ingredients-msg" style="color:#4eff9e; display:none; align-self:center;">✓ Copied</span>
        </div>
      </div>
    </div>

    <!-- Steps --}}
    <div id="steps-card"
      style="margin-top: 1rem; border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 1rem; flex-wrap: wrap;">
        <div>
          <h3 style="margin:0;">Steps</h3>
          <p style="margin:0.35rem 0 0; color:#aaa;">You can cook step-by-step in Cooking Mode with timers + progress.</p>
        </div>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <button id="collapse-steps" type="button"
            style="padding:0.45rem 0.8rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
            Collapse
          </button>
        </div>
      </div>

      <ol id="steps-list" style="margin:0.9rem 0 0; padding-left: 1.25rem; color:#e8e8e8; line-height: 1.7;">
      </ol>
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- 2) Cooking Mode with timers + step indicators -->
  <section id="cooking-mode" aria-label="Cooking mode" style="margin: 1.25rem 0; display:none;">
    <h2 style="margin-bottom: 0.5rem;">2. Guided Cooking Mode</h2>

    <div style="display:grid; grid-template-columns: 1fr; gap: 1rem;">
      <div
        style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">

        <!-- Top controls -->
        <div style="display:flex; justify-content:space-between; align-items:center; gap: 0.75rem; flex-wrap: wrap;">
          <div style="display:flex; gap: 0.5rem; align-items:center; flex-wrap: wrap;">
            <button id="exit-cooking-btn" type="button"
              style="padding:0.5rem 0.85rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              ← Back to Details
            </button>

            <span id="cooking-progress" style="color:#bbb;">Step 1 of 1</span>
          </div>

          <div style="display:flex; gap: 0.5rem; align-items:center; flex-wrap: wrap;">
            <button id="prev-step" type="button"
              style="padding:0.5rem 0.85rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              Prev
            </button>
            <button id="next-step" type="button"
              style="padding:0.5rem 0.85rem; border-radius: 10px; border:none; background:#4a9eff; color:#fff; cursor:pointer;">
              Next
            </button>
          </div>
        </div>

        <!-- Step indicator bar -->
        <div style="margin-top: 0.85rem;">
          <div id="step-dots" style="display:flex; gap:0.4rem; flex-wrap: wrap;"></div>
        </div>

        <!-- Current step card -->
        <div style="margin-top: 1rem; padding: 1rem; border-radius: 14px; border: 1px solid #2b2b2b; background: #0b0b0b;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 1rem; flex-wrap: wrap;">
            <div style="flex:1; min-width: 250px;">
              <h3 id="current-step-title" style="margin:0 0 0.35rem;">Step</h3>
              <p id="current-step-text" style="margin:0; color:#e8e8e8; line-height: 1.6;">—</p>
            </div>

            <!-- Timer -->
            <div style="min-width: 270px; border: 1px solid #2a2a2a; border-radius: 14px; padding: 0.85rem; background:#101010;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="color:#bbb;">Step Timer</strong>
                <span id="timer-hint" style="color:#666; font-size:0.85rem;">optional</span>
              </div>

              <div style="display:flex; align-items:baseline; gap:0.5rem; margin-top: 0.65rem;">
                <span id="timer-display" style="font-size: 2rem; letter-spacing:1px;">00:00</span>
                <span id="timer-target" style="color:#888;">/ 00:00</span>
              </div>

              <div style="display:flex; gap:0.5rem; margin-top: 0.65rem; flex-wrap: wrap;">
                <button id="timer-start" type="button"
                  style="padding:0.45rem 0.8rem; border-radius: 10px; border:none; background:#4eff9e; color:#101010; cursor:pointer;">
                  Start
                </button>
                <button id="timer-pause" type="button"
                  style="padding:0.45rem 0.8rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
                  Pause
                </button>
                <button id="timer-reset" type="button"
                  style="padding:0.45rem 0.8rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
                  Reset
                </button>
              </div>

              <div id="timer-done" style="display:none; margin-top:0.65rem; color:#4eff9e;">
                ✓ Timer done — nice!
              </div>
            </div>
          </div>

          <div style="margin-top: 0.9rem; display:flex; justify-content:space-between; gap:1rem; flex-wrap: wrap;">
            <div style="color:#aaa;">
              <span style="color:#4a9eff;">Tip:</span> You can jump to any step by clicking the dots.
            </div>
            <button id="toggle-done" type="button"
              style="padding:0.45rem 0.8rem; border-radius: 10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              Mark Step Done
            </button>
          </div>
        </div>

        <!-- Quick ingredients preview in cooking mode -->
        <details style="margin-top: 1rem;">
          <summary style="cursor:pointer; color:#bbb;">Quick Ingredients (scaled)</summary>
          <ul id="ingredients-list-cooking" style="margin:0.7rem 0 0; padding-left:1.1rem; color:#e8e8e8; line-height:1.6;"></ul>
        </details>
      </div>
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- 3) Saved/Favorite Recipes -->
  <section id="favorites-section" aria-label="Favorites" style="margin: 1.25rem 0;">
    <h2 style="margin-bottom: 0.5rem;">3. Saved / Favorite Recipes</h2>
    <p style="margin-top:0.25rem; color:#aaa;">
      Favorite a recipe to store it locally (localStorage) and see it show up here.
    </p>

    <div id="favorites-card"
      style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">
      <div id="favorites-empty" style="color:#777; padding: 0.75rem 0;">
        No favorites yet. Click “☆ Favorite” on a recipe to save it.
      </div>

      <div id="favorites-list" style="display:none; gap:0.75rem; flex-wrap: wrap;"></div>

      <div style="margin-top: 1rem; display:flex; gap:0.6rem; flex-wrap: wrap;">
        <button id="clear-favorites" type="button"
          style="padding:0.55rem 0.9rem; border-radius: 12px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
          Clear Favorites
        </button>
        <span id="clear-msg" style="display:none; color:#4eff9e; align-self:center;">✓ Cleared</span>
      </div>
    </div>
  </section>
</main>

<script>
(function() {
  'use strict';

  // ---------------------------
  // Sample recipe data (replace later with backend/API)
  // ---------------------------
  const RECIPES = [
    {
      id: "oatmeal-bowl",
      title: "Comfort Oatmeal Bowl",
      subtitle: "Warm, easy, and mood-friendly",
      baseServings: 1,
      meta: { time: "10 min", difficulty: "Easy", mood: "calm" },
      photos: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=60"
      ],
      ingredients: [
        { name: "Rolled oats", amount: 0.5, unit: "cup" },
        { name: "Milk (or oat milk)", amount: 1, unit: "cup" },
        { name: "Banana", amount: 0.5, unit: "" },
        { name: "Honey", amount: 1, unit: "tbsp" },
        { name: "Cinnamon", amount: 0.25, unit: "tsp" },
        { name: "Peanut butter", amount: 1, unit: "tbsp" }
      ],
      steps: [
        { title: "Heat", text: "Bring milk to a gentle simmer in a small pot.", timerSec: 120 },
        { title: "Cook oats", text: "Stir in oats and cook, stirring occasionally, until thick.", timerSec: 300 },
        { title: "Finish", text: "Top with banana, honey, cinnamon, and peanut butter. Serve warm.", timerSec: 0 }
      ]
    },
    {
      id: "chicken-rice-bowl",
      title: "Chicken & Rice Bowl",
      subtitle: "Simple protein + carbs (great post-gym)",
      baseServings: 2,
      meta: { time: "25 min", difficulty: "Medium", mood: "energetic" },
      photos: [
        "https://images.unsplash.com/photo-1604908176997-125f25cc5004?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=60"
      ],
      ingredients: [
        { name: "Cooked rice", amount: 2, unit: "cups" },
        { name: "Chicken breast", amount: 1, unit: "lb" },
        { name: "Soy sauce", amount: 2, unit: "tbsp" },
        { name: "Garlic", amount: 2, unit: "cloves" },
        { name: "Broccoli", amount: 2, unit: "cups" },
        { name: "Olive oil", amount: 1, unit: "tbsp" }
      ],
      steps: [
        { title: "Prep", text: "Dice chicken, mince garlic, and cut broccoli into florets.", timerSec: 240 },
        { title: "Sear chicken", text: "Heat oil, cook chicken until browned and cooked through.", timerSec: 600 },
        { title: "Sauce + veg", text: "Add garlic + soy sauce, toss broccoli until tender-crisp.", timerSec: 480 },
        { title: "Assemble", text: "Serve chicken + broccoli over rice. Enjoy!", timerSec: 0 }
      ]
    },
    {
      id: "pasta-primavera",
      title: "15-Min Pasta Primavera",
      subtitle: "Fast comfort meal with veggies",
      baseServings: 2,
      meta: { time: "15 min", difficulty: "Easy", mood: "happy" },
      photos: [
        "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8a40?auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=60"
      ],
      ingredients: [
        { name: "Pasta", amount: 8, unit: "oz" },
        { name: "Cherry tomatoes", amount: 1, unit: "cup" },
        { name: "Spinach", amount: 2, unit: "cups" },
        { name: "Parmesan", amount: 0.25, unit: "cup" },
        { name: "Garlic", amount: 2, unit: "cloves" },
        { name: "Olive oil", amount: 1, unit: "tbsp" }
      ],
      steps: [
        { title: "Boil pasta", text: "Boil pasta in salted water until al dente.", timerSec: 600 },
        { title: "Quick sauté", text: "Sauté garlic in oil, add tomatoes, then wilt spinach.", timerSec: 300 },
        { title: "Combine", text: "Toss pasta with veggies and parmesan. Season to taste.", timerSec: 0 }
      ]
    }
  ];

  // ---------------------------
  // localStorage keys
  // ---------------------------
  const FAVORITES_KEY = "moodmeal_favorites_v1"; // array of recipe ids

  // ---------------------------
  // Utilities
  // ---------------------------
  const $ = (id) => document.getElementById(id);

  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }

  function fmtAmount(x) {
    // nice-ish formatting: 0.5 -> 1/2, 0.25 -> 1/4, 0.75 -> 3/4, else decimals
    const eps = 1e-9;
    const fracMap = [
      { v: 0.25, s: "1/4" }, { v: 0.5, s: "1/2" }, { v: 0.75, s: "3/4" },
      { v: 0.33, s: "1/3" }, { v: 0.67, s: "2/3" }
    ];
    const whole = Math.floor(x + eps);
    const frac = x - whole;

    for (const f of fracMap) {
      if (Math.abs(frac - f.v) < 0.02) {
        if (whole === 0) return f.s;
        return `${whole} ${f.s}`;
      }
    }

    // fallback
    if (Math.abs(x - Math.round(x)) < 0.00001) return String(Math.round(x));
    return String(Number(x.toFixed(2)));
  }

  function secondsToMMSS(sec) {
    const s = Math.max(0, Math.floor(sec));
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function getFavorites() {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }

  function setFavorites(ids) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  }

  function isFavorited(recipeId) {
    return getFavorites().includes(recipeId);
  }

  function beep() {
    // small "done" sound without external files
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.20);
      o.start();
      o.stop(ctx.currentTime + 0.22);
      setTimeout(() => ctx.close(), 350);
    } catch {}
  }

  // ---------------------------
  // State
  // ---------------------------
  let currentRecipe = RECIPES[0];
  let servings = currentRecipe.baseServings;

  // photo state
  let photoIdx = 0;

  // cooking mode state
  let cookingStepIdx = 0;
  let stepDone = new Set(); // done steps
  let timerInterval = null;
  let timerRunning = false;
  let timerRemainingSec = 0;
  let timerTargetSec = 0;

  // ---------------------------
  // DOM references
  // ---------------------------
  const recipeSelect = $("recipe-select");
  const titleEl = $("recipe-title");
  const subtitleEl = $("recipe-subtitle");
  const metaEl = $("recipe-meta");

  const photoPreview = $("photo-preview");
  const photoIndexEl = $("photo-index");
  const prevPhotoBtn = $("prev-photo");
  const nextPhotoBtn = $("next-photo");

  const servingsValue = $("servings-value");
  const servingsMinus = $("servings-minus");
  const servingsPlus = $("servings-plus");

  const ingredientsList = $("ingredients-list");
  const ingredientsListCooking = $("ingredients-list-cooking");
  const copyIngredientsBtn = $("copy-ingredients");
  const copyIngredientsMsg = $("copy-ingredients-msg");

  const stepsList = $("steps-list");
  const collapseStepsBtn = $("collapse-steps");

  const favoriteBtn = $("favorite-btn");
  const startCookingBtn = $("start-cooking-btn");

  const cookingModeSection = $("cooking-mode");
  const recipeDetailSection = $("recipe-detail");

  const exitCookingBtn = $("exit-cooking-btn");
  const cookingProgress = $("cooking-progress");
  const stepDots = $("step-dots");
  const prevStepBtn = $("prev-step");
  const nextStepBtn = $("next-step");
  const currentStepTitle = $("current-step-title");
  const currentStepText = $("current-step-text");
  const toggleDoneBtn = $("toggle-done");

  const timerDisplay = $("timer-display");
  const timerTarget = $("timer-target");
  const timerStart = $("timer-start");
  const timerPause = $("timer-pause");
  const timerReset = $("timer-reset");
  const timerDone = $("timer-done");

  const favoritesEmpty = $("favorites-empty");
  const favoritesList = $("favorites-list");
  const clearFavoritesBtn = $("clear-favorites");
  const clearMsg = $("clear-msg");

  // ---------------------------
  // Rendering
  // ---------------------------
  function renderRecipeSelect() {
    recipeSelect.innerHTML = "";
    RECIPES.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = r.title;
      recipeSelect.appendChild(opt);
    });

    // allow ?recipe=... deep link
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("recipe");
    const initialId = fromQuery && RECIPES.some(r => r.id === fromQuery) ? fromQuery : currentRecipe.id;
    recipeSelect.value = initialId;
    currentRecipe = RECIPES.find(r => r.id === initialId) || RECIPES[0];

    servings = currentRecipe.baseServings;
  }

  function updateFavoriteButton() {
    const fav = isFavorited(currentRecipe.id);
    favoriteBtn.textContent = fav ? "★ Favorited" : "☆ Favorite";
    favoriteBtn.style.borderColor = fav ? "rgba(78,255,158,0.35)" : "#333";
    favoriteBtn.style.background = fav ? "rgba(78,255,158,0.08)" : "#161616";
  }

  function renderHeader() {
    titleEl.textContent = currentRecipe.title;
    subtitleEl.textContent = currentRecipe.subtitle;
    metaEl.textContent = `⏱ ${currentRecipe.meta.time} • 🎚 ${currentRecipe.meta.difficulty} • 🙂 mood: ${currentRecipe.meta.mood}`;
  }

  function renderPhoto() {
    const photos = currentRecipe.photos || [];
    if (!photos.length) {
      photoPreview.style.background = "linear-gradient(135deg, rgba(74,158,255,0.18), rgba(78,255,158,0.12))";
      photoPreview.innerHTML = `<div style="text-align:center; padding: 1rem;">
        <div style="font-size: 2rem; margin-bottom: 0.25rem;">🍽️</div>
        <div style="color:#999;">No photo yet</div>
      </div>`;
      photoIndexEl.textContent = "0/0";
      prevPhotoBtn.disabled = true;
      nextPhotoBtn.disabled = true;
      return;
    }

    photoIdx = clamp(photoIdx, 0, photos.length - 1);
    const url = photos[photoIdx];

    photoPreview.style.background = `url('${url}') center/cover no-repeat`;
    photoPreview.innerHTML = "";

    photoIndexEl.textContent = `${photoIdx + 1}/${photos.length}`;
    prevPhotoBtn.disabled = photos.length <= 1;
    nextPhotoBtn.disabled = photos.length <= 1;

    prevPhotoBtn.style.opacity = prevPhotoBtn.disabled ? "0.55" : "1";
    nextPhotoBtn.style.opacity = nextPhotoBtn.disabled ? "0.55" : "1";
  }

  function scaledIngredients() {
    const factor = servings / currentRecipe.baseServings;
    return currentRecipe.ingredients.map(ing => ({
      ...ing,
      scaledAmount: (ing.amount ?? 0) * factor
    }));
  }

  function renderServings() {
    servingsValue.textContent = String(servings);
    servingsMinus.disabled = servings <= 1;
    servingsMinus.style.opacity = servingsMinus.disabled ? "0.55" : "1";
  }

  function renderIngredients() {
    const items = scaledIngredients();

    const makeLi = (ing) => {
      const amount = ing.amount == null ? "" : fmtAmount(ing.scaledAmount);
      const unit = ing.unit ? ` ${ing.unit}` : "";
      const space = (amount || unit) ? " " : "";
      return `<li>${amount}${unit}${space}<span style="color:#ddd;">${ing.name}</span></li>`;
    };

    ingredientsList.innerHTML = items.map(makeLi).join("");
    ingredientsListCooking.innerHTML = items.map(makeLi).join("");
  }

  function renderSteps() {
    stepsList.innerHTML = currentRecipe.steps.map((s, idx) => {
      const timerTxt = s.timerSec ? ` <span style="color:#888;">(⏲ ${secondsToMMSS(s.timerSec)})</span>` : "";
      return `<li><strong style="color:#4a9eff;">${idx + 1}. ${s.title}</strong>${timerTxt}<div style="margin-top:0.15rem; color:#e8e8e8;">${s.text}</div></li>`;
    }).join("");
  }

  function renderFavorites() {
    const favIds = getFavorites();
    const favRecipes = RECIPES.filter(r => favIds.includes(r.id));

    if (!favRecipes.length) {
      favoritesEmpty.style.display = "block";
      favoritesList.style.display = "none";
      favoritesList.innerHTML = "";
      return;
    }

    favoritesEmpty.style.display = "none";
    favoritesList.style.display = "flex";
    favoritesList.innerHTML = favRecipes.map(r => {
      const img = (r.photos && r.photos[0]) ? r.photos[0] : "";
      const bg = img ? `background-image:url('${img}')` : "background: linear-gradient(135deg, rgba(74,158,255,0.18), rgba(78,255,158,0.12));";
      return `
        <div class="fav-card" data-recipe="${r.id}"
          style="cursor:pointer; width: 260px; border: 1px solid #2a2a2a; border-radius: 16px; overflow:hidden; background:#0b0b0b;">
          <div style="height: 120px; ${bg}; background-size:cover; background-position:center;"></div>
          <div style="padding: 0.75rem;">
            <div style="display:flex; justify-content:space-between; gap:0.75rem;">
              <div>
                <strong style="display:block;">${r.title}</strong>
                <span style="color:#888; font-size:0.9rem;">${r.meta.time} • ${r.meta.difficulty}</span>
              </div>
              <button class="unfav-btn" data-recipe="${r.id}" type="button"
                style="height: 34px; padding:0 0.6rem; border-radius: 10px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
                ✕
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // card click -> load recipe
    favoritesList.querySelectorAll(".fav-card").forEach(card => {
      card.addEventListener("click", (e) => {
        const isUnfav = e.target && e.target.classList && e.target.classList.contains("unfav-btn");
        if (isUnfav) return; // handled below
        const id = card.dataset.recipe;
        loadRecipeById(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // unfavorite button
    favoritesList.querySelectorAll(".unfav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.dataset.recipe;
        toggleFavorite(id, false);
      });
    });
  }

  function renderAll() {
    renderHeader();
    renderServings();
    renderIngredients();
    renderSteps();
    renderPhoto();
    updateFavoriteButton();
    renderFavorites();
  }

  // ---------------------------
  // Cooking mode rendering
  // ---------------------------
  function renderStepDots() {
    stepDots.innerHTML = "";
    const n = currentRecipe.steps.length;

    for (let i = 0; i < n; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "step-dot";
      dot.title = `Go to step ${i + 1}`;
      dot.dataset.idx = String(i);

      // style
      const active = i === cookingStepIdx;
      const done = stepDone.has(i);

      dot.style.width = "14px";
      dot.style.height = "14px";
      dot.style.borderRadius = "999px";
      dot.style.border = "1px solid #333";
      dot.style.cursor = "pointer";
      dot.style.background = done ? "rgba(78,255,158,0.85)" : (active ? "rgba(74,158,255,0.9)" : "#151515");
      dot.style.transform = active ? "scale(1.12)" : "scale(1)";
      dot.style.boxShadow = active ? "0 0 0 4px rgba(74,158,255,0.12)" : "none";

      dot.addEventListener("click", () => {
        goToStep(i);
      });

      stepDots.appendChild(dot);
    }
  }

  function setTimerForStep(step) {
    stopTimer();
    timerDone.style.display = "none";

    timerTargetSec = step.timerSec || 0;
    timerRemainingSec = timerTargetSec;

    timerDisplay.textContent = secondsToMMSS(timerRemainingSec);
    timerTarget.textContent = `/ ${secondsToMMSS(timerTargetSec)}`;
  }

  function renderCookingStep() {
    const n = currentRecipe.steps.length;
    const step = currentRecipe.steps[cookingStepIdx];

    cookingProgress.textContent = `Step ${cookingStepIdx + 1} of ${n}`;
    currentStepTitle.textContent = `${step.title}`;
    currentStepText.textContent = `${step.text}`;

    prevStepBtn.disabled = cookingStepIdx === 0;
    prevStepBtn.style.opacity = prevStepBtn.disabled ? "0.55" : "1";

    nextStepBtn.textContent = (cookingStepIdx === n - 1) ? "Finish" : "Next";

    const isDone = stepDone.has(cookingStepIdx);
    toggleDoneBtn.textContent = isDone ? "Unmark Done" : "Mark Step Done";

    setTimerForStep(step);
    renderStepDots();
  }

  function openCookingMode() {
    recipeDetailSection.style.display = "none";
    cookingModeSection.style.display = "block";

    cookingStepIdx = 0;
    stepDone = new Set();

    renderCookingStep();
  }

  function closeCookingMode() {
    stopTimer();
    cookingModeSection.style.display = "none";
    recipeDetailSection.style.display = "block";
  }

  function goToStep(idx) {
    stopTimer();
    cookingStepIdx = clamp(idx, 0, currentRecipe.steps.length - 1);
    renderCookingStep();
  }

  // ---------------------------
  // Timer
  // ---------------------------
  function stopTimer() {
    timerRunning = false;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function startTimer() {
    if (timerTargetSec <= 0) return;

    if (!timerRunning) {
      timerRunning = true;
      timerDone.style.display = "none";

      if (!timerInterval) {
        timerInterval = setInterval(() => {
          if (!timerRunning) return;

          timerRemainingSec -= 1;
          timerDisplay.textContent = secondsToMMSS(timerRemainingSec);

          if (timerRemainingSec <= 0) {
            stopTimer();
            timerRemainingSec = 0;
            timerDisplay.textContent = secondsToMMSS(0);
            timerDone.style.display = "block";
            beep();
          }
        }, 1000);
      }
    }
  }

  // ---------------------------
  // Favorites
  // ---------------------------
  function toggleFavorite(recipeId = currentRecipe.id, shouldAdd = null) {
    const ids = getFavorites();
    const currently = ids.includes(recipeId);

    const next = (shouldAdd == null) ? !currently : shouldAdd;

    const updated = next
      ? Array.from(new Set([...ids, recipeId]))
      : ids.filter(x => x !== recipeId);

    setFavorites(updated);

    updateFavoriteButton();
    renderFavorites();
  }

  // ---------------------------
  // Load recipe
  // ---------------------------
  function loadRecipeById(id) {
    const found = RECIPES.find(r => r.id === id);
    if (!found) return;

    currentRecipe = found;

    // reset per-recipe state
    servings = currentRecipe.baseServings;
    photoIdx = 0;

    // update select + url
    recipeSelect.value = currentRecipe.id;
    const params = new URLSearchParams(window.location.search);
    params.set("recipe", currentRecipe.id);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);

    renderAll();
  }

  // ---------------------------
  // Events
  // ---------------------------
  recipeSelect.addEventListener("change", () => {
    loadRecipeById(recipeSelect.value);
  });

  favoriteBtn.addEventListener("click", () => {
    toggleFavorite(currentRecipe.id, null);
  });

  servingsMinus.addEventListener("click", () => {
    servings = clamp(servings - 1, 1, 99);
    renderServings();
    renderIngredients();
  });

  servingsPlus.addEventListener("click", () => {
    servings = clamp(servings + 1, 1, 99);
    renderServings();
    renderIngredients();
  });

  copyIngredientsBtn.addEventListener("click", async () => {
    const items = scaledIngredients()
      .map(i => {
        const amount = i.amount == null ? "" : fmtAmount(i.scaledAmount);
        const unit = i.unit ? ` ${i.unit}` : "";
        const space = (amount || unit) ? " " : "";
        return `- ${amount}${unit}${space}${i.name}`.trim();
      })
      .join("\n");

    try {
      await navigator.clipboard.writeText(`${currentRecipe.title} (Servings: ${servings})\n${items}`);
      copyIngredientsMsg.style.display = "inline";
      setTimeout(() => copyIngredientsMsg.style.display = "none", 1200);
    } catch {
      // fallback: do nothing
    }
  });

  collapseStepsBtn.addEventListener("click", () => {
    const isHidden = stepsList.style.display === "none";
    stepsList.style.display = isHidden ? "block" : "none";
    collapseStepsBtn.textContent = isHidden ? "Collapse" : "Expand";
  });

  prevPhotoBtn.addEventListener("click", () => {
    const photos = currentRecipe.photos || [];
    if (photos.length <= 1) return;
    photoIdx = (photoIdx - 1 + photos.length) % photos.length;
    renderPhoto();
  });

  nextPhotoBtn.addEventListener("click", () => {
    const photos = currentRecipe.photos || [];
    if (photos.length <= 1) return;
    photoIdx = (photoIdx + 1) % photos.length;
    renderPhoto();
  });

  startCookingBtn.addEventListener("click", () => {
    openCookingMode();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  exitCookingBtn.addEventListener("click", () => {
    closeCookingMode();
  });

  prevStepBtn.addEventListener("click", () => {
    goToStep(cookingStepIdx - 1);
  });

  nextStepBtn.addEventListener("click", () => {
    if (cookingStepIdx >= currentRecipe.steps.length - 1) {
      // finish
      closeCookingMode();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    goToStep(cookingStepIdx + 1);
  });

  toggleDoneBtn.addEventListener("click", () => {
    if (stepDone.has(cookingStepIdx)) stepDone.delete(cookingStepIdx);
    else stepDone.add(cookingStepIdx);
    renderCookingStep();
  });

  timerStart.addEventListener("click", () => {
    startTimer();
  });

  timerPause.addEventListener("click", () => {
    timerRunning = false;
  });

  timerReset.addEventListener("click", () => {
    stopTimer();
    timerDone.style.display = "none";
    timerRemainingSec = timerTargetSec;
    timerDisplay.textContent = secondsToMMSS(timerRemainingSec);
  });

  clearFavoritesBtn.addEventListener("click", () => {
    setFavorites([]);
    renderFavorites();
    updateFavoriteButton();
    clearMsg.style.display = "inline";
    setTimeout(() => clearMsg.style.display = "none", 1200);
  });

  // ---------------------------
  // Init
  // ---------------------------
  renderRecipeSelect();
  renderAll();

  console.log("MoodMeal – Submodule 4 (Recipe Viewer & Cooking Mode) Loaded");
})();
</script>

<style>
  /* Small hover polish */
  button:hover:not(:disabled), .fav-card:hover {
    transform: translateY(-1px);
    transition: all 0.15s ease;
  }
  button:disabled {
    cursor: not-allowed !important;
  }
  .fav-card:hover {
    border-color: rgba(74,158,255,0.35) !important;
    box-shadow: 0 8px 18px rgba(0,0,0,0.35);
  }

  /* Make details/summary look nicer */
  summary {
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::before {
    content: "▸";
    margin-right: 0.45rem;
    color: #666;
  }
  details[open] summary::before {
    content: "▾";
  }

  /* Responsive layout */
  @media (max-width: 900px) {
    #recipe-detail > div {
      grid-template-columns: 1fr !important;
    }
    #photo-preview {
      height: 240px !important;
    }
  }
</style>