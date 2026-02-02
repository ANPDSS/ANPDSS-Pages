---
# Jekyll front matter: Configuration metadata for the Jekyll static site generator.
# This section defines how the page is rendered and what data is available in templates.

layout: post # Specifies the layout template ('post') to use for rendering this page.

title: Mood Meal Quest # The title of the page, displayed in the browser tab and page header.

description: > # A multi-line description of the page content, used for SEO and summaries.
  Learn to prompt AI to create your itinerary, data visualization, and learn about the core concepts and limitations of AI!

author: CSP 2025-26 # The author of the page, typically the class or group.

permalink: /mood-meal/ # Custom URL path for the page, overriding the default generated path.

lxdData: # Custom data structure for the page, accessible in Liquid templates as page.lxdData.
  Title: "Mood Meal Modules" # Title for the modules section.
  Description: "Discover personalized meal recommendations based on your mood and preferences!" # Description for the modules.
  Topics: # Array of topic objects, each representing a module in the quest.
    - Title: "Module 1" # Title of the first module.
      Genre: "Introduction" # Genre category for the module.
      Level: 1 # Level number, indicating sequence or difficulty.
      Description: "Profile Builder (Allergens, Hobbies, Artists)" # Detailed description of what the module covers.
      Categories: ["Getting Started", "Introduction"] # List of categories for tagging and filtering.
      Lessons: "/mood-meal/submodule_1/" # Relative URL to the lesson page for this module.
      Image: "/images/mood-meal-module1.png" # Path to the image for the module card.
      Alt: "Mood Meal Module 1" # Alt text for accessibility.
    - Title: "Module 2" # Second module.
      Genre: "Analysis" # Genre.
      Level: 2 # Level.
      Description: "Mood detection" # Description.
      Categories: ["Mood", "Analysis", "User Input"] # Categories.
      Lessons: "/mood-meal/submodule_2/" # Lesson link.
      Image: "/images/mood-meal-module2.png" # Image.
      Alt: "Mood Meal Module 2" # Alt.
    - Title: "Module 3" # Third module.
      Genre: "Recommendation" # Genre.
      Level: 3 # Level.
      Description: "Cooking Plan" # Description.
      Categories: ["AI", "Recommendations", "Meals"] # Categories.
      Lessons: "/mood-meal/submodule_3/" # Lesson.
      Image: "/images/mood-meal-module3.png" # Image.
      Alt: "Mood Meal Module 3" # Alt.
    - Title: "Module 4" # Fourth module.
      Genre: "Details" # Genre.
      Level: 4 # Level.
      Description: "Activity Recommender" # Description.
      Categories: ["Recipes", "Instructions", "Cooking"] # Categories.
      Lessons: "/mood-meal/submodule_4/" # Lesson.
      Image: "/images/mood-meal-module4.png" # Image.
      Alt: "Mood Meal Module 4" # Alt.
    - Title: "Module 5" # Fifth module.
      Genre: "Management" # Genre.
      Level: 5 # Level.
      Description: "Music Recommender" # Description.
      Categories: ["Pantry", "Inventory", "Ingredients"] # Categories.
      Lessons: "/mood-meal/submodule_5/" # Lesson.
      Image: "/images/mood-meal-module5.png" # Image.
      Alt: "Mood Meal Module 5" # Alt.
    - Title: "Module 6" # Sixth module.
      Genre: "Configuration" # Genre.
      Level: 6 # Level.
      Description: "Mood Plan Dashboard & Insights (Aggregator)" # Description.
      Categories: ["Settings", "Preferences", "Configuration"] # Categories.
      Lessons: "/mood-meal/submodule_6/" # Lesson.
      Image: "/images/mood-meal-module6.png" # Image.
      Alt: "Mood Meal Module 6" # Alt.

footer: # Footer navigation data for the page.
  home: /mood-meal/ # Link to the home page of the quest.
  next: /mood-meal/submodule_1/ # Link to the next module.
---

