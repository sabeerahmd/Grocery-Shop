document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const validEmail = "sabeerahamed0704.m@gmail.com";
    const validPassword = "password";

    if ((contact === validEmail || contact === "yourPhoneNumber") && password === validPassword) {
        messageElement.textContent = "Login successful! Redirecting...";
        messageElement.style.color = "green";

        alert(`Your login is successful! Welcome to Grocery Depot!`);

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000);
    } else {
        messageElement.textContent = "Invalid email/phone number or password!";
        messageElement.style.color = "red";
    }
});