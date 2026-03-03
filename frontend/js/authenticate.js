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

//register



//login
loginFormBox.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mail: email, password }) // mail = attendu par backend
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.token) {
            // Stocker le token JWT
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html"; // redirection après login
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error(error);
        alert("Erreur serveur !");
    });
});
