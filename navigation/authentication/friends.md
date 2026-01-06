---
layout: none
permalink: /friends
title: Friends
search_exclude: true
---

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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
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
            background: #f5f5f5;
            border-bottom: 2px solid #ddd;
        }

        .tab {
            flex: 1;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            background: #f5f5f5;
            border: none;
            font-size: 1em;
            font-weight: 600;
            color: #666;
            transition: all 0.3s;
            position: relative;
        }

        .tab:hover {
            background: #e0e0e0;
        }

        .tab.active {
            background: white;
            color: #667eea;
            border-bottom: 3px solid #667eea;
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
            border: 2px solid #ddd;
            border-radius: 10px;
            margin-bottom: 20px;
            transition: border-color 0.3s;
        }

        .search-box:focus {
            outline: none;
            border-color: #667eea;
        }

        .user-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .user-card {
            background: #f9f9f9;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .user-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5em;
            font-weight: bold;
            margin-right: 15px;
        }

        .user-info h3 {
            color: #333;
            margin-bottom: 5px;
        }

        .user-info p {
            color: #666;
            font-size: 0.9em;
        }

        .similarity-score {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            background: #e0e7ff;
            color: #667eea;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.85em;
            margin: 3px;
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #6c757d;
            color: white;
        }

        .btn-secondary:hover {
            background: #5a6268;
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
            background: #28a745;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            display: inline-block;
            margin-top: 10px;
            transition: all 0.3s;
        }

        .message-button:hover {
            background: #218838;
            transform: scale(1.05);
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
            color: #666;
            margin-bottom: 10px;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #667eea;
            font-size: 1.2em;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
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
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
        }

        .request-actions {
            margin-top: 10px;
        }

        .back-button {
            background: #6c757d;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 20px;
            transition: all 0.3s;
        }

        .back-button:hover {
            background: #5a6268;
            transform: translateX(-5px);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Friends & Connections</h1>
            <p>Connect with people who share your interests</p>
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
        </div>

        <div class="content">
            <a href="{{ site.baseurl }}/profile" class="back-button">← Back to Profile</a>

            <!-- Recommendations Tab -->
            <div id="recommendations" class="tab-content active">
                <h2>Friend Recommendations</h2>
                <p style="color: #666; margin-bottom: 20px;">Based on your shared interests</p>
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
            }
        };

        // Load recommendations
        async function loadRecommendations() {
            const grid = document.getElementById('recommendationsGrid');
            grid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading recommendations...</div>';

            try {
                const data = await getFriendRecommendations(20);

                if (data.recommendations.length === 0) {
                    grid.innerHTML = `
                        <div class="empty-state">
                            <h3>No recommendations available</h3>
                            <p>Complete your interests in the MoodLife app to get personalized friend recommendations!</p>
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = data.recommendations.map(user => {
                    const initial = user.name.charAt(0).toUpperCase();
                    const allInterests = [
                        ...user.shared_interests.cuisines,
                        ...user.shared_interests.music,
                        ...user.shared_interests.activities
                    ];

                    return `
                        <div class="user-card">
                            <div class="user-header">
                                <div class="user-avatar">${initial}</div>
                                <div class="user-info">
                                    <h3>${user.name}</h3>
                                    <p>@${user.uid}</p>
                                    ${user.school ? `<p>${user.school}</p>` : ''}
                                </div>
                            </div>
                            <div class="similarity-score">
                                ${user.similarity_score}% Match
                            </div>
                            ${allInterests.length > 0 ? `
                                <div class="shared-interests">
                                    <strong>Shared interests:</strong><br>
                                    ${allInterests.slice(0, 5).map(interest =>
                                        `<span class="interest-tag">${interest}</span>`
                                    ).join('')}
                                    ${allInterests.length > 5 ? `<span class="interest-tag">+${allInterests.length - 5} more</span>` : ''}
                                </div>
                            ` : ''}
                            <button class="btn btn-primary" onclick="sendRequest(${user.id})">
                                Add Friend
                            </button>
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
                loadRecommendations(); // Reload to update UI
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
                                    <div class="user-avatar">${initial}</div>
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
        async function loadFriends() {
            const grid = document.getElementById('friendsGrid');
            grid.innerHTML = '<div class="loading"><div class="spinner"></div>Loading friends...</div>';

            try {
                const data = await getFriendsList();

                if (data.friends.length === 0) {
                    grid.innerHTML = `
                        <div class="empty-state">
                            <h3>No friends yet</h3>
                            <p>Start by adding friends from recommendations or search!</p>
                        </div>
                    `;
                    return;
                }

                grid.innerHTML = data.friends.map(friend => {
                    const initial = friend.name.charAt(0).toUpperCase();
                    return `
                        <div class="user-card">
                            <div class="user-header">
                                <div class="user-avatar">${initial}</div>
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
        async function loadRequests() {
            const receivedDiv = document.getElementById('receivedRequests');
            const sentDiv = document.getElementById('sentRequests');

            receivedDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Loading...</div>';
            sentDiv.innerHTML = '<div class="loading"><div class="spinner"></div>Loading...</div>';

            try {
                const data = await getFriendRequests();

                // Received requests
                if (data.received.length === 0) {
                    receivedDiv.innerHTML = '<p style="color: #999;">No pending requests</p>';
                } else {
                    receivedDiv.innerHTML = data.received.map(req => `
                        <div class="request-card">
                            <strong>${req.sender_name}</strong> (@${req.sender_uid}) wants to be your friend
                            <div class="request-actions">
                                <button class="btn btn-success" onclick="acceptRequest(${req.id})">Accept</button>
                                <button class="btn btn-danger" onclick="rejectRequest(${req.id})">Reject</button>
                            </div>
                        </div>
                    `).join('');
                }

                // Sent requests
                if (data.sent.length === 0) {
                    sentDiv.innerHTML = '<p style="color: #999;">No sent requests</p>';
                } else {
                    sentDiv.innerHTML = data.sent.filter(req => req.status === 'pending').map(req => `
                        <div class="request-card">
                            Request sent to <strong>${req.receiver_name}</strong> (@${req.receiver_uid})
                            <div class="request-actions">
                                <button class="btn btn-secondary" onclick="cancelRequest(${req.id})">Cancel</button>
                            </div>
                        </div>
                    `).join('');

                    if (sentDiv.innerHTML === '') {
                        sentDiv.innerHTML = '<p style="color: #999;">No sent requests</p>';
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
                                <div class="user-avatar">${initial}</div>
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

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadRecommendations();
            loadRequests(); // Load in background to update badge
            updateUnreadBadge();

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
            }, 30000); // Every 30 seconds
        });
    </script>
</body>
</html>
