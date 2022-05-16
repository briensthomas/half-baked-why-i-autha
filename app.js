import { signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./other-page');
    }
});

// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
