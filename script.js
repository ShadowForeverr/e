document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Get the message input value
    const message = document.getElementById('message').value;

    // Your Discord Webhook URL (replace with your actual webhook URL)
    const webhookURL = 'https://discord.com/api/webhooks/1353190652627779686/vLiuTAVT6PJoqWRPcWFJJY2M07cCT4eqa8touOhcfSDbOJ7h04FC9lVZdhYyf8SL28aa';

    // Payload to send to Discord
    const payload = {
        content: message
    };

    // Send the POST request to Discord
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent to Discord!');
        document.getElementById('message').value = ''; // Clear the input
    })
    .catch(error => {
        alert('Error sending message');
        console.error('Error:', error);
    });
});
