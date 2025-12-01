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
  .gantt-wrapper {
    background: #000;
    color: #fff;
    padding: 2rem;
    margin: 2rem 0;
  }
  
  .gantt-header {
    max-width: 1400px;
    margin: 0 auto 2rem;
  }
  
  .gantt-header h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .gantt-header p {
    color: #9ca3af;
    font-size: 1rem;
  }
  
  .gantt-card {
    max-width: 1400px;
    margin: 0 auto;
    background: #1f2937;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 1px solid #374151;
  }
  
  .gantt-card h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .gantt-timeline {
    position: relative;
    padding-bottom: 50px;
  }
  
  .gantt-timeline-content {
    position: relative;
    margin-left: 10rem;
  }
  
  .gantt-red-line {
    position: absolute;
    top: -24px;
    bottom: 50px;
    width: 2px;
    background: #dc2626;
    z-index: 20;
  }
  
  .gantt-red-line-label {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #dc2626;
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;
  }
  
  .gantt-grid-lines {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  
  .gantt-grid-line {
    position: absolute;
    border-left: 1px solid #1f2937;
    height: 100%;
  }
  
  .gantt-tasks {
    position: relative;
  }
  
  .gantt-row {
    display: flex;
    align-items: center;
    height: 3rem;
    position: relative;
    margin-bottom: 0.5rem;
  }
  
  .gantt-label {
    width: 10rem;
    margin-left: -10rem;
    padding-right: 1rem;
    text-align: right;
    font-size: 0.875rem;
    flex-shrink: 0;
  }
  
  .gantt-bars {
    flex: 1;
    position: relative;
    height: 100%;
  }
  
  .gantt-bar {
    position: absolute;
    height: 2.25rem;
    background: #fff;
    border: 2px solid #9ca3af;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #000;
    transition: background 0.2s;
  }
  
  .gantt-bar:hover {
    background: #e5e7eb;
  }
  
  .gantt-milestones {
    position: relative;
    margin-top: 1.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  
  .gantt-milestone-label {
    width: 10rem;
    margin-left: -10rem;
    padding-right: 1rem;
    text-align: right;
    font-size: 0.875rem;
    flex-shrink: 0;
  }
  
  .gantt-milestone-bars {
    flex: 1;
    position: relative;
    height: 100%;
  }
  
  .gantt-milestone {
    position: absolute;
  }
  
  .gantt-milestone-diamond {
    width: 12px;
    height: 12px;
    background: #fff;
    transform: translateX(-50%) rotate(45deg);
    border: 1px solid #9ca3af;
  }
  
  .gantt-milestone-text {
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    white-space: nowrap;
  }
  
  .gantt-dates {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    border-top: 1px solid #374151;
  }
  
  .gantt-date {
    position: absolute;
    top: 8px;
    font-size: 0.75rem;
    color: #9ca3af;
    transform: translateX(-50%);
  }
  
  .gantt-table {
    max-width: 1400px;
    margin: 2rem auto 0;
    background: #1f2937;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 1px solid #374151;
  }
  
  .gantt-table h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .gantt-table table {
    width: 100%;
    font-size: 0.875rem;
  }
  
  .gantt-table th {
    text-align: left;
    padding: 0.75rem;
    border-bottom: 1px solid #374151;
    font-weight: 600;
  }
  
  .gantt-table td {
    padding: 0.75rem;
    border-bottom: 1px solid #1f2937;
  }
  
  .gantt-table tr:hover {
    background: #111827;
  }
</style>

<div class="gantt-wrapper">
  <div class="gantt-header">
    <h1>Meal Recommendation App Timeline</h1>
    <p>CSP Sprint 4 Timeline</p>
  </div>

  <div class="gantt-card">
    <h2>Visual Timeline (Gantt)</h2>
    
    <div class="gantt-timeline">
      <div class="gantt-timeline-content">
        <!-- Red TODAY line -->
        <div class="gantt-red-line" id="todayLine">
          <div class="gantt-red-line-label">TODAY</div>
        </div>

        <!-- Grid lines -->
        <div class="gantt-grid-lines" id="gridLines"></div>

        <!-- Task rows -->
        <div class="gantt-tasks" id="ganttTasks"></div>

        <!-- Milestones -->
        <div class="gantt-milestones">
          <div class="gantt-milestone-label">Milestones</div>
          <div class="gantt-milestone-bars" id="milestoneContainer"></div>
        </div>

        <!-- Date axis -->
        <div class="gantt-dates" id="dateAxis"></div>
      </div>
    </div>
  </div>

  <div class="gantt-table">
    <h2>Visual Timeline (Table)</h2>
    <table>
      <thead>
        <tr>
          <th>Milestone</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Checkpoint #1</td>
          <td>Wed, Nov 27</td>
          <td>FE checkpoint: All static pages, navigation flow working</td>
        </tr>
        <tr>
          <td>Checkpoint #2</td>
          <td>Fri, Dec 6</td>
          <td>BE integration: All endpoints working, FE connected to BE</td>
        </tr>
        <tr>
          <td>Checkpoint #3</td>
          <td>Fri, Dec 13</td>
          <td>Deployment: Backend on AWS, full system integration tested</td>
        </tr>
        <tr>
          <td>Final Presentation</td>
          <td>Sun, Dec 15</td>
          <td>Complete project demo, documentation submitted, AP requirements met</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<script>
(function() {
  const startDate = new Date('2024-11-20');
  const endDate = new Date('2024-12-15');
  
  function getDatePosition(date) {
    const d = new Date(date);
    const total = endDate - startDate;
    const current = d - startDate;
    return Math.max(0, Math.min(100, (current / total) * 100));
  }
  
  function getBlockPosition(start, end) {
    const startPos = getDatePosition(start);
    const endPos = getDatePosition(end);
    return { left: startPos, width: endPos - startPos };
  }
  
  const tasks = [
    {
      role: 'User Accounts (Darshan)',
      blocks: [
        { start: '2024-11-20', end: '2024-11-28', label: 'Auth Setup' },
        { start: '2024-12-02', end: '2024-12-08', label: 'Profile API' },
        { start: '2024-12-09', end: '2024-12-13', label: 'Deploy' }
      ]
    },
    {
      role: 'Mood Analyzer (Shayan)',
      blocks: [
        { start: '2024-11-22', end: '2024-11-29', label: 'Mood UI' },
        { start: '2024-12-01', end: '2024-12-09', label: 'Scoring Logic' },
        { start: '2024-12-10', end: '2024-12-14', label: 'Charts' }
      ]
    },
    {
      role: 'Recommendation (Aditya)',
      blocks: [
        { start: '2024-11-25', end: '2024-12-02', label: 'Meal Cards' },
        { start: '2024-12-03', end: '2024-12-11', label: 'Mood→Meal Engine' },
        { start: '2024-12-12', end: '2024-12-15', label: 'Polish' }
      ]
    },
    {
      role: 'Recipe Viewer (Neil)',
      blocks: [
        { start: '2024-11-21', end: '2024-11-27', label: 'Recipe UI' },
        { start: '2024-11-28', end: '2024-12-06', label: 'Cooking Mode' },
        { start: '2024-12-07', end: '2024-12-13', label: 'Timers & Deploy' }
      ]
    },
    {
      role: 'Pantry Manager (Sathwik)',
      blocks: [
        { start: '2024-11-23', end: '2024-11-30', label: 'Pantry UI' },
        { start: '2024-12-01', end: '2024-12-10', label: 'CRUD & Expiration' },
        { start: '2024-12-11', end: '2024-12-14', label: 'Sync' }
      ]
    },
    {
      role: 'Shopping List (Perry)',
      blocks: [
        { start: '2024-11-26', end: '2024-12-01', label: 'List UI' },
        { start: '2024-12-02', end: '2024-12-12', label: 'Auto-Generate Logic' },
        { start: '2024-12-13', end: '2024-12-15', label: 'Final' }
      ]
    }
  ];
  
  const milestones = [
    { name: 'Checkpoint #1', date: '2024-11-27' },
    { name: 'Checkpoint #2', date: '2024-12-06' },
    { name: 'Checkpoint #3', date: '2024-12-13' },
    { name: 'Final Presentation', date: '2024-12-15' }
  ];
  
  const dateMarkers = [
    '2024-11-20', '2024-11-25', '2024-11-28', '2024-12-02',
    '2024-12-05', '2024-12-09', '2024-12-12', '2024-12-15'
  ];
  
  // Render grid lines
  const gridLines = document.getElementById('gridLines');
  dateMarkers.forEach(date => {
    const pos = getDatePosition(date);
    const line = document.createElement('div');
    line.className = 'gantt-grid-line';
    line.style.left = pos + '%';
    gridLines.appendChild(line);
  });
  
  // Render tasks
  const tasksContainer = document.getElementById('ganttTasks');
  tasks.forEach(task => {
    const row = document.createElement('div');
    row.className = 'gantt-row';
    
    const label = document.createElement('div');
    label.className = 'gantt-label';
    label.textContent = task.role;
    row.appendChild(label);
    
    const bars = document.createElement('div');
    bars.className = 'gantt-bars';
    
    task.blocks.forEach(block => {
      const { left, width } = getBlockPosition(block.start, block.end);
      const bar = document.createElement('div');
      bar.className = 'gantt-bar';
      bar.style.left = left + '%';
      bar.style.width = width + '%';
      bar.textContent = block.label;
      bars.appendChild(bar);
    });
    
    row.appendChild(bars);
    tasksContainer.appendChild(row);
  });
  
  // Render milestones
  const milestoneContainer = document.getElementById('milestoneContainer');
  milestones.forEach(milestone => {
    const pos = getDatePosition(milestone.date);
    const m = document.createElement('div');
    m.className = 'gantt-milestone';
    m.style.left = pos + '%';
    
    const diamond = document.createElement('div');
    diamond.className = 'gantt-milestone-diamond';
    
    const text = document.createElement('div');
    text.className = 'gantt-milestone-text';
    text.textContent = milestone.name;
    
    m.appendChild(diamond);
    m.appendChild(text);
    milestoneContainer.appendChild(m);
  });
  
  // Render date axis
  const dateAxis = document.getElementById('dateAxis');
  dateMarkers.forEach(date => {
    const pos = getDatePosition(date);
    const d = new Date(date);
    const formatted = String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    
    const dateLabel = document.createElement('div');
    dateLabel.className = 'gantt-date';
    dateLabel.style.left = pos + '%';
    dateLabel.textContent = formatted;
    dateAxis.appendChild(dateLabel);
  });
  
  // Position TODAY line
  // By default this will use a forced demo date so the line appears at 2024-12-01
  // Change FORCE_TODAY to null to use the real current date instead.
  const FORCE_TODAY = new Date('2024-12-01'); // set to null to use actual today

  function updateTodayLine() {
    const currentDate = FORCE_TODAY || new Date();
    const currentPosition = getDatePosition(currentDate);
    const todayLine = document.getElementById('todayLine');

    todayLine.style.left = currentPosition + '%';
  }

  updateTodayLine();
  // Update once per day (24 hours). This keeps the line fresh on page without heavy timers.
  setInterval(updateTodayLine, 24 * 60 * 60 * 1000);
})();
</script>

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