const logout = document.getElementById('logout');
const user_Profile = document.getElementById('user');

async function fecthData() {
     const { data, error } = await client.auth.getSession()
    if (error) {
        console.log(error.message);
        return
    }
    
    let userData = data.session.user.id;

    const { data:dataFetch, error:errorFetch } = await client
    .from('user_food')
    .select('firstName, lastName, email')
    .eq('uid', userData)
    .order('created_at', { ascending: false });
    
    if (errorFetch) {
        console.log(errorFetch)
    }else{
        console.log(dataFetch);
    }
    
    for (let i = 0; i < dataFetch.length; i++) {
    user_Profile.innerHTML = `
        <span>Name: ${dataFetch[i].firstName} ${dataFetch[i].lastName}<span/>
        <div>Email: ${dataFetch[i].email}</div>
    `}

}
fecthData();

if (logout) {
    logout.addEventListener('click', async () => {
        const { error:signout } = await client.auth.signOut({ scope: 'local' });

        if (signout) {
            console.log(signout.message);
            alert(signout.message);
        } else {
            alert('Logout successfully!');
        }
    });
}