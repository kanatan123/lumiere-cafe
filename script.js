/* =========================
   Mobile Menu
========================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* =========================
   Close menu when link clicked
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   Header scroll effect
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.position = "fixed";

        header.style.background = "rgba(25, 30, 26, 0.95)";

        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.position = "absolute";

        header.style.background = "transparent";

        header.style.backdropFilter = "none";

    }

});


/* =========================
   Fade in animation
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});

// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const contactBack = document.querySelector(".contact-back");

if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        contactForm.style.display = "none";
        formSuccess.style.display = "block";

        if (contactBack) {
            contactBack.style.display = "none";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}