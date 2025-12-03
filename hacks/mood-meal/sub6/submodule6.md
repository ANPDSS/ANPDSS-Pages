---
layout: post
title: "Submodule 6"
description: "Smart Shopping List Generator"
permalink: /mood-meal/submodule_6/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 6
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/submodule_5/
  home: /mood-meal/
---
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Mood Plan Dashboard</title>
<style>

    .container {
        max-width: 800px;
        margin: auto;
    }
    h1, h2, h3 {
        color: #333;
    }
    .card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    button {
        padding: 12px 20px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
    .btn-main {
        background: color #3b82f6;
        color: white;
        width: 100%;
        margin-bottom: 15px;
    }
    .section-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    .hidden { display: none; }
    .favorite { color: red; }

    .moodSelect {
        background: white;
    }

    .card, 
.card * {
    color: #333 !important; /* forces dark, readable text */
}

</style>
</head>
<body>
<div class="container">

    <h1>Mood Plan Dashboard</h1>
    <p>Generate personalized plans based on your mood</p>

    <!-- User Preferences -->
    <div class="card">
        <h2>Your Preferences</h2>

        <label>Mood:</label>
        <select id="moodSelect">
            <option value="happy">Happy </option>
            <option value="energetic">Energetic ⚡</option>
            <option value="calm">Calm </option>
            <option value="focused">Focused </option>
        </select>

        <br><br>

        <label>Allergens:</label><br>
        <label><input type="checkbox" value="gluten" class="allergenBox"> Gluten</label>
        <label><input type="checkbox" value="dairy" class="allergenBox"> Dairy</label>
    </div>

    <!-- Generate button -->
    <button class="btn-main" onclick="generatePlan()"> Generate Mood Plan</button>

    <!-- Current Plan -->
    <div id="currentPlan" class="card hidden"></div>

    <!-- Buttons -->
    <div style="display: flex; gap: 10px;">
        <button onclick="toggleHistory()" class="card" style="flex:1;"> Saved Plans</button>
        <button onclick="toggleTrends()" class="card" style="flex:1;"> Trends</button>
    </div>

    <!-- Saved Plans -->
    <div id="historySection" class="card hidden"></div>

    <!-- Trends -->
    <div id="trendsSection" class="card hidden"></div>

</div>

<script>
// ----- Data -----
const MEALS = [
  { id: 1, name: 'Avocado Toast', mood: 'energetic', allergens: ['gluten'], energy: 8 },
  { id: 2, name: 'Berry Smoothie Bowl', mood: 'happy', allergens: ['dairy'], energy: 9 },
  { id: 3, name: 'Chicken Stir Fry', mood: 'focused', allergens: [], energy: 7 },
  { id: 4, name: 'Greek Salad', mood: 'calm', allergens: ['dairy'], energy: 6 },
  { id: 5, name: 'Veggie Burger', mood: 'energetic', allergens: ['gluten'], energy: 8 },
];

const ACTIVITIES = [
  { id: 1, name: 'Go for a run', mood: 'energetic', hobby: 'sports', intensity: 9 },
  { id: 2, name: 'Paint or draw', mood: 'calm', hobby: 'arts', intensity: 3 },
  { id: 3, name: 'Read a book', mood: 'focused', hobby: 'reading', intensity: 2 },
  { id: 4, name: 'Dance party', mood: 'happy', hobby: 'music', intensity: 8 },
  { id: 5, name: 'Yoga session', mood: 'calm', hobby: 'wellness', intensity: 4 },
];

const SONGS = [
  { id: 1, title: 'Good Vibes', artist: 'The Cheerful', mood: 'happy', genre: 'pop' },
  { id: 2, title: 'Focus Flow', artist: 'Study Beats', mood: 'focused', genre: 'lofi' },
  { id: 3, title: 'Calm Waters', artist: 'Peaceful Mind', mood: 'calm', genre: 'ambient' },
  { id: 4, title: 'Energy Boost', artist: 'Power Up', mood: 'energetic', genre: 'electronic' },
  { id: 5, title: 'Sunrise Melody', artist: 'Morning Light', mood: 'happy', genre: 'indie' },
  { id: 6, title: 'Deep Thoughts', artist: 'Contemplation', mood: 'focused', genre: 'classical' },
];

let savedPlans = JSON.parse(localStorage.getItem("plans") || "[]");
let favorites = new Set(JSON.parse(localStorage.getItem("favorites") || "[]"));
let currentPlan = null;

// ----- Generate Mood Plan -----
function generatePlan() {
    const mood = document.getElementById("moodSelect").value;
    const allergens = [...document.querySelectorAll(".allergenBox:checked")].map(a => a.value);

    // Meals
    const safeMeals = MEALS.filter(m => !m.allergens.some(a => allergens.includes(a)));
    safeMeals.forEach(m => m.score = (m.mood === mood ? 10 : 5));
    safeMeals.sort((a,b) => b.score - a.score);

    // Activities
    ACTIVITIES.forEach(a => a.score = (a.mood === mood ? 10 : 5) + a.intensity);
    ACTIVITIES.sort((a,b) => b.score - a.score);

    // Songs
    SONGS.forEach(s => s.score = (s.mood === mood ? 10 : 3));
    SONGS.sort((a,b)=>b.score-a.score);

    currentPlan = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        mood,
        meal: safeMeals[0],
        activity: ACTIVITIES[0],
        songs: SONGS.slice(0, 3)
    };

    displayCurrentPlan();
}

