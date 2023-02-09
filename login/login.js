// let loginForm = document.getElementById("login-form");
// let loginButton = document.getElementById("login-form-submit");
// let loginHeader = document.getElementById("login-header");
// let errorMessage = document.getElementById("errorMessage");

// loginButton.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	let username = loginForm.username.value;
// 	let password = loginForm.password.value;

// 	if (username === 'user1' && password === '12345') {
// 		loginHeader.innerText = 'Login Berhasil!'
// 		loginForm.innerText = `Halo ${username}, Selalu jaga kesehatanmu ya!`;
// 		location.replace('../index.html')
// 		alert(`Hello ${username}! You have successfully logged in.`);
// 	} else if (username && password){
// 		errorMessage.innerHTML = "Username / password incorrect!"
// 	} 
// 	else if (!username && password) {
// 		errorMessage.innerHTML = "Please input username!";
// 	} else if (!password && username) {
// 		errorMessage.innerHTML = "Please input password!";
// 	} else {
// 		errorMessage.innerHTML = "Please input username & password!";
// 	}
// });

let loginForm = document.getElementById("login-form");
let loginButton = document.getElementById("login-form-submit");
let loginHeader = document.getElementById("login-header");
let errorMessage = document.getElementById("errorMessage");
let createMessage = document.getElementById("createMessage")
let addUserForm = document.getElementById("add-user-form");
let addUserButton = document.getElementById("add-user-form-submit");

// Initialize an array to store the allowed users
let users = [{ username: "user1", password: "MTIzNDU=" }];

// Function to add a new user to the database
function addUser(username, password) {
  let hashedPassword = btoa(password);
  let newUser = { username: username, password: hashedPassword };
  users.push(newUser);
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let username = loginForm.username.value;
  let password = loginForm.password.value;

  // Hash the password before checking it against the saved password
  let hashedPassword = btoa(password);

  // Check the username and hashed password against the database of allowed users
  let isUserValid = false;
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && hashedPassword === users[i].password) {
      isUserValid = true;
      break;
    }
  }

  if (isUserValid) {
    loginHeader.innerText = "Login Successful!";
    loginForm.innerText = `Hello ${username}, stay healthy!`;
    location.replace("../index.html");
    alert(`Hello ${username}! You have successfully logged in.`);
  } else if (username && password) {
    errorMessage.innerHTML = "Username or password incorrect!";
  } else if (!username && password) {
    errorMessage.innerHTML = "Please enter username!";
  } else if (!password && username) {
    errorMessage.innerHTML = "Please enter password!";
  } else {
    errorMessage.innerHTML = "Please enter username & password!";
  }
});

addUserButton.addEventListener("click", (e) => {
  e.preventDefault();
  let username = addUserForm.username.value;
  let password = addUserForm.password.value;
  addUser(username, password);
  createMessage.innerHTML = "Account has been successfully created"
});
