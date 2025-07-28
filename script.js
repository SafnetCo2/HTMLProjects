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

        const scriptURL = "https://script.google.com/macros/s/AKfycbxt7BjNBozNnNWPmcdipZSB4VABTXgNAP5_QQ2f7uJnTJ7TpyhgUvYLl124jr1y76GvJA/exec";

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);

        fetch(scriptURL, {
            method: "POST",
            body: formData
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
})






    < script >
  // Automatically show today's date
  const updatedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
document.getElementById('last-updated').textContent = updatedDate;
</script >
