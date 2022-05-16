// Enter Supabase Information
const SUPABASE_URL = 'https://plkemcgrxzmmcpdtjfif.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa2VtY2dyeHptbWNwZHRqZmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTYsImV4cCI6MTk2Nzg3MzE5Nn0.kfBRa_T42tBk603NpWRP4Wq03rowUysjlQ_fwhXu6Jw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}


export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        return (location.replace('./other-page'));
    }
}

export async function logout() {
    await client.auth.signOut();
    return (location.replace('/'));
}
