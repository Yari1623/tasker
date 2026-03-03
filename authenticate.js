const loginFormBox = document.getElementById("loginFormBox");
const registerFormBox = document.getElementById("registerFormBox");

const showLoginForm = document.getElementById("showLoginForm");
const showRegisterForm = document.getElementById("showRegisterForm");

showLoginForm.addEventListener('click', () =>{
    registerFormBox.style.display = "none";
    loginFormBox.style.display ="block";
});


showRegisterForm.addEventListener('click', () => {
    loginFormBox.style.display = 'none';
    registerFormBox.style.display = 'block';
});

console.log(loginFormBox);

