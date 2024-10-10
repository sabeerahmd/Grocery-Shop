document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('message');


    const validEmail = "sabeerahamed0704.m@gmail.com";
    const validPhoneNumber = "yourPhoneNumber"; // 


    if (contact === validEmail || contact === validPhoneNumber) {
        if (password === confirmPassword) {
            messageElement.textContent = "Signup successful! Redirecting...";
            messageElement.style.color = "green";

            alert(`Your signup is successful! Welcome to Grocery Depot, ${name}!`);

            
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 2000);
        } else {
            messageElement.textContent = "Passwords do not match!";
            messageElement.style.color = "red";
        }
    } else {
        messageElement.textContent = "Invalid email or phone number!";
        messageElement.style.color = "red";
    }
});