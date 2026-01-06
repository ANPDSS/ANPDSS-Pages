---
---
import { pythonURI, fetchOptions } from './config.js';

const friendAPI = `${pythonURI}/api/friend`;
const messageAPI = `${pythonURI}/api/message`;

/**
 * Get friend recommendations for current user
 */
export async function getFriendRecommendations(limit = 10) {
    try {
        const response = await fetch(`${friendAPI}/recommendations?limit=${limit}`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get recommendations: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting friend recommendations:', error);
        throw error;
    }
}

/**
 * Search for users
 */
export async function searchUsers(query) {
    try {
        const response = await fetch(`${friendAPI}/search?q=${encodeURIComponent(query)}`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Search failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
}

/**
 * Send a friend request
 */
export async function sendFriendRequest(receiverId) {
    try {
        const response = await fetch(`${friendAPI}/request`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({ receiver_id: receiverId })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to send request: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending friend request:', error);
        throw error;
    }
}

/**
 * Get friend requests (sent and received)
 */
export async function getFriendRequests() {
    try {
        const response = await fetch(`${friendAPI}/request`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get requests: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting friend requests:', error);
        throw error;
    }
}

/**
 * Accept or reject a friend request
 */
export async function respondToFriendRequest(requestId, action) {
    try {
        const response = await fetch(`${friendAPI}/request/${requestId}`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify({ action: action }) // 'accept' or 'reject'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to ${action} request: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error ${action}ing friend request:`, error);
        throw error;
    }
}

/**
 * Cancel a sent friend request
 */
export async function cancelFriendRequest(requestId) {
    try {
        const response = await fetch(`${friendAPI}/request/${requestId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to cancel request: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error cancelling friend request:', error);
        throw error;
    }
}

/**
 * Get list of friends
 */
export async function getFriendsList() {
    try {
        const response = await fetch(`${friendAPI}/list`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get friends list: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting friends list:', error);
        throw error;
    }
}

/**
 * Unfriend a user
 */
export async function unfriend(friendId) {
    try {
        const response = await fetch(`${friendAPI}/unfriend/${friendId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to unfriend: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error unfriending user:', error);
        throw error;
    }
}

/**
 * Send a private message
 */
export async function sendMessage(receiverId, content) {
    try {
        const response = await fetch(`${messageAPI}/send`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({
                receiver_id: receiverId,
                content: content
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to send message: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

/**
 * Get conversation with a friend
 */
export async function getConversation(friendId, limit = 50) {
    try {
        const response = await fetch(`${messageAPI}/conversation/${friendId}?limit=${limit}`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get conversation: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting conversation:', error);
        throw error;
    }
}

/**
 * Get all conversations
 */
export async function getConversations() {
    try {
        const response = await fetch(`${messageAPI}/conversations`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get conversations: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting conversations:', error);
        throw error;
    }
}

/**
 * Get unread message count
 */
export async function getUnreadCount() {
    try {
        const response = await fetch(`${messageAPI}/unread`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get unread count: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting unread count:', error);
        throw error;
    }
}

/**
 * Delete a message
 */
export async function deleteMessage(messageId) {
    try {
        const response = await fetch(`${messageAPI}/delete/${messageId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to delete message: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
}
