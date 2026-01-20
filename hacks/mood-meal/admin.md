---
layout: post
title: Mood Meal Admin
description: Admin dashboard for managing mood-meal users
permalink: /mood-meal/admin/
search_exclude: true
---

<style>
  .admin-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(17, 17, 17, 0.8);
    border-radius: 16px;
    border: 2px solid #2196F3;
    box-shadow: 0 10px 40px rgba(33, 150, 243, 0.2);
  }

  .admin-header h1 {
    color: white;
    margin: 0;
    font-size: 2rem;
    background: linear-gradient(45deg, #2196F3, #4eff9e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .admin-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .admin-pfp {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #2196F3;
    box-shadow: 0 0 15px rgba(33, 150, 243, 0.5);
  }

  .admin-info {
    color: white;
  }

  .admin-info .name {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .admin-info .role {
    font-size: 0.9rem;
    color: #4eff9e;
  }

  .unauthorized-container {
    text-align: center;
    padding: 4rem 2rem;
    background: rgba(17, 17, 17, 0.8);
    border-radius: 16px;
    border: 2px solid #ff4a4a;
    margin: 2rem auto;
    max-width: 600px;
  }

  .unauthorized-container h2 {
    color: #ff4a4a;
    margin-bottom: 1rem;
  }

  .unauthorized-container p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
  }

  .unauthorized-container a {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: linear-gradient(135deg, #2196F3, #1976D2);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .unauthorized-container a:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(33, 150, 243, 0.4);
  }

  .loading-container {
    text-align: center;
    padding: 4rem;
    color: white;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(33, 150, 243, 0.3);
    border-top-color: #2196F3;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: rgba(17, 17, 17, 0.8);
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid #2a2a2a;
    text-align: center;
    box-shadow: 0 10px 40px rgba(33, 150, 243, 0.1);
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(33, 150, 243, 0.2);
  }

  .stat-card:nth-child(1) {
    border-color: rgba(33, 150, 243, 0.4);
  }

  .stat-card:nth-child(2) {
    border-color: rgba(78, 255, 158, 0.4);
  }

  .stat-card:nth-child(3) {
    border-color: rgba(33, 150, 243, 0.4);
  }

  .stat-card:nth-child(1) .number {
    color: #2196F3;
  }

  .stat-card:nth-child(2) .number {
    color: #4eff9e;
  }

  .stat-card:nth-child(3) .number {
    color: #2196F3;
  }

  .stat-card .number {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .stat-card .label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  .users-section {
    background: rgba(17, 17, 17, 0.8);
    border-radius: 16px;
    border: 1px solid #2a2a2a;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(33, 150, 243, 0.1);
  }

  .users-section-header {
    padding: 1.5rem;
    border-bottom: 1px solid #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .users-section-header h2 {
    color: white;
    margin: 0;
    font-size: 1.5rem;
  }

  .search-box {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #2196F3;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 0.9rem;
    width: 250px;
  }

  .search-box:focus {
    outline: none;
    border-color: #4eff9e;
    box-shadow: 0 0 10px rgba(78, 255, 158, 0.3);
  }

  .search-box::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .users-table {
    width: 100%;
    border-collapse: collapse;
  }

  .users-table th,
  .users-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #2a2a2a;
  }

  .users-table th {
    background: rgba(0, 0, 0, 0.3);
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .users-table td {
    color: rgba(255, 255, 255, 0.8);
  }

  .users-table tr:hover {
    background: rgba(33, 150, 243, 0.1);
  }

  .user-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2196F3 0%, #4eff9e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    color: white;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .badge-admin {
    background: linear-gradient(135deg, #2196F3, #1976D2);
    color: white;
  }

  .badge-user {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
  }

  .badge-moodmeal-admin {
    background: linear-gradient(135deg, #4eff9e 0%, #2ecc71 100%);
    color: #000;
    margin-left: 0.5rem;
  }

  .action-btn {
    padding: 0.4rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .action-btn-grant {
    background: linear-gradient(135deg, #4eff9e 0%, #2ecc71 100%);
    color: #000;
  }

  .action-btn-grant:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(78, 255, 158, 0.4);
  }

  .action-btn-revoke {
    background: linear-gradient(135deg, #ff4a4a 0%, #dc3545 100%);
    color: white;
  }

  .action-btn-revoke:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 74, 74, 0.4);
  }

  .toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    display: none;
  }

  .toast-success {
    background: linear-gradient(135deg, #4eff9e 0%, #2ecc71 100%);
    color: #000;
  }

  .toast-error {
    background: linear-gradient(135deg, #ff4a4a 0%, #dc3545 100%);
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .no-users {
    text-align: center;
    padding: 3rem;
    color: rgba(255, 255, 255, 0.5);
  }
</style>

<div class="admin-container">
  <!-- Loading State -->
  <div id="loadingState" class="loading-container">
    <div class="loading-spinner"></div>
    <p>Verifying admin access...</p>
  </div>

  <!-- Unauthorized State -->
  <div id="unauthorizedState" style="display: none;">
    <div class="unauthorized-container">
      <h2>Access Denied</h2>
      <p id="unauthorizedMsg">You don't have permission to access this page. Only mood-meal administrators can view this dashboard.</p>
      <a href="{{ site.baseurl }}/mood-meal1/">Return to Mood Meal</a>
    </div>
  </div>

  <!-- Admin Dashboard -->
  <div id="adminDashboard" style="display: none;">
    <div class="admin-header">
      <h1>Mood Meal Admin Dashboard</h1>
      <div class="admin-profile">
        <img id="adminPfp" class="admin-pfp" src="" alt="Admin Profile">
        <div class="admin-info">
          <div id="adminName" class="name"></div>
          <div class="role">Mood Meal Administrator</div>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div id="totalUsers" class="number">0</div>
        <div class="label">Total Users</div>
      </div>
      <div class="stat-card">
        <div id="totalAdmins" class="number">0</div>
        <div class="label">Mood Meal Admins</div>
      </div>
      <div class="stat-card">
        <div id="totalSections" class="number">0</div>
        <div class="label">Active Sections</div>
      </div>
    </div>

    <div class="users-section">
      <div class="users-section-header">
        <h2>All Users</h2>
        <input type="text" id="searchInput" class="search-box" placeholder="Search users...">
      </div>
      <table class="users-table">
        <thead>
          <tr>
            <th>User</th>
            <th>UID</th>
            <th>Email</th>
            <th>Role</th>
            <th>School</th>
            <th>Sections</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="usersTableBody">
        </tbody>
      </table>
      <div id="noUsersMessage" class="no-users" style="display: none;">
        No users found matching your search.
      </div>
    </div>
  </div>
</div>

<!-- Toast Notification -->
<div id="toast" class="toast"></div>

<script type="module">
// Determine API URL
const pythonURI = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:8309'
  : 'https://moodlife.opencodingsociety.com';

const fetchOptions = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Origin': 'client'
  }
};

let allUsers = [];
let currentAdminUid = '';

console.log('Admin page loaded, API URL:', pythonURI);

// Show toast notification
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${isError ? 'toast-error' : 'toast-success'}`;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// Check admin status
async function checkAdminStatus() {
  console.log('Checking admin status...');
  try {
    const response = await fetch(`${pythonURI}/api/admin/check`, fetchOptions);
    console.log('Admin check response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Admin check failed:', response.status, errorText);
      document.getElementById('unauthorizedMsg').textContent = `Authentication failed (${response.status}). Please log in first.`;
      throw new Error('Not authenticated');
    }

    const data = await response.json();
    console.log('Admin check response:', data);

    if (!data.is_admin) {
      console.log('User is not admin:', data.uid);
      document.getElementById('unauthorizedMsg').textContent = `User "${data.uid}" is not a Mood Meal administrator.`;
      document.getElementById('loadingState').style.display = 'none';
      document.getElementById('unauthorizedState').style.display = 'block';
      return false;
    }

    // User is admin - show dashboard
    console.log('User is admin:', data.uid);
    currentAdminUid = data.uid;
    document.getElementById('adminName').textContent = data.name || data.uid;
    if (data.admin_pfp) {
      document.getElementById('adminPfp').src = data.admin_pfp;
    }

    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';

    return true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('unauthorizedState').style.display = 'block';
    return false;
  }
}

// Fetch all users
async function fetchUsers() {
  console.log('Fetching users...');
  try {
    const response = await fetch(`${pythonURI}/api/admin/users`, fetchOptions);
    console.log('Users fetch response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch users:', response.status, errorText);
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    console.log('Users data:', data);
    allUsers = data.users || [];

    // Update stats
    document.getElementById('totalUsers').textContent = data.total || allUsers.length;
    document.getElementById('totalAdmins').textContent = allUsers.filter(u => u.is_moodmeal_admin).length;

    // Count unique sections
    const sections = new Set();
    allUsers.forEach(u => {
      if (u.sections) {
        u.sections.forEach(s => sections.add(s.abbreviation));
      }
    });
    document.getElementById('totalSections').textContent = sections.size;

    console.log('Rendering', allUsers.length, 'users');
    renderUsers(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    showToast('Failed to load users', true);
  }
}

// Render users table
function renderUsers(users) {
  const tbody = document.getElementById('usersTableBody');
  const noUsersMsg = document.getElementById('noUsersMessage');

  if (users.length === 0) {
    tbody.innerHTML = '';
    noUsersMsg.style.display = 'block';
    return;
  }

  noUsersMsg.style.display = 'none';

  tbody.innerHTML = users.map(user => {
    const initials = (user.name || user.uid || '?').substring(0, 2).toUpperCase();
    const sectionsStr = user.sections ? user.sections.map(s => s.abbreviation).join(', ') : '-';
    const isMoodmealAdmin = user.is_moodmeal_admin;

    return `
      <tr>
        <td>
          <div class="user-cell">
            <div class="user-avatar">${initials}</div>
            <span>${user.name || '-'}</span>
          </div>
        </td>
        <td>${user.uid}</td>
        <td>${user.email || '-'}</td>
        <td>
          <span class="badge ${user.role === 'Admin' ? 'badge-admin' : 'badge-user'}">${user.role}</span>
          ${isMoodmealAdmin ? '<span class="badge badge-moodmeal-admin">MM Admin</span>' : ''}
        </td>
        <td>${user.school || '-'}</td>
        <td>${sectionsStr}</td>
        <td>
          ${user.uid !== currentAdminUid ? `
            <button
              class="action-btn ${isMoodmealAdmin ? 'action-btn-revoke' : 'action-btn-grant'}"
              onclick="toggleAdmin('${user.uid}', ${!isMoodmealAdmin})"
            >
              ${isMoodmealAdmin ? 'Revoke Admin' : 'Grant Admin'}
            </button>
          ` : '<span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">Current User</span>'}
        </td>
      </tr>
    `;
  }).join('');
}

// Toggle admin status with confirmation
window.toggleAdmin = async function(uid, grant) {
  const action = grant ? 'promote' : 'demote';
  const confirmMsg = grant
    ? `Are you sure you want to make "${uid}" a Mood Meal admin?\n\nThey will be able to view all user data and manage other admins.`
    : `Are you sure you want to remove admin privileges from "${uid}"?\n\nThey will no longer have access to the admin dashboard.`;

  if (!confirm(confirmMsg)) {
    return;
  }

  try {
    const response = await fetch(`${pythonURI}/api/admin/make-admin`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify({ uid, grant })
    });

    if (!response.ok) {
      throw new Error('Failed to update admin status');
    }

    const data = await response.json();
    showToast(grant ? `${uid} is now a Mood Meal admin!` : `${uid} has been demoted to regular user.`);

    // Refresh users list
    await fetchUsers();
  } catch (error) {
    console.error('Error toggling admin:', error);
    showToast('Failed to update admin status', true);
  }
};

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  const filtered = allUsers.filter(user =>
    (user.name && user.name.toLowerCase().includes(query)) ||
    (user.uid && user.uid.toLowerCase().includes(query)) ||
    (user.email && user.email.toLowerCase().includes(query)) ||
    (user.school && user.school.toLowerCase().includes(query))
  );

  renderUsers(filtered);
});

// Initialize
async function init() {
  const isAdmin = await checkAdminStatus();
  if (isAdmin) {
    await fetchUsers();
  }
}

init();
</script>
