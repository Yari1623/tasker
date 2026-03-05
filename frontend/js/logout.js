const logout = document.getElementById("deco-btn");

logout.addEventListener('click', () => {
    localStorage.removeItem("token");
    window.location.href = "/logout";
});