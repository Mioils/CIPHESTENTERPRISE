
/* =========================================
   CIPHEST ENTERPRISE JAVASCRIPT
========================================= */


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// CLOSE MENU WHEN A LINK IS CLICKED

document.querySelectorAll("#nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


// DARK AND LIGHT THEME

const themeToggle = document.getElementById("theme-toggle");


// Restore saved theme

const savedTheme = localStorage.getItem("ciphest-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeToggle.textContent = "☾";

} else {

    themeToggle.textContent = "☀";

}


// Change theme

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";

    localStorage.setItem(
        "ciphest-theme",
        isLight ? "light" : "dark"
    );

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

const formNote = document.getElementById("form-note");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !service || !message) {

        formNote.textContent = "Please complete all fields.";

        return;

    }


    const subject = encodeURIComponent(
        "CIPHEST ENTERPRISE - " + service
    );


    const body = encodeURIComponent(

        "Hello CIPHEST ENTERPRISE,\n\n" +

        "My name is: " + name + "\n\n" +

        "My email: " + email + "\n\n" +

        "Service: " + service + "\n\n" +

        "Message:\n" + message

    );


    const mailtoLink =

        "mailto:charleseldelight@gmail.com" +

        "?subject=" + subject +

        "&body=" + body;


    formNote.textContent =
        "Opening your email application...";


    window.location.href = mailtoLink;

});
