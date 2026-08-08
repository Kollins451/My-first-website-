// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {

    const href = this.getAttribute("href");

    // Ignore empty "#" links
    if (!href || href === "#") {
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });
});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

const revealSections = () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show-section");
    }

  });

};

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// =========================
// WELCOME MESSAGE
// =========================

window.addEventListener("load", () => {

  console.log("Welcome to Kollins Portfolio!");

});


// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

      themeToggle.innerHTML = "☀️";
      themeToggle.setAttribute("aria-label", "Switch to light mode");

    } else {

      themeToggle.innerHTML = "🌙";
      themeToggle.setAttribute("aria-label", "Switch to dark mode");

    }

  });

}


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

      menuToggle.innerHTML = "✕";
      menuToggle.setAttribute("aria-label", "Close menu");

    } else {

      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Open menu");

    }

  });


  // Close menu when a navigation link is clicked

  document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Open menu");

    });

  });

}
