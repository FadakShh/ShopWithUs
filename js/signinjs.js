document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if Web Storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Get the checkbox element
        var rememberCheckbox = document.getElementById('remember-me');

        // Check if the "Remember me" checkbox is checked
        if (rememberCheckbox.checked) {
            // If checked, save a flag in localStorage
            localStorage.setItem('rememberMe', 'true');
        } else {
            // If not checked, remove the flag from localStorage
            localStorage.removeItem('rememberMe');
        }
    } else {
        // Web Storage is not supported
        console.error('Web Storage is not supported by your browser.');
    }

    // Prepare the data to send
    var data = {
        email: email,
        password: password
    };

    // Send the login data to the server using AJAX
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Redirect the user to the account page if login is successful
        window.location.href = 'myprofile.html ';
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});
