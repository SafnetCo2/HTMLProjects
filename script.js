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

        const scriptURL = "https://script.google.com/macros/s/AKfycbzgpqI96O5Eg6epe_inQeFl7lMmsibm-xN2TOPYpexHQSIqJZtEO-WmdMOgR0MJwu-N8Q/exec";

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

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
});