// ----- Display Current Plan -----
function displayCurrentPlan() {
    const div = document.getElementById("currentPlan");
    div.classList.remove("hidden");

    div.innerHTML = `
        <h2>Your Mood Plan</h2>

        <button onclick="toggleFavorite(${currentPlan.id})"
            style="float:right; font-size:20px; background:none;">
            <span class="${favorites.has(currentPlan.id) ? 'favorite':''}"></span>
        </button>

        <p><strong>Meal:</strong> ${currentPlan.meal.name} (${currentPlan.meal.energy}/10 energy)</p>
        <p><strong>Activity:</strong> ${currentPlan.activity.name} (${currentPlan.activity.intensity}/10 intensity)</p>

        <h3>Songs:</h3>
        <ul>
            ${currentPlan.songs.map(s => `<li>${s.title} - ${s.artist}</li>`).join("")}
        </ul>

        <button onclick="savePlan()" style="margin-top:10px;"> Save Plan</button>
    `;
}

// ----- Save Plan -----
function savePlan() {
    if (!currentPlan) return;
    savedPlans.push(currentPlan);
    localStorage.setItem("plans", JSON.stringify(savedPlans));
    alert("Saved!");
}

// ----- Favorites -----
function toggleFavorite(id) {
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);

    localStorage.setItem("favorites", JSON.stringify([...favorites]));
    displayCurrentPlan();
    showHistory();
}

// ----- History -----
function toggleHistory() {
    document.getElementById("historySection").classList.toggle("hidden");
    showHistory();
}

function showHistory() {
    const div = document.getElementById("historySection");

    if (savedPlans.length === 0) {
        div.innerHTML = "<p>No saved plans.</p>";
        return;
    }

    div.innerHTML = "<h2>Saved Plans</h2>";
    savedPlans.slice().reverse().forEach(plan => {
        div.innerHTML += `
            <div class="card" style="margin:10px 0;">
                <div style="display:flex; justify-content:space-between;">
                    <div>
                        <strong>${plan.mood}</strong><br>
                        <span>${plan.timestamp}</span>
                    </div>
                    <button onclick="toggleFavorite(${plan.id})" style="font-size:20px; background:none;">
                        <span class="${favorites.has(plan.id) ? 'favorite':''}"></span>
                    </button>
                </div>
                <p>Meal: ${plan.meal.name}</p>
                <p>Activity: ${plan.activity.name}</p>
                <p>${plan.songs.length} songs</p>
            </div>`;
    });
}

// ----- Trends -----
function toggleTrends() {
    document.getElementById("trendsSection").classList.toggle("hidden");
    showTrends();
}

function showTrends() {
    const div = document.getElementById("trendsSection");

    if (savedPlans.length === 0) {
        div.innerHTML = "<p>No trends yet.</p>";
        return;
    }

    const moodCounts = {};
    const activityCounts = {};

    savedPlans.forEach(p => {
        moodCounts[p.mood] = (moodCounts[p.mood] || 0) + 1;
        activityCounts[p.activity.name] = (activityCounts[p.activity.name] || 0) + 1;
    });

    const topMood = Object.entries(moodCounts).sort((a,b)=>b[1]-a[1])[0];
    const topActivity = Object.entries(activityCounts).sort((a,b)=>b[1]-a[1])[0];

    div.innerHTML = `
        <h2>Trends & Insights</h2>
        <p><strong>Total Plans:</strong> ${savedPlans.length}</p>
        <p><strong>Most Common Mood:</strong> ${topMood[0]} (${topMood[1]} times)</p>
        <p><strong>Favorite Activity:</strong> ${topActivity[0]} (${topActivity[1]} times)</p>
    `;
}

</script>
</body>
</html>