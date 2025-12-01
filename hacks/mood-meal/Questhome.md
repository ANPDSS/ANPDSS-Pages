---
layout: post
title: Mood Meal Quest
description: >
  Learn to prompt AI to create your itinerary, data visualization, and learn about the core concepts and limitations of AI!
author: CSP 2025-26
permalink: /mood-meal/
lxdData:
  Title: "Mood Meal Modules"
  Description: "Discover personalized meal recommendations based on your mood and preferences!"
  Topics:
    - Title: "Module 1"
      Genre: "Introduction"
      Level: 1
      Description: "Introduction to Mood Meal"
      Categories: ["Getting Started", "Introduction"]
      Lessons: "/mood-meal/submodule_1/"
      Image: "/images/mood-meal-module1.png"
      Alt: "Mood Meal Module 1"
    - Title: "Module 2"
      Genre: "Analysis"
      Level: 2
      Description: "Mood Analysis and Tracking"
      Categories: ["Mood", "Analysis", "User Input"]
      Lessons: "/mood-meal/submodule_2/"
      Image: "/images/mood-meal-module2.png"
      Alt: "Mood Meal Module 2"
    - Title: "Module 3"
      Genre: "Recommendation"
      Level: 3
      Description: "Meal Recommendation Engine"
      Categories: ["AI", "Recommendations", "Meals"]
      Lessons: "/mood-meal/submodule_3/"
      Image: "/images/mood-meal-module3.png"
      Alt: "Mood Meal Module 3"
    - Title: "Module 4"
      Genre: "Details"
      Level: 4
      Description: "Recipe Details and Instructions"
      Categories: ["Recipes", "Instructions", "Cooking"]
      Lessons: "/mood-meal/submodule_4/"
      Image: "/images/mood-meal-module4.png"
      Alt: "Mood Meal Module 4"
    - Title: "Module 5"
      Genre: "Management"
      Level: 5
      Description: "Pantry and Inventory Management"
      Categories: ["Pantry", "Inventory", "Ingredients"]
      Lessons: "/mood-meal/submodule_5/"
      Image: "/images/mood-meal-module5.png"
      Alt: "Mood Meal Module 5"
    - Title: "Module 6"
      Genre: "Configuration"
      Level: 6
      Description: "Settings and User Preferences"
      Categories: ["Settings", "Preferences", "Configuration"]
      Lessons: "/mood-meal/submodule_6/"
      Image: "/images/mood-meal-module6.png"
      Alt: "Mood Meal Module 6"
footer:
  home: /mood-meal/
  next: /mood-meal/submodule_1/
---

