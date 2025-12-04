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
    <p>
      Mood category:
      <span id="mood-category">not set</span>
    </p>
    <div id="mood-status" style="margin-top:0.35rem; color:#8df0c8;">Waiting for your saved mood...</div>
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
    <div id="recommendations-container"></div>
  </section>

</main>

<!-- Combined Recipe Viewer (merged from Submodule 4) -->
<section id="recipe-viewer" style="max-width:980px; margin: 1.25rem auto; display: none;">
  <div style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">
    <div style="display:flex; justify-content:space-between; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
      <div>
        <h2 id="rv-title" style="margin:0;">Recipe</h2>
        <p id="rv-subtitle" style="margin:0.35rem 0 0; color:#bbb;">Recipe details and cooking mode.</p>
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
        <button id="rv-back-btn" type="button" style="padding:0.45rem 0.8rem; border-radius:10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">Back to Recommendations</button>
        <button id="rv-fav-btn" type="button" style="padding:0.45rem 0.8rem; border-radius:10px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">☆ Favorite</button>
      </div>
    </div>

    <hr style="border-color:#262626; margin:0.8rem 0;" />

    <div style="display:grid; grid-template-columns: 1.05fr 0.95fr; gap:1rem; align-items:start;">
      <div id="rv-photo" style="border:1px solid #2a2a2a; border-radius:16px; overflow:hidden; background:#0f0f0f; height:240px; display:flex; align-items:center; justify-content:center; color:#aaa;">No photo</div>
      <div style="border:1px solid #2a2a2a; border-radius:16px; background:#0f0f0f; padding:1rem;">
        <h3 id="rv-ingredients-title" style="margin-top:0;">Ingredients</h3>
        <ul id="rv-ingredients-list" style="margin:0; padding-left:1.1rem; color:#e8e8e8; line-height:1.6;"></ul>
      </div>
    </div>

    <div style="margin-top:1rem; border:1px solid #2a2a2a; border-radius:16px; background:#0f0f0f; padding:1rem;">
      <h3 style="margin:0 0 0.5rem 0;">Steps</h3>
      <ol id="rv-steps-list" style="margin:0.7rem 0 0; padding-left:1.25rem; color:#e8e8e8; line-height:1.7;"></ol>
    </div>
  </div>
</section>

<!-- Expose the recipes JSON path (with Jekyll baseurl) to the script below. -->
<script>
  const MOODMEAL_RECIPES_URL = "{{ '/hacks/mood-meal/sub3/recipes.json' | relative_url }}";
</script>

{% raw %}
<script>
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Recipes are loaded from a local JSON file so the data is shared and easier to maintain.
    // The fetch uses Liquid's `relative_url` so the generated HTML includes the site's baseurl.
    let RECIPES = [];

    const $ = (id) => document.getElementById(id);
    const recContainer = $('recommendations-container');
    const rvSection = $('recipe-viewer');
    const rvTitle = $('rv-title');
    const rvSubtitle = $('rv-subtitle');
    const rvPhoto = $('rv-photo');
    const rvIngredients = $('rv-ingredients-list');
    const rvSteps = $('rv-steps-list');
    const rvBack = $('rv-back-btn');
    const rvFav = $('rv-fav-btn');
    const mealTypeSelect = $('meal-type-select');
    const prepTimeSelect = $('prep-time-select');
    const difficultySelect = $('difficulty-select');
    const boostPantryCheckbox = $('boost-pantry-checkbox');
    const moodScoreEl = $('mood-score');
    const moodTagsEl = $('mood-tags');
    const moodCategoryEl = $('mood-category');
    const moodStatusEl = $('mood-status');
    const recLoadingEl = $('recommendations-loading');
    const recErrorEl = $('recommendations-error');
    const recButton = $('get-recommendations-btn');

    // Try to find saved mood data in localStorage (key pattern: moodmeal_mood_*)
    const moodKey = Object.keys(localStorage).find(k => k.startsWith('moodmeal_mood_'));
    let moodData = null;
    try { if (moodKey) moodData = JSON.parse(localStorage.getItem(moodKey)); } catch(e) { moodData = null; }

    const extraNotesEl = $('extra-notes-input');

    // Update the mood banner at the top to reflect the saved data from Submodule 2
    function renderMoodSummaryBanner() {
      if (!moodScoreEl || !moodTagsEl) return;
      if (!moodData) {
        moodScoreEl.textContent = '--';
        moodTagsEl.textContent = 'Not set yet';
        if (moodCategoryEl) moodCategoryEl.textContent = 'Not set';
        if (moodStatusEl) {
          moodStatusEl.textContent = 'No saved mood found. Please record yours in Submodule 2.';
          moodStatusEl.style.color = '#ffb347';
        }
        return;
      }

      const safeScore = typeof moodData.moodScore === 'number' ? Math.round(moodData.moodScore) : '--';
      const tags = Array.isArray(moodData.moodTags) ? moodData.moodTags : [];
      const category = moodData.moodCategory || 'Neutral';

      moodScoreEl.textContent = safeScore;
      moodTagsEl.textContent = tags.length ? tags.join(', ') : 'None selected';
      if (moodCategoryEl) moodCategoryEl.textContent = category;
      if (moodStatusEl) {
        moodStatusEl.textContent = 'Mood Updated';
        moodStatusEl.style.color = '#8df0c8';
      }
    }

    // Populate the header immediately so users see their saved mood on load
    renderMoodSummaryBanner();

    // Simple scoring: match recipe.meta.mood to any mood tags, and text matches
    function scoreRecipe(r) {
      let score = 0;
      if (!moodData) return score;
      const tags = (moodData.moodTags || []).map(t => String(t).toLowerCase());
      const category = (moodData.moodCategory || '').toLowerCase();
      if (category && !tags.includes(category)) tags.push(category);
      // match meta mood
      if (r.meta && r.meta.mood && tags.includes(String(r.meta.mood).toLowerCase())) score += 30;
      // bump if category is an exact match
      if (r.meta && r.meta.mood && category && category === String(r.meta.mood).toLowerCase()) score += 20;
      // check tags in title/subtitle
      const text = (r.title + ' ' + (r.subtitle || '')).toLowerCase();
      for (const t of tags) if (text.includes(t)) score += 8;
      // bonus for higher moodScore to bias certain recipes (simple linear)
      if (typeof moodData.moodScore === 'number') score += Math.round(moodData.moodScore / 10);
      // small boost if user's extra notes contain a keyword
      const notes = extraNotesEl ? extraNotesEl.value.toLowerCase() : '';
      if (notes) {
        for (const token of notes.split(/[^a-z0-9]+/).filter(Boolean)) {
          if (r.title.toLowerCase().includes(token) || (r.subtitle || '').toLowerCase().includes(token)) score += 6;
        }
      }
      return score;
    }

    function parsePrepMinutes(timeStr) {
      if (!timeStr) return null;
      const match = String(timeStr).match(/(\d+)/);
      return match ? Number(match[1]) : null;
    }

    function getFilters() {
      return {
        mealType: mealTypeSelect ? mealTypeSelect.value.trim().toLowerCase() : '',
        maxPrep: prepTimeSelect ? Number(prepTimeSelect.value) || null : null,
        difficulty: difficultySelect ? difficultySelect.value.trim().toLowerCase() : '',
        boostPantry: boostPantryCheckbox ? boostPantryCheckbox.checked : false,
      };
    }

    function renderRecommendations(recipesLoaded) {
      if (!recipesLoaded) {
        recContainer.innerHTML = '<p style="color:#ccc;">Click "Get Recommendations" to load meals.</p>';
        return;
      }
      if (!RECIPES.length) {
        recContainer.innerHTML = '<p style="color:#ccc;">No recipes available. Check that recipes.json is present.</p>';
        return;
      }

      const filters = getFilters();
      const filtered = RECIPES.filter(r => {
        if (filters.difficulty) {
          const diff = (r.meta && r.meta.difficulty ? r.meta.difficulty : '').toLowerCase();
          if (diff !== filters.difficulty) return false;
        }
        if (filters.maxPrep) {
          const mins = parsePrepMinutes(r.meta && r.meta.time);
          if (mins !== null && mins > filters.maxPrep) return false;
        }
        if (filters.mealType) {
          const type = (r.meta && r.meta.type ? r.meta.type : '').toLowerCase();
          if (type !== filters.mealType) return false;
        }
        return true;
      });

      if (!filtered.length) {
        recContainer.innerHTML = '<p style="color:#ccc;">No recipes matched your filters.</p>';
        return;
      }

      // score and sort
      const scored = filtered.map(r => ({ r, s: scoreRecipe(r) }));
      scored.sort((a,b) => b.s - a.s);

      recContainer.innerHTML = scored.map(({r}) => {
        const time = r.meta && r.meta.time ? r.meta.time : '—';
        const difficulty = r.meta && r.meta.difficulty ? r.meta.difficulty : '';
        const moodTag = r.meta && r.meta.mood ? r.meta.mood : 'mood friendly';
        return `
          <article class="meal-card" data-meal-id="${r.id}" style="border: 1px solid #444; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
            <h3>${r.title}</h3>
            <p>${r.subtitle}</p>
            <p><strong>Prep time:</strong> ${time}${difficulty ? ` • ${difficulty}` : ''}</p>
            <p><strong>Mood tag:</strong> ${moodTag}</p>
            <p><strong>Uses pantry items:</strong> ${r.ingredients.slice(0,2).map(i => i.name).join(', ')}</p>
            <p><strong>Mood match:</strong> ${Math.min(99, Math.max(40, scoreRecipe(r) + 40))}%</p>
            <button type="button" class="view-recipe-btn" data-recipe-id="${r.id}" style="margin-top: 0.5rem;">
              View Recipe
            </button>
          </article>
        `;
      }).join('');

      // attach listeners
      recContainer.querySelectorAll('.view-recipe-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = btn.dataset.recipeId;
          loadRecipeById(id);
        });
      });
    }

    function fmtAmount(x) {
      if (x == null) return '';
      if (Math.abs(x - Math.round(x)) < 1e-5) return String(Math.round(x));
      return String(Number(x.toFixed(2)));
    }

    function loadRecipeById(id) {
      const found = RECIPES.find(r => r.id === id);
      if (!found) return;
      rvTitle.textContent = found.title;
      rvSubtitle.textContent = found.subtitle + ` • ${found.meta.time} • ${found.meta.difficulty}`;
      // photo
      if (found.photos && found.photos.length) {
        rvPhoto.style.background = `url('${found.photos[0]}') center/cover no-repeat`;
        rvPhoto.textContent = '';
      } else {
        rvPhoto.style.background = '';
        rvPhoto.textContent = 'No photo';
      }
      // ingredients
      rvIngredients.innerHTML = found.ingredients.map(ing => {
        const amt = ing.amount == null ? '' : fmtAmount(ing.amount);
        const unit = ing.unit ? ` ${ing.unit}` : '';
        return `<li>${amt}${unit} <span style="color:#ddd;">${ing.name}</span></li>`;
      }).join('');
      // steps
      rvSteps.innerHTML = found.steps.map((s, idx) => `<li><strong style="color:#4a9eff;">${idx+1}. ${s.title}</strong><div style="color:#e8e8e8; margin-top:0.15rem;">${s.text}</div></li>`).join('');
      updateFavBtn(found.id);

      // show section
      rvSection.style.display = 'block';
      window.scrollTo({ top: rvSection.offsetTop - 20, behavior: 'smooth' });
    }

    // back button
    rvBack.addEventListener('click', () => {
      rvSection.style.display = 'none';
      window.scrollTo({ top: document.getElementById('recommendations-section').offsetTop - 20, behavior: 'smooth' });
    });

    // favorite toggling stored locally
    const FAVORITES_KEY = 'moodmeal_favorites_v1';
    function getFavorites(){ try { const raw = localStorage.getItem(FAVORITES_KEY); const arr = raw ? JSON.parse(raw) : []; return Array.isArray(arr)?arr:[]; } catch { return []; } }
    function setFavorites(ids){ localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); }
    function updateFavBtn(id){ const favs = getFavorites(); const is = favs.includes(id); rvFav.textContent = is ? '★ Favorited' : '☆ Favorite'; }

    rvFav.addEventListener('click', () => {
      const title = rvTitle.textContent;
      const r = RECIPES.find(x=>x.title===title);
      if (!r) return;
      const favs = getFavorites();
      const already = favs.includes(r.id);
      const updated = already ? favs.filter(x=>x!==r.id) : Array.from(new Set([...favs, r.id]));
      setFavorites(updated);
      updateFavBtn(r.id);
    });

    // load recipes.json and then render
    let recipesLoaded = false;
    async function loadAndRenderRecipes() {
      if (recLoadingEl) recLoadingEl.style.display = 'inline';
      if (recErrorEl) recErrorEl.style.display = 'none';
      try {
        const resp = await fetch(MOODMEAL_RECIPES_URL, { cache: 'no-store' });
        if (!resp.ok) throw new Error('Failed to load recipes.json: ' + resp.status);
        const data = await resp.json();
        if (Array.isArray(data)) RECIPES = data;
        else console.warn('recipes.json did not return an array');
        recipesLoaded = true;
      } catch (err) {
        console.error('Could not load recipes.json', err);
        if (recErrorEl) {
          recErrorEl.textContent = 'Could not load recipes. Please try again.';
          recErrorEl.style.display = 'block';
        }
      } finally {
        if (recLoadingEl) recLoadingEl.style.display = 'none';
        renderRecommendations(recipesLoaded);
        renderMoodSummaryBanner();
      }
    }

    // initial render state
    renderRecommendations(false);

    // button triggers loading (only when user clicks)
    if (recButton) {
      recButton.addEventListener('click', () => {
        if (recipesLoaded) {
          renderRecommendations(true);
          return;
        }
        loadAndRenderRecipes();
      });
    }

    // filters trigger re-render (after recipes have been loaded)
    const rerender = () => renderRecommendations(recipesLoaded);
    if (mealTypeSelect) mealTypeSelect.addEventListener('change', rerender);
    if (prepTimeSelect) prepTimeSelect.addEventListener('change', rerender);
    if (difficultySelect) difficultySelect.addEventListener('change', rerender);
    if (boostPantryCheckbox) boostPantryCheckbox.addEventListener('change', rerender);

    // update whenever extra notes change (so user can refine after load)
    if (extraNotesEl) extraNotesEl.addEventListener('input', () => renderRecommendations(recipesLoaded));

  } catch (e) { console.error('Submodule3 combined food submodule crashed:', e); }
});
</script>
{% endraw %}

<style>
/* Filters dropdown styling - make the select text white to match dark theme */
#filters-section select {
  color: #ffffff;
  background-color: #111; /* darker background to match page */
  border: 1px solid #444;
  padding: 0.25rem 0.4rem;
}

/* Try to style the option text and dropdown appearance where supported. */
#filters-section select option {
  color: #ffffff;
  background-color: #111;
}

/* Invert the native dropdown arrow in some browsers so it remains visible on dark bg */
#filters-section select::-ms-expand {
  filter: invert(1);
}
</style>

<style>

:root {
  --mm-accent: #4A9EFF;
  --mm-accent-dark: #2F7FDB;
  --mm-accent-soft: rgba(74,158,255,0.08);
  --mm-foreground: #ffffff;
}

/* Headings */
#recommendation-page h2,
#recommendation-page h3 {
  color: var(--mm-accent);
}

/* Primary buttons */
#submit-section #get-recommendations-btn,
.view-recipe-btn,
#filters-section button {
  background: var(--mm-accent);
  color: var(--mm-foreground);
  border: none;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  transition: transform 0.14s ease, box-shadow 0.14s ease, background 0.14s ease;
}
#submit-section #get-recommendations-btn:hover,
.view-recipe-btn:hover,
#filters-section button:hover {
  background: var(--mm-accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 18px var(--mm-accent-soft);
}

/* Recipe / result cards: accent border */
.meal-card {
  border-left: 6px solid rgba(74,158,255,0.12);
  transition: border-color 0.14s ease, box-shadow 0.14s ease;
}
.meal-card:hover {
  border-left-color: var(--mm-accent);
  box-shadow: 0 6px 18px rgba(0,0,0,0.28);
}

/* Selects and focus states (keeps your white text rule) */
#filters-section select {
  color: #fff;
  background-color: #111;
  border: 1px solid #444;
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
}
#filters-section select:focus,
#filters-section select:focus-visible {
  outline: 3px solid rgba(74,158,255,0.18);
  border-color: var(--mm-accent);
  box-shadow: 0 6px 12px rgba(74,158,255,0.08);
}

/* Links */

#recommendation-page a {
  color: #fff;
  text-decoration: none;
  background: none;
}
#recommendation-page a.view-recipe-btn {
  color: #fff;
  background: var(--mm-accent);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  font-weight: 500;
  box-shadow: none;
  border: none;
  transition: background 0.14s, color 0.14s;
}
#recommendation-page a.view-recipe-btn:hover {
  background: var(--mm-accent-dark);
  color: #fff;
  text-decoration: underline;
}

/* Accessible focus for interactive elements */
button:focus,
select:focus,
input:focus,
textarea:focus {
  outline: 3px solid rgba(74,158,255,0.12);
  outline-offset: 2px;
}

/* Responsive tweak */
@media (max-width: 600px) {
  .meal-card { padding: 0.85rem; }
  #submit-section #get-recommendations-btn { width: 100%; }
}
</style>
