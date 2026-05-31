const first_Name = document.getElementById('first_Name');
const last_Name = document.getElementById('last_Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');
const address = document.getElementById('address');
const create_Account = document.getElementById('create_Account');

create_Account.addEventListener('click', async () => {

    // New user auth
    const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
        data: {
            first_name: first_Name.value,
            }
        }
    })

    if (error) {
        console.log(error.message);
    }else{
        alert('user create');
    }

    const { error2 } = await client
    .from('user_food')
    .insert({ 
        firstName : first_Name.value,
        lastName : last_Name.value,
        email : email.value,
        password : password.value,
        number : number.value,
        address : address.value
   })

   if (error2) {
    console.log(error2.message);
   }else{
    alert('user data get'); 
    window.location.href= './index.html'
   }

    first_Name.value = ""
    last_Name.value = ""
    email.value = ""
    password.value = ""
    number.value = ""
    address.value = ""

})