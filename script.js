/* ==========================
   Typing Animation
========================== */

const words = [
    "Full Stack Developer",
    "AI Enthusiast",
    "UI/UX Learner",
    "Java Developer",
    "Machine Learning Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

/* ==========================
   Sticky Navbar
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        nav.style.background = "#020617";
        nav.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(15,23,42,.85)";
        nav.style.boxShadow = "none";

    }

});

/* ==========================
   Scroll Reveal Animation
========================== */

const revealItems = document.querySelectorAll(
    ".about-box, .card, .project, .timeline-box, .contact-box"
);

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);
reveal();

/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================
   Smooth Button Hover
========================== */

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/* ==========================
   Scroll To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 8px 20px rgba(56,189,248,.4)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

/* ==========================
   Console Welcome
========================== */

console.log("Welcome to Madhumitha R Portfolio");