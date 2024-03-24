
function sendmessage() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('messages').value;

  // Perform validation
  if (name.trim() === '') {
      alert('Please enter your name');
      return;
  }
  if (email.trim() === '') {
      alert('Please enter your email');
      return;
  }
  if (message.trim() === '') {
      alert('Please enter your message');
      return;
  }

  // Prepare the data to send
  var data = {
      Name: name,
      Email: email,
      Message: message
  };

  // Send the message to the server using AJAX
  fetch('/api/message', {
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
      return response.text();
  })
  .then(data => {
      console.log(data); // Log the response from the server
      // Clear input fields if the message was sent successfully
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('messages').value = '';
  })
  .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
  });
}