<style>
  .gantt-container {
    max-width: 900px;
    margin: 2rem auto;
    background: rgba(0,0,0,0.45);
    padding: 1.5rem;
    border-radius: 15px;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(8px);
    color: white;
  }

  .gantt-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .gantt-chart {
    display: grid;
    grid-template-columns: 150px repeat(6, 1fr);
    gap: 8px;
    align-items: center;
  }

  .gantt-label {
    font-weight: 600;
    text-align: right;
    padding-right: 8px;
  }

  .gantt-bar {
    height: 22px;
    border-radius: 10px;
    opacity: 0.85;
  }

  .m1 { background: #ff00ff; }
  .m2 { background: #00ffff; }
  .m3 { background: #00ff88; }
  .m4 { background: #ff8800; }
  .m5 { background: #ff66cc; }
  .m6 { background: #8866ff; }
</style>

<div class="gantt-container">
  <div class="gantt-title">📅 Mood Meal Module Timeline</div>

  <div class="gantt-chart">
    <div></div>
    <div>Week 1</div>
    <div>Week 2</div>
    <div>Week 3</div>
    <div>Week 4</div>
    <div>Week 5</div>
    <div>Week 6</div>

    <div class="gantt-label">Module 1 — Intro</div>
    <div class="gantt-bar m1"></div>
    <div></div><div></div><div></div><div></div><div></div>

    <div class="gantt-label">Module 2 — Analysis</div>
    <div></div>
    <div class="gantt-bar m2"></div>
    <div></div><div></div><div></div><div></div>

    <div class="gantt-label">Module 3 — Recommendations</div>
    <div></div><div></div>
    <div class="gantt-bar m3"></div>
    <div></div><div></div><div></div>

    <div class="gantt-label">Module 4 — Recipes</div>
    <div></div><div></div><div></div>
    <div class="gantt-bar m4"></div>
    <div></div><div></div>

    <div class="gantt-label">Module 5 — Pantry Tools</div>
    <div></div><div></div><div></div><div></div>
    <div class="gantt-bar m5"></div>
    <div></div>

    <div class="gantt-label">Module 6 — Settings</div>
    <div></div><div></div><div></div><div></div><div></div>
    <div class="gantt-bar m6"></div>
  </div>
</div>

<style>
  body, html, .page-content, .wrapper {
    background-image: url('{{ site.baseurl }}/images/12435.png') !important;
    background-size: cover !important;
    background-position: center !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
  }

  .page-content {
    background-image: url('{{ site.baseurl }}/images/12435.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  @keyframes glow-rotate-1 {
    0% { box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff; }
    33% { box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
    66% { box-shadow: 0 0 20px #ff6b6b, 0 0 40px #ff6b6b, 0 0 60px #ff6b6b; }
    100% { box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff; }
  }

  @keyframes glow-rotate-2 {
    0% { box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
    33% { box-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88; }
    66% { box-shadow: 0 0 20px #4169ff, 0 0 40px #4169ff, 0 0 60px #4169ff; }
    100% { box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
  }

  @keyframes glow-rotate-3 {
    0% { box-shadow: 0 0 20px #ff6bff, 0 0 40px #ff6bff, 0 0 60px #ff6bff; }
    33% { box-shadow: 0 0 20px #6bffff, 0 0 40px #6bffff, 0 0 60px #6bffff; }
    66% { box-shadow: 0 0 20px #6bff88, 0 0 40px #6bff88, 0 0 60px #6bff88; }
    100% { box-shadow: 0 0 20px #ff6bff, 0 0 40px #ff6bff, 0 0 60px #ff6bff; }
  }

  @keyframes glow-rotate-4 {
    0% { box-shadow: 0 0 20px #ffaa00, 0 0 40px #ffaa00, 0 0 60px #ffaa00; }
    33% { box-shadow: 0 0 20px #ff6600, 0 0 40px #ff6600, 0 0 60px #ff6600; }
    66% { box-shadow: 0 0 20px #ffdd00, 0 0 40px #ffdd00, 0 0 60px #ffdd00; }
    100% { box-shadow: 0 0 20px #ffaa00, 0 0 40px #ffaa00, 0 0 60px #ffaa00; }
  }

  @keyframes glow-rotate-5 {
    0% { box-shadow: 0 0 20px #ff66cc, 0 0 40px #ff66cc, 0 0 60px #ff66cc; }
    33% { box-shadow: 0 0 20px #66ffdd, 0 0 40px #66ffdd, 0 0 60px #66ffdd; }
    66% { box-shadow: 0 0 20px #ff99dd, 0 0 40px #ff99dd, 0 0 60px #ff99dd; }
    100% { box-shadow: 0 0 20px #ff66cc, 0 0 40px #ff66cc, 0 0 60px #ff66cc; }
  }

  @keyframes glow-rotate-6 {
    0% { box-shadow: 0 0 20px #8866ff, 0 0 40px #8866ff, 0 0 60px #8866ff; }
    33% { box-shadow: 0 0 20px #aa66ff, 0 0 40px #aa66ff, 0 0 60px #aa66ff; }
    66% { box-shadow: 0 0 20px #6688ff, 0 0 40px #6688ff, 0 0 60px #6688ff; }
    100% { box-shadow: 0 0 20px #8866ff, 0 0 40px #8866ff, 0 0 60px #8866ff; }
  }

  .mood-meal-header {
    text-align: center;
    padding: 2rem 0;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
    border-radius: 15px;
    margin-bottom: 3rem;
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
    border: 2px solid rgba(138, 43, 226, 0.3);
  }

  .mood-meal-header h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(138, 43, 226, 0.8);
  }

  .mood-meal-header p {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
    opacity: 0.95;
  }

  .modules-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .module-card {
    position: relative;
    padding: 2rem;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.8);
  }

  .module-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  .module-card:hover::before {
    opacity: 0.3;
  }

  .module-card > * {
    position: relative;
    z-index: 1;
  }

  .module-card-1 {
    background: linear-gradient(135deg, #1a0a1f 0%, #2d1b3d 100%);
  }
  .module-card-1::before {
    background: linear-gradient(135deg, #ff00ff 0%, #ff0088 100%);
  }

  .module-card-2 {
    background: linear-gradient(135deg, #0a1a2e 0%, #1b2d3d 100%);
  }
  .module-card-2::before {
    background: linear-gradient(135deg, #00ffff 0%, #0088ff 100%);
  }

  .module-card-3 {
    background: linear-gradient(135deg, #1a0a2e 0%, #1b1d3d 100%);
  }
  .module-card-3::before {
    background: linear-gradient(135deg, #ff00ff 0%, #00ffff 90%, #00ff88 100%);
  }

  .module-card-4 {
    background: linear-gradient(135deg, #2e1a0a 0%, #3d2d1b 100%);
  }
  .module-card-4::before {
    background: linear-gradient(135deg, #ffaa00 0%, #ff6600 100%);
  }

  .module-card-5 {
    background: linear-gradient(135deg, #1a2e2e 0%, #1b3d3d 100%);
  }
  .module-card-5::before {
    background: linear-gradient(135deg, #ff66cc 0%, #66ffdd 100%);
  }

  .module-card-6 {
    background: linear-gradient(135deg, #1a0a2e 0%, #2d1b3d 100%);
  }
  .module-card-6::before {
    background: linear-gradient(135deg, #8866ff 0%, #aa66ff 100%);
  }

  .module-card:hover {
    transform: translateY(-10px) scale(1.02);
  }

  .module-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.8rem;
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .module-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: rgba(255,255,255,0.9);
  }

  .module-level {
    background: rgba(255,255,255,0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
  }

  .module-description {
    color: rgba(255,255,255,0.9);
    font-size: 1.1rem;
    margin: 1rem 0;
    line-height: 1.6;
  }

  .module-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .category-tag {
    background: rgba(255,255,255,0.1);
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.85rem;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .module-card:hover .category-tag {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(255,255,255,0.3);
  }

  .module-btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    background: rgba(255,255,255,0.1);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(10px);
  }

  .module-btn:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0 20px rgba(255,255,255,0.5);
    border-color: rgba(255,255,255,0.6);
  }

  @media (max-width: 768px) {
    .modules-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="mood-meal-header">
  <h1>{{ page.lxdData.Title }}</h1>
  <p>{{ page.lxdData.Description }}</p>
</div>

<div class="modules-grid">
{% for topic in page.lxdData.Topics %}
  <div class="module-card module-card-{{ topic.Level }}">
    <h3>{{ topic.Title }}</h3>
    <div class="module-meta">
      <span class="module-level">{{ topic.Genre }}</span>
      <span class="module-level">Level {{ topic.Level }}</span>
    </div>
    <p class="module-description">{{ topic.Description }}</p>
    <div class="module-categories">
      {% for category in topic.Categories %}
      <span class="category-tag">{{ category }}</span>
      {% endfor %}
    </div>
    <a href="{{ site.baseurl }}{{ topic.Lessons }}" class="module-btn">Start Module →</a>
  </div>
{% endfor %}
</div>