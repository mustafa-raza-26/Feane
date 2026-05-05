const supabaseUrl = 'https://rdzdtdzqeujpwfjqqtnf.supabase.co'
const supabaseKey = 'sb_publishable_uNqGP12r4z9GwZqvuhpSUg_pgV_L8Qz'
const client = supabase.createClient(supabaseUrl, supabaseKey)
console.log(client);


const first_Name = document.getElementById('first_Name');
const last_Name = document.getElementById('last_Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');
const address = document.getElementById('address');
const create_Account = document.getElementById('create_Account');

create_Account.addEventListener('click', async (e) => {
    e.preventDefault()
    // console.log(first_Name.value);
    // console.log(last_Name.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(number.value);
    // console.log(address.value);

    const { error } = await client
  .from('foode_userdata')
  .insert({ 
    first_Name : first_Name.value,
    last_Name : last_Name.value,
    email : email.value,
    password : password.value,
    number : number.value,
    address : address.value
   })

   if (error) {
    console.log(error.message);
   }else{
    // console.log(data);
    console.log('user data get');
    
   }
   


    // New user create
    const { data, error2 } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    })

    if (error) {
        console.log(error2.message);
    }else{
        // console.log(data);
        console.log('user create');
        
    }

})