// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// LIGHTBOX
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// AOS INIT (SAFE LOAD)
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    once: true
  });
});
