---
---
/**
 * Groups API Module
 * Handles group creation, membership, invites, and group messaging
 */
import { pythonURI, fetchOptions } from './config.js';

const groupAPI = `${pythonURI}/api/group`;

/**
 * Create a new group
 */
export async function createGroup(name) {
    try {
        const response = await fetch(`${groupAPI}/create`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({ name })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to create group: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating group:', error);
        throw error;
    }
}

/**
 * Get list of groups the current user belongs to
 */
export async function getMyGroups() {
    try {
        const response = await fetch(`${groupAPI}/list`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get groups: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting groups:', error);
        throw error;
    }
}

/**
 * Get group details including members
 */
export async function getGroupDetail(groupId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to get group: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting group detail:', error);
        throw error;
    }
}

/**
 * Delete a group (creator only)
 */
export async function deleteGroup(groupId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to delete group: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting group:', error);
        throw error;
    }
}

/**
 * Invite a friend to a group
 */
export async function inviteToGroup(groupId, inviteeId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/invite`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({ invitee_id: inviteeId })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to send invite: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error inviting to group:', error);
        throw error;
    }
}

/**
 * Get pending group invites for current user
 */
export async function getGroupInvites() {
    try {
        const response = await fetch(`${groupAPI}/invites`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Failed to get invites: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting group invites:', error);
        throw error;
    }
}

/**
 * Accept or decline a group invite
 */
export async function respondToGroupInvite(inviteId, action) {
    try {
        const response = await fetch(`${groupAPI}/invite/${inviteId}`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify({ action })  // 'accept' or 'decline'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to ${action} invite: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error ${action}ing group invite:`, error);
        throw error;
    }
}

/**
 * Leave a group
 */
export async function leaveGroup(groupId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/leave`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to leave group: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error leaving group:', error);
        throw error;
    }
}

/**
 * Remove a member from a group (creator only)
 */
export async function removeGroupMember(groupId, memberId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/member/${memberId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to remove member: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error removing group member:', error);
        throw error;
    }
}

/**
 * Send a photo (with optional caption) and mood snapshot to a group
 */
export async function sendGroupPhotoMessage(groupId, imageData, moodSnapshot, caption = '') {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/messages`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({
                content: caption,
                image_data: imageData,
                mood_snapshot: moodSnapshot
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to send photo: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending group photo:', error);
        throw error;
    }
}

/**
 * Send a message to a group
 */
export async function sendGroupMessage(groupId, content) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/messages`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({ content })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to send message: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending group message:', error);
        throw error;
    }
}

/**
 * Delete a group message (sender only)
 */
export async function deleteGroupMessage(groupId, messageId) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/messages/${messageId}`, {
            ...fetchOptions,
            method: 'DELETE'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to delete message: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error deleting group message:', error);
        throw error;
    }
}

/**
 * Get messages from a group
 */
export async function getGroupMessages(groupId, limit = 50) {
    try {
        const response = await fetch(`${groupAPI}/${groupId}/messages?limit=${limit}`, {
            ...fetchOptions,
            method: 'GET'
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Failed to get messages: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting group messages:', error);
        throw error;
    }
}
