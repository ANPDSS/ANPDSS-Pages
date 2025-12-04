---
layout: post
title: "Submodule 4"
description: "Activity Recommender"
permalink: /mood-meal/submodule_4/
markdown: false
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 4
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-12-02
footer:
  previous: /mood-meal/submodule_3/
  home: /mood-meal/
  next: /mood-meal/submodule_5/
---

# MoodMeal – Activity Recommender

<main id="activity-page" style="max-width: 980px; margin: 0 auto;">

  <!-- =========================
       OVERVIEW (AP WRITEUP)
  ========================== -->
  <section aria-label="Submodule overview" style="margin: 1rem 0 1.25rem;">
    <div style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25);">
      <h2 style="margin:0;">Submodule 4: Activity Recommender</h2>

      <div style="margin-top:0.75rem; color:#ddd; line-height:1.6;">
        <div><strong>Input:</strong> Users click the Recommend Activities button and choose filters time (15/30/60 min), alone vs. social, and indoor vs. outdoor.</div>
        <div style="margin-top:0.4rem;"><strong>List/Collection:</strong> The program uses lists/arrays to store user hobbies and preferences, available activity options (internal dataset), and the recommended activities (2–4 cards). This meets AP requirements for using lists to manage complexity.</div>
        <div style="margin-top:0.4rem;"><strong>Sequencing:</strong> Our procedure runs steps in order; read mood & hobbies, read filters, build request, call /activity/recommend, then display activity cards. This meets AP requirements for sequencing.</div>
        <div style="margin-top:0.4rem;"><strong>Selection:</strong> The procedure uses if statements to decide what to recommend based on time, social setting, indoors/outdoors, and whether the user has enough saved preferences to personalize results. This meets AP requirements for selection.</div>
        <div style="margin-top:0.4rem;"><strong>Iteration:</strong> The procedure loops through the activity dataset or generated options to filter matches, score/rank activities, and pick the top 2–4 results. This meets AP requirements for iteration.</div>
        <div style="margin-top:0.4rem;"><strong>Output:</strong> Users see 2–4 personalized activity cards (title + short description) that match their mood, hobbies, and selected filters.</div>
      </div>

      <details style="margin-top: 0.9rem;">
        <summary style="cursor:pointer; color:#bbb;">Connections to other submodules</summary>
        <div style="margin-top: 0.6rem; color:#ddd; line-height:1.6;">
          <div>• Submodule 1 provides saved preferences/hobbies to personalize activities.</div>
          <div>• Submodule 2 provides the mood score/label to influence recommendations.</div>
        </div>
      </details>
    </div>
  </section>

  <!-- =========================
       HEADER + ACTIONS
  ========================== -->
  <section aria-label="Activity header" style="margin: 0 0 1.25rem;">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 1rem; flex-wrap: wrap;">
      <div>
        <h2 style="margin: 0;">Activities</h2>
        <p style="margin: 0.35rem 0 0; color: #bbb;">
          Pick quick filters, then get 2–4 activity ideas that match your time + vibe.
        </p>
      </div>

      <div style="display:flex; gap: 0.5rem; align-items:center; flex-wrap: wrap;">
        <button id="recommend-btn" type="button"
          style="padding:0.55rem 0.95rem; border-radius: 12px; border:none; background:#4a9eff; color:#fff; cursor:pointer;">
          Recommend Activities
        </button>
        <button id="shuffle-btn" type="button"
          style="padding:0.55rem 0.95rem; border-radius: 12px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
          Shuffle
        </button>
        <button id="reset-btn" type="button"
          style="padding:0.55rem 0.95rem; border-radius: 12px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
          Reset
        </button>
      </div>
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- =========================
       INPUT FILTERS (AP: Input)
  ========================== -->
  <section aria-label="Filters" style="margin: 1.25rem 0;">
    <h2 style="margin-bottom: 0.5rem;">1) Filters (Input)</h2>
    <p style="margin-top:0.25rem; color:#aaa;">
      These choices are the input used by the recommendation procedure.
    </p>

    <div
      style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items:start;">
        <div>
          <label style="color:#bbb; display:block; margin-bottom: 0.4rem;">Time available</label>
          <select id="time-select"
            style="width:100%; padding: 0.55rem 0.7rem; border-radius: 12px; background:#121212; color:#eee; border: 1px solid #333;">
            <option value="15">15 minutes</option>
            <option value="30" selected>30 minutes</option>
            <option value="60">60 minutes</option>
          </select>

          <div style="margin-top: 0.9rem;">
            <label style="color:#bbb; display:block; margin-bottom: 0.4rem;">Alone vs. Social</label>
            <div style="display:flex; gap:0.5rem; flex-wrap: wrap;">
              <button class="pill vibe-pill" data-value="alone" type="button"
                style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
                Alone
              </button>
              <button class="pill vibe-pill" data-value="social" type="button"
                style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
                Social
              </button>
              <button class="pill vibe-pill" data-value="either" type="button"
                style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid rgba(74,158,255,0.35); background:rgba(74,158,255,0.08); color:#eaf4ff; cursor:pointer;">
                Either
              </button>
            </div>
            <div style="color:#777; font-size:0.9rem; margin-top: 0.5rem;">Tip: “Either” shows the most options.</div>
          </div>
        </div>

        <div>
          <label style="color:#bbb; display:block; margin-bottom: 0.4rem;">Indoor vs. Outdoor</label>
          <div style="display:flex; gap:0.5rem; flex-wrap: wrap;">
            <button class="pill loc-pill" data-value="indoor" type="button"
              style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              Indoor
            </button>
            <button class="pill loc-pill" data-value="outdoor" type="button"
              style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              Outdoor
            </button>
            <button class="pill loc-pill" data-value="either" type="button"
              style="padding:0.45rem 0.8rem; border-radius: 999px; border: 1px solid rgba(74,158,255,0.35); background:rgba(74,158,255,0.08); color:#eaf4ff; cursor:pointer;">
              Either
            </button>
          </div>

          <div style="margin-top: 0.9rem;">
            <label style="color:#bbb; display:block; margin-bottom: 0.4rem;">Mood keyword (connects to Submodule 2 later)</label>
            <input id="mood-input" placeholder="ex: stressed, tired, happy, focused..."
              style="width:100%; padding: 0.55rem 0.7rem; border-radius: 12px; background:#121212; color:#eee; border: 1px solid #333; outline: none;" />
            <div style="color:#777; font-size:0.9rem; margin-top: 0.5rem;">
              For now this is optional. Later it can auto-fill from Mood Detection.
            </div>
          </div>
        </div>
      </div>

      <details style="margin-top: 1rem;">
        <summary style="cursor:pointer; color:#bbb;">AP Note: where the list + algorithm happens</summary>
        <div style="margin-top: 0.65rem; color:#ddd; line-height: 1.6;">
          <div>• We store activity options in a list (internal dataset).</div>
          <div>• We loop through that list, filter matches, score them, and pick the top 2–4.</div>
          <div>• That is our iteration + selection working together.</div>
        </div>
      </details>

   
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- =========================
       OUTPUT RESULTS
  ========================== -->
  <section id="results" aria-label="Recommended activities" style="margin: 1.25rem 0;">
    <h2 style="margin-bottom: 0.5rem;">2) Recommendations (Output)</h2>
    <p id="results-sub" style="margin-top:0.25rem; color:#aaa;">
      Click “Recommend Activities” to generate 2–4 cards.
    </p>

    <div id="results-card"
      style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">

      <div id="empty-state" style="color:#777; padding: 0.75rem 0;">
        No suggestions yet. Choose filters and hit <span style="color:#4a9eff;">Recommend Activities</span>.
      </div>

      <div id="activity-grid"
        style="display:none; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem;">
      </div>

      <div style="margin-top: 1rem; display:flex; gap:0.6rem; flex-wrap: wrap; align-items:center;">
        <span id="toast" style="display:none; color:#4eff9e;">✓ Saved</span>
        <span id="err" style="display:none; color:#ff7a7a;">Something went wrong</span>
      </div>
    </div>
  </section>

  <hr style="border-color:#262626;" />

  <!-- =========================
       SAVED LIST (AP: List/Collection)
  ========================== -->
  <section id="saved" aria-label="Saved activities" style="margin: 1.25rem 0;">
    <h2 style="margin-bottom: 0.5rem;">3) Saved Activities (List/Collection)</h2>
    <p style="margin-top:0.25rem; color:#aaa;">
      Saving uses a list stored in
      <code style="background:#141414; padding:0.12rem 0.35rem; border-radius: 8px; border:1px solid #2a2a2a;">localStorage</code>.
    </p>

    <div id="saved-card"
      style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0f0f0f; padding: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.35);">

      <div id="saved-empty" style="color:#777; padding: 0.75rem 0;">
        No saved activities yet. Click “Save” on a card above.
      </div>

      <div id="saved-list" style="display:none; gap:0.75rem; flex-wrap: wrap;"></div>

      <div style="margin-top: 1rem; display:flex; gap:0.6rem; flex-wrap: wrap;">
        <button id="clear-saved" type="button"
          style="padding:0.55rem 0.9rem; border-radius: 12px; border:1px solid #333; background:#161616; color:#eee; cursor:pointer;">
          Clear Saved
        </button>
        <span id="clear-msg" style="display:none; color:#4eff9e; align-self:center;">✓ Cleared</span>
      </div>
    </div>
  </section>

