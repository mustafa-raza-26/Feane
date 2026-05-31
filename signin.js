let email_login = document.getElementById('email');
let password_login = document.getElementById('password');
let google = document.getElementById('google');
let facebook = document.getElementById('facebook');
let signin = document.getElementById('signin');

// signin user via email & password
if (signin) {
    signin.addEventListener('click', async (e) => {
        e.preventDefault();
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
}