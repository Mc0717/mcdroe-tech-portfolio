// =========================
// MOBILE NAV TOGGLE
// =========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// =========================
// SMOOTH SCROLL (for nav links)
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close menu on mobile
        navLinks.classList.remove("show");
    });
});

// =========================
// FADE-IN ON SCROLL
// =========================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add("fade-in-section");
    observer.observe(section);
});

// =========================
// IMAGE LIGHTBOX (CLICK PROJECT)
// =========================
const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content">
`;

document.body.appendChild(modal);

const modalImg = modal.querySelector(".modal-content");
const closeBtn = modal.querySelector(".close");

// Open modal
document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";

// Close when clicking outside
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
