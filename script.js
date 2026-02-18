// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('show'); });

// Fade-in Sections
const faders = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('show'); }
    });
}, { threshold:0.3 });
faders.forEach(fade => observer.observe(fade));

// Modal Lightbox
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".project-image");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerText = img.alt;
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }
