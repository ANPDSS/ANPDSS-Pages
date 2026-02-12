---
layout: none
permalink: /friends
title: Friends
search_exclude: true
---
<!--
  Friends System Frontend

  Programming Constructs (CollegeBoard Requirements):
  - Sequencing: Step-by-step flow through friend requests, search, and list display
  - Selection: if/else for checking friendship status, request states, user validation
  - Iteration: Loops for rendering friend lists, recommendations, and search results
  - Lists: Arrays storing friends, pendingRequests, recommendations, searchResults
-->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friends - {{ site.title }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #000000 0%, #0a0a1a 100%);
            color: #ffffff;
            min-height: 100vh;
            padding: 20px;
            padding-top: 100px; /* Account for fixed navigation bar */
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(17, 17, 17, 0.8);
            border: 1px solid #2a2a2a;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: #111111;
            color: #ffffff;
            padding: 30px;
            text-align: center;
            border-bottom: 2px solid #2196F3;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }

        .tabs {
            display: flex;
            background: rgba(17, 17, 17, 0.8);
            border-bottom: 2px solid #2a2a2a;
        }

        .tab {
            flex: 1;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            background: transparent;
            border: none;
            font-size: 1em;
            font-weight: 600;
            color: #bbb;
            transition: all 0.3s;
            position: relative;
        }

        .tab:hover {
            background: rgba(33, 150, 243, 0.1);
            color: #2196F3;
        }

        .tab.active {
            background: #2196F3;
            color: white;
            border-bottom: 3px solid #2196F3;
        }

        .tab .badge {
            background: #ff4444;
            color: white;
            border-radius: 10px;
            padding: 2px 8px;
            font-size: 0.8em;
            margin-left: 5px;
        }

        .content {
            padding: 30px;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .search-box {
            width: 100%;
            padding: 15px;
            font-size: 1.1em;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid #333;
            border-radius: 10px;
            color: white;
            margin-bottom: 20px;
            transition: border-color 0.3s;
        }

        .search-box:focus {
            outline: none;
            border-color: #2196F3;
            box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
        }

        .user-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .user-card {
            background: rgba(11, 11, 11, 0.9);
            border: 1px solid #2a2a2a;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
        }

        .user-card:hover {
            transform: translateY(-5px);
            border-color: #2196F3;
            box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
        }

        .user-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .user-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2196F3, #4eff9e);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5em;
            font-weight: bold;
            margin-right: 15px;
            overflow: hidden;
            object-fit: cover;
        }

        .user-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .user-avatar-initial {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2196F3, #4eff9e);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5em;
            font-weight: bold;
            margin-right: 15px;
        }

        .user-info h3 {
            color: #ffffff;
            margin-bottom: 5px;
        }

        .user-info p {
            color: #bbb;
            font-size: 0.9em;
        }

        .similarity-score {
            background: linear-gradient(135deg, #2196F3, #4eff9e);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.85em;
            display: inline-block;
            margin-bottom: 10px;
        }

        .shared-interests {
            margin: 10px 0;
        }

        .interest-tag {
            display: inline-block;
            background: rgba(33, 150, 243, 0.1);
            border: 1px solid #333;
            color: #2196F3;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.85em;
            margin: 3px;
            transition: all 0.3s;
        }

        .interest-tag:hover {
            border-color: #2196F3;
            background: rgba(33, 150, 243, 0.2);
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
            transition: all 0.3s;
            margin: 5px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #2196F3;
            border: 2px solid #2196F3;
        }

        .btn-secondary:hover {
            background: rgba(33, 150, 243, 0.1);
        }

        .btn-success {
            background: #28a745;
            color: white;
        }

        .btn-success:hover {
            background: #218838;
        }

        .btn-danger {
            background: #dc3545;
            color: white;
        }

        .btn-danger:hover {
            background: #c82333;
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .message-button {
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            display: inline-block;
            margin-top: 10px;
            transition: all 0.3s;
        }

        .message-button:hover {
            box-shadow: 0 5px 15px rgba(33, 150, 243, 0.4);
            transform: translateY(-2px);
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #999;
        }

        .empty-state i {
            font-size: 4em;
            margin-bottom: 20px;
            opacity: 0.3;
        }

        .empty-state h3 {
            color: #bbb;
            margin-bottom: 10px;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #2196F3;
            font-size: 1.2em;
        }

        .spinner {
            border: 4px solid rgba(33, 150, 243, 0.3);
            border-top: 4px solid #2196F3;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .request-card {
            background: rgba(33, 150, 243, 0.1);
            border: 1px solid #2a2a2a;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
        }

        .request-actions {
            margin-top: 10px;
        }

        .back-button {
            background: transparent;
            color: #2196F3;
            border: 2px solid #2196F3;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 20px;
            transition: all 0.3s;
        }

        .back-button:hover {
            background: rgba(33, 150, 243, 0.1);
            transform: translateX(-5px);
        }

        /* Group chat panel */
        .group-chat-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .group-chat-overlay.active {
            display: flex;
        }

        .group-chat-panel {
            background: #111;
            border: 1px solid #2a2a2a;
            border-radius: 15px;
            width: 600px;
            max-width: 95vw;
            height: 75vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .group-chat-header {
            padding: 15px 20px;
            background: #1a1a1a;
            border-bottom: 1px solid #2a2a2a;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .group-chat-header h3 {
            color: #fff;
            margin: 0;
        }

        .group-chat-header .member-count {
            color: #999;
            font-size: 0.85em;
        }

        .group-chat-actions {
            display: flex;
            gap: 8px;
        }

        .group-messages {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .group-message {
            max-width: 70%;
            padding: 10px 14px;
            border-radius: 12px;
            background: rgba(33, 150, 243, 0.1);
            border: 1px solid #2a2a2a;
        }

        .group-message.own {
            align-self: flex-end;
            background: rgba(33, 150, 243, 0.25);
            border-color: #2196F3;
        }

        .group-message .msg-sender {
            font-size: 0.8em;
            color: #2196F3;
            margin-bottom: 4px;
        }

        .group-message.own .msg-sender {
            text-align: right;
        }

        .group-message .msg-content {
            color: #fff;
            word-break: break-word;
        }

        .group-message .msg-time {
            font-size: 0.75em;
            color: #666;
            margin-top: 4px;
            text-align: right;
        }

        .group-chat-input {
            padding: 15px;
            border-top: 1px solid #2a2a2a;
            display: flex;
            gap: 10px;
            flex-shrink: 0;
        }

        .group-chat-input input {
            flex: 1;
            padding: 10px 15px;
            background: rgba(0,0,0,0.5);
            border: 1px solid #333;
            border-radius: 8px;
            color: #fff;
            font-size: 1em;
        }

        .group-chat-input input:focus {
            outline: none;
            border-color: #2196F3;
        }

        /* Group invite card */
        .invite-card {
            background: rgba(33, 150, 243, 0.08);
            border: 1px solid #2a2a2a;
            border-left: 4px solid #4eff9e;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
        }

        /* Groups section header */
        .groups-page-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 28px;
            padding-bottom: 18px;
            border-bottom: 1px solid #1e1e1e;
        }

        .groups-page-header .groups-icon {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #2196F3, #1565C0);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3em;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(33,150,243,0.3);
        }

        .groups-page-header h2 {
            margin: 0;
            font-size: 1.5em;
            font-weight: 700;
            color: #fff;
        }

        .groups-page-header p {
            margin: 2px 0 0;
            font-size: 0.85em;
            color: #666;
        }

        /* Create group form */
        .create-group-form {
            background: linear-gradient(135deg, rgba(33,150,243,0.08), rgba(21,101,192,0.04));
            border: 1px solid rgba(33,150,243,0.2);
            border-radius: 14px;
            padding: 22px 24px;
            margin-bottom: 28px;
        }

        .create-group-form .form-label {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 14px;
            font-size: 0.95em;
            font-weight: 600;
            color: #bbb;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .create-group-form .form-label span {
            color: #2196F3;
            font-size: 1.1em;
        }

        .create-group-form .form-row {
            display: flex;
            gap: 10px;
        }

        .create-group-form input {
            flex: 1;
            padding: 11px 16px;
            background: rgba(0,0,0,0.4);
            border: 1px solid #2a2a2a;
            border-radius: 10px;
            color: #fff;
            font-size: 0.95em;
            transition: border-color 0.2s;
        }

        .create-group-form input:focus {
            outline: none;
            border-color: #2196F3;
            background: rgba(0,0,0,0.6);
        }

        /* Section headings inside tabs */
        .section-heading {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 0 0 16px;
            font-size: 1em;
            font-weight: 600;
            color: #ccc;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }

        .section-heading::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #1e1e1e;
        }

        /* Members list in group detail panel */
        .members-panel {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .members-panel.active {
            display: flex;
        }

        .members-panel-inner {
            background: #111;
            border: 1px solid #2a2a2a;
            border-radius: 15px;
            width: 420px;
            max-width: 95vw;
            max-height: 80vh;
            overflow-y: auto;
            padding: 25px;
        }

        .members-panel-inner h3 {
            margin-bottom: 15px;
            color: #fff;
        }

        .member-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #2a2a2a;
        }

        .member-row:last-child {
            border-bottom: none;
        }

        .member-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .member-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2196F3, #4eff9e);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            overflow: hidden;
            flex-shrink: 0;
        }

        .member-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        /* ---- Camera Modal ---- */
        .camera-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            z-index: 2000;
            align-items: center;
            justify-content: center;
            padding: 16px;
        }
        .camera-overlay.active { display: flex; }

        .camera-panel {
            background: #111;
            border: 1px solid #2a2a2a;
            border-radius: 15px;
            width: 480px;
            max-width: 96vw;
            /* Hard cap so the panel never grows taller than the viewport */
            max-height: 92vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* Fixed header — always visible */
        .camera-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px 12px;
            flex-shrink: 0;
            border-bottom: 1px solid #1e1e1e;
        }
        .camera-header h3 { color: #fff; margin: 0; }

        /* Scrollable body — video/preview/mood/caption scroll if needed */
        .camera-body {
            flex: 1;
            overflow-y: auto;
            padding: 14px 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-height: 0;   /* required for flex children to shrink */
        }

        /* Pinned footer — buttons ALWAYS visible at the bottom */
        .camera-footer {
            flex-shrink: 0;
            padding: 12px 20px 16px;
            border-top: 1px solid #1e1e1e;
            background: #111;
        }

        #cameraVideo {
            width: 100%;
            /* Cap height so it never pushes buttons off screen */
            max-height: 46vh;
            object-fit: cover;
            border-radius: 10px;
            background: #000;
            display: block;
        }

        #cameraCanvas { display: none; }

        #cameraPreview {
            width: 100%;
            max-height: 46vh;
            object-fit: contain;
            border-radius: 10px;
            display: none;
            border: 2px solid #2196F3;
        }

        .camera-mood-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(33,150,243,0.15);
            border: 1px solid #2196F3;
            border-radius: 20px;
            padding: 5px 12px;
            font-size: 0.85em;
            color: #7ec8f7;
        }

        .camera-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Make every action button fill equal width so they're easy to tap */
        .camera-actions .btn {
            flex: 1;
            min-width: 100px;
            text-align: center;
            font-size: 1em;
            padding: 12px 10px;
        }

        /* ---- Photo message rendering ---- */
        .msg-photo {
            max-width: 100%;
            border-radius: 8px;
            margin: 6px 0 4px;
            display: block;
            cursor: pointer;
        }

        .msg-mood-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: rgba(78,255,158,0.12);
            border: 1px solid rgba(78,255,158,0.4);
            border-radius: 20px;
            padding: 3px 10px;
            font-size: 0.78em;
            color: #4eff9e;
            margin-top: 4px;
        }

        .camera-btn {
            padding: 10px 14px;
            background: rgba(33,150,243,0.15);
            border: 1px solid #2196F3;
            border-radius: 8px;
            color: #2196F3;
            font-size: 1.2em;
            cursor: pointer;
            transition: all 0.2s;
            flex-shrink: 0;
        }
        .camera-btn:hover {
            background: rgba(33,150,243,0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Friends & Connections</h1>
            <p>Connect with people who share similar moods and feelings</p>
        </div>

        <div class="tabs">
            <button class="tab active" onclick="switchTab('recommendations')">
                Recommendations
            </button>
            <button class="tab" onclick="switchTab('search')">
                Search
            </button>
            <button class="tab" onclick="switchTab('friends')">
                My Friends
            </button>
            <button class="tab" id="requestsTab" onclick="switchTab('requests')">
                Requests <span class="badge" id="requestBadge" style="display:none;">0</span>
            </button>
            <button class="tab" onclick="switchTab('messages')">
                Messages <span class="badge" id="messageBadge" style="display:none;">0</span>
            </button>
            <button class="tab" id="groupsTab" onclick="switchTab('groups')">
                Groups <span class="badge" id="groupInviteBadge" style="display:none;">0</span>
            </button>
        </div>

        <div class="content">
            <a href="{{ site.baseurl }}/profile" class="back-button">← Back to Profile</a>

            <!-- Recommendations Tab -->
            <div id="recommendations" class="tab-content active">
                <h2>Friend Recommendations</h2>
                <p style="color: #666; margin-bottom: 20px;">Based on your mood patterns and emotional compatibility</p>
                <div id="recommendationsGrid" class="user-grid">
                    <div class="loading">
                        <div class="spinner"></div>
                        Loading recommendations...
                    </div>
                </div>
            </div>

            <!-- Search Tab -->
            <div id="search" class="tab-content">
                <h2>Find Friends</h2>
                <input type="text" id="searchInput" class="search-box"
                       placeholder="Search by username, name, or school..."
                       oninput="performSearch()">
                <div id="searchResults" class="user-grid">
                    <div class="empty-state">
                        <h3>Start typing to search for friends</h3>
                        <p>You can search by username, name, or school</p>
                    </div>
                </div>
            </div>

            <!-- Friends Tab -->
            <div id="friends" class="tab-content">
                <h2>My Friends</h2>
                <div id="friendsGrid" class="user-grid">
                    <div class="loading">
                        <div class="spinner"></div>
                        Loading friends...
                    </div>
                </div>
            </div>

            <!-- Requests Tab -->
            <div id="requests" class="tab-content">
                <h2>Friend Requests</h2>

                <div style="margin-bottom: 30px;">
                    <h3>Received Requests</h3>
                    <div id="receivedRequests">
                        <div class="loading">
                            <div class="spinner"></div>
                            Loading requests...
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Sent Requests</h3>
                    <div id="sentRequests">
                        <div class="loading">
                            <div class="spinner"></div>
                            Loading requests...
                        </div>
                    </div>
                </div>
            </div>

            <!-- Messages Tab -->
            <div id="messages" class="tab-content">
                <h2>Messages</h2>
                <div id="conversationsList">
                    <div class="loading">
                        <div class="spinner"></div>
                        Loading conversations...
                    </div>
                </div>
            </div>

            <!-- Groups Tab -->
            <div id="groups" class="tab-content">
                <div class="groups-page-header">
                    <div class="groups-icon">👥</div>
                    <div>
                        <h2>Groups</h2>
                        <p>Chat with multiple friends at once</p>
                    </div>
                </div>

                <!-- Create Group Form -->
                <div class="create-group-form">
                    <div class="form-label"><span>＋</span> New Group</div>
                    <div class="form-row">
                        <input type="text" id="newGroupName" placeholder="Enter a group name..." maxlength="100">
                        <button class="btn btn-primary" onclick="createNewGroup()">Create</button>
                    </div>
                </div>

                <!-- Pending Group Invites -->
                <div style="margin-bottom: 28px;">
                    <h3 class="section-heading">Invites</h3>
                    <div id="groupInvitesList">
                        <div class="loading"><div class="spinner"></div>Loading invites...</div>
                    </div>
                </div>

                <!-- My Groups -->
                <div>
                    <h3 class="section-heading">My Groups</h3>
                    <div id="myGroupsList" class="user-grid">
                        <div class="loading"><div class="spinner"></div>Loading groups...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Group Chat Overlay -->
    <div class="group-chat-overlay" id="groupChatOverlay">
        <div class="group-chat-panel">
            <div class="group-chat-header">
                <div>
                    <h3 id="groupChatTitle">Group Chat</h3>
                    <span class="member-count" id="groupChatMemberCount"></span>
                </div>
                <div class="group-chat-actions">
                    <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85em;" onclick="openAddPeoplePanel()">+ Add People</button>
                    <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85em;" onclick="openMembersPanel()">Members</button>
                    <button class="btn btn-danger" style="padding:6px 12px; font-size:0.85em;" id="groupLeaveOrDeleteBtn"></button>
                    <button class="btn" style="padding:6px 12px; font-size:0.85em; background:#333; color:#fff;" onclick="closeGroupChat()">✕</button>
                </div>
            </div>
            <div class="group-messages" id="groupMessagesContainer">
                <div class="loading"><div class="spinner"></div>Loading messages...</div>
            </div>
            <div class="group-chat-input">
                <input type="text" id="groupMessageInput" placeholder="Type a message..." maxlength="5000"
                       onkeydown="if(event.key==='Enter') sendGroupMsg()">
                <button class="camera-btn" onclick="openCameraModal()" title="Send a photo with your mood">📷</button>
                <button class="btn btn-primary" onclick="sendGroupMsg()">Send</button>
            </div>
        </div>
    </div>

    <!-- Camera Modal -->
    <div class="camera-overlay" id="cameraOverlay">
        <div class="camera-panel">

            <!-- Fixed header -->
            <div class="camera-header">
                <h3>📷 Take a Photo</h3>
                <button class="btn" style="padding:6px 14px; background:#333; color:#fff; font-size:1em;" onclick="closeCameraModal()">✕</button>
            </div>

            <!-- Scrollable body: video / preview / mood / caption -->
            <div class="camera-body">
                <video id="cameraVideo" autoplay playsinline></video>
                <canvas id="cameraCanvas"></canvas>
                <img id="cameraPreview" alt="Photo preview">

                <div id="cameraMoodBadge" style="display:none;">
                    <span class="camera-mood-badge" id="cameraMoodText">Loading mood...</span>
                </div>

                <input type="text" id="cameraCaption" placeholder="Add a caption (optional)..."
                       style="padding:10px 14px; background:rgba(0,0,0,0.5); border:1px solid #333;
                              border-radius:8px; color:#fff; font-size:0.95em; width:100%; box-sizing:border-box;">
            </div>

            <!-- Pinned footer: buttons always on screen -->
            <div class="camera-footer">
                <div class="camera-actions">
                    <button class="btn btn-primary" id="snapBtn" onclick="snapPhoto()">📸 Snap Photo</button>
                    <button class="btn btn-secondary" id="retakeBtn" onclick="retakePhoto()" style="display:none;">↺ Retake</button>
                    <button class="btn btn-success" id="sendPhotoBtn" onclick="sendCameraPhoto()" style="display:none;">✉ Send Photo</button>
                </div>
            </div>

        </div>
    </div>

    <!-- Members Panel Overlay -->
    <div class="members-panel" id="membersPanelOverlay">
        <div class="members-panel-inner">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <h3 id="membersPanelTitle">Members</h3>
                <button class="btn" style="padding:6px 12px; background:#333; color:#fff;" onclick="closeMembersPanel()">✕</button>
            </div>
            <div id="membersPanelContent"></div>
            <div style="margin-top:15px;" id="inviteFriendSection">
                <h4 style="color:#bbb; margin-bottom:10px;">Invite a Friend</h4>
                <div id="invitableFriendsList"></div>
            </div>
        </div>
    </div>

    <script type="module">
        import {
            getFriendRecommendations,
            searchUsers,
            sendFriendRequest,
            getFriendRequests,
            respondToFriendRequest,
            cancelFriendRequest,
            getFriendsList,
            unfriend,
            getConversations,
            getUnreadCount
        } from '{{ site.baseurl }}/assets/js/api/friends.js';

        import {
            createGroup,
            getMyGroups,
            getGroupDetail,
            deleteGroup,
            inviteToGroup,
            getGroupInvites,
            respondToGroupInvite,
            leaveGroup,
            removeGroupMember,
            sendGroupMessage,
            sendGroupPhotoMessage,
            getGroupMessages
        } from '{{ site.baseurl }}/assets/js/api/groups.js';

        import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

        // Global state
        window.currentTab = 'recommendations';

        // Switch tabs
        window.switchTab = function(tabName) {
            // Update tab buttons
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Update content
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');

            window.currentTab = tabName;

            // Load content if needed
            if (tabName === 'recommendations' && !window.recommendationsLoaded) {
                loadRecommendations();
            } else if (tabName === 'friends' && !window.friendsLoaded) {
                loadFriends();
            } else if (tabName === 'requests' && !window.requestsLoaded) {
                loadRequests();
            } else if (tabName === 'messages' && !window.messagesLoaded) {
                loadMessages();
            } else if (tabName === 'groups') {
                loadGroups();
            }
        };

        // Load recommendations
        // CB Constructs: Lists (recommendations array), Iteration (.map loop), Selection (if/else for mood emoji)
        async function loadRecommendations() {
            const grid = document.getElementById('recommendationsGrid');
            grid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading recommendations...</div>';

            try {
                // List: Fetch array of friend recommendations from API
                const data = await getFriendRecommendations(20);

                // Selection: Check if recommendations list is empty
                if (data.recommendations.length === 0) {
                    grid.innerHTML = `
                        <div class="empty-state">
                            <h3>No recommendations available</h3>
                            <p>Track your moods in the MoodLife app to get personalized friend recommendations based on mood compatibility!</p>
                        </div>
                    `;
                    return;
                }

                // Iteration: Loop through recommendations array using .map()
                grid.innerHTML = data.recommendations.map(user => {
                    const initial = user.name.charAt(0).toUpperCase();
                    const moodCategories = user.mood_compatibility?.shared_mood_categories || [];
                    const avgMood = user.mood_compatibility?.avg_mood_score;

                    // Get mood emoji based on average mood score
                    let moodEmoji = '😊';
                    if (avgMood) {
                        if (avgMood <= 40) moodEmoji = '😰';
                        else if (avgMood <= 60) moodEmoji = '😴';
                        else if (avgMood <= 80) moodEmoji = '😊';
                        else moodEmoji = '😄';
                    }

                    // Selection: show correct button based on friendship status
                    let addBtn = '';
                    if (user.is_friend) {
                        addBtn = '<button class="btn btn-success" disabled>Already Friends</button>';
                    } else if (user.has_pending_request) {
                        addBtn = '<button class="btn btn-secondary" disabled>Request Pending</button>';
                    } else {
                        addBtn = `<button class="btn btn-primary" onclick="sendRequest(${user.id})">Add Friend</button>`;
                    }

                    return `
                        <div class="user-card">
                            <div class="user-header">
                                <div class="user-avatar">
                                    <img src="${pythonURI}/api/id/pfp/image/${user.uid}"
                                         alt="${user.name}"
                                         onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                </div>
                                <div class="user-info">
                                    <h3>${user.name}</h3>
                                    <p>@${user.uid}</p>
                                    ${user.school ? `<p>${user.school}</p>` : ''}
                                </div>
                            </div>
                            <div class="similarity-score">
                                ${user.similarity_score}% Mood Match
                            </div>
                            ${avgMood ? `
                                <div class="shared-interests">
                                    <strong>Mood Compatibility:</strong><br>
                                    <span class="interest-tag">${moodEmoji} Avg Mood: ${avgMood}/100</span>
                                    ${moodCategories.length > 0 ? moodCategories.map(cat =>
                                        `<span class="interest-tag">${cat}</span>`
                                    ).join('') : ''}
                                </div>
                            ` : ''}
                            ${addBtn}
                        </div>
                    `;
                }).join('');

                window.recommendationsLoaded = true;
            } catch (error) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading recommendations</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }

        // Send friend request
        window.sendRequest = async function(userId) {
            try {
                await sendFriendRequest(userId);
                alert('Friend request sent successfully!');
                window.recommendationsLoaded = false;
                loadRecommendations(); // Reload to update button states
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Search functionality
        let searchTimeout;
        window.performSearch = function() {
            clearTimeout(searchTimeout);
            const query = document.getElementById('searchInput').value.trim();

            if (query.length < 2) {
                document.getElementById('searchResults').innerHTML = `
                    <div class="empty-state">
                        <h3>Start typing to search for friends</h3>
                        <p>You can search by username, name, or school</p>
                    </div>
                `;
                return;
            }

            searchTimeout = setTimeout(async () => {
                const resultsDiv = document.getElementById('searchResults');
                resultsDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Searching...</div>';

                try {
                    const data = await searchUsers(query);

                    if (data.users.length === 0) {
                        resultsDiv.innerHTML = `
                            <div class="empty-state">
                                <h3>No users found</h3>
                                <p>Try a different search term</p>
                            </div>
                        `;
                        return;
                    }

                    resultsDiv.innerHTML = data.users.map(user => {
                        const initial = user.name.charAt(0).toUpperCase();
                        let buttonHTML = '';

                        if (user.is_friend) {
                            buttonHTML = '<button class="btn btn-success" disabled>Already Friends</button>';
                        } else if (user.has_pending_request) {
                            buttonHTML = '<button class="btn btn-secondary" disabled>Request Pending</button>';
                        } else {
                            buttonHTML = `<button class="btn btn-primary" onclick="sendRequest(${user.id})">Add Friend</button>`;
                        }

                        return `
                            <div class="user-card">
                                <div class="user-header">
                                    <div class="user-avatar">
                                        <img src="${pythonURI}/api/id/pfp/image/${user.uid}"
                                             alt="${user.name}"
                                             onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                    </div>
                                    <div class="user-info">
                                        <h3>${user.name}</h3>
                                        <p>@${user.uid}</p>
                                        ${user.school ? `<p>${user.school}</p>` : ''}
                                    </div>
                                </div>
                                ${buttonHTML}
                            </div>
                        `;
                    }).join('');
                } catch (error) {
                    resultsDiv.innerHTML = `
                        <div class="empty-state">
                            <h3>Error searching users</h3>
                            <p>${error.message}</p>
                        </div>
                    `;
                }
            }, 500);
        };

        // Load friends list
        // CB Constructs: Lists (friends array), Iteration (.map loop), Selection (if empty check)
        async function loadFriends() {
            const grid = document.getElementById('friendsGrid');
            grid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading friends...</div>';

            try {
                // List: Fetch array of friends from API
                const data = await getFriendsList();

                // Selection: Check if friends list is empty
                if (data.friends.length === 0) {
                    grid.innerHTML = `
                        <div class="empty-state">
                            <h3>No friends yet</h3>
                            <p>Start by adding friends from recommendations or search!</p>
                        </div>
                    `;
                    return;
                }

                // Iteration: Loop through friends array using .map()
                grid.innerHTML = data.friends.map(friend => {
                    const initial = friend.name.charAt(0).toUpperCase();
                    return `
                        <div class="user-card">
                            <div class="user-header">
                                <div class="user-avatar">
                                    <img src="${pythonURI}/api/id/pfp/image/${friend.uid}"
                                         alt="${friend.name}"
                                         onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                </div>
                                <div class="user-info">
                                    <h3>${friend.name}</h3>
                                    <p>@${friend.uid}</p>
                                    ${friend.school ? `<p>${friend.school}</p>` : ''}
                                </div>
                            </div>
                            <a href="{{ site.baseurl }}/messages?friend=${friend.id}" class="message-button">
                                Send Message
                            </a>
                            <button class="btn btn-danger" onclick="removeFriend(${friend.id}, '${friend.name}')">
                                Unfriend
                            </button>
                        </div>
                    `;
                }).join('');

                window.friendsLoaded = true;
            } catch (error) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading friends</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }

        // Remove friend
        window.removeFriend = async function(friendId, friendName) {
            if (!confirm(`Are you sure you want to unfriend ${friendName}?`)) {
                return;
            }

            try {
                await unfriend(friendId);
                alert('Friend removed successfully');
                window.friendsLoaded = false;
                loadFriends();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Load friend requests
        // CB Constructs: Lists (received/sent arrays), Iteration (.map/.filter), Selection (if/else checks)
        async function loadRequests() {
            const receivedDiv = document.getElementById('receivedRequests');
            const sentDiv = document.getElementById('sentRequests');

            receivedDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Loading...</div>';
            sentDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Loading...</div>';

            try {
                // Lists: Fetch received and sent request arrays from API
                const data = await getFriendRequests();

                // Selection: Check if received requests list is empty
                if (data.received.length === 0) {
                    receivedDiv.innerHTML = '<p style="color: #999;">No pending requests</p>';
                } else {
                    // Iteration: Loop through received requests using .map()
                    receivedDiv.innerHTML = data.received.map(req => {
                        const initial = req.sender_name ? req.sender_name.charAt(0).toUpperCase() : '?';
                        return `
                            <div class="request-card" style="display: flex; align-items: center; gap: 15px;">
                                <div class="user-avatar" style="flex-shrink: 0;">
                                    <img src="${pythonURI}/api/id/pfp/image/${req.sender_uid}"
                                         alt="${req.sender_name}"
                                         onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                </div>
                                <div style="flex: 1;">
                                    <strong>${req.sender_name}</strong> (@${req.sender_uid}) wants to be your friend
                                    <div class="request-actions">
                                        <button class="btn btn-success" onclick="acceptRequest(${req.id})">Accept</button>
                                        <button class="btn btn-danger" onclick="rejectRequest(${req.id})">Reject</button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('');
                }

                // Sent requests
                if (data.sent.length === 0) {
                    sentDiv.innerHTML = '<p style="color: #999;">No sent requests</p>';
                } else {
                    const pendingRequests = data.sent.filter(req => req.status === 'pending');
                    if (pendingRequests.length === 0) {
                        sentDiv.innerHTML = '<p style="color: #999;">No sent requests</p>';
                    } else {
                        sentDiv.innerHTML = pendingRequests.map(req => {
                            const initial = req.receiver_name ? req.receiver_name.charAt(0).toUpperCase() : '?';
                            return `
                                <div class="request-card" style="display: flex; align-items: center; gap: 15px;">
                                    <div class="user-avatar" style="flex-shrink: 0;">
                                        <img src="${pythonURI}/api/id/pfp/image/${req.receiver_uid}"
                                             alt="${req.receiver_name}"
                                             onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                    </div>
                                    <div style="flex: 1;">
                                        Request sent to <strong>${req.receiver_name}</strong> (@${req.receiver_uid})
                                        <div class="request-actions">
                                            <button class="btn btn-secondary" onclick="cancelRequest(${req.id})">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('');
                    }
                }

                // Update badge
                const badge = document.getElementById('requestBadge');
                if (data.received.length > 0) {
                    badge.textContent = data.received.length;
                    badge.style.display = 'inline-block';
                } else {
                    badge.style.display = 'none';
                }

                window.requestsLoaded = true;
            } catch (error) {
                receivedDiv.innerHTML = `<p style="color: #dc3545;">Error: ${error.message}</p>`;
                sentDiv.innerHTML = `<p style="color: #dc3545;">Error: ${error.message}</p>`;
            }
        }

        // Accept request
        window.acceptRequest = async function(requestId) {
            try {
                await respondToFriendRequest(requestId, 'accept');
                alert('Friend request accepted!');
                window.requestsLoaded = false;
                window.friendsLoaded = false;
                loadRequests();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Reject request
        window.rejectRequest = async function(requestId) {
            try {
                await respondToFriendRequest(requestId, 'reject');
                alert('Friend request rejected');
                window.requestsLoaded = false;
                loadRequests();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Cancel request
        window.cancelRequest = async function(requestId) {
            try {
                await cancelFriendRequest(requestId);
                alert('Friend request cancelled');
                window.requestsLoaded = false;
                loadRequests();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Load messages
        async function loadMessages() {
            const listDiv = document.getElementById('conversationsList');
            listDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Loading conversations...</div>';

            try {
                const data = await getConversations();

                if (data.conversations.length === 0) {
                    listDiv.innerHTML = `
                        <div class="empty-state">
                            <h3>No messages yet</h3>
                            <p>Start a conversation with your friends!</p>
                        </div>
                    `;
                    return;
                }

                listDiv.innerHTML = data.conversations.map(conv => {
                    const initial = conv.partner_name.charAt(0).toUpperCase();
                    return `
                        <div class="user-card">
                            <div class="user-header">
                                <div class="user-avatar">
                                    <img src="${pythonURI}/api/id/pfp/image/${conv.partner_uid}"
                                         alt="${conv.partner_name}"
                                         onerror="this.style.display='none'; this.parentElement.textContent='${initial}';">
                                </div>
                                <div class="user-info">
                                    <h3>${conv.partner_name}</h3>
                                    <p>@${conv.partner_uid}</p>
                                    <p style="color: #999; font-style: italic;">
                                        ${conv.last_message.substring(0, 50)}${conv.last_message.length > 50 ? '...' : ''}
                                    </p>
                                    <p style="font-size: 0.85em; color: #999;">${conv.last_message_time}</p>
                                </div>
                            </div>
                            ${conv.unread_count > 0 ? `
                                <div class="similarity-score">${conv.unread_count} new</div>
                            ` : ''}
                            <a href="{{ site.baseurl }}/messages?friend=${conv.partner_id}" class="btn btn-primary" style="text-decoration: none; display: block; text-align: center;">
                                View Conversation
                            </a>
                        </div>
                    `;
                }).join('');

                window.messagesLoaded = true;
            } catch (error) {
                listDiv.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading conversations</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }

        // Update unread badge
        async function updateUnreadBadge() {
            try {
                const data = await getUnreadCount();
                const badge = document.getElementById('messageBadge');

                if (data.unread_count > 0) {
                    badge.textContent = data.unread_count;
                    badge.style.display = 'inline-block';
                } else {
                    badge.style.display = 'none';
                }
            } catch (error) {
                console.error('Error updating unread badge:', error);
            }
        }

        // =============================================
        // CAMERA FEATURE
        // =============================================

        let _cameraStream = null;
        let _capturedImageData = null;
        let _capturedMoodSnapshot = null;

        window.openCameraModal = async function() {
            if (!window.activeGroupId) return;

            // Reset state
            _capturedImageData = null;
            _capturedMoodSnapshot = null;
            document.getElementById('cameraCaption').value = '';
            document.getElementById('cameraPreview').style.display = 'none';
            document.getElementById('cameraVideo').style.display = 'block';
            document.getElementById('cameraMoodBadge').style.display = 'none';
            document.getElementById('snapBtn').style.display = 'inline-block';
            document.getElementById('retakeBtn').style.display = 'none';
            document.getElementById('sendPhotoBtn').style.display = 'none';

            document.getElementById('cameraOverlay').classList.add('active');

            // Start webcam
            try {
                _cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                document.getElementById('cameraVideo').srcObject = _cameraStream;
            } catch (err) {
                alert('Could not access camera: ' + err.message);
                closeCameraModal();
            }
        };

        window.closeCameraModal = function() {
            document.getElementById('cameraOverlay').classList.remove('active');
            if (_cameraStream) {
                _cameraStream.getTracks().forEach(t => t.stop());
                _cameraStream = null;
            }
            _capturedImageData = null;
            _capturedMoodSnapshot = null;
        };

        window.snapPhoto = async function() {
            const video = document.getElementById('cameraVideo');
            const canvas = document.getElementById('cameraCanvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);

            _capturedImageData = canvas.toDataURL('image/jpeg', 0.85);

            // Show preview, hide live feed
            const preview = document.getElementById('cameraPreview');
            preview.src = _capturedImageData;
            preview.style.display = 'block';
            video.style.display = 'none';

            // Stop the camera stream to free the webcam
            if (_cameraStream) {
                _cameraStream.getTracks().forEach(t => t.stop());
                _cameraStream = null;
            }

            // Fetch current user mood
            const moodBadgeDiv = document.getElementById('cameraMoodBadge');
            const moodText = document.getElementById('cameraMoodText');
            moodBadgeDiv.style.display = 'block';
            moodText.textContent = 'Fetching your mood...';

            try {
                const moodResp = await fetch(`${pythonURI}/api/moodmeal/mood?limit=1`, {
                    ...fetchOptions, method: 'GET'
                });
                if (moodResp.ok) {
                    const moodData = await moodResp.json();
                    if (moodData.length > 0) {
                        const m = moodData[0];
                        _capturedMoodSnapshot = JSON.stringify({
                            score: m.mood_score,
                            category: m.mood_category,
                            tags: m.mood_tags || []
                        });
                        const emoji = m.mood_score >= 81 ? '😄'
                                    : m.mood_score >= 61 ? '😊'
                                    : m.mood_score >= 41 ? '😴' : '😰';
                        moodText.textContent = `${emoji} ${m.mood_category} · ${m.mood_score}/100`;
                    } else {
                        moodText.textContent = '😊 No mood logged yet';
                        _capturedMoodSnapshot = null;
                    }
                } else {
                    moodText.textContent = '😊 Mood unavailable';
                }
            } catch (e) {
                moodText.textContent = '😊 Mood unavailable';
            }

            document.getElementById('snapBtn').style.display = 'none';
            document.getElementById('retakeBtn').style.display = 'inline-block';
            document.getElementById('sendPhotoBtn').style.display = 'inline-block';
        };

        window.retakePhoto = async function() {
            _capturedImageData = null;
            document.getElementById('cameraPreview').style.display = 'none';
            document.getElementById('cameraMoodBadge').style.display = 'none';
            document.getElementById('cameraVideo').style.display = 'block';
            document.getElementById('snapBtn').style.display = 'inline-block';
            document.getElementById('retakeBtn').style.display = 'none';
            document.getElementById('sendPhotoBtn').style.display = 'none';

            // Restart camera
            try {
                _cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                document.getElementById('cameraVideo').srcObject = _cameraStream;
            } catch (err) {
                alert('Could not access camera: ' + err.message);
                closeCameraModal();
            }
        };

        window.sendCameraPhoto = async function() {
            if (!_capturedImageData || !window.activeGroupId) return;

            const caption = document.getElementById('cameraCaption').value.trim();
            const sendBtn = document.getElementById('sendPhotoBtn');
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';

            try {
                await sendGroupPhotoMessage(
                    window.activeGroupId,
                    _capturedImageData,
                    _capturedMoodSnapshot,
                    caption
                );
                closeCameraModal();
                await refreshGroupMessages();
                const container = document.getElementById('groupMessagesContainer');
                container.scrollTop = container.scrollHeight;
            } catch (error) {
                alert('Error sending photo: ' + error.message);
                sendBtn.disabled = false;
                sendBtn.textContent = 'Send Photo';
            }
        };

        // =============================================
        // GROUPS FEATURE
        // =============================================

        // State
        window.activeGroupId = null;
        window.activeGroupIsCreator = false;
        window.activeGroupData = null;
        window.groupMsgPollInterval = null;

        // Create a new group
        window.createNewGroup = async function() {
            const nameInput = document.getElementById('newGroupName');
            const name = nameInput.value.trim();
            if (!name) {
                alert('Please enter a group name.');
                return;
            }
            try {
                await createGroup(name);
                nameInput.value = '';
                alert(`Group "${name}" created!`);
                loadGroups();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Load groups tab content
        async function loadGroups() {
            await Promise.all([loadGroupInvites(), loadMyGroups()]);
        }

        // Load pending group invites
        async function loadGroupInvites() {
            const container = document.getElementById('groupInvitesList');
            try {
                const data = await getGroupInvites();
                const badge = document.getElementById('groupInviteBadge');

                if (data.invites.length === 0) {
                    container.innerHTML = '<p style="color:#999;">No pending group invites</p>';
                    badge.style.display = 'none';
                } else {
                    badge.textContent = data.invites.length;
                    badge.style.display = 'inline-block';

                    container.innerHTML = data.invites.map(inv => `
                        <div class="invite-card">
                            <strong>${inv.inviter_name}</strong> (@${inv.inviter_uid}) invited you to join
                            <strong>${inv.group_name}</strong>
                            <div class="request-actions" style="margin-top:10px;">
                                <button class="btn btn-success" onclick="acceptGroupInvite(${inv.id})">Accept</button>
                                <button class="btn btn-danger" onclick="declineGroupInvite(${inv.id})">Decline</button>
                            </div>
                        </div>
                    `).join('');
                }
            } catch (error) {
                container.innerHTML = `<p style="color:#dc3545;">Error: ${error.message}</p>`;
            }
        }

        // Load my groups list
        async function loadMyGroups() {
            const container = document.getElementById('myGroupsList');
            container.innerHTML = '<div class="loading"><div class="spinner"></div>Loading groups...</div>';
            try {
                const data = await getMyGroups();

                if (data.groups.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <h3>No groups yet</h3>
                            <p>Create a group above or wait to be invited by a friend!</p>
                        </div>
                    `;
                    return;
                }

                container.innerHTML = data.groups.map(group => `
                    <div class="user-card">
                        <div class="user-header">
                            <div class="user-avatar-initial">${group.name.charAt(0).toUpperCase()}</div>
                            <div class="user-info">
                                <h3>${group.name}</h3>
                                <p>${group.member_count} member${group.member_count !== 1 ? 's' : ''}</p>
                                <p style="color:#999; font-size:0.85em;">
                                    ${group.is_creator ? 'You are the creator' : `Created by ${group.creator_name}`}
                                </p>
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="openGroupChat(${group.id})">Open Chat</button>
                    </div>
                `).join('');
            } catch (error) {
                container.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading groups</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }

        // Accept group invite
        window.acceptGroupInvite = async function(inviteId) {
            try {
                await respondToGroupInvite(inviteId, 'accept');
                alert('Joined the group!');
                loadGroups();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Decline group invite
        window.declineGroupInvite = async function(inviteId) {
            try {
                await respondToGroupInvite(inviteId, 'decline');
                loadGroups();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        // Open group chat panel
        window.openGroupChat = async function(groupId) {
            window.activeGroupId = groupId;
            document.getElementById('groupChatOverlay').classList.add('active');
            const messagesContainer = document.getElementById('groupMessagesContainer');
            messagesContainer.innerHTML = '<div class="loading"><div class="spinner"></div>Loading...</div>';

            try {
                const group = await getGroupDetail(groupId);
                window.activeGroupData = group;
                window.activeGroupIsCreator = group.is_creator;

                document.getElementById('groupChatTitle').textContent = group.name;
                document.getElementById('groupChatMemberCount').textContent =
                    `${group.member_count} member${group.member_count !== 1 ? 's' : ''}`;

                const leaveDeleteBtn = document.getElementById('groupLeaveOrDeleteBtn');
                if (group.is_creator) {
                    leaveDeleteBtn.textContent = 'Delete Group';
                    leaveDeleteBtn.className = 'btn btn-danger';
                    leaveDeleteBtn.onclick = confirmDeleteGroup;
                } else {
                    leaveDeleteBtn.textContent = 'Leave Group';
                    leaveDeleteBtn.className = 'btn btn-secondary';
                    leaveDeleteBtn.onclick = confirmLeaveGroup;
                }

                await refreshGroupMessages(true);  // show error on first load

                // Poll for new messages every 5 seconds (silent on error)
                if (window.groupMsgPollInterval) clearInterval(window.groupMsgPollInterval);
                window.groupMsgPollInterval = setInterval(() => refreshGroupMessages(false), 5000);
            } catch (error) {
                messagesContainer.innerHTML = `<p style="color:#dc3545;">Error: ${error.message}</p>`;
            }
        };

        // Render messages into the container. Returns true on success.
        async function refreshGroupMessages(showError = false) {
            if (!window.activeGroupId) return;
            const container = document.getElementById('groupMessagesContainer');
            const wasAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 80;

            try {
                const data = await getGroupMessages(window.activeGroupId, 100);
                if (data.messages.length === 0) {
                    container.innerHTML = '<p style="color:#999; text-align:center; margin-top:20px;">No messages yet. Say hello!</p>';
                    return;
                }

                container.innerHTML = data.messages.map(msg => {
                    const isOwn = window._currentUserId && msg.sender_id === window._currentUserId;

                    // Build mood badge HTML if this message has a mood snapshot
                    let moodBadgeHtml = '';
                    if (msg.mood_snapshot) {
                        try {
                            const mood = JSON.parse(msg.mood_snapshot);
                            const moodEmoji = mood.score >= 81 ? '😄'
                                           : mood.score >= 61 ? '😊'
                                           : mood.score >= 41 ? '😴'
                                           : '😰';
                            moodBadgeHtml = `
                                <div class="msg-mood-badge">
                                    ${moodEmoji} ${mood.category} &bull; ${mood.score}/100
                                    ${mood.tags && mood.tags.length ? '&bull; ' + mood.tags.slice(0,3).join(', ') : ''}
                                </div>`;
                        } catch (e) { /* malformed snapshot — skip */ }
                    }

                    // Build photo HTML if this message has an image
                    const photoHtml = msg.image_data
                        ? `<img class="msg-photo" src="${msg.image_data}" alt="Photo"
                                onclick="this.requestFullscreen && this.requestFullscreen()">`
                        : '';

                    // Text caption (may be empty for photo-only messages)
                    const textHtml = msg.content
                        ? `<div class="msg-content">${escapeHtml(msg.content)}</div>`
                        : '';

                    return `
                        <div class="group-message ${isOwn ? 'own' : ''}">
                            <div class="msg-sender">${msg.sender_name} (@${msg.sender_uid})</div>
                            ${photoHtml}
                            ${moodBadgeHtml}
                            ${textHtml}
                            <div class="msg-time">${msg.created_at}</div>
                        </div>
                    `;
                }).join('');

                if (wasAtBottom) {
                    container.scrollTop = container.scrollHeight;
                }
            } catch (error) {
                if (showError) {
                    container.innerHTML = `<p style="color:#dc3545; text-align:center; margin-top:20px;">
                        Could not load messages: ${error.message}
                    </p>`;
                }
                // Polling failures are silent (don't wipe out existing messages)
            }
        }

        // Send group message
        window.sendGroupMsg = async function() {
            const input = document.getElementById('groupMessageInput');
            const content = input.value.trim();
            if (!content || !window.activeGroupId) return;

            try {
                await sendGroupMessage(window.activeGroupId, content);
                input.value = '';
                await refreshGroupMessages(true);
                const container = document.getElementById('groupMessagesContainer');
                container.scrollTop = container.scrollHeight;
            } catch (error) {
                alert('Error sending message: ' + error.message);
            }
        };

        // Close group chat
        window.closeGroupChat = function() {
            document.getElementById('groupChatOverlay').classList.remove('active');
            if (window.groupMsgPollInterval) {
                clearInterval(window.groupMsgPollInterval);
                window.groupMsgPollInterval = null;
            }
            window.activeGroupId = null;
            window.activeGroupData = null;
        };

        // Open dedicated "Add People" panel
        window.openAddPeoplePanel = async function() {
            if (!window.activeGroupId) return;
            document.getElementById('membersPanelOverlay').classList.add('active');
            document.getElementById('membersPanelTitle').textContent = 'Add People to Group';
            document.getElementById('membersPanelContent').innerHTML = '';

            const inviteSection = document.getElementById('inviteFriendSection');
            try {
                const group = await getGroupDetail(window.activeGroupId);
                window.activeGroupData = group;
                const maxTotal = 11;
                if (group.member_count >= maxTotal) {
                    inviteSection.innerHTML = '<p style="color:#999;">Group is full (11 members max).</p>';
                } else {
                    inviteSection.innerHTML = '<h4 style="color:#bbb; margin-bottom:10px;">Invite a Friend</h4><div id="invitableFriendsList"></div>';
                    await loadInvitableFriends(group);
                }
            } catch (error) {
                inviteSection.innerHTML = `<p style="color:#dc3545;">Error: ${error.message}</p>`;
            }
        };

        // Open members panel
        window.openMembersPanel = async function() {
            if (!window.activeGroupId) return;
            document.getElementById('membersPanelOverlay').classList.add('active');

            try {
                const group = await getGroupDetail(window.activeGroupId);
                window.activeGroupData = group;

                document.getElementById('membersPanelTitle').textContent = `${group.name} — Members`;

                const content = document.getElementById('membersPanelContent');
                content.innerHTML = group.members.map(m => {
                    const isCreator = (m.user_id === group.creator_id);
                    const removeBtn = group.is_creator && !isCreator
                        ? `<button class="btn btn-danger" style="padding:4px 10px; font-size:0.8em;" onclick="kickMember(${m.user_id}, '${m.user_name}')">Remove</button>`
                        : '';
                    return `
                        <div class="member-row">
                            <div class="member-info">
                                <div class="member-avatar">
                                    <img src="${pythonURI}/api/id/pfp/image/${m.user_uid}"
                                         alt="${m.user_name}"
                                         onerror="this.style.display='none'; this.parentElement.textContent='${m.user_name.charAt(0).toUpperCase()}';">
                                </div>
                                <div>
                                    <div style="color:#fff;">${m.user_name}</div>
                                    <div style="color:#999; font-size:0.85em;">@${m.user_uid}${isCreator ? ' · Creator' : ''}</div>
                                </div>
                            </div>
                            ${removeBtn}
                        </div>
                    `;
                }).join('');

                // Show invite section (only if under limit)
                const inviteSection = document.getElementById('inviteFriendSection');
                const maxTotal = 11; // 10 + creator
                if (group.member_count >= maxTotal) {
                    inviteSection.innerHTML = '<p style="color:#999;">Group is full (11 members max).</p>';
                } else {
                    inviteSection.innerHTML = '<h4 style="color:#bbb; margin-bottom:10px;">Invite a Friend</h4><div id="invitableFriendsList"></div>';
                    await loadInvitableFriends(group);
                }
            } catch (error) {
                document.getElementById('membersPanelContent').innerHTML = `<p style="color:#dc3545;">Error: ${error.message}</p>`;
            }
        };

        async function loadInvitableFriends(group) {
            const container = document.getElementById('invitableFriendsList');
            if (!container) return;
            try {
                const data = await getFriendsList();
                const memberIds = new Set(group.members.map(m => m.user_id));
                const eligible = data.friends.filter(f => !memberIds.has(f.id));

                if (eligible.length === 0) {
                    container.innerHTML = '<p style="color:#999; font-size:0.9em;">All your friends are already in this group.</p>';
                    return;
                }

                container.innerHTML = eligible.map(f => `
                    <div class="member-row">
                        <div class="member-info">
                            <div class="member-avatar">
                                <img src="${pythonURI}/api/id/pfp/image/${f.uid}"
                                     alt="${f.name}"
                                     onerror="this.style.display='none'; this.parentElement.textContent='${f.name.charAt(0).toUpperCase()}';">
                            </div>
                            <div>
                                <div style="color:#fff;">${f.name}</div>
                                <div style="color:#999; font-size:0.85em;">@${f.uid}</div>
                            </div>
                        </div>
                        <button class="btn btn-primary" style="padding:5px 12px; font-size:0.85em;"
                                onclick="sendGroupInvite(${f.id}, '${f.name}')">Invite</button>
                    </div>
                `).join('');
            } catch (error) {
                container.innerHTML = `<p style="color:#dc3545;">Error: ${error.message}</p>`;
            }
        }

        window.sendGroupInvite = async function(friendId, friendName) {
            try {
                await inviteToGroup(window.activeGroupId, friendId);
                alert(`Invite sent to ${friendName}!`);
                // Reload members panel
                await openMembersPanel();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        window.kickMember = async function(memberId, memberName) {
            if (!confirm(`Remove ${memberName} from the group?`)) return;
            try {
                await removeGroupMember(window.activeGroupId, memberId);
                alert(`${memberName} removed.`);
                await openMembersPanel();
                // Update member count in chat header
                const group = await getGroupDetail(window.activeGroupId);
                document.getElementById('groupChatMemberCount').textContent =
                    `${group.member_count} member${group.member_count !== 1 ? 's' : ''}`;
            } catch (error) {
                alert('Error: ' + error.message);
            }
        };

        window.closeMembersPanel = function() {
            document.getElementById('membersPanelOverlay').classList.remove('active');
        };

        async function confirmDeleteGroup() {
            if (!confirm('Delete this group? This cannot be undone.')) return;
            try {
                await deleteGroup(window.activeGroupId);
                closeGroupChat();
                alert('Group deleted.');
                loadGroups();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }

        async function confirmLeaveGroup() {
            if (!confirm('Leave this group?')) return;
            try {
                await leaveGroup(window.activeGroupId);
                closeGroupChat();
                alert('You left the group.');
                loadGroups();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.appendChild(document.createTextNode(text));
            return div.innerHTML;
        }

        // Update group invite badge (for polling)
        async function updateGroupInviteBadge() {
            try {
                const data = await getGroupInvites();
                const badge = document.getElementById('groupInviteBadge');
                if (data.invites.length > 0) {
                    badge.textContent = data.invites.length;
                    badge.style.display = 'inline-block';
                } else {
                    badge.style.display = 'none';
                }
            } catch (error) {
                // Silently ignore
            }
        }

        // =============================================
        // INITIALIZE
        // =============================================
        // Fetch current user ID for message "own" detection
        async function fetchCurrentUserId() {
            try {
                const response = await fetch(`${pythonURI}/api/id`, {
                    ...fetchOptions,
                    method: 'GET'
                });
                if (response.ok) {
                    const data = await response.json();
                    window._currentUserId = data.id || null;
                }
            } catch (e) {
                // Non-critical — own message highlight won't work if this fails
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            fetchCurrentUserId();
            loadRecommendations();
            loadRequests(); // Load in background to update badge
            updateUnreadBadge();
            updateGroupInviteBadge();

            // Refresh badges periodically
            setInterval(() => {
                if (window.currentTab !== 'requests') {
                    getFriendRequests().then(data => {
                        const badge = document.getElementById('requestBadge');
                        if (data.received.length > 0) {
                            badge.textContent = data.received.length;
                            badge.style.display = 'inline-block';
                        } else {
                            badge.style.display = 'none';
                        }
                    }).catch(() => {});
                }
                updateUnreadBadge();
                updateGroupInviteBadge();
            }, 30000); // Every 30 seconds
        });
    </script>
</body>
</html>
