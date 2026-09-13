function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

document.getElementById("eleviqForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const school = document.getElementById("school").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello Eleviq,%0A%0A" +
        "I would like to make an enquiry.%0A%0A" +
        "Full Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Service: " + encodeURIComponent(service) + "%0A" +
        "School/Institution: " + encodeURIComponent(school) + "%0A" +
        "Message: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/2349011582752?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});
