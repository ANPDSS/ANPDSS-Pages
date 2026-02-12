import { pythonURI, javaURI, fetchOptions } from './config.js';

// logout from both java and python backends
export async function handleLogout() {
    // Clear any tokens from localStorage
    try {
        localStorage.removeItem('jwt');
        localStorage.removeItem('token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('jwt_python_flask');
    } catch (e) {
        console.error('Failed to clear localStorage:', e);
    }

    // Clear session storage
    try {
        sessionStorage.clear();
    } catch (e) {
        console.error('Failed to clear sessionStorage:', e);
    }

    // logout from python backend
    try {
        await fetch(pythonURI + '/api/authenticate', {
            ...fetchOptions,
            method: 'DELETE',
            credentials: 'include'
        });
        console.log('Python logout successful');
    } catch (e) {
        // log error but continue
        console.error('python logout failed:', e);
    }

    // logout from java backend
    try {
        await fetch(javaURI + '/my/logout', {
            ...fetchOptions,
            method: 'POST',
            credentials: 'include'
        });
        console.log('Java logout successful');
    } catch (e) {
        // log error but continue
        console.error('java logout failed:', e);
    }

    // Clear any remaining cookies manually (for non-httpOnly cookies)
    try {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

            // Try multiple variations to ensure cookie is cleared
            // Clear with path=/
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';

            // Clear with current hostname
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=' + window.location.hostname;

            // Clear with root domain (e.g., .opencodingsociety.com)
            const hostParts = window.location.hostname.split('.');
            if (hostParts.length > 2) {
                const rootDomain = '.' + hostParts.slice(-2).join('.');
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=' + rootDomain;
            }
        }
    } catch (e) {
        console.error('Failed to clear cookies:', e);
    }

    console.log('Logout complete - all sessions cleared');
}
