---
layout: post
title: "Submodule 5"
description: "Pantry & Inventory Manager"
permalink: /mood-meal/submodule_5/
parent: "cool"
team: "ANDPDSS"
microblog: True
submodule: 5
categories: [CSP, Submodule, mood-meal]
tags: [mood-meal, submodule, cool]
author: "ANPDSS"
date: 2025-11-20
footer:
  previous: /mood-meal/submodule_4/
  home: /mood-meal/
  next: /mood-meal/submodule_6/
---

# MoodMeal – Pantry & Inventory Manager

<!-- Main container for the Pantry & Inventory Manager page -->
<main id="pantry-page">

  <!-- 1. Pantry Dashboard Header -->
  <section id="pantry-header" aria-label="Pantry header" style="margin-bottom: 1.5rem;">
    <h2>Your Pantry</h2>
    <p>Manage your ingredients, track expiration dates, and keep your inventory organized.</p>
    
    <div style="margin-top: 1rem;">
      <button
        id="add-item-btn"
        type="button"
        style="padding: 0.6rem 1.5rem; font-size: 1rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;"
      >
        + Add New Item
      </button>
    </div>
  </section>

  <hr />

  <!-- 2. Filter and Sort Options -->
  <section id="pantry-filters" aria-label="Filter pantry items" style="margin: 1.5rem 0;">
    <h3>Filter & Sort</h3>
    
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
      <!-- Search bar -->
      <div style="flex: 1; min-width: 200px;">
        <label for="search-items"><strong>Search:</strong></label>
        <input
          type="text"
          id="search-items"
          placeholder="Search ingredients..."
          style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;"
        />
      </div>

      <!-- Category filter -->
      <div style="min-width: 150px;">
        <label for="category-filter"><strong>Category:</strong></label>
        <select id="category-filter" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="all">All Categories</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="grains">Grains</option>
          <option value="spices">Spices</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Expiration filter -->
      <div style="min-width: 150px;">
        <label for="expiration-filter"><strong>Status:</strong></label>
        <select id="expiration-filter" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="all">All Items</option>
          <option value="fresh">Fresh (7+ days)</option>
          <option value="expiring">Expiring Soon (3-7 days)</option>
          <option value="expired">Expired/Critical (0-3 days)</option>
        </select>
      </div>
    </div>
  </section>

  <hr />

  <!-- 3. Pantry Items Grid -->
  <section id="pantry-items-section" aria-label="Pantry items" style="margin: 1.5rem 0;">
    <h3>Your Items (<span id="item-count">0</span>)</h3>
    
    <div id="pantry-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
      <!-- Items will be dynamically added here -->
      <p id="no-items-message" style="grid-column: 1 / -1; text-align: center; color: #666; padding: 2rem;">
        No items in your pantry. Click "Add New Item" to get started!
      </p>
    </div>
  </section>

</main>