<style>
  /* Styles for the Gantt chart wrapper container */
  .gantt-wrapper {
    background: #000; /* Black background for dark theme */
    color: #fff; /* White text color */
    padding: 2rem; /* Padding around the wrapper */
    margin: 2rem 0; /* Vertical margin */
  }
  
  /* Header section within the Gantt chart */
  .gantt-header {
    max-width: 1400px; /* Maximum width */
    margin: 0 auto 2rem; /* Center and bottom margin */
  }
  
  /* Heading in the header */
  .gantt-header h1 {
    font-size: 2rem; /* Large font size */
    font-weight: bold; /* Bold weight */
    margin-bottom: 0.5rem; /* Bottom margin */
  }
  
  /* Paragraph in the header */
  .gantt-header p {
    color: #9ca3af; /* Gray color */
    font-size: 1rem; /* Standard font size */
  }
  
  /* Card container for the Gantt content */
  .gantt-card {
    max-width: 1400px; /* Max width */
    margin: 0 auto; /* Center */
    background: #1f2937; /* Dark gray background */
    border-radius: 0.5rem; /* Rounded corners */
    padding: 1.5rem; /* Padding */
    border: 1px solid #374151; /* Border */
  }
  
  /* Heading in the card */
  .gantt-card h2 {
    font-size: 1.25rem; /* Font size */
    font-weight: bold; /* Bold */
    margin-bottom: 1.5rem; /* Bottom margin */
  }
  
  /* Timeline container */
  .gantt-timeline {
    position: relative; /* Relative positioning */
    padding-bottom: 50px; /* Bottom padding for date axis */
  }
  
  /* Content area of the timeline */
  .gantt-timeline-content {
    position: relative; /* Relative */
    margin-left: 10rem; /* Left margin for labels */
  }
  
  /* Red line indicating today */
  .gantt-red-line {
    position: absolute; /* Absolute positioning */
    top: -24px; /* Top position */
    bottom: 50px; /* Bottom */
    width: 2px; /* Thin width */
    background: #dc2626; /* Red color */
    z-index: 20; /* High z-index */
  }
  
  /* Label for the red line */
  .gantt-red-line-label {
    position: absolute; /* Absolute */
    top: 0; /* Top */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center */
    color: #dc2626; /* Red */
    font-size: 0.75rem; /* Small font */
    font-weight: bold; /* Bold */
    white-space: nowrap; /* No wrap */
  }
  
  /* Container for grid lines */
  .gantt-grid-lines {
    position: absolute; /* Absolute */
    left: 0; /* Left */
    right: 0; /* Right */
    top: 0; /* Top */
    bottom: 0; /* Bottom */
  }
  
  /* Individual grid line */
  .gantt-grid-line {
    position: absolute; /* Absolute */
    border-left: 1px solid #1f2937; /* Left border */
    height: 100%; /* Full height */
  }
  
  /* Container for task rows */
  .gantt-tasks {
    position: relative; /* Relative */
  }
  
  /* Individual task row */
  .gantt-row {
    display: flex; /* Flexbox */
    align-items: center; /* Center vertically */
    height: 3rem; /* Fixed height */
    position: relative; /* Relative */
    margin-bottom: 0.5rem; /* Bottom margin */
  }
  
  /* Label for the task row */
  .gantt-label {
    width: 10rem; /* Fixed width */
    margin-left: -10rem; /* Negative margin to position */
    padding-right: 1rem; /* Right padding */
    text-align: right; /* Right align */
    font-size: 0.875rem; /* Font size */
    flex-shrink: 0; /* Don't shrink */
  }
  
  /* Container for task bars */
  .gantt-bars {
    flex: 1; /* Take remaining space */
    position: relative; /* Relative */
    height: 100%; /* Full height */
  }
  
  /* Individual task bar */
  .gantt-bar {
    position: absolute; /* Absolute */
    height: 2.25rem; /* Height */
    background: #fff; /* White background */
    border: 2px solid #9ca3af; /* Border */
    border-radius: 0.25rem; /* Rounded */
    display: flex; /* Flex */
    align-items: center; /* Center */
    justify-content: center; /* Center */
    font-size: 0.75rem; /* Small font */
    font-weight: 500; /* Medium weight */
    color: #000; /* Black text */
    transition: background 0.2s; /* Transition */
  }
  
  /* Hover effect for task bar */
  .gantt-bar:hover {
    background: #e5e7eb; /* Light gray on hover */
  }
  
  /* Container for milestones */
  .gantt-milestones {
    position: relative; /* Relative */
    margin-top: 1.5rem; /* Top margin */
    height: 3rem; /* Height */
    display: flex; /* Flex */
    align-items: center; /* Center */
  }
  
  /* Label for milestones */
  .gantt-milestone-label {
    width: 10rem; /* Width */
    margin-left: -10rem; /* Negative margin */
    padding-right: 1rem; /* Padding */
    text-align: right; /* Right align */
    font-size: 0.875rem; /* Font size */
    flex-shrink: 0; /* Don't shrink */
  }
  
  /* Container for milestone bars */
  .gantt-milestone-bars {
    flex: 1; /* Take space */
    position: relative; /* Relative */
    height: 100%; /* Full height */
  }
  
  /* Individual milestone */
  .gantt-milestone {
    position: absolute; /* Absolute */
  }
  
  /* Diamond shape for milestone */
  .gantt-milestone-diamond {
    width: 12px; /* Width */
    height: 12px; /* Height */
    background: #fff; /* White */
    transform: translateX(-50%) rotate(45deg); /* Center and rotate */
    border: 1px solid #9ca3af; /* Border */
  }
  
  /* Text for milestone */
  .gantt-milestone-text {
    position: absolute; /* Absolute */
    top: 24px; /* Below diamond */
    left: 50%; /* Center */
    transform: translateX(-50%); /* Center */
    font-size: 0.75rem; /* Small font */
    white-space: nowrap; /* No wrap */
  }
  
  /* Date axis container */
  .gantt-dates {
    position: absolute; /* Absolute */
    bottom: 0; /* Bottom */
    left: 0; /* Left */
    right: 0; /* Right */
    height: 2.5rem; /* Height */
    border-top: 1px solid #374151; /* Top border */
  }
  
  /* Individual date label */
  .gantt-date {
    position: absolute; /* Absolute */
    top: 8px; /* Top */
    font-size: 0.75rem; /* Small font */
    color: #9ca3af; /* Gray */
    transform: translateX(-50%); /* Center */
  }
  
  /* Table container for Gantt */
  .gantt-table {
    max-width: 1400px; /* Max width */
    margin: 2rem auto 0; /* Center and top margin */
    background: #1f2937; /* Dark background */
    border-radius: 0.5rem; /* Rounded */
    padding: 1.5rem; /* Padding */
    border: 1px solid #374151; /* Border */
  }
  
  /* Heading in table */
  .gantt-table h2 {
    font-size: 1.25rem; /* Font size */
    font-weight: bold; /* Bold */
    margin-bottom: 1rem; /* Bottom margin */
  }
  
  /* Table styles */
  .gantt-table table {
    width: 100%; /* Full width */
    font-size: 0.875rem; /* Font size */
  }
  
  /* Table header */
  .gantt-table th {
    text-align: left; /* Left align */
    padding: 0.75rem; /* Padding */
    border-bottom: 1px solid #374151; /* Bottom border */
    font-weight: 600; /* Semi-bold */
  }
  
  /* Table data */
  .gantt-table td {
    padding: 0.75rem; /* Padding */
    border-bottom: 1px solid #1f2937; /* Bottom border */
  }
  
  /* Table row hover */
  .gantt-table tr:hover {
    background: #111827; /* Darker on hover */
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
// This script generates a dynamic Gantt chart for the project timeline.
// It uses JavaScript to calculate positions and render the chart elements.

(function() {
  // Define the start and end dates for the project timeline.
  // These dates determine the range of the Gantt chart.
  const startDate = new Date('2024-11-20');
  const endDate = new Date('2024-12-15');
  
  // Function to calculate the position of a given date on the timeline as a percentage.
  // This converts a date to a position between 0% and 100% relative to the start and end dates.
  // Parameters:
  // - date: A string or Date object representing the date to position.
  // Returns: A number between 0 and 100 representing the percentage position.
  function getDatePosition(date) {
    const d = new Date(date); // Convert the input to a Date object if it's not already.
    const total = endDate - startDate; // Total duration in milliseconds.
    const current = d - startDate; // Time elapsed from start to the given date in milliseconds.
    // Calculate percentage, clamped between 0 and 100 to handle dates outside the range.
    return Math.max(0, Math.min(100, (current / total) * 100));
  }
  
  // Function to calculate the left position and width for a task block on the timeline.
  // This is used to position the bars representing work periods.
  // Parameters:
  // - start: Start date of the block.
  // - end: End date of the block.
  // Returns: An object with 'left' (percentage from left) and 'width' (percentage width).
  function getBlockPosition(start, end) {
    const startPos = getDatePosition(start); // Get start position.
    const endPos = getDatePosition(end); // Get end position.
    return { left: startPos, width: endPos - startPos }; // Width is the difference.
  }
  
  // Array of tasks, each with a role (assigned person) and blocks (periods of work).
  // Each block has start date, end date, and a label describing the work.
  // This data drives the task bars in the Gantt chart.
  const tasks = [
    {
      role: 'User Accounts (Darshan)', // Person responsible for user account features.
      blocks: [
        { start: '2024-11-20', end: '2024-11-28', label: 'Auth Setup' }, // Setting up authentication.
        { start: '2024-12-02', end: '2024-12-08', label: 'Profile API' }, // Building profile API.
        { start: '2024-12-09', end: '2024-12-13', label: 'Deploy' } // Deployment phase.
      ]
    },
    {
      role: 'Mood Analyzer (Shayan)', // Person for mood analysis feature.
      blocks: [
        { start: '2024-11-22', end: '2024-11-29', label: 'Mood UI' }, // User interface for mood input.
        { start: '2024-12-01', end: '2024-12-09', label: 'Scoring Logic' }, // Logic to score moods.
        { start: '2024-12-10', end: '2024-12-14', label: 'Charts' } // Charts for mood visualization.
      ]
    },
    {
      role: 'Recommendation (Aditya)', // Person for meal recommendations.
      blocks: [
        { start: '2024-11-25', end: '2024-12-02', label: 'Meal Cards' }, // UI for meal cards.
        { start: '2024-12-03', end: '2024-12-11', label: 'Mood→Meal Engine' }, // Engine linking mood to meals.
        { start: '2024-12-12', end: '2024-12-15', label: 'Polish' } // Final polishing.
      ]
    },
    {
      role: 'Recipe Viewer (Neil)', // Person for recipe viewing.
      blocks: [
        { start: '2024-11-21', end: '2024-11-27', label: 'Recipe UI' }, // Recipe user interface.
        { start: '2024-11-28', end: '2024-12-06', label: 'Cooking Mode' }, // Cooking mode feature.
        { start: '2024-12-07', end: '2024-12-13', label: 'Timers & Deploy' } // Timers and deployment.
      ]
    },
    {
      role: 'Pantry Manager (Sathwik)', // Person for pantry management.
      blocks: [
        { start: '2024-11-23', end: '2024-11-30', label: 'Pantry UI' }, // Pantry UI.
        { start: '2024-12-01', end: '2024-12-10', label: 'CRUD & Expiration' }, // Create, read, update, delete and expiration logic.
        { start: '2024-12-11', end: '2024-12-14', label: 'Sync' } // Synchronization.
      ]
    },
    {
      role: 'Shopping List (Perry)', // Person for shopping list.
      blocks: [
        { start: '2024-11-26', end: '2024-12-01', label: 'List UI' }, // Shopping list UI.
        { start: '2024-12-02', end: '2024-12-12', label: 'Auto-Generate Logic' }, // Logic to auto-generate list.
        { start: '2024-12-13', end: '2024-12-15', label: 'Final' } // Final touches.
      ]
    }
  ];
  
  // Array of milestones, key checkpoints in the project.
  // Each has a name and date.
  const milestones = [
    { name: 'Checkpoint #1', date: '2024-11-27' }, // First checkpoint.
    { name: 'Checkpoint #2', date: '2024-12-06' }, // Second checkpoint.
    { name: 'Checkpoint #3', date: '2024-12-13' }, // Third checkpoint.
    { name: 'Final Presentation', date: '2024-12-15' } // Final presentation.
  ];
  
  // Array of date markers for the grid lines on the timeline.
  // These dates have vertical lines to mark important points.
  const dateMarkers = [
    '2024-11-20', '2024-11-25', '2024-11-28', '2024-12-02',
    '2024-12-05', '2024-12-09', '2024-12-12', '2024-12-15'
  ];
  
  // Render the vertical grid lines at each date marker.
  // This creates visual separators on the timeline.
  const gridLines = document.getElementById('gridLines'); // Get the container for grid lines.
  dateMarkers.forEach(date => {
    const pos = getDatePosition(date); // Calculate position.
    const line = document.createElement('div'); // Create a div for the line.
    line.className = 'gantt-grid-line'; // Apply CSS class.
    line.style.left = pos + '%'; // Position it.
    gridLines.appendChild(line); // Add to container.
  });
  
  // Render the task rows with their bars.
  // Each task has a label and multiple bars for work blocks.
  const tasksContainer = document.getElementById('ganttTasks'); // Container for tasks.
  tasks.forEach(task => {
    const row = document.createElement('div'); // Create row div.
    row.className = 'gantt-row'; // CSS class.
    
    const label = document.createElement('div'); // Label for the role.
    label.className = 'gantt-label';
    label.textContent = task.role; // Set text.
    row.appendChild(label); // Add to row.
    
    const bars = document.createElement('div'); // Container for bars.
    bars.className = 'gantt-bars';
    
    // For each work block, create a bar.
    task.blocks.forEach(block => {
      const { left, width } = getBlockPosition(block.start, block.end); // Get position and width.
      const bar = document.createElement('div'); // Bar div.
      bar.className = 'gantt-bar'; // CSS class.
      bar.style.left = left + '%'; // Position.
      bar.style.width = width + '%'; // Width.
      bar.textContent = block.label; // Label text.
      bars.appendChild(bar); // Add to bars container.
    });
    
    row.appendChild(bars); // Add bars to row.
    tasksContainer.appendChild(row); // Add row to container.
  });
  
  // Render the milestones as diamonds with labels.
  // Milestones are key events marked on the timeline.
  const milestoneContainer = document.getElementById('milestoneContainer'); // Container.
  milestones.forEach(milestone => {
    const pos = getDatePosition(milestone.date); // Position.
    const m = document.createElement('div'); // Milestone div.
    m.className = 'gantt-milestone';
    m.style.left = pos + '%'; // Position.
    
    const diamond = document.createElement('div'); // Diamond shape.
    diamond.className = 'gantt-milestone-diamond';
    
    const text = document.createElement('div'); // Text label.
    text.className = 'gantt-milestone-text';
    text.textContent = milestone.name; // Set text.
    
    m.appendChild(diamond); // Add diamond.
    m.appendChild(text); // Add text.
    milestoneContainer.appendChild(m); // Add to container.
  });
  
  // Render the date axis at the bottom with formatted dates.
  // Shows the dates at the bottom of the chart.
  const dateAxis = document.getElementById('dateAxis'); // Container.
  dateMarkers.forEach(date => {
    const pos = getDatePosition(date); // Position.
    const d = new Date(date); // Date object.
    // Format as MM-DD.
    const formatted = String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    
    const dateLabel = document.createElement('div'); // Label div.
    dateLabel.className = 'gantt-date';
    dateLabel.style.left = pos + '%'; // Position.
    dateLabel.textContent = formatted; // Set text.
    dateAxis.appendChild(dateLabel); // Add to container.
  });
  
  // Position the TODAY line on the timeline.
  // This line indicates the current date.
  // By default, uses a forced demo date for demonstration.
  // To use real current date, set FORCE_TODAY to null.
  const FORCE_TODAY = new Date('2024-12-01'); // Demo date; set to null for real today.

  // Function to update the position of the TODAY line.
  // Calculates current date position and sets the line's left style.
  function updateTodayLine() {
    const currentDate = FORCE_TODAY || new Date(); // Use demo or real date.
    const currentPosition = getDatePosition(currentDate); // Get position.
    const todayLine = document.getElementById('todayLine'); // Get the line element.
    todayLine.style.left = currentPosition + '%'; // Set position.
  }

  updateTodayLine(); // Initial update.
  // Update the TODAY line once per day to keep it current without constant updates.
  // Interval is 24 hours in milliseconds.
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
    box-shadow: 0 0 20px rgba(254,255,255,0.5);
    border-color: rgba(255,255,255,0.6);
  }

  @media (max-width: 768px) {
    .modules-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Header section displaying the title and description from front matter data -->
<div class="mood-meal-header">
  <h1>{{ page.lxdData.Title }}</h1>
  <p>{{ page.lxdData.Description }}</p>
</div>

<!-- Grid container for displaying module cards in a responsive layout -->
<div class="modules-grid">
<!-- Liquid template loop to iterate over each topic defined in the front matter -->
{% for topic in page.lxdData.Topics %}
  <!-- Module card for each topic, with dynamic class based on level -->
  <div class="module-card module-card-{{ topic.Level }}">
    <h3>{{ topic.Title }}</h3>
    <div class="module-meta">
      <span class="module-level">{{ topic.Genre }}</span>
      <span class="module-level">Level {{ topic.Level }}</span>
    </div>
    <p class="module-description">{{ topic.Description }}</p>
    <div class="module-categories">
      <!-- Nested loop to display each category tag for the topic -->
      {% for category in topic.Categories %}
      <span class="category-tag">{{ category }}</span>
      {% endfor %}
    </div>
    <a href="{{ site.baseurl }}{{ topic.Lessons }}" class="module-btn">Start Module →</a>
  </div>
{% endfor %}
</div>