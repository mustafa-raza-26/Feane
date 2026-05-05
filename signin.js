const supabaseUrl = 'https://rdzdtdzqeujpwfjqqtnf.supabase.co'
const supabaseKey = 'sb_publishable_uNqGP12r4z9GwZqvuhpSUg_pgV_L8Qz'
const client = supabase.createClient(supabaseUrl, supabaseKey);
console.log(client);

let email_login = document.getElementById('email');
let password_login = document.getElementById('password');
let google = document.getElementById('google');
let facebook = document.getElementById('facebook');
let signin = document.getElementById('signin');

// signin user via email & password
signin.addEventListener('click', async (e) => {
    const { data, error } = await client.auth.signInWithPassword({
        email: email_login.value,
        password: password_login.value,
    })
    
if (error) {
    console.log(error.message);
}else{
    console.log(data);
    console.log('you login via email');
}
})