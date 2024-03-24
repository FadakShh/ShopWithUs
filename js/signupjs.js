document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        validateForm(); // Call the function to validate the form
    });

    function validateForm() {
        // Get form inputs
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phonenb = document.getElementById("phonenb").value.trim();
        const password = document.getElementById("password").value.trim();
        const password2 = document.getElementById("password2").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');

        // Validate inputs
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (username === "") {
            alert("Please enter a username.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (phonenb === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (password === "") {
            alert("Please enter a password.");
            return;
        }

        if (password !== password2) {
            alert("Passwords do not match.");
            return;
        }

        if (!gender) {
            alert("Please select a gender.");
            return;
        }

        // If all validations pass, submit form data
        const formData = {
            name: name,
            username: username,
            email: email,
            phonenb: phonenb,
            password: password,
            gender: gender.value
        };

        // Send form data using AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_form.php"); // Replace "submit_form.php" with your server-side script URL
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Successful request
                alert("Form submitted successfully!");
                // Optionally, you can redirect the user or perform other actions here
            } else {
                // Error handling
                alert("Error submitting form. Please try again later.");
            }
        };
        xhr.send(JSON.stringify(formData));
    }
});
