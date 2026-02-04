import { baseurl, pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

// Helper: try to retrieve JWT from localStorage or (non-HttpOnly) cookies
function getStoredToken() {
    try {
        const t = localStorage.getItem('jwt') || localStorage.getItem('token') || localStorage.getItem('access_token');
        if (t) return t;
    } catch (e) {
        // ignore storage errors
    }

    // =====================================================================
    // =====                       LISTS                              =====
    // =====================================================================
    // Lists (Arrays) store multiple values in a single variable.
    // Below, 'names' is a LIST (array) of possible token names to
    // search for in the browser cookies. 'parts' is also a LIST
    // created by splitting the cookie string. Arrays let us group
    // related data and loop through it efficiently.
    // This is a clear example of LISTS being used in JavaScript.
    // =====================================================================
    const names = ['jwt', 'jwt_python_flask', 'token', 'access_token'];
    if (document.cookie) {
        const parts = document.cookie.split(';').map(s => s.trim());
        // =================================================================
        // =====                    ITERATION                          =====
        // =================================================================
        // Iteration means repeating a block of code for each item in a
        // collection (looping). Below, the 'for...of' loop ITERATES
        // over every cookie part in the 'parts' array. For EACH part,
        // it extracts the key and value, then checks if the key matches
        // one of our token names. This is a textbook for loop example.
        // =================================================================
        for (const p of parts) {
            const eq = p.indexOf('=');
            if (eq > -1) {
                const key = p.substring(0, eq);
                const val = p.substring(eq + 1);
                if (names.includes(key)) return decodeURIComponent(val);
            }
        }
    }
    return null;
}

// Function to fetch and display Python data (for production)
function pythonDatabase() {
    const URL = `${pythonURI}/api/id`;
    const token = getStoredToken();

    const requestOptions = {
        ...fetchOptions,
        headers: {
            ...fetchOptions.headers,
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        }
    };

    fetch(URL, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Flask server response: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            window.location.href = '/ANPDSS-Pages/profile';
        })
        .catch(error => {
            const el = document.getElementById("message");
            if (el) el.textContent = `Error: ${error.message}`;
        });
}

// =====================================================================
// =====                     SEQUENCING                            =====
// =====================================================================
// Sequencing means executing statements one after another, in order.
// Below, when the page finishes loading (DOMContentLoaded), the code
// runs a specific SEQUENCE of steps: (1) log the base URL, (2) call
// getCredentials() to fetch user data from the API, (3) store the
// data in window.user, (4) find the loginArea element, and (5) update
// the UI. Each step depends on the previous one completing first.
// This entire block is a clear example of SEQUENCING in action.
// =====================================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("Base URL:", baseurl); // Debugging line
    getCredentials() // Call the function to get credentials
        .then(data => {
            console.log("Credentials data:", data); // Debugging line
            window.user = data;

            const loginArea = document.getElementById('loginArea');
            if (!loginArea) {
                console.warn('loginArea element not found on this page; skipping login UI update');
                return;
            }

            // =================================================================
            // =====                    SELECTION                          =====
            // =================================================================
            // Selection means choosing different paths of execution based
            // on a condition (if/else). Below, the code checks IF the
            // user data exists. If YES, it builds a dropdown menu with
            // the user's name and profile links. If NO (else), it shows
            // a simple "Login" link instead. The ternary operator inside
            // the template literal is also selection (checking if roles
            // exist). This is a textbook example of SELECTION.
            // =================================================================
            if (data) { // Update the login area based on the data
                loginArea.innerHTML = `
                    <div class="dropdown">
                        <button class="dropbtn">${data.name}</button>
                        <div class="dropdown-content hidden">
                            ${
                                data.roles && Array.isArray(data.roles) && data.roles.length > 0
                                    ? `<div class="roles-list" style="padding: 8px 16px; color: #888; font-size: 0.95em;">
                                        Roles: ${data.roles.map(role => role.name).join(", ")}
                                       </div>
                                       <hr style="margin: 4px 0;">`
                                    : ''
                            }
                            <a href="${baseurl}/profile">Profile</a>
                            <a href="${baseurl}/friends">Friends</a>
                            <a href="${baseurl}/logout">Logout</a>
                        </div>
                    </div>
                `;

                // Add click event listener for dropdown toggle (only if elements exist)
                const dropdownButton = loginArea.querySelector('.dropbtn');
                const dropdownContent = loginArea.querySelector('.dropdown-content');

                if (dropdownButton && dropdownContent) {
                    dropdownButton.addEventListener('click', (event) => {
                        event.preventDefault(); // Prevent redirection
                        if (dropdownContent.classList.contains('hidden')) {
                            dropdownContent.classList.remove('hidden');
                        } else {
                            dropdownContent.classList.add('hidden');
                        }
                    });

                    // Add event listener to hide dropdown when clicking outside
                    document.addEventListener('click', (event) => {
                        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                            dropdownContent.classList.add('hidden'); // Hide dropdown
                        }
                    });
                }
            } else {
                // User is not authenticated, then "Login" link is shown
                loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
            }
            // Set loginArea opacity to 1
            loginArea.style.opacity = "1";
        })
        .catch(err => {
            console.error("Error fetching credentials: ", err);
            // Show login link on error
            const loginArea = document.getElementById('loginArea');
            if (loginArea) {
                loginArea.innerHTML = `<a href="${baseurl}/login">Login</a>`;
                loginArea.style.opacity = "1";
            }
        });
});

function getCredentials() {
    const URL = pythonURI + '/api/id';
    return fetch(URL, {
        ...fetchOptions,
        credentials: 'include' // Include cookies
    })
    .then(response => {
        if (!response.ok) {
            console.warn("HTTP status code: " + response.status);
            return null;
        }
        return response.json();
    })
    .then(data => {
        if (data === null) return null;
        console.log("User data:", data);
        return data;
    })
    .catch(err => {
        console.error("Fetch error: ", err);
        // Return null instead of throwing to handle the error gracefully
        return null;
    });
}
