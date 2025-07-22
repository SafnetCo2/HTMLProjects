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
        alert("Thank you" + name + "!message sent");
        //reset form
        form.reset();

    });
});