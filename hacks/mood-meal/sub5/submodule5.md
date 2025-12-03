---
layout: post
title: "Submodule 5"
description: "Music Recommender"
permalink: /mood-assistant/submodule_5/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 5
categories: [CSP, Submodule, mood-assistant]
tags: [mood-assistant, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-assistant/submodule_4/
  home: /mood-assistant/
  next: /mood-assistant/submodule_6/
---

# Mood Assistant – Music Recommender

<!-- Main container for the Music Recommender page -->
<main id="music-recommender-page">

  <!-- 1. Music Recommendation Header -->
  <section id="music-header" aria-label="Music header" style="margin-bottom: 1.5rem;">
    <h2>Music Recommendations</h2>
    <p>Get personalized music suggestions based on your current mood and preferences.</p>
  </section>

  <hr />

  <!-- 2. Recommendation Filters -->
  <section id="music-filters" aria-label="Music filters" style="margin: 1.5rem 0;">
    <h3>Customize Your Recommendations</h3>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
      <!-- Genre Filter -->
      <div>
        <label for="genre-filter"><strong>Genre:</strong></label>
        <select id="genre-filter" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="all">All Genres</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hip-hop">Hip Hop</option>
          <option value="electronic">Electronic</option>
          <option value="jazz">Jazz</option>
          <option value="classical">Classical</option>
          <option value="indie">Indie</option>
          <option value="r&b">R&B</option>
          <option value="country">Country</option>
        </select>
      </div>

      <!-- Energy Level Filter -->
      <div>
        <label for="energy-filter"><strong>Energy Level:</strong></label>
        <select id="energy-filter" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="all">Any Energy</option>
          <option value="low">Low Energy / Calm</option>
          <option value="medium">Medium Energy</option>
          <option value="high">High Energy / Upbeat</option>
        </select>
      </div>

      <!-- Number of Songs -->
      <div>
        <label for="song-count"><strong>Number of Songs:</strong></label>
        <select id="song-count" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="5">5 songs</option>
          <option value="10" selected>10 songs</option>
          <option value="15">15 songs</option>
          <option value="20">20 songs</option>
        </select>
      </div>
    </div>

    <!-- Get Recommendations Button -->
    <div style="margin-top: 1.5rem;">
      <button
        id="get-recommendations-btn"
        type="button"
        style="padding: 0.6rem 1.5rem; font-size: 1rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;"
      >
        🎵 Get Music Recommendations
      </button>
      
      <span id="loading-indicator" style="margin-left: 1rem; display: none; color: #4a9eff;">
        Loading recommendations...
      </span>
    </div>
  </section>

  <hr />

  <!-- 3. Recommended Songs Display -->
  <section id="recommendations-section" aria-label="Recommended songs" style="margin: 1.5rem 0; display: none;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <h3>Your Personalized Playlist (<span id="song-count-display">0</span> songs)</h3>
      <div style="display: flex; gap: 0.5rem;">
        <button
          id="save-playlist-btn"
          type="button"
          style="padding: 0.5rem 1rem; font-size: 0.9rem; cursor: pointer; background: transparent; color: #4a9eff; border: 1px solid #4a9eff; border-radius: 6px;"
        >
          💾 Save Playlist
        </button>
        <button
          id="export-playlist-btn"
          type="button"
          style="padding: 0.5rem 1rem; font-size: 0.9rem; cursor: pointer; background: transparent; color: #4a9eff; border: 1px solid #4a9eff; border-radius: 6px;"
        >
          📤 Export
        </button>
      </div>
    </div>

    <!-- Success message -->
    <div id="save-success" style="color: #4eff9e; margin-bottom: 1rem; display: none;">
      ✓ Playlist saved successfully!
    </div>

    <!-- Songs List -->
    <div id="songs-list" style="display: flex; flex-direction: column; gap: 1rem;">
      <!-- Songs will be dynamically added here -->
    </div>
  </section>

  <!-- Empty State -->
  <section id="empty-state" aria-label="Empty state" style="margin: 2rem 0; text-align: center;">
    <p style="color: #666; font-size: 1.1rem;">
      Click "Get Music Recommendations" to discover songs that match your mood!
    </p>
  </section>

  <hr />

  <!-- 4. Saved Playlists Section -->
  <section id="saved-playlists-section" aria-label="Saved playlists" style="margin: 1.5rem 0;">
    <h3>Your Saved Playlists</h3>
    
    <div id="saved-playlists-list" style="margin-top: 1rem;">
      <p id="no-playlists-message" style="color: #666; text-align: center; padding: 2rem;">
        No saved playlists yet. Save your first playlist above!
      </p>
    </div>
  </section>

</main>

<script>
// Music Recommender JavaScript
(function() {
  'use strict';

  // API Configuration
  const API_BASE_URL = 'http://localhost:5000/api';
  
  // State
  let currentRecommendations = [];
  let savedPlaylists = [];
  let currentUserId = null;

  // DOM Elements
  const getRecommendationsBtn = document.getElementById('get-recommendations-btn');
  const loadingIndicator = document.getElementById('loading-indicator');
  const recommendationsSection = document.getElementById('recommendations-section');
  const emptyState = document.getElementById('empty-state');
  const songsList = document.getElementById('songs-list');
  const songCountDisplay = document.getElementById('song-count-display');
  const savePlaylistBtn = document.getElementById('save-playlist-btn');
  const exportPlaylistBtn = document.getElementById('export-playlist-btn');
  const saveSuccess = document.getElementById('save-success');
  const savedPlaylistsList = document.getElementById('saved-playlists-list');
  const noPlaylistsMessage = document.getElementById('no-playlists-message');
  
  const genreFilter = document.getElementById('genre-filter');
  const energyFilter = document.getElementById('energy-filter');
  const songCount = document.getElementById('song-count');

  // Helper: Get JWT token
  function getAuthToken() {
    return localStorage.getItem('moodassistant_token');
  }

  // Helper: Get current user ID
  function getCurrentUserId() {
    return localStorage.getItem('moodassistant_user_id') || 'user123';
  }

  // Helper: Make authenticated API request
  async function apiRequest(endpoint, options = {}) {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Helper: Generate mock recommendations (fallback)
  function generateMockRecommendations() {
    const mockArtists = [
      'The Weeknd', 'Taylor Swift', 'Drake', 'Billie Eilish', 'Ed Sheeran',
      'Ariana Grande', 'Post Malone', 'Dua Lipa', 'Harry Styles', 'Olivia Rodrigo',
      'Bruno Mars', 'Adele', 'Coldplay', 'Imagine Dragons', 'Twenty One Pilots'
    ];

    const mockTitles = [
      'Blinding Lights', 'Anti-Hero', 'One Dance', 'Bad Guy', 'Shape of You',
      'Thank U, Next', 'Circles', 'Levitating', 'As It Was', 'Good 4 U',
      'Uptown Funk', 'Easy On Me', 'Viva La Vida', 'Radioactive', 'Stressed Out'
    ];

    const count = parseInt(songCount.value);
    const genre = genreFilter.value;
    const energy = energyFilter.value;

    return Array.from({ length: count }, (_, i) => ({
      song_id: `song_${Date.now()}_${i}`,
      title: mockTitles[i % mockTitles.length] + (i >= mockTitles.length ? ` ${Math.floor(i / mockTitles.length) + 1}` : ''),
      artist: mockArtists[i % mockArtists.length],
      album: 'Album ' + (i % 5 + 1),
      duration: Math.floor(Math.random() * 120 + 120), // 2-4 minutes in seconds
      genre: genre !== 'all' ? genre : ['pop', 'rock', 'hip-hop', 'electronic'][i % 4],
      energy_level: energy !== 'all' ? energy : ['low', 'medium', 'high'][i % 3],
      preview_url: null,
      spotify_url: `https://open.spotify.com/track/example${i}`,
      cover_art: `https://via.placeholder.com/200x200/1a1a1a/4a9eff?text=${encodeURIComponent(mockTitles[i % mockTitles.length])}`
    }));
  }

  // Format duration (seconds to mm:ss)
  function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Render song card
  function renderSongCard(song, index) {
    return `
      <div class="song-card" data-song-id="${song.song_id}" style="background: #1a1a1a; border-radius: 8px; padding: 1rem; border: 1px solid #333; display: flex; gap: 1rem; align-items: center;">
        <!-- Song Number -->
        <div style="font-size: 1.2rem; font-weight: bold; color: #666; min-width: 30px;">
          ${index + 1}
        </div>

        <!-- Album Art -->
        <div style="width: 60px; height: 60px; border-radius: 4px; overflow: hidden; flex-shrink: 0; background: #0a0a0a;">
          <img src="${song.cover_art}" alt="${song.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/60x60/0a0a0a/666?text=♪'">
        </div>

        <!-- Song Info -->
        <div style="flex: 1; min-width: 0;">
          <h4 style="margin: 0 0 0.3rem 0; color: white; font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${song.title}
          </h4>
          <p style="margin: 0; color: #999; font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${song.artist}
          </p>
          <p style="margin: 0.2rem 0 0 0; color: #666; font-size: 0.8rem;">
            ${song.album} • ${formatDuration(song.duration)}
          </p>
        </div>

        <!-- Genre/Energy Badge -->
        <div style="display: flex; flex-direction: column; gap: 0.3rem; align-items: flex-end;">
          <span style="padding: 0.2rem 0.5rem; background: #4a9eff; border-radius: 4px; font-size: 0.75rem; text-transform: capitalize;">
            ${song.genre}
          </span>
          <span style="padding: 0.2rem 0.5rem; background: ${song.energy_level === 'high' ? '#4eff9e' : song.energy_level === 'medium' ? '#ffa726' : '#666'}; border-radius: 4px; font-size: 0.75rem; text-transform: capitalize;">
            ${song.energy_level}
          </span>
        </div>

        <!-- Actions -->
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${song.preview_url ? `
            <button class="play-preview-btn" data-song-id="${song.song_id}" style="background: none; border: none; cursor: pointer; color: #4a9eff; font-size: 1.5rem;" title="Play Preview">
              ▶️
            </button>
          ` : ''}
          ${song.spotify_url ? `
            <a href="${song.spotify_url}" target="_blank" style="color: #4a9eff; font-size: 1.2rem; text-decoration: none;" title="Open in Spotify">
              🎵
            </a>
          ` : ''}
          <button class="favorite-song-btn" data-song-id="${song.song_id}" style="background: none; border: none; cursor: pointer; font-size: 1.3rem;" title="Add to Favorites">
            ♡
          </button>
          <button class="remove-song-btn" data-song-id="${song.song_id}" style="background: none; border: none; cursor: pointer; color: #ff4a4a; font-size: 1.3rem;" title="Remove from List">
            ✕
          </button>
        </div>
      </div>
    `;
  }

  // Render recommendations
  function renderRecommendations() {
    if (currentRecommendations.length === 0) {
      recommendationsSection.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    recommendationsSection.style.display = 'block';
    songCountDisplay.textContent = currentRecommendations.length;

    songsList.innerHTML = currentRecommendations.map((song, index) => 
      renderSongCard(song, index)
    ).join('');

    // Attach event listeners
    document.querySelectorAll('.favorite-song-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const songId = e.target.dataset.songId;
        toggleFavorite(songId, e.target);
      });
    });

    document.querySelectorAll('.remove-song-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const songId = e.target.dataset.songId;
        removeSong(songId);
      });
    });

    document.querySelectorAll('.play-preview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const songId = e.target.dataset.songId;
        playPreview(songId);
      });
    });
  }

  // Toggle favorite
  function toggleFavorite(songId, element) {
    if (element.textContent === '♡') {
      element.textContent = '♥';
      element.style.color = '#ff4a4a';
    } else {
      element.textContent = '♡';
      element.style.color = '';
    }
  }

  // Remove song from list
  function removeSong(songId) {
    currentRecommendations = currentRecommendations.filter(song => song.song_id !== songId);
    renderRecommendations();
  }

  // Play preview (placeholder)
  function playPreview(songId) {
    alert('Preview playback would start here. This requires audio player implementation.');
  }

  // Get recommendations from API
  async function getRecommendations() {
    loadingIndicator.style.display = 'inline';
    getRecommendationsBtn.disabled = true;

    try {
      const userId = getCurrentUserId();
      const params = new URLSearchParams({
        user_id: userId,
        genre: genreFilter.value,
        energy_level: energyFilter.value,
        count: songCount.value
      });

      const data = await apiRequest(`/music/recommend?${params}`);
      currentRecommendations = data.songs || [];
      
      renderRecommendations();
    } catch (error) {
      console.error('Failed to get recommendations:', error);
      // Fallback to mock data
      currentRecommendations = generateMockRecommendations();
      renderRecommendations();
    } finally {
      loadingIndicator.style.display = 'none';
      getRecommendationsBtn.disabled = false;
    }
  }

  // Save playlist
  async function savePlaylist() {
    if (currentRecommendations.length === 0) {
      alert('No songs to save!');
      return;
    }

    const playlistName = prompt('Enter a name for this playlist:', `Playlist ${new Date().toLocaleDateString()}`);
    if (!playlistName) return;

    try {
      const userId = getCurrentUserId();
      const playlistData = {
        user_id: userId,
        name: playlistName,
        songs: currentRecommendations,
        created_at: new Date().toISOString()
      };

      await apiRequest('/music/playlist/save', {
        method: 'POST',
        body: JSON.stringify(playlistData)
      });

      // Add to local state
      savedPlaylists.push(playlistData);
      saveToLocalStorage();
      renderSavedPlaylists();

      // Show success message
      saveSuccess.style.display = 'block';
      setTimeout(() => {
        saveSuccess.style.display = 'none';
      }, 3000);
    } catch (error) {
      console.error('Failed to save playlist:', error);
      // Fallback to localStorage
      savedPlaylists.push({
        playlist_id: `playlist_${Date.now()}`,
        user_id: getCurrentUserId(),
        name: playlistName,
        songs: currentRecommendations,
        created_at: new Date().toISOString()
      });
      saveToLocalStorage();
      renderSavedPlaylists();
      
      saveSuccess.style.display = 'block';
      setTimeout(() => {
        saveSuccess.style.display = 'none';
      }, 3000);
    }
  }

  // Export playlist
  function exportPlaylist() {
    if (currentRecommendations.length === 0) {
      alert('No songs to export!');
      return;
    }

    const playlistText = currentRecommendations.map((song, i) => 
      `${i + 1}. ${song.title} - ${song.artist} (${song.album})`
    ).join('\n');

    const blob = new Blob([playlistText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `playlist_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Load saved playlists
  function loadSavedPlaylists() {
    const userId = getCurrentUserId();
    const storageKey = `moodassistant_playlists_${userId}`;
    const stored = localStorage.getItem(storageKey);
    savedPlaylists = stored ? JSON.parse(stored) : [];
  }

  // Save to localStorage
  function saveToLocalStorage() {
    const userId = getCurrentUserId();
    const storageKey = `moodassistant_playlists_${userId}`;
    localStorage.setItem(storageKey, JSON.stringify(savedPlaylists));
  }

  // Render saved playlists
  function renderSavedPlaylists() {
    if (savedPlaylists.length === 0) {
      noPlaylistsMessage.style.display = 'block';
      return;
    }

    noPlaylistsMessage.style.display = 'none';
    
    savedPlaylistsList.innerHTML = savedPlaylists.map(playlist => `
      <div class="saved-playlist-card" style="background: #1a1a1a; border-radius: 8px; padding: 1rem; border: 1px solid #333; margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.5rem 0; color: #4a9eff;">${playlist.name}</h4>
            <p style="margin: 0; color: #999; font-size: 0.9rem;">
              ${playlist.songs.length} songs • Created ${new Date(playlist.created_at).toLocaleDateString()}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="load-playlist-btn" data-playlist-id="${playlist.playlist_id || playlist.created_at}" style="padding: 0.4rem 0.8rem; background: #4a9eff; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Load
            </button>
            <button class="delete-playlist-btn" data-playlist-id="${playlist.playlist_id || playlist.created_at}" style="padding: 0.4rem 0.8rem; background: transparent; color: #ff4a4a; border: 1px solid #ff4a4a; border-radius: 4px; cursor: pointer;">
              Delete
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach event listeners
    document.querySelectorAll('.load-playlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const playlistId = e.target.dataset.playlistId;
        loadPlaylist(playlistId);
      });
    });

    document.querySelectorAll('.delete-playlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const playlistId = e.target.dataset.playlistId;
        deletePlaylist(playlistId);
      });
    });
  }

  // Load a saved playlist
  function loadPlaylist(playlistId) {
    const playlist = savedPlaylists.find(p => (p.playlist_id || p.created_at) === playlistId);
    if (!playlist) return;

    currentRecommendations = [...playlist.songs];
    renderRecommendations();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Delete a saved playlist
  function deletePlaylist(playlistId) {
    if (!confirm('Are you sure you want to delete this playlist?')) return;

    savedPlaylists = savedPlaylists.filter(p => (p.playlist_id || p.created_at) !== playlistId);
    saveToLocalStorage();
    renderSavedPlaylists();
  }

  // Event Listeners
  getRecommendationsBtn.addEventListener('click', getRecommendations);
  savePlaylistBtn.addEventListener('click', savePlaylist);
  exportPlaylistBtn.addEventListener('click', exportPlaylist);

  // Initialize
  currentUserId = getCurrentUserId();
  loadSavedPlaylists();
  renderSavedPlaylists();

  console.log('Music Recommender - Submodule 5 Loaded');
})();
</script>

