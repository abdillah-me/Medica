let signOut = document.getElementById('signOut')

signOut.addEventListener("click", (e) => {
    e.preventDefault();
    alert('Sign out success!')
    location.replace('login/login.html')
})