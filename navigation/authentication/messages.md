---
layout: none
permalink: /messages
title: Messages
search_exclude: true
---
<!--
  Private Messaging Frontend

  Programming Constructs (CollegeBoard Requirements):
  - Sequencing: Step-by-step flow through message send, receive, and display
  - Selection: if/else for checking message ownership, read status, friend validation
  - Iteration: Loops for rendering conversations list and message history
  - Lists: Arrays storing messages, conversations, and unread counts
-->

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
            background: linear-gradient(135deg, #000000 0%, #0a0a1a 100%);
            min-height: 100vh;
            padding: 20px;
            padding-top: 100px; /* Account for fixed navigation bar */
            color: #ffffff;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: rgba(17, 17, 17, 0.8);
            border: 1px solid #2a2a2a;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 90vh;
        }

        .header {
            background: #111111;
            color: #ffffff;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #2196F3;
        }

        .header h1 {
            font-size: 1.5em;
        }

        .back-button {
            background: transparent;
            color: #2196F3;
            border: 2px solid #2196F3;
            padding: 8px 16px;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.3s;
        }

        .back-button:hover {
            background: rgba(33, 150, 243, 0.1);
        }

        .messages-container {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: rgba(11, 11, 11, 0.5);
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
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
            border-bottom-right-radius: 4px;
        }

        .message.received .message-bubble {
            background: rgba(42, 42, 42, 0.8);
            color: #ffffff;
            border: 1px solid #333;
            border-bottom-left-radius: 4px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
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
            background: #111111;
            padding: 20px;
            border-top: 2px solid #2a2a2a;
            display: flex;
            gap: 10px;
        }

        .message-input {
            flex: 1;
            padding: 12px;
            border: 2px solid #333;
            background: rgba(0, 0, 0, 0.5);
            color: #ffffff;
            border-radius: 25px;
            font-size: 1em;
            outline: none;
            transition: border-color 0.3s;
        }

        .message-input:focus {
            border-color: #2196F3;
            box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
        }

        .send-button {
            background: linear-gradient(135deg, #2196F3, #1976D2);
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
            box-shadow: 0 5px 15px rgba(33, 150, 243, 0.4);
        }

        .send-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #2196F3;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #bbb;
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

        .date-divider {
            text-align: center;
            margin: 20px 0;
            color: #666;
            font-size: 0.85em;
        }

        .message-input::placeholder {
            color: #888;
        }

        .message-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            max-width: 70%;
        }

        .message.received .message-wrapper {
            align-items: flex-start;
        }

        .delete-button {
            background: transparent;
            color: #ff4444;
            border: none;
            font-size: 0.75em;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
            padding: 4px 8px;
            margin-top: 4px;
        }

        .message.sent:hover .delete-button {
            opacity: 0.7;
        }

        .delete-button:hover {
            opacity: 1 !important;
            text-decoration: underline;
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
        import { getConversation, sendMessage as sendMessageAPI, deleteMessage as deleteMessageAPI } from '{{ site.baseurl }}/assets/js/api/friends.js';
        import { pythonURI } from '{{ site.baseurl }}/assets/js/api/config.js';

        let friendId = null;
        let friendName = '';
        let currentUserId = null;

        // Get friend ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        friendId = urlParams.get('friend');

        // Load conversation
        // CB Constructs: Lists (messages array), Iteration (.map loop), Selection (if/else for sent/received)
        async function loadConversation() {
            // Selection: Check if friend ID is provided
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
                // Sequencing: Step 1 - Fetch conversation data
                // List: API returns array of messages
                const data = await getConversation(friendId);

                // Sequencing: Step 2 - Get current user ID for comparison
                const userResponse = await fetch(`${pythonURI}/api/id`, {
                    credentials: 'include'
                });
                const userData = await userResponse.json();
                currentUserId = userData.id;

                // Sequencing: Step 3 - Update header with friend info
                friendName = data.conversation_with.name;
                document.getElementById('conversationTitle').textContent = friendName;
                document.getElementById('conversationSubtitle').textContent = `@${data.conversation_with.uid}`;

                // Sequencing: Step 4 - Display messages
                // Selection: Check if messages list is empty
                if (data.messages.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <h3>No messages yet</h3>
                            <p>Start the conversation by sending a message!</p>
                        </div>
                    `;
                } else {
                    // Iteration: Loop through messages array using .map()
                    container.innerHTML = data.messages.map(msg => {
                        const isSent = msg.sender_id === currentUserId;
                        const deleteBtn = isSent ? `<button class="delete-button" onclick="deleteMessage(${msg.id})">Delete</button>` : '';
                        return `
                            <div class="message ${isSent ? 'sent' : 'received'}">
                                <div class="message-wrapper">
                                    <div class="message-bubble">
                                        ${escapeHtml(msg.content)}
                                        <div class="message-time">${msg.created_at}</div>
                                    </div>
                                    ${deleteBtn}
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

        // Delete message
        window.deleteMessage = async function(messageId) {
            if (!confirm('Delete this message?')) {
                return;
            }

            try {
                await deleteMessageAPI(messageId);
                await loadConversation();
            } catch (error) {
                alert('Error deleting message: ' + error.message);
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
