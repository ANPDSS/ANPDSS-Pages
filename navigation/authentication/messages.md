---
layout: none
permalink: /messages
title: Messages
search_exclude: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messages - {{ site.title }}</title>
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
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 90vh;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header h1 {
            font-size: 1.5em;
        }

        .back-button {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.3s;
        }

        .back-button:hover {
            background: rgba(255,255,255,0.3);
        }

        .messages-container {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: #f5f5f5;
        }

        .message {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-end;
        }

        .message.sent {
            justify-content: flex-end;
        }

        .message.received {
            justify-content: flex-start;
        }

        .message-bubble {
            max-width: 70%;
            padding: 12px 16px;
            border-radius: 18px;
            word-wrap: break-word;
        }

        .message.sent .message-bubble {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-bottom-right-radius: 4px;
        }

        .message.received .message-bubble {
            background: white;
            color: #333;
            border-bottom-left-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .message-time {
            font-size: 0.75em;
            opacity: 0.7;
            margin-top: 4px;
        }

        .message.sent .message-time {
            text-align: right;
        }

        .input-container {
            background: white;
            padding: 20px;
            border-top: 1px solid #ddd;
            display: flex;
            gap: 10px;
        }

        .message-input {
            flex: 1;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 25px;
            font-size: 1em;
            outline: none;
            transition: border-color 0.3s;
        }

        .message-input:focus {
            border-color: #667eea;
        }

        .send-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }

        .send-button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .send-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #667eea;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #999;
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

        .date-divider {
            text-align: center;
            margin: 20px 0;
            color: #999;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div>
                <h1 id="conversationTitle">Messages</h1>
                <p id="conversationSubtitle" style="font-size: 0.9em; opacity: 0.9;"></p>
            </div>
            <a href="{{ site.baseurl }}/friends" class="back-button">← Back</a>
        </div>

        <div class="messages-container" id="messagesContainer">
            <div class="loading">
                <div class="spinner"></div>
                Loading conversation...
            </div>
        </div>

        <div class="input-container">
            <input type="text" id="messageInput" class="message-input"
                   placeholder="Type a message..." disabled
                   onkeypress="if(event.key==='Enter') sendMessage()">
            <button id="sendButton" class="send-button" onclick="sendMessage()" disabled>
                Send
            </button>
        </div>
    </div>

    <script type="module">
        import { getConversation, sendMessage as sendMessageAPI } from '{{ site.baseurl }}/assets/js/api/friends.js';
        import { pythonURI } from '{{ site.baseurl }}/assets/js/api/config.js';

        let friendId = null;
        let friendName = '';
        let currentUserId = null;

        // Get friend ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        friendId = urlParams.get('friend');

        // Load conversation
        async function loadConversation() {
            if (!friendId) {
                document.getElementById('messagesContainer').innerHTML = `
                    <div class="empty-state">
                        <h3>No conversation selected</h3>
                        <p>Please select a friend to message</p>
                    </div>
                `;
                return;
            }

            const container = document.getElementById('messagesContainer');
            container.innerHTML = '<div class="loading"><div class="spinner"></div>Loading conversation...</div>';

            try {
                const data = await getConversation(friendId);

                // Get current user ID
                const userResponse = await fetch(`${pythonURI}/api/id`, {
                    credentials: 'include'
                });
                const userData = await userResponse.json();
                currentUserId = userData.id;

                // Update header
                friendName = data.conversation_with.name;
                document.getElementById('conversationTitle').textContent = friendName;
                document.getElementById('conversationSubtitle').textContent = `@${data.conversation_with.uid}`;

                // Display messages
                if (data.messages.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <h3>No messages yet</h3>
                            <p>Start the conversation by sending a message!</p>
                        </div>
                    `;
                } else {
                    container.innerHTML = data.messages.map(msg => {
                        const isSent = msg.sender_id === currentUserId;
                        return `
                            <div class="message ${isSent ? 'sent' : 'received'}">
                                <div class="message-bubble">
                                    ${escapeHtml(msg.content)}
                                    <div class="message-time">${msg.created_at}</div>
                                </div>
                            </div>
                        `;
                    }).join('');

                    // Scroll to bottom
                    container.scrollTop = container.scrollHeight;
                }

                // Enable input
                document.getElementById('messageInput').disabled = false;
                document.getElementById('sendButton').disabled = false;

            } catch (error) {
                container.innerHTML = `
                    <div class="empty-state">
                        <h3>Error loading conversation</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        }

        // Send message
        window.sendMessage = async function() {
            const input = document.getElementById('messageInput');
            const content = input.value.trim();

            if (!content || !friendId) {
                return;
            }

            const sendButton = document.getElementById('sendButton');
            sendButton.disabled = true;
            input.disabled = true;

            try {
                await sendMessageAPI(friendId, content);

                // Clear input
                input.value = '';

                // Reload conversation
                await loadConversation();

            } catch (error) {
                alert('Error sending message: ' + error.message);
            } finally {
                sendButton.disabled = false;
                input.disabled = false;
                input.focus();
            }
        };

        // Escape HTML to prevent XSS
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadConversation();

            // Auto-refresh every 5 seconds
            setInterval(() => {
                if (friendId) {
                    loadConversation();
                }
            }, 5000);
        });
    </script>
</body>
</html>
