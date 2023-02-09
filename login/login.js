let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
let loginHeader = document.getElementById("login-header");
let errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	let username = loginForm.username.value;
	let password = loginForm.password.value;

	if (username && password) {
		loginHeader.innerText = 'Login Berhasil!'
		loginForm.innerText = `Halo ${username}, Selalu jaga kesehatanmu ya!`;
		location.replace('../index.html')
		alert(`Hello ${username}! You have successfully logged in.`);
	} else if (!username && password) {
		errorMessage.innerHTML = "Please input username!";
	} else if (!password && username) {
		errorMessage.innerHTML = "Please input password!";
	} else {
		errorMessage.innerHTML = "Please input username & password!";
	}
});
