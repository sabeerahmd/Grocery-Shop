function handleLoginClick() {
    alert("Redirecting to Login page...");
    window.location.href = 'login.html';
}

function handleSignupClick() {
    alert("Redirecting to Signup page...");
    window.location.href = 'signup.html';
}

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector("button:nth-of-type(1)");
    const signupButton = document.querySelector("button:nth-of-type(2)");

    loginButton.addEventListener("click", handleLoginClick);
    signupButton.addEventListener("click", handleSignupClick);
});