<style>
/* Music Recommender Styling */

/* Button hover effects */
button:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

#get-recommendations-btn:hover {
  background: #6ab4ff;
  box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
}

#save-playlist-btn:hover,
#export-playlist-btn:hover {
  background: rgba(74, 158, 255, 0.1);
}

.load-playlist-btn:hover {
  background: #6ab4ff;
}

.delete-playlist-btn:hover {
  background: rgba(255, 74, 74, 0.1);
}

/* Song card hover effect */
.song-card {
  transition: all 0.2s ease;
}

.song-card:hover {
  border-color: #4a9eff !important;
  transform: translateX(5px);
  box-shadow: -3px 0 0 #4a9eff, 0 4px 12px rgba(74, 158, 255, 0.2);
}

/* Action button hover */
.favorite-song-btn:hover,
.remove-song-btn:hover,
.play-preview-btn:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease;
}

/* Select and input focus */
select:focus {
  outline: none;
  border-color: #4a9eff !important;
  box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
}

/* Saved playlist card hover */
.saved-playlist-card {
  transition: all 0.2s ease;
}

.saved-playlist-card:hover {
  border-color: #4a9eff !important;
  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.2);
}

/* Loading animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

#loading-indicator {
  animation: pulse 1.5s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .song-card {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .song-card > div:last-child {
    flex-direction: row !important;
    width: 100%;
    justify-content: flex-end;
  }
}
</style>