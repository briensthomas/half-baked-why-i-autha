import { checkAuth, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

// use checkAuth function to redirect is user not authenticated
checkAuth();

// add event listener to the logout button and call logout
logoutButton.addEventListener('click', async () => {
    await logout();
});
