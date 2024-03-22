
    function sendmessage() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('messages').value;
  
        // Perform validation if needed
  
        // Send the message to the server (you can use AJAX for this)
        // For demonstration, we'll just log the values to the console
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
  
        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('messages').value = '';
      }