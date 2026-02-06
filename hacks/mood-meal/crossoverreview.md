---
layout: post
title: "MoodLife - Project Overview & Crossover Review"
description: A comprehensive breakdown of how our MoodLife wellness app works, its technical architecture, team contributions, and crossover feedback.
permalink: /moodlife-crossover-review
toc: true
comments: true
categories: ['Wellness App']
---

<style>
.flow-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
    padding: 15px;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
}
.flow-step {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    color: #1a1a2e;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 0.85em;
    font-weight: 600;
    text-align: center;
    min-width: 120px;
}
.flow-arrow {
    font-size: 1.4em;
    color: #43e97b;
}
.section-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 16px 20px;
    margin: 12px 0;
}
.section-card h4 {
    margin: 0 0 8px 0;
    color: #43e97b;
}
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin: 20px 0;
}
.team-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 18px;
}
.team-card h4 {
    margin: 0 0 4px 0;
    color: #4facfe;
}
.team-card .role {
    font-size: 0.8em;
    color: #f093fb;
    margin-bottom: 6px;
    font-weight: 600;
}
.team-card .superpower {
    font-size: 0.75em;
    color: #ffd700;
    margin-bottom: 10px;
    font-style: italic;
    padding: 4px 8px;
    background: rgba(255, 215, 0, 0.1);
    border-radius: 4px;
    display: inline-block;
}
.team-card ul {
    margin: 0;
    padding-left: 18px;
    font-size: 0.9em;
}
.team-card li {
    margin-bottom: 4px;
}
.tech-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.9em;
}
.tech-table th, .tech-table td {
    padding: 10px 14px;
    border: 1px solid rgba(255,255,255,0.15);
    text-align: left;
}
.tech-table th {
    background: rgba(67, 233, 123, 0.2);
    color: #43e97b;
    font-weight: 600;
}
.csp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 14px;
    margin: 16px 0;
}
.csp-card {
    background: rgba(255,255,255,0.05);
    border-left: 4px solid #43e97b;
    border-radius: 0 8px 8px 0;
    padding: 14px 16px;
}
.csp-card h4 {
    margin: 0 0 6px 0;
    font-size: 0.95em;
    color: #4facfe;
}
.csp-card p {
    margin: 0;
    font-size: 0.85em;
    opacity: 0.9;
}
.feedback-section {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 18px;
    margin: 14px 0;
}
.feedback-section h4 {
    margin: 0 0 10px 0;
    color: #f093fb;
}
.feedback-section .rating {
    font-weight: 700;
    color: #ffd700;
}
.feedback-section .pro { color: #43e97b; font-weight: 600; }
.feedback-section .grow { color: #ff6b6b; font-weight: 600; }
.comment-box {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px;
    padding: 14px 18px;
    margin: 10px 0;
    font-size: 0.9em;
}
.comment-box .comment-author {
    font-weight: 700;
    color: #4facfe;
    margin-bottom: 4px;
}
.comment-box .comment-date {
    font-size: 0.75em;
    color: rgba(255,255,255,0.4);
    margin-bottom: 8px;
}
</style>

## How MoodLife Works

MoodLife is a **personalized wellness platform** that uses AI-powered mood detection to deliver tailored recommendations for meals, music, activities, and clothing. Users log their mood, set preferences, connect with friends who share similar vibes, and receive Gemini AI-generated plans that adapt to how they feel in real time.

### User Flow

<div class="flow-container">
    <div class="flow-step">Login / Sign Up</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Log Mood (0&#8211;100)</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Check Weather</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Get AI Plan</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Browse Reccomendations</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step"> Connect With Other Users</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Track Progress</div>
</div>

### Core Features

<div class="section-card">
<h4>Mood Tracking & Categorization</h4>
Users log a mood score from 0 to 100 along with custom tags. The system automatically categorizes each entry: <strong>Stressed/Anxious</strong> (0&#8211;40), <strong>Tired/Low Energy</strong> (41&#8211;60), <strong>Happy/Neutral</strong> (61&#8211;80), or <strong>Energetic/Excited</strong> (81&#8211;100). Full mood history and statistics are queryable through the API.
</div>

<div class="section-card">
<h4>Gemini AI&#8211;Powered Recommendations</h4>
After logging a mood, users can generate a personalized plan via <code>POST /api/moodmeal/plan</code>. The backend builds a detailed prompt combining mood score, category, tags, dietary restrictions, allergies, cuisine preferences, music tastes, activity interests, and live weather data, then sends it to <strong>Google Gemini 2.5 Flash</strong>. The response is parsed into structured JSON: 3 meals, 3 activities, 3 music picks, and 2 clothing suggestions. Users can refresh for new results or provide feedback to refine recommendations.
</div>

<div class="section-card">
<h4>Preference System</h4>
Users configure their profile with dietary restrictions (vegan, gluten-free, etc.), allergies, preferred cuisines, favorite music genres/artists, and preferred activities. These preferences are stored in the <code>moodmeal_preferences</code> table and feed directly into every Gemini prompt, ensuring recommendations feel personal.
</div>

<div class="section-card">
<h4>Weather & Clothing Recommendations</h4>
The Outfit API (<code>/api/outfit/weather/current</code>) fetches real-time weather from OpenWeather using coordinates or ZIP code. Temperature-based logic maps conditions to outfit suggestions: heavy winter gear below 32&#176;F, light breathable clothing above 81&#176;F, and appropriate layers in between. Weather data also feeds into the Gemini prompt so meal and activity suggestions match the forecast.
</div>

<div class="section-card">
<h4>Friends & Social System</h4>
Users can send friend requests, accept or reject them, and message friends privately. The standout feature is the <strong>Friend Recommendation Algorithm</strong>: it calculates a similarity score between users based on mood patterns (25%), mood categories (15%), music overlap (20%), activity overlap (20%), and cuisine overlap (20%). Users with similar vibes surface as suggested friends.
</div>

<div class="section-card">
<h4>Admin Dashboard & Database Viewer</h4>
Admins access a dedicated dashboard at <code>/db/viewer</code> for inspecting all database tables, row counts, and schemas. The superadmin (<code>Shayanb1</code>) can grant or revoke admin privileges via <code>/api/admin/make-admin</code>. The viewer translates raw foreign keys into human-readable usernames across mood, preference, friend, message, and post tables.
</div>

<div class="section-card">
<h4>Profile Pictures & Identity</h4>
Users upload profile pictures via <code>PUT /api/id/pfp</code>, stored as Base64 in the database. The system supports JPEG, PNG, GIF, and WebP formats with size tiers from thumbnails (50K chars) up to large (1M chars). Profile images are served as proper image responses at <code>/api/id/pfp/image/&lt;uid&gt;</code>.
</div>

---

## Technical Architecture & Data Flow

The system uses a **Jekyll static frontend** communicating with a **Flask (Python) backend** via REST APIs. All data persists in SQLite (dev) or MySQL (production) through SQLAlchemy ORM.

### File Structure

<table class="tech-table">
<tr><th>Layer</th><th>File</th><th>Purpose</th></tr>
<tr><td rowspan="5">Frontend</td><td><code>hacks/mood-meal/Questhome.md</code></td><td>Module quest hub with lesson navigation</td></tr>
<tr><td><code>hacks/mood-meal/outfitHomepage.md</code></td><td>Weather lookup and outfit recommendation UI</td></tr>
<tr><td><code>hacks/mood-meal/admin.md</code></td><td>Admin dashboard and user management interface</td></tr>
<tr><td><code>hacks/mood-meal/testhomepage.md</code></td><td>Main mood-meal test/demo page</td></tr>
<tr><td><code>_includes/microblog_foundation.html</code></td><td>Reusable microblog/comment component</td></tr>
<tr><td rowspan="5">Backend API</td><td><code>api/moodmeal_api.py</code></td><td>Mood CRUD, preferences, statistics</td></tr>
<tr><td><code>api/moodmeal_gemini.py</code></td><td>Gemini AI prompt builder and plan generation</td></tr>
<tr><td><code>api/friend_api.py</code></td><td>Friend requests, recommendations, search</td></tr>
<tr><td><code>api/message_api.py</code></td><td>Private messaging between friends</td></tr>
<tr><td><code>api/Outfit_location_api.py</code></td><td>Weather data and outfit suggestions</td></tr>
<tr><td rowspan="3">Supporting API</td><td><code>api/admin_api.py</code></td><td>Admin checks, user management, privilege control</td></tr>
<tr><td><code>api/pfp.py</code></td><td>Profile picture upload and serving</td></tr>
<tr><td><code>api/jwt_authorize.py</code></td><td>JWT token validation decorator</td></tr>
<tr><td rowspan="5">Models</td><td><code>model/moodmeal_mood.py</code></td><td>MoodMealMood (score, tags, category, timestamp)</td></tr>
<tr><td><code>model/moodmeal_preferences.py</code></td><td>MoodMealPreferences (dietary, music, activities)</td></tr>
<tr><td><code>model/friend.py</code></td><td>Friend + FriendRequest (bidirectional pairs)</td></tr>
<tr><td><code>model/private_message.py</code></td><td>PrivateMessage (sender, receiver, read status)</td></tr>
<tr><td><code>model/user.py</code></td><td>User (credentials, role, profile, school)</td></tr>
<tr><td rowspan="2">Deployment</td><td><code>Dockerfile</code></td><td>Python 3.11, Gunicorn (5 workers, port 8309)</td></tr>
<tr><td><code>docker-compose.yml</code></td><td>Container orchestration with volume mounts</td></tr>
</table>

### How Transactional Data Flows

**Logging a Mood (Shayan):**
<div class="flow-container">
    <div class="flow-step">User submits score + tags</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">POST /api/moodmeal/mood</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Server auto-categorizes (0&#8211;40 = Stressed, etc.)</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Stored with timestamp</div>
</div>

**Generating a Plan (Aditya):**
<div class="flow-container">
    <div class="flow-step">POST /api/moodmeal/plan</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Fetch mood + preferences + weather</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">build_gemini_prompt()</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Gemini API call</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Parse &amp; filter JSON response</div>
</div>

**Facial Mood Scanner (Shayan):**
<div class="flow-container">
    <div class="flow-step">Camera captures face</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">face-api.js analyzes expression</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Convert expression data to mood score (0&#8211;100)</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">POST /api/moodmeal/mood</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Mood stored with timestamp</div>
</div>

**Weather &amp; Outfit Lookup (Darshan):**
<div class="flow-container">
    <div class="flow-step">User enters location</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">GET /api/outfit/weather/current</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">OpenWeather API call</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Parse temperature &amp; conditions</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Display User's Weather()</div>
</div>

**Friend Requests (Perry):**
<div class="flow-container">
    <div class="flow-step">POST /api/friend/request</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Verify not already friends</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Create pending request</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Receiver accepts or rejects</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Bidirectional friend pair created</div>
</div>

**Private Messaging (Neil):**
<div class="flow-container">
    <div class="flow-step">POST /api/message/send</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Verify friendship</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Store message with read status</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">GET /api/message/conversation/&lt;id&gt;</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Track unread count</div>
</div>

**Admin &amp; Database Management (Sathwik):**
<div class="flow-container">
    <div class="flow-step">Admin navigates to /db/viewer</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Verify admin privileges</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Query all tables &amp; schemas</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Resolve foreign keys to usernames</div>
    <span class="flow-arrow">&#8594;</span>
    <div class="flow-step">Render admin dashboard</div>
</div>

### Key API Transactions

| Action | Method & Endpoint | Payload | Server Response |
|--------|-------------------|---------|-----------------|
| Log mood | `POST /api/moodmeal/mood` | `{mood_score, mood_tags}` | Created mood with auto-category |
| Get mood stats | `GET /api/moodmeal/mood/stats` | -- | Average score, common tags, history |
| Save preferences | `POST /api/moodmeal/preferences` | `{dietary, allergies, cuisines, music, activities}` | Stored preference set |
| Generate plan | `POST /api/moodmeal/plan` | `{mood_id, weather, refresh, feedback}` | Meals, activities, music, clothing |
| Send friend request | `POST /api/friend/request` | `{receiver_id}` | Pending request created |
| Get recommendations | `GET /api/friend/recommendations` | -- | Similarity-ranked user list |
| Send message | `POST /api/message/send` | `{receiver_id, content}` | Message with timestamp |
| Get weather | `GET /api/outfit/weather/current` | `?lat=&lon=` or `?zip=` | Temperature, conditions, outfit |

### Authentication Flow

All API calls are secured with **JWT tokens** stored in cookies (`jwt_python_flask`). The `@token_required()` decorator extracts the user UID from the token, queries the database for the matching `User` record, and sets `g.current_user` for the request lifecycle. Role-based access control supports `Admin` and `User` roles, with the superadmin hardcoded as `Shayanb1`.

---

## Team Work Split

<div class="team-grid">

<div class="team-card">
<h4>Aditya</h4>
<div class="role">Scrum Master / Gemini API Lead</div>
<div class="superpower">Intelligent Recommendations &#8212; turns raw mood data into personalized AI-driven plans</div>
<ul>
<li>Sprint planning, stand-ups, and overall project coordination</li>
<li>Gemini API integration (<code>api/moodmeal_gemini.py</code>)</li>
<li><code>build_gemini_prompt()</code> &#8212; assembles mood, preferences, weather, and feedback into structured prompts</li>
<li>Plan generation endpoint (<code>POST /api/moodmeal/plan</code>)</li>
<li>Refresh and feedback loop &#8212; users can regenerate with variation seeds</li>
<li><code>filter_recommendations_by_limit()</code> &#8212; enforces 3 meals, 3 activities, 3 music, 2 clothing</li>
<li>Mood validation and category verification logic</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Gemini prompt builder (api/moodmeal_gemini.py)
def build_gemini_prompt(mood, preferences, weather=None, refresh=False, feedback=None):
    mood_score = mood.get("mood_score")
    mood_category = mood.get("mood_category") or "Unknown"
    mood_tags = mood.get("mood_tags") or []
    dietary = preferences.get("dietary") or []
    cuisines = preferences.get("cuisines") or []
    music = preferences.get("music") or []
    if refresh:
        random_seed = random.randint(1000, 9999)
        refresh_instruction = f"Provide COMPLETELY DIFFERENT suggestions (seed: {random_seed})."
    # ... builds full prompt and calls Gemini 2.5 Flash
```
</details>
</div>

<div class="team-card">
<h4>Sathwik</h4>
<div class="role">Assistant Scrum Master / Admin &amp; Database Management Lead</div>
<div class="superpower">System Control &#8212; built the admin backbone that keeps every table and user in check</div>
<ul>
<li>Assists with sprint tracking and team coordination</li>
<li>Admin API (<code>api/admin_api.py</code>): check status, list users, grant/revoke privileges</li>
<li>Superadmin system with persistent JSON storage (<code>moodmeal_admins.json</code>)</li>
<li>Database viewer route (<code>/db/viewer</code>) &#8212; inspect all tables, schemas, and row counts</li>
<li>User-to-username resolution across mood, friend, message, and post tables</li>
<li>Profile picture system (<code>api/pfp.py</code>): Base64 upload, storage, and image serving</li>
<li>Backend database initialization scripts and schema management</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Admin privilege control (api/admin_api.py)
SUPERADMIN_UID = "Shayanb1"

def is_moodmeal_admin(uid):
    if uid == SUPERADMIN_UID:
        return True
    admins = load_moodmeal_admins()
    return uid in admins

class AdminMakeAdmin(Resource):
    @token_required()
    def post(self):
        current_user = g.current_user
        if current_user.uid != SUPERADMIN_UID:
            return {"message": "Only superadmin can modify admin status"}, 403
        # Grant or revoke admin for target user
```
</details>
</div>

<div class="team-card">
<h4>Neil</h4>
<div class="role">Frontend Developer / Messaging Lead</div>
<div class="superpower">Real-Time Communication &#8212; connects friends through private messaging and conversation tracking</div>
<ul>
<li>Private messaging system (<code>api/message_api.py</code>): send, read, conversation history</li>
<li>Friendship verification middleware (messages restricted to friends only)</li>
<li>Unread message count tracking and conversation sorting</li>
<li>Message read status updates (<code>PUT /api/message/read/&lt;id&gt;</code>)</li>
<li>Frontend chat interface and conversation list UI</li>
<li>Integration testing between messaging frontend and backend endpoints</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Private messaging endpoint (api/message_api.py)
class SendMessage(Resource):
    @token_required()
    def post(self):
        current_user = g.current_user
        data = request.get_json()
        receiver_id = data.get("receiver_id")
        content = data.get("content")
        # Selection: verify friendship before allowing message
        if not Friend.are_friends(current_user.id, receiver_id):
            return {"message": "You can only message friends"}, 403
        message = PrivateMessage(current_user.id, receiver_id, content)
        message.create()
        return {"message": "Message sent", "id": message.id}, 201
```
</details>
</div>

<div class="team-card">
<h4>Perry</h4>
<div class="role">Frontend Developer / Friend Requests Lead</div>
<div class="superpower">Social Connections &#8212; manages the friend request lifecycle from send to accept</div>
<ul>
<li>Friend request system (<code>api/friend_api.py</code>): send, accept, reject, unfriend</li>
<li>Bidirectional friend pair creation with <code>CHECK(_user_id1 &lt; _user_id2)</code> preventing duplicates</li>
<li>Friend list retrieval and search endpoints</li>
<li>Request status management (pending, accepted, rejected)</li>
<li>Frontend friend list, request UI, and friend search interface</li>
<li>Friend model (<code>model/friend.py</code>): Friend + FriendRequest with bidirectional pairs</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Friend request handling (api/friend_api.py)
class FriendRequestAPI(Resource):
    @token_required()
    def post(self):
        current_user = g.current_user
        data = request.get_json()
        receiver_id = data.get("receiver_id")
        # Selection: check if already friends or request exists
        if Friend.are_friends(current_user.id, receiver_id):
            return {"message": "Already friends"}, 400
        if FriendRequest.query.filter_by(
            _sender_id=current_user.id, _receiver_id=receiver_id, _status="pending"
        ).first():
            return {"message": "Request already pending"}, 400
        request_obj = FriendRequest(current_user.id, receiver_id)
        request_obj.create()
        return {"message": "Friend request sent"}, 201
```
</details>
</div>

<div class="team-card">
<h4>Darshan</h4>
<div class="role">Weather & Clothing Recommendations Developer</div>
<div class="superpower">Context-Aware Style &#8212; combines live weather data with mood to dress users right</div>
<ul>
<li>Outfit Location API (<code>api/Outfit_location_api.py</code>): weather by coords or ZIP</li>
<li>OpenWeather API integration for real-time temperature and conditions</li>
<li>Temperature-to-outfit mapping logic (<code>get_outfit_for_temperature()</code>)</li>
<li>5-day forecast endpoint (<code>GET /api/outfit/weather/forecast</code>)</li>
<li>Weather data piped into Gemini prompts for context-aware meal/activity suggestions</li>
<li>Frontend weather display and outfit recommendation cards</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Temperature-based outfit logic (api/Outfit_location_api.py)
OUTFIT_RECOMMENDATIONS = [
    {'temp_min': 0,  'temp_max': 32,  'outfit': 'Heavy winter coat, boots, gloves'},
    {'temp_min': 33, 'temp_max': 50,  'outfit': 'Light jacket, long pants'},
    {'temp_min': 51, 'temp_max': 65,  'outfit': 'Sweater or hoodie, jeans'},
    {'temp_min': 66, 'temp_max': 80,  'outfit': 'T-shirt, shorts or light pants'},
    {'temp_min': 81, 'temp_max': 120, 'outfit': 'Light breathable clothing, hat'}
]
def get_outfit_for_temperature(temp):
    for rec in OUTFIT_RECOMMENDATIONS:
        if rec['temp_min'] <= temp <= rec['temp_max']:
            return rec['outfit']
    return 'Casual clothing'
```
</details>
</div>

<div class="team-card">
<h4>Shayan</h4>
<div class="role">Backend Lead / Mood Input &amp; Preferences Developer</div>
<div class="superpower">Emotion Detection &#8212; captures mood through facial scanning and personalizes the experience with user preferences</div>
<ul>
<li>Facial mood scanner &#8212; camera-based emotion detection using Gemini image analysis</li>
<li>Mood CRUD endpoints (<code>api/moodmeal_api.py</code>): create, read, update, delete mood entries</li>
<li>Mood auto-categorization: Stressed (0&#8211;40), Tired (41&#8211;60), Happy (61&#8211;80), Energetic (81&#8211;100)</li>
<li>Preference system (<code>POST /api/moodmeal/preferences</code>): dietary, allergies, cuisines, music, activities</li>
<li>Mood statistics API (<code>GET /api/moodmeal/mood/stats</code>) &#8212; average score, tag frequency, trends</li>
<li>Frontend mood logging interface, facial scanner UI, and preference builder forms</li>
</ul>
<details><summary><strong>Code Snippet</strong></summary>

```python
# Mood statistics endpoint (api/moodmeal_api.py)
class MoodStatsAPI(Resource):
    @token_required()
    def get(self):
        current_user = g.current_user
        moods = MoodMealMood.query.filter_by(_user_id=current_user.id).all()
        if not moods:
            return {"message": "No mood data found"}, 404
        avg_score = sum(m.mood_score for m in moods) / len(moods)
        # Iteration: collect all tags across entries
        all_tags = [tag for m in moods for tag in (m.mood_tags or [])]
        return {"average_score": avg_score, "total_entries": len(moods), "common_tags": all_tags}
```
</details>
</div>

</div>





## Individual AP CSP Requirements by Team Member

<div class="team-grid">

<div class="team-card">
<h4>Aditya &#8212; AP CSP Alignment</h4>
<div class="role">Gemini API</div>
<ul>
<li><strong>Sequencing:</strong> Plan generation pipeline: fetch mood &#8594; load prefs &#8594; build prompt &#8594; call Gemini &#8594; parse &#8594; filter</li>
<li><strong>Selection:</strong> <code>if refresh</code> generates variation seed; <code>if feedback</code> appends user notes to prompt</li>
<li><strong>Iteration:</strong> <code>filter_recommendations_by_limit()</code> loops through category dict; mood tag processing</li>
<li><strong>List:</strong> <code>VALID_MOOD_CATEGORIES[]</code>, <code>RECOMMENDATION_LIMITS{}</code>, preference arrays in prompt</li>
<li><strong>Procedure:</strong> <code>build_gemini_prompt(mood, preferences, weather, refresh, feedback)</code> with 5 parameters</li>
</ul>
</div>

<div class="team-card">
<h4>Sathwik &#8212; AP CSP Alignment</h4>
<div class="role">Admin & Database Management</div>
<ul>
<li><strong>Sequencing:</strong> Admin check pipeline: extract UID from token &#8594; load admin list from JSON &#8594; verify privileges &#8594; grant or deny access</li>
<li><strong>Selection:</strong> <code>if uid == SUPERADMIN_UID</code> grants full access; <code>if uid in admins</code> allows admin endpoints; role checks for protected routes</li>
<li><strong>Iteration:</strong> Database viewer iterates all tables, columns, and rows to build admin display; loops through users to resolve foreign keys to usernames</li>
<li><strong>List:</strong> <code>admins_set</code> storing admin UIDs; table schema column list in DB viewer; user list for privilege management</li>
<li><strong>Procedure:</strong> <code>is_moodmeal_admin(uid)</code>, <code>load_moodmeal_admins()</code>, <code>save_moodmeal_admins(set)</code> with parameter and return values</li>
</ul>
</div>

<div class="team-card">
<h4>Neil &#8212; AP CSP Alignment</h4>
<div class="role">Messaging</div>
<ul>
<li><strong>Sequencing:</strong> Message flow: user composes message &#8594; POST /api/message/send &#8594; verify friendship &#8594; store with read status &#8594; recipient retrieves via GET conversation</li>
<li><strong>Selection:</strong> <code>if not Friend.are_friends()</code> blocks message from sending; <code>if message.read == False</code> increments unread count; sender vs. receiver display logic</li>
<li><strong>Iteration:</strong> Loops through conversation messages to render chat history; iterates unread messages to compute badge count; cycles through friend list to sort by recent activity</li>
<li><strong>List:</strong> Conversation history array, unread message IDs list, friend conversation list sorted by timestamp</li>
<li><strong>Data Storage:</strong> <code>PrivateMessage</code> model stores sender, receiver, content, read status, and timestamp in database</li>
</ul>
</div>

<div class="team-card">
<h4>Perry &#8212; AP CSP Alignment</h4>
<div class="role">Friend Requests</div>
<ul>
<li><strong>Sequencing:</strong> Friend request lifecycle: send request &#8594; check for existing friendship &#8594; check for duplicate pending request &#8594; create request &#8594; receiver accepts/rejects &#8594; create bidirectional pair</li>
<li><strong>Selection:</strong> <code>if Friend.are_friends()</code> returns already friends; <code>if status == 'pending'</code> allows accept/reject; <code>if request exists</code> prevents duplicates</li>
<li><strong>Iteration:</strong> Loops through friend requests to filter by pending/accepted/rejected status; iterates friend list for search and display</li>
<li><strong>List:</strong> Pending requests list, accepted friends list, friend search results array, request status history</li>
<li><strong>Data Storage:</strong> Bidirectional friend pairs with <code>CHECK(_user_id1 &lt; _user_id2)</code> preventing duplicates; FriendRequest model tracks sender, receiver, and status</li>
</ul>
</div>

<div class="team-card">
<h4>Darshan &#8212; AP CSP Alignment</h4>
<div class="role">Weather & Clothing</div>
<ul>
<li><strong>The Internet:</strong> External OpenWeather API calls with <code>requests.get()</code>; HTTPS data retrieval</li>
<li><strong>Iteration:</strong> <code>for rec in OUTFIT_RECOMMENDATIONS</code> loops temperature ranges until match found</li>
<li><strong>Selection:</strong> <code>if rec['temp_min'] &lt;= temp &lt;= rec['temp_max']</code> selects appropriate outfit</li>
<li><strong>List:</strong> <code>OUTFIT_RECOMMENDATIONS[]</code> list of dicts, <code>WEATHER_CONDITIONS[]</code> category array</li>
<li><strong>Procedure:</strong> <code>get_outfit_for_temperature(temp)</code> with parameter and return value</li>
</ul>
</div>

<div class="team-card">
<h4>Shayan &#8212; AP CSP Alignment</h4>
<div class="role">Mood Input & Preferences</div>
<ul>
<li><strong>Sequencing:</strong> Mood input pipeline: camera captures face &#8594; Gemini analyzes expression &#8594; auto-set mood score &#8594; user confirms or adjusts &#8594; save preferences &#8594; store in database</li>
<li><strong>Selection:</strong> Mood score range &#8594; auto-category assignment (0&#8211;40 = Stressed, 41&#8211;60 = Tired, 61&#8211;80 = Happy, 81&#8211;100 = Energetic); <code>if not moods</code> returns 404</li>
<li><strong>Iteration:</strong> Stats endpoint iterates all mood entries to compute averages and tag frequencies; loops through preference arrays to build user profile</li>
<li><strong>List:</strong> <code>mood_tags[]</code> array, mood history list, aggregated <code>all_tags[]</code> from all entries, dietary/cuisine/music preference arrays</li>
<li><strong>Procedure:</strong> <code>MoodStatsAPI.get()</code> with query filtering by user ID; facial scanner function with camera input and mood score return</li>
</ul>
</div>

</div>






## Crossover Feedback We Received

Here is the feedback we received from other teams during our crossover review:

<div class="feedback-section">
<h4>Laya</h4>
<p><span class="pro">Pro:</span> The group clearly explained the facial mood recognition feature, and the concept was engaging and easy to understand.</p>
<p><span class="grow">Grow:</span> The presentation would benefit from smoother transitions between sections so the project feels more connected as a whole.</p>
<p>Deployed Demonstration: 70% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> The facial recognition mood detection was creative and demonstrated strong technical effort.</p>
<p><span class="grow">Grow (Content):</span> More personalization and clearer integration between features would strengthen the overall experience.</p>
<p><span class="pro">Pro (Value):</span> The project shows strong potential as a meaningful CPT feature centered on emotional awareness.</p>
<p><span class="grow">Grow (Value):</span> Its impact would increase if personalization and feature flow were further refined.</p>
</div>

<div class="feedback-section">
<h4>Nitya</h4>
<p><span class="pro">Pro:</span> The group presented the AI mood recognition feature clearly and showed understanding of how data is stored.</p>
<p><span class="grow">Grow:</span> Showing more personalized UI elements during the demo would make the presentation feel more user-focused.</p>
<p>Deployed Demonstration: 65% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> The system effectively stores mood scores in a database, demonstrating good backend design.</p>
<p><span class="grow">Grow (Content):</span> Adding user profile pictures would improve personalization and user ownership.</p>
<p><span class="pro">Pro (Value):</span> The project is useful for tracking mood data over time in a structured way.</p>
<p><span class="grow">Grow (Value):</span> The experience would feel more valuable if users could visually identify their accounts.</p>
</div>

<div class="feedback-section">
<h4>Virginia</h4>
<p><span class="pro">Pro:</span> The AI mood recognition feature was clearly explained and technically impressive.</p>
<p><span class="grow">Grow:</span> Greater emphasis on personalization would make the presentation more engaging.</p>
<p>Deployed Demonstration: 65% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> The project integrates APIs and backend data storage effectively.</p>
<p><span class="grow">Grow (Content):</span> Enhancing personalization would improve the overall user experience.</p>
<p><span class="pro">Pro (Value):</span> The use of Gemini API and mood tracking adds strong CPT value.</p>
<p><span class="grow">Grow (Value):</span> The project would be more impactful if personalization features were expanded.</p>
</div>

<div class="feedback-section">
<h4>Ethan</h4>
<p><span class="pro">Pro:</span> The live mood scanner was innovative and captured attention during the presentation.</p>
<p><span class="grow">Grow:</span> Demonstrating alternative input methods during deployment would strengthen clarity.</p>
<p>Deployed Demonstration: 70% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> The mood scanning feature is creative and technically interesting.</p>
<p><span class="grow">Grow (Content):</span> Using local storage instead of a manual mood slider would improve automation.</p>
<p><span class="pro">Pro (Value):</span> The project shows strong CPT relevance through real-time user interaction.</p>
<p><span class="grow">Grow (Value):</span> Automating mood input would make the system more practical and effective.</p>
</div>

<div class="feedback-section">
<h4>Moiz</h4>
<p><span class="pro">Pro:</span> The group demonstrated strong backend knowledge, especially with databases and the Gemini API.</p>
<p><span class="grow">Grow:</span> Uneven participation and limited live deployment demonstrations reduced engagement.</p>
<p>Deployed Demonstration: 40% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> The project meaningfully combines facial detection, APIs, and backend data management.</p>
<p><span class="grow">Grow (Content):</span> Several features were shown only in VS Code, and persistent client-side storage was missing.</p>
<p><span class="pro">Pro (Value):</span> MoodLife strongly aligns with CPT goals through APIs and data usage.</p>
<p><span class="grow">Grow (Value):</span> Full automation and visible deployment would significantly improve effectiveness.</p>
</div>

<div class="feedback-section">
<h4>Hope Fune</h4>
<p><span class="pro">Pro:</span> The UI was clean, easy to understand, and the facial recognition demo was engaging.</p>
<p><span class="grow">Grow:</span> A clearer page progression and structure would improve overall flow.</p>
<p>Deployed Demonstration: 75% | <span class="rating">Value: 4.5/5</span></p>
<p><span class="pro">Pro (Content):</span> Real-time facial recognition was well-implemented and visually clear.</p>
<p><span class="grow">Grow (Content):</span> Adding a landing page and admin page would strengthen structure and usability.</p>
<p><span class="pro">Pro (Value):</span> The project effectively demonstrates creative technical skills for CPT purposes.</p>
<p><span class="grow">Grow (Value):</span> Better progress-based navigation would increase long-term usefulness.</p>
</div>

<div class="feedback-section">
<h4>Akhil K</h4>
<p><span class="pro">Pro:</span> The team clearly explained the AI mood detection and real-time API integrations.</p>
<p><span class="grow">Grow:</span> More emphasis on navigation between recommendation categories would improve clarity.</p>
<p>Deployed Demonstration: 80% | <span class="rating">Value: 4.5/5</span></p>
<p><span class="pro">Pro (Content):</span> The use of weather, location, Gemini API, and social connections is thoughtful and relevant.</p>
<p><span class="grow">Grow (Content):</span> More detailed and interactive recommendation categories would enhance usability.</p>
<p><span class="pro">Pro (Value):</span> The project offers strong CPT value through personalization and real-world data.</p>
<p><span class="grow">Grow (Value):</span> Allowing users to progress through recommendations would increase impact.</p>
</div>

<div class="feedback-section">
<h4>Jaynee</h4>
<p><span class="pro">Pro:</span> The camera-based mood detection and messaging system were clearly presented.</p>
<p><span class="grow">Grow:</span> Demonstrating message editing or deletion would strengthen the feature set.</p>
<p>Deployed Demonstration: 75% | <span class="rating">Value: 4.5/5</span></p>
<p><span class="pro">Pro (Content):</span> The transactional messaging and friend request system is a unique backend feature.</p>
<p><span class="grow">Grow (Content):</span> Adding message management controls would improve usability.</p>
<p><span class="pro">Pro (Value):</span> The mood-based social connection concept adds strong CPT relevance.</p>
<p><span class="grow">Grow (Value):</span> Expanded message functionality would enhance effectiveness.</p>
</div>

<div class="feedback-section">
<h4>Vivian Z</h4>
<p><span class="pro">Pro:</span> The group demonstrated excellent understanding of their model and backend logic.</p>
<p>Deployed Demonstration: 90% | <span class="rating">Value: 5/5</span></p>
<p><span class="pro">Pro (Content):</span> The live demo of the camera mood tracker and friend chat system was interactive and effective.</p>
<p><span class="pro">Pro (Value):</span> The project helps users express emotions and connect with friends in meaningful ways.</p>
<p><span class="grow">Grow (Value):</span> Usefulness may vary depending on user self-awareness, but social connection adds value.</p>
</div>

<div class="feedback-section">
<h4>Rishabh J</h4>
<p><span class="pro">Pro:</span> The wellness app concept was explained clearly, and the Gemini-based image analysis for mood prediction stood out as an engaging technical feature.</p>
<p><span class="grow">Grow:</span> The presentation would be stronger if the UI experience were shown with more interactive elements to better match the &#8220;game&#8221; concept.</p>
<p>Deployed Demonstration: 70% | <span class="rating">Value: 4/5</span></p>
<p><span class="pro">Pro (Content):</span> Using Gemini to analyze images and predict user mood is a creative and relevant feature that demonstrates meaningful API usage.</p>
<p><span class="grow">Grow (Content):</span> The UI currently feels plain, so adding more interactive visuals, animations, or game-like feedback would improve engagement and polish.</p>
<p><span class="pro">Pro (Value):</span> The project has solid CPT value by combining user input, AI-driven analysis, and a wellness-focused purpose.</p>
<p><span class="grow">Grow (Value):</span> Its effectiveness would increase if the UI were more fun and interactive so users stay motivated to use it consistently.</p>
</div>

---

## Our Feedback to Other Projects

### Project: New York Itinerary

**Frontend Functions:**
- Making itinerary for New York trip
- Pick dates for trip
- Can see live restaurant hours
- Web scrape from website
- Can add menu items to order for restaurant sim
- Uses web scrape to get live data from websites
- Modules simulate NY trip landmarks and planning

**Backend:**
- Admin pages for testing API functions on backend
- Flask login system

**Suggestions:** Add more ways to get user feedback and to get transactional data

**Evaluation:**
- *Presentation:* Group presented the project clearly and demonstrated knowledge of both frontend and backend. Organized and decently engaging.
- *Content:* Concise and informative, with relevant examples and live demonstrations. Code explanations were clear and aligned with the problem being addressed.
- *Value:* Integrating real-time data, user interaction, and practical web development skills. Effective for learning purposes and could be used for real-world applications.

### Project: Snakes and Ladders Game

**Frontend:**
- Uses login system as part of game
- 5 lessons related to CSP and College Board
- Leaderboard system (backend)
- Snakes and ladder game
- Multiplayer function
- Can see other users and their stats
- Used WebSockets for multiplayer
- Microblog on login page

**Backend:**
- Functional admin system
- Admin can edit users
- WebSocket backend for multiplayer
- Pulling user data in real-time

**Suggestions:** Everything looks good so far, just need to clean up the UI and fix the login system

**Evaluation:**
- *Presentation:* Demonstrated clear understanding of the project; explained both the frontend and backend components. Quick and to the point with clear explanations.
- *Content:* Concise and informative. Interesting gameplay, with multiplayer features and real-time data handling.
- *Value (4/5):* Combines game logic, networking through WebSockets, and educational content aligned with CSP. Supports learning, real-time data interaction, and collaborative user experiences.

### Project: Cadet Academy

**Frontend:**
- Feature: Game Teacher &#8212; gamified concept for learning
- Normal Flask login connected to deployed backend
- Maze homepage: go through checkpoints (increasing difficulty)
- User dot moves through maze
- Robot code, sudo code, game teacher
- User code runner to export questions (tells if question is correct or incorrect)
- Forced progression path
- Goal: learning College Board topics

**Backend:**
- Standard Flask login for backend
- Uses local data (trying to implement backend)
- Badges for players act as transactional data (plan on implementing)

**Plans:** Add sprites, improving on existing features

**Suggestions:** Add more ways to get transactional user data; come up with and implement ideas that would add backend code

**Evaluation:**
- *Presentation:* Group clearly explained the learning goals and gameplay mechanics. Demonstrated understanding of how gamification can help users master concepts.
- *Content:* Gamified content demonstrated plenty of user interactivity. Integrates College Board and CSP topics through gamification so users can more easily understand concepts.
- *Value:* Demonstrates both educational and entertainment value (room for improvement). Plenty of room for more features (with backend code specifically) to be added to increase user interactivity.

---

## Questions We Were Asked

> **Where is it deployed?** &#8212; Vivian
>
> No space on the backend server &#8212; it is currently down, but it is all working. We just need to wait for space to open up.

> **Did people sign up on our page?** &#8212; Ethan
>
> It is preloaded data; it is already there.

---

## Leave a Comment

Have thoughts on MoodLife? Drop a comment below &#8212; just type your name, your message, and hit submit. Comments are stored and displayed for everyone to see.

<div id="comment-section">
  <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px; margin: 16px 0;">
    <h4 style="margin: 0 0 14px 0; color: #43e97b;">Add a Comment</h4>
    <input type="text" id="comment-name" placeholder="Your name" style="width: 100%; padding: 10px 14px; margin-bottom: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); color: inherit; font-size: 0.9em; box-sizing: border-box;" />
    <textarea id="comment-text" rows="3" placeholder="Write your comment..." style="width: 100%; padding: 10px 14px; margin-bottom: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); color: inherit; font-size: 0.9em; resize: vertical; box-sizing: border-box;"></textarea>
    <button onclick="submitComment()" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: #1a1a2e; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.9em;">Submit Comment</button>
  </div>
  <div id="comments-list" style="margin-top: 16px;"></div>
</div>

<script>
(function() {
    const STORAGE_KEY = 'moodlife_crossover_comments';

    function loadComments() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch(e) {
            return [];
        }
    }

    function saveComments(comments) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    }

    function renderComments() {
        const comments = loadComments();
        const container = document.getElementById('comments-list');
        if (comments.length === 0) {
            container.innerHTML = '<p style="opacity:0.5; font-size:0.85em;">No comments yet. Be the first!</p>';
            return;
        }
        container.innerHTML = comments.map(function(c, i) {
            return '<div class="comment-box">' +
                '<div class="comment-author">' + escapeHtml(c.name) + '</div>' +
                '<div class="comment-date">' + c.date + '</div>' +
                '<div>' + escapeHtml(c.text) + '</div>' +
                '</div>';
        }).join('');
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    window.submitComment = function() {
        var name = document.getElementById('comment-name').value.trim();
        var text = document.getElementById('comment-text').value.trim();
        if (!name || !text) {
            alert('Please enter both your name and a comment.');
            return;
        }
        var comments = loadComments();
        comments.unshift({
            name: name,
            text: text,
            date: new Date().toLocaleString()
        });
        saveComments(comments);
        document.getElementById('comment-name').value = '';
        document.getElementById('comment-text').value = '';
        renderComments();
    };

    // Render on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderComments);
    } else {
        renderComments();
    }
})();
</script>