</main>

{% raw %}
<script>
document.addEventListener("DOMContentLoaded", () => {
  try {
    // LIST/COLLECTION: internal dataset of activity options
    const ACTIVITIES = [
      { id:"walk-reset", emoji:"🚶‍♂️", title:"Short walk reset", desc:"Walk outside, no phone, just breathe and reset.", min:15, loc:"outdoor", vibe:"alone", tags:["stressed","tired","calm"] },
      { id:"stretch-mobility", emoji:"🧘", title:"Mobility stretch", desc:"10–15 minutes of hips/hamstrings/shoulders.", min:15, loc:"indoor", vibe:"alone", tags:["tired","sore","calm"] },
      { id:"journaling", emoji:"📓", title:"Quick journaling", desc:"Write 5 lines: what happened, what I feel, what I need.", min:15, loc:"indoor", vibe:"alone", tags:["stressed","anxious","sad"] },
      { id:"clean-desk", emoji:"🧼", title:"Desk cleanup sprint", desc:"Set a timer and reset your space for focus.", min:15, loc:"indoor", vibe:"alone", tags:["overwhelmed","focused"] },
      { id:"music-dance", emoji:"💃", title:"1-song dance break", desc:"Play 2–3 songs and move like nobody’s watching.", min:15, loc:"indoor", vibe:"alone", tags:["happy","energized"] },
      { id:"call-friend", emoji:"📞", title:"Call or voice-note a friend", desc:"Check in and share a quick update.", min:15, loc:"either", vibe:"social", tags:["lonely","sad","happy"] },
      { id:"game-round", emoji:"🎮", title:"Fast game round", desc:"One quick match to refresh your brain.", min:15, loc:"indoor", vibe:"either", tags:["tired","happy"] },
      { id:"make-tea", emoji:"🍵", title:"Make a warm drink", desc:"Make tea/hot chocolate and drink slowly.", min:15, loc:"indoor", vibe:"alone", tags:["stressed","calm","sad"] },

      { id:"pomodoro", emoji:"⏳", title:"Pomodoro focus session", desc:"25 minutes focus + 5 minutes break.", min:30, loc:"indoor", vibe:"alone", tags:["focused","stressed"] },
      { id:"light-workout", emoji:"🏋️", title:"Light workout", desc:"Bodyweight circuit: squats, pushups, plank.", min:30, loc:"indoor", vibe:"alone", tags:["energized","happy"] },
      { id:"cook-snack", emoji:"🥪", title:"Make a snack", desc:"Simple snack + water to refuel.", min:30, loc:"indoor", vibe:"either", tags:["tired","stressed"] },
      { id:"sunset-walk", emoji:"🌅", title:"Sunset walk", desc:"Walk and notice 5 things you see/hear.", min:30, loc:"outdoor", vibe:"either", tags:["calm","sad","stressed"] },
      { id:"hangout-plan", emoji:"🗓️", title:"Plan a hangout", desc:"Pick a date/time and text 1–2 friends.", min:30, loc:"either", vibe:"social", tags:["happy","lonely"] },
      { id:"basketball-shoot", emoji:"🏀", title:"Shoot hoops / kick a ball", desc:"Get outside and move for 20–30 minutes.", min:30, loc:"outdoor", vibe:"either", tags:["energized","stressed"] },
      { id:"study-group", emoji:"👥", title:"Study with someone", desc:"Meet up or hop on a quick study call.", min:30, loc:"either", vibe:"social", tags:["focused","stressed"] },

      { id:"hike-light", emoji:"🥾", title:"Easy hike / long walk", desc:"Go outside for a longer reset and fresh air.", min:60, loc:"outdoor", vibe:"either", tags:["stressed","sad","calm"] },
      { id:"deep-clean", emoji:"🧹", title:"Deep clean 1 zone", desc:"Pick one area: closet, desk, or room corner.", min:60, loc:"indoor", vibe:"alone", tags:["overwhelmed","focused"] },
      { id:"creative-hour", emoji:"🎨", title:"Creative hour", desc:"Sketch, write, or build something small.", min:60, loc:"indoor", vibe:"alone", tags:["happy","calm","focused"] },
      { id:"board-game", emoji:"🎲", title:"Board/card game", desc:"Play something simple with friends/family.", min:60, loc:"indoor", vibe:"social", tags:["happy","lonely"] },
      { id:"picnic", emoji:"🧺", title:"Picnic / snack outside", desc:"Eat outside and take a real break.", min:60, loc:"outdoor", vibe:"social", tags:["happy","calm"] }
    ];

    const SAVED_KEY = "moodmeal_saved_activities_v1";

    const $ = (id) => document.getElementById(id);
    const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

    const recommendBtn = $("recommend-btn");
    const shuffleBtn = $("shuffle-btn");
    const resetBtn = $("reset-btn");

    const timeSelect = $("time-select");
    const moodInput = $("mood-input");

    const resultsSub = $("results-sub");
    const emptyState = $("empty-state");
    const grid = $("activity-grid");
    const toast = $("toast");
    const err = $("err");

    const savedEmpty = $("saved-empty");
    const savedList = $("saved-list");
    const clearSavedBtn = $("clear-saved");
    const clearMsg = $("clear-msg");

    // (Optional) Preferences list placeholder: later this comes from Submodule 1
    // LIST/COLLECTION example for "hobbies/preferences"
    const userHobbies = ["music", "fitness", "outdoors"]; // demo list

    let vibeChoice = "either";
    let locChoice = "either";
    let lastPicks = [];

    const getSaved = () => {
      try {
        const raw = localStorage.getItem(SAVED_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        return Array.isArray(arr) ? arr : [];
      } catch { return []; }
    };

    const setSaved = (ids) => localStorage.setItem(SAVED_KEY, JSON.stringify(ids));
    const isSaved = (id) => getSaved().includes(id);

    const setPillActive = (groupSelector, value) => {
      document.querySelectorAll(groupSelector).forEach(btn => {
        const isActive = btn.dataset.value === value;
        btn.style.borderColor = isActive ? "rgba(74,158,255,0.35)" : "#333";
        btn.style.background = isActive ? "rgba(74,158,255,0.08)" : "#161616";
        btn.style.color = isActive ? "#eaf4ff" : "#eee";
      });
    };

    const tokenize = (s) => (s || "")
      .toLowerCase()
      .split(/[^a-z0-9]+/g)
      .filter(Boolean)
      .slice(0, 8);

    // PROCEDURE: recommendActivities (AP: sequencing + selection + iteration)
    const scoreActivity = (a, time, vibe, loc, moodTokens) => {
      let score = 0;

      // SELECTION: must fit time
      if (a.min > time) return -9999;

      // SELECTION: match vibe/location when chosen
      if (vibe !== "either" && a.vibe !== "either") score += (a.vibe === vibe) ? 10 : -4;
      if (loc !== "either" && a.loc !== "either") score += (a.loc === loc) ? 10 : -4;

      // Bonus: closer to time
      score += Math.round((a.min / time) * 6);

      // Optional mood keyword scoring (connects to Submodule 2 later)
      if (moodTokens.length) {
        const tags = (a.tags || []).map(t => t.toLowerCase());
        let hit = 0;
        // ITERATION: loop through tokens and tags
        for (const tok of moodTokens) if (tags.some(t => t.includes(tok))) hit++;
        score += hit * 5;
      }

      // Optional: small hobby boost (connects to Submodule 1 later)
      if (userHobbies.includes("outdoors") && a.loc === "outdoor") score += 2;

      return score + (Math.random() * 1.5);
    };

    const pickTop = (arr, k) => {
      const out = [];
      const used = new Set();
      for (const item of arr) {
        if (out.length >= k) break;
        if (used.has(item.id)) continue;
        used.add(item.id);
        out.push(item);
      }
      return out;
    };

    // MAIN ACTION (AP: Sequencing)
    const recommendActivities = () => {
      // 1) read mood & hobbies (hobbies is a list + mood keyword)
      const moodTokens = tokenize(moodInput.value);

      // 2) read filters
      const time = Number(timeSelect.value);

      // 3) build request (here: local scoring instead of backend)
      // 4) "call /activity/recommend" (simulated by our procedure)

      // ITERATION: map through dataset, filter, and rank
      const scored = ACTIVITIES
        .map(a => ({ ...a, _score: scoreActivity(a, time, vibeChoice, locChoice, moodTokens) }))
        .filter(a => a._score > -1000)
        .sort((x, y) => y._score - x._score);

      // 5) output 2–4 cards
      const targetCount = clamp(2 + Math.floor(Math.random() * 3), 2, 4);
      const picks = pickTop(scored, targetCount);

      lastPicks = picks.map(p => p.id);
      renderRecommendations(picks);
    };

    const renderTagPills = (a) => {
      const pills = [];
      pills.push(`<span style="border:1px solid #2a2a2a; background:#111; color:#bbb; padding:0.22rem 0.55rem; border-radius:999px; font-size:0.85rem;">⏱ ${a.min}m</span>`);
      pills.push(`<span style="border:1px solid #2a2a2a; background:#111; color:#bbb; padding:0.22rem 0.55rem; border-radius:999px; font-size:0.85rem;">${a.loc === "either" ? "🏠/🌤 either" : (a.loc === "indoor" ? "🏠 indoor" : "🌤 outdoor")}</span>`);
      pills.push(`<span style="border:1px solid #2a2a2a; background:#111; color:#bbb; padding:0.22rem 0.55rem; border-radius:999px; font-size:0.85rem;">${a.vibe === "either" ? "🙂 either" : (a.vibe === "alone" ? "🙂 alone" : "👥 social")}</span>`);
      return pills.join(" ");
    };

    const renderRecommendations = (picks) => {
      err.style.display = "none";
      toast.style.display = "none";

      if (!picks.length) {
        emptyState.style.display = "block";
        grid.style.display = "none";
        grid.innerHTML = "";
        resultsSub.textContent = "No matches. Try setting filters to “Either” or increase time.";
        return;
      }

      resultsSub.textContent = `Showing ${picks.length} activities based on your filters.`;
      emptyState.style.display = "none";
      grid.style.display = "grid";

      grid.innerHTML = picks.map(a => {
        const saved = isSaved(a.id);
        const saveText = saved ? "★ Saved" : "☆ Save";

        return `
          <div style="border: 1px solid #2a2a2a; border-radius: 16px; background:#0b0b0b; padding: 0.95rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25);">
            <div style="display:flex; justify-content:space-between; gap:0.75rem; align-items:flex-start;">
              <div style="min-width:0;">
                <div style="font-size:1.15rem; margin-bottom:0.15rem;">
                  <span style="margin-right:0.35rem;">${a.emoji}</span>
                  <strong>${a.title}</strong>
                </div>
                <div style="color:#bbb; line-height:1.55;">${a.desc}</div>
              </div>
              <button class="save-btn" data-id="${a.id}" type="button"
                style="height: 36px; white-space:nowrap; padding:0 0.7rem; border-radius: 12px; border: 1px solid ${saved ? "rgba(78,255,158,0.35)" : "#333"}; background:${saved ? "rgba(78,255,158,0.08)" : "#161616"}; color:#eee; cursor:pointer;">
                ${saveText}
              </button>
            </div>

            <div style="margin-top:0.7rem; display:flex; gap:0.4rem; flex-wrap: wrap;">
              ${renderTagPills(a)}
            </div>

            <details style="margin-top:0.75rem;">
              <summary style="cursor:pointer; color:#bbb;">Why this was picked</summary>
              <div style="margin-top:0.55rem; color:#ddd; line-height:1.55;">
                • Fits your time (≤ ${Number(timeSelect.value)}m).<br/>
                • Matches vibe/location when possible.<br/>
                • Mood keyword boosts matching tags.
              </div>
            </details>
          </div>
        `;
      }).join("");

      grid.querySelectorAll(".save-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          toggleSave(btn.dataset.id);
        });
      });
    };

    const toggleSave = (id) => {
      try {
        const ids = getSaved();
        const already = ids.includes(id);

        // ITERATION: remove duplicates via Set
        const updated = already ? ids.filter(x => x !== id) : Array.from(new Set([...ids, id]));
        setSaved(updated);

        toast.textContent = already ? "✓ Removed" : "✓ Saved";
        toast.style.display = "inline";
        setTimeout(() => toast.style.display = "none", 1100);

        
        renderSaved();

        if (lastPicks.length) {
          const picks = ACTIVITIES.filter(a => lastPicks.includes(a.id));
          renderRecommendations(picks);
        }
      } catch {
        err.style.display = "inline";
        setTimeout(() => err.style.display = "none", 1400);
      }
    };

    const renderSaved = () => {
      const ids = getSaved();
      const items = ACTIVITIES.filter(a => ids.includes(a.id));

      if (!items.length) {
        savedEmpty.style.display = "block";
        savedList.style.display = "none";
        savedList.innerHTML = "";
        return;
      }

      savedEmpty.style.display = "none";
      savedList.style.display = "flex";
      savedList.innerHTML = items.map(a => `
        <div style="width: 280px; border: 1px solid #2a2a2a; border-radius: 16px; background:#0b0b0b; padding: 0.85rem;">
          <div style="display:flex; justify-content:space-between; gap:0.75rem; align-items:flex-start;">
            <div>
              <div style="font-size:1.05rem;">
                <span style="margin-right:0.35rem;">${a.emoji}</span>
                <strong>${a.title}</strong>
              </div>
              <div style="color:#888; margin-top:0.25rem;">⏱ ${a.min}m • ${a.loc} • ${a.vibe}</div>
            </div>
            <button class="remove-saved" data-id="${a.id}" type="button"
              style="height: 34px; padding:0 0.6rem; border-radius: 12px; border: 1px solid #333; background:#161616; color:#eee; cursor:pointer;">
              ✕
            </button>
          </div>
          <div style="color:#bbb; margin-top:0.55rem; line-height:1.5;">
            ${a.desc}
          </div>
        </div>
      `).join("");

      savedList.querySelectorAll(".remove-saved").forEach(btn => {
        btn.addEventListener("click", () => toggleSave(btn.dataset.id));
      });
    };

    // Buttons
    recommendBtn.addEventListener("click", recommendActivities);
    shuffleBtn.addEventListener("click", recommendActivities);

    resetBtn.addEventListener("click", () => {
      timeSelect.value = "30";
      moodInput.value = "";
      vibeChoice = "either";
      locChoice = "either";
      setPillActive(".vibe-pill", vibeChoice);
      setPillActive(".loc-pill", locChoice);

      lastPicks = [];
      emptyState.style.display = "block";
      grid.style.display = "none";
      grid.innerHTML = "";
      resultsSub.textContent = "Click “Recommend Activities” to generate 2–4 cards.";
      toast.style.display = "none";
      err.style.display = "none";
    });

    // Pill listeners
    document.querySelectorAll(".vibe-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        vibeChoice = btn.dataset.value;
        setPillActive(".vibe-pill", vibeChoice);
      });
    });

    document.querySelectorAll(".loc-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        locChoice = btn.dataset.value;
        setPillActive(".loc-pill", locChoice);
      });
    });

    // Saved clear
    clearSavedBtn.addEventListener("click", () => {
      setSaved([]);
      renderSaved();

      clearMsg.style.display = "inline";
      setTimeout(() => clearMsg.style.display = "none", 1200);

      if (lastPicks.length) {
        const picks = ACTIVITIES.filter(a => lastPicks.includes(a.id));
        renderRecommendations(picks);
      }
    });

    // Init
    setPillActive(".vibe-pill", vibeChoice);
    setPillActive(".loc-pill", locChoice);
    renderSaved();

  } catch (e) {
    console.error("Submodule 4 (Activity Recommender) crashed:", e);
  }
});
</script>
{% endraw %}

<style>
  button:hover:not(:disabled) { transform: translateY(-1px); transition: all 0.15s ease; }
  button:disabled { cursor: not-allowed !important; opacity: 0.6; }
  summary { list-style: none; }
  summary::-webkit-details-marker { display: none; }
  summary::before { content: "▸"; margin-right: 0.45rem; color: #666; }
  details[open] summary::before { content: "▾"; }

  @media (max-width: 900px) {
    #activity-grid { grid-template-columns: 1fr !important; }
  }
</style>
