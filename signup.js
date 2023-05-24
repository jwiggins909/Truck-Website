document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate and sanitize the input here if needed

    var user = {
        username: username,
        password: password
    };

    // Store the user data in localStorage or sessionStorage
    localStorage.setItem('userData', JSON.stringify(user));

    alert('Signup successful!');
});
