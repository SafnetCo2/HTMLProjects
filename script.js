document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();
        //validate form
        if (!name || !email || !subject || !message) {
            alert("fill all fields");
            return;
        }
        //simulate form submission
        //alert("Thank you" + name + "!message sent");
        //reset form
        //form.reset();
        //scripts for  google script
        const scriptURL = "https://script.google.com/macros/s/AKfycbx_2-14sQ16kLK-PNTVf97_isndBGXl9vJ950jOZlG7qOjAVqoYaH7RiyhpwSkWylrN7Q/exec"

        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({
                name, email, subject, message

            }),
            headers: {
                "content-Type": "application /json"
            }
        })
            .then(response => response.json())
            .then(data => {
                alert("message sent and saved")
                form.reset();
            })
            .catch(error => {
                console.error("Error!", error.message);
                alert("please try again")
            });


    });
});