<!-- Add/Edit Item Modal -->
<div id="item-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
  <div style="max-width: 500px; margin: 2rem auto; background: #0a0a0a; border-radius: 8px; border: 1px solid #444; padding: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
      <h2 id="modal-title" style="margin: 0;">Add New Item</h2>
      <button id="close-modal-btn" type="button" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">×</button>
    </div>

    <form id="item-form">
      <!-- Item Name -->
      <div style="margin-bottom: 1rem;">
        <label for="item-name"><strong>Item Name *</strong></label>
        <input
          type="text"
          id="item-name"
          required
          placeholder="e.g., Tomatoes"
          style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;"
        />
      </div>

      <!-- Category -->
      <div style="margin-bottom: 1rem;">
        <label for="item-category"><strong>Category *</strong></label>
        <select id="item-category" required style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="">Select category...</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="grains">Grains</option>
          <option value="spices">Spices</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Quantity -->
      <div style="margin-bottom: 1rem;">
        <label for="item-quantity"><strong>Quantity *</strong></label>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.3rem;">
          <input
            type="number"
            id="item-quantity"
            required
            min="0"
            step="0.1"
            placeholder="1"
            style="flex: 1; padding: 0.5rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;"
          />
          <input
            type="text"
            id="item-unit"
            placeholder="unit (e.g., lbs, cups)"
            style="width: 120px; padding: 0.5rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;"
          />
        </div>
      </div>

      <!-- Expiration Date -->
      <div style="margin-bottom: 1rem;">
        <label for="item-expiration"><strong>Expiration Date</strong></label>
        <input
          type="date"
          id="item-expiration"
          style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;"
        />
      </div>

      <!-- Location -->
      <div style="margin-bottom: 1rem;">
        <label for="item-location"><strong>Location</strong></label>
        <select id="item-location" style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white;">
          <option value="refrigerator">Refrigerator</option>
          <option value="freezer">Freezer</option>
          <option value="pantry">Pantry</option>
          <option value="cabinet">Cabinet</option>
        </select>
      </div>

      <!-- Notes -->
      <div style="margin-bottom: 1.5rem;">
        <label for="item-notes"><strong>Notes (Optional)</strong></label>
        <textarea
          id="item-notes"
          placeholder="Any additional information..."
          rows="3"
          style="width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 1px solid #666; border-radius: 4px; background: #1a1a1a; color: white; resize: vertical;"
        ></textarea>
      </div>

      <!-- Form Actions -->
      <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <button
          type="button"
          id="cancel-btn"
          style="padding: 0.6rem 1.5rem; cursor: pointer; background: transparent; color: #666; border: 1px solid #666; border-radius: 6px;"
        >
          Cancel
        </button>
        <button
          type="submit"
          id="save-item-btn"
          style="padding: 0.6rem 1.5rem; cursor: pointer; background: #4a9eff; color: white; border: none; border-radius: 6px;"
        >
          Save Item
        </button>
      </div>
    </form>
  </div>
</div>

