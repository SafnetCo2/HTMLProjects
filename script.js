
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
    return;
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycbwYZ6WD4oOhEipuY84W9Yz9Lw2xDI5_HAvBUgVz7qIOQ4f5k4j56AkZKv586aMJxeBa7A/exec"; 

    const data = {name, email, subject, message};

    fetch(scriptURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

            },
    body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
        alert("Message sent and saved to Google Sheets!");
    form.reset();
            } else {
        alert("Submission failed. Please try again.");
            }
        })
        .catch(error => {
        console.error("Error!", error.message);
    alert("There was a problem submitting your message.");
        });
    });

    // Optional: update date on the page
    const updatedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = updatedDate;
    }
});