<script>
// MoodMeal - Pantry & Inventory Manager JavaScript
(function() {
  'use strict';

  // API Configuration
  const API_BASE_URL = 'http://localhost:5000/api';
  
  // State
  let pantryItems = [];
  let editingItemId = null;
  let currentUserId = null;

  // DOM Elements
  const addItemBtn = document.getElementById('add-item-btn');
  const itemModal = document.getElementById('item-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const itemForm = document.getElementById('item-form');
  const pantryGrid = document.getElementById('pantry-grid');
  const noItemsMessage = document.getElementById('no-items-message');
  const itemCount = document.getElementById('item-count');
  const searchInput = document.getElementById('search-items');
  const categoryFilter = document.getElementById('category-filter');
  const expirationFilter = document.getElementById('expiration-filter');
  const modalTitle = document.getElementById('modal-title');

  // Helper: Get JWT token from localStorage
  function getAuthToken() {
    return localStorage.getItem('moodmeal_token');
  }

  // Helper: Get current user ID from token or localStorage
  function getCurrentUserId() {
    // TODO: Decode JWT to get user_id, for now use localStorage
    return localStorage.getItem('moodmeal_user_id') || 'user123';
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

  // Helper: Calculate days until expiration
  function getDaysUntilExpiration(expirationDate) {
    if (!expirationDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expDate = new Date(expirationDate);
    expDate.setHours(0, 0, 0, 0);
    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  // Helper: Get expiration status badge
  function getExpirationBadge(expirationDate) {
    if (!expirationDate) {
      return '<span style="padding: 0.2rem 0.5rem; background: #666; border-radius: 4px; font-size: 0.8rem;">No Date</span>';
    }

    const days = getDaysUntilExpiration(expirationDate);
    
    if (days < 0) {
      return `<span style="padding: 0.2rem 0.5rem; background: #d32f2f; border-radius: 4px; font-size: 0.8rem;">Expired ${Math.abs(days)} days ago</span>`;
    } else if (days === 0) {
      return '<span style="padding: 0.2rem 0.5rem; background: #d32f2f; border-radius: 4px; font-size: 0.8rem;">Expires Today!</span>';
    } else if (days <= 3) {
      return `<span style="padding: 0.2rem 0.5rem; background: #ff6b6b; border-radius: 4px; font-size: 0.8rem;">Expires in ${days} days</span>`;
    } else if (days <= 7) {
      return `<span style="padding: 0.2rem 0.5rem; background: #ffa726; border-radius: 4px; font-size: 0.8rem;">Expires in ${days} days</span>`;
    } else {
      return `<span style="padding: 0.2rem 0.5rem; background: #4caf50; border-radius: 4px; font-size: 0.8rem;">Fresh (${days} days)</span>`;
    }
  }

  // Load items from backend API
  async function loadItems() {
    try {
      currentUserId = getCurrentUserId();
      const data = await apiRequest(`/pantry?user_id=${currentUserId}`);
      pantryItems = data.items || [];
      renderItems();
    } catch (error) {
      console.error('Failed to load pantry items:', error);
      // Fallback to localStorage if API fails
      loadItemsFromLocalStorage();
    }
  }

  // Fallback: Load from localStorage
  function loadItemsFromLocalStorage() {
    const userId = getCurrentUserId();
    const storageKey = `moodmeal_pantry_${userId}`;
    const stored = localStorage.getItem(storageKey);
    pantryItems = stored ? JSON.parse(stored) : [];
    renderItems();
  }

  // Save item to localStorage as backup
  function saveToLocalStorage() {
    const userId = getCurrentUserId();
    const storageKey = `moodmeal_pantry_${userId}`;
    localStorage.setItem(storageKey, JSON.stringify(pantryItems));
  }

  // Helper: Filter items based on current filters
  function getFilteredItems() {
    let filtered = [...pantryItems];

    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm)
      );
    }

    // Category filter
    const category = categoryFilter.value;
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }

    // Expiration filter
    const expStatus = expirationFilter.value;
    if (expStatus !== 'all') {
      filtered = filtered.filter(item => {
        if (!item.expirationDate) return false;
        const days = getDaysUntilExpiration(item.expirationDate);
        
        if (expStatus === 'fresh') return days >= 7;
        if (expStatus === 'expiring') return days >= 3 && days < 7;
        if (expStatus === 'expired') return days < 3;
        return true;
      });
    }

    return filtered;
  }

  // Render pantry items
  function renderItems() {
    const filtered = getFilteredItems();
    
    itemCount.textContent = filtered.length;

    if (filtered.length === 0) {
      noItemsMessage.style.display = 'block';
      return;
    }

    noItemsMessage.style.display = 'none';
    
    pantryGrid.innerHTML = filtered.map(item => `
      <div class="pantry-item-card" data-item-id="${item.pantry_id || item.id}" style="background: #1a1a1a; border-radius: 8px; padding: 1rem; border: 1px solid #333;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
          <h4 style="margin: 0; color: #4a9eff;">${item.ingredient_name || item.name}</h4>
          <div style="display: flex; gap: 0.3rem;">
            <button class="edit-item-btn" data-item-id="${item.pantry_id || item.id}" style="background: none; border: none; cursor: pointer; color: #4a9eff; font-size: 1.2rem;" title="Edit">✎</button>
            <button class="delete-item-btn" data-item-id="${item.pantry_id || item.id}" style="background: none; border: none; cursor: pointer; color: #ff4a4a; font-size: 1.2rem;" title="Delete">🗑</button>
          </div>
        </div>
        
        <p style="margin: 0.3rem 0; color: #999; font-size: 0.9rem; text-transform: capitalize;">${item.category || 'Other'}</p>
        
        <p style="margin: 0.5rem 0; font-size: 1rem;">
          <strong>${item.quantity} ${item.unit || ''}</strong>
        </p>
        
        <div style="margin: 0.5rem 0;">
          ${getExpirationBadge(item.expiration_date || item.expirationDate)}
        </div>
        
        <p style="margin: 0.5rem 0; color: #999; font-size: 0.85rem;">
          📍 ${item.location ? item.location.charAt(0).toUpperCase() + item.location.slice(1) : 'Pantry'}
        </p>
        
        ${item.notes ? `<p style="margin: 0.5rem 0; color: #666; font-size: 0.85rem; font-style: italic;">${item.notes}</p>` : ''}
      </div>
    `).join('');

    // Attach event listeners to edit and delete buttons
    document.querySelectorAll('.edit-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.target.dataset.itemId;
        openEditModal(itemId);
      });
    });

    document.querySelectorAll('.delete-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const itemId = e.target.dataset.itemId;
        deleteItem(itemId);
      });
    });
  }

  // Open modal for adding new item
  function openAddModal() {
    editingItemId = null;
    modalTitle.textContent = 'Add New Item';
    itemForm.reset();
    itemModal.style.display = 'block';
  }

  // Open modal for editing item
  function openEditModal(itemId) {
    const item = pantryItems.find(i => (i.pantry_id || i.id) === itemId || (i.pantry_id || i.id) === parseInt(itemId));
    if (!item) return;

    editingItemId = itemId;
    modalTitle.textContent = 'Edit Item';
    
    document.getElementById('item-name').value = item.ingredient_name || item.name || '';
    document.getElementById('item-category').value = item.category || '';
    document.getElementById('item-quantity').value = item.quantity || '';
    document.getElementById('item-unit').value = item.unit || '';
    document.getElementById('item-expiration').value = item.expiration_date || item.expirationDate || '';
    document.getElementById('item-location').value = item.location || 'pantry';
    document.getElementById('item-notes').value = item.notes || '';
    
    itemModal.style.display = 'block';
  }

  // Close modal
  function closeModal() {
    itemModal.style.display = 'none';
    itemForm.reset();
    editingItemId = null;
  }

  // Delete item via API
  async function deleteItem(itemId) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      await apiRequest(`/pantry/${itemId}`, {
        method: 'DELETE'
      });
      
      // Remove from local state
      pantryItems = pantryItems.filter(item => (item.pantry_id || item.id) !== itemId && (item.pantry_id || item.id) !== parseInt(itemId));
      saveToLocalStorage();
      renderItems();
    } catch (error) {
      console.error('Failed to delete item:', error);
      alert('Failed to delete item. Please try again.');
    }
  }

  // Event Listeners
  addItemBtn.addEventListener('click', openAddModal);
  closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  itemModal.addEventListener('click', (e) => {
    if (e.target === itemModal) {
      closeModal();
    }
  });

  // Form submission - save item via API
  itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const itemData = {
      user_id: getCurrentUserId(),
      ingredient_name: document.getElementById('item-name').value.trim(),
      category: document.getElementById('item-category').value,
      quantity: parseFloat(document.getElementById('item-quantity').value),
      unit: document.getElementById('item-unit').value.trim(),
      expiration_date: document.getElementById('item-expiration').value || null,
      location: document.getElementById('item-location').value,
      notes: document.getElementById('item-notes').value.trim()
    };

    try {
      if (editingItemId) {
        // Update existing item
        await apiRequest(`/pantry/${editingItemId}`, {
          method: 'PUT',
          body: JSON.stringify(itemData)
        });
        
        // Update local state
        const index = pantryItems.findIndex(i => (i.pantry_id || i.id) === editingItemId || (i.pantry_id || i.id) === parseInt(editingItemId));
        if (index !== -1) {
          pantryItems[index] = { ...pantryItems[index], ...itemData, pantry_id: editingItemId };
        }
      } else {
        // Add new item
        const response = await apiRequest('/pantry/add', {
          method: 'POST',
          body: JSON.stringify(itemData)
        });
        
        // Add to local state with returned pantry_id
        pantryItems.push({ ...itemData, pantry_id: response.pantry_id || response.id });
      }

      saveToLocalStorage();
      renderItems();
      closeModal();
    } catch (error) {
      console.error('Failed to save item:', error);
      alert('Failed to save item. Please try again.');
    }
  });

  // Filter event listeners
  searchInput.addEventListener('input', renderItems);
  categoryFilter.addEventListener('change', renderItems);
  expirationFilter.addEventListener('change', renderItems);

  // Initialize
  loadItems();
  renderItems();

  console.log('MoodMeal Pantry & Inventory Manager - Submodule 5 Loaded');
})();
</script>

<style>
/* Pantry & Inventory Manager Styling */

/* Button hover effects */
button:not(.edit-item-btn):not(.delete-item-btn):hover {
  opacity: 0.9;
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

#add-item-btn:hover {
  background: #6ab4ff;
  box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
}

#cancel-btn:hover {
  background: rgba(102, 102, 102, 0.1);
}

#save-item-btn:hover {
  background: #6ab4ff;
}

/* Item card hover effect */
.pantry-item-card {
  transition: all 0.2s ease;
}

.pantry-item-card:hover {
  border-color: #4a9eff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 158, 255, 0.2);
}

/* Edit and delete button hover */
.edit-item-btn:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease;
}

.delete-item-btn:hover {
  transform: scale(1.2);
  transition: transform 0.2s ease;
}

/* Input focus effects */
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #4a9eff !important;
  box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  #pantry-grid {
    grid-template-columns: 1fr !important;
  }
  
  #pantry-filters > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>