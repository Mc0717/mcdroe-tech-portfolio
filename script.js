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

// Modal Lightbox Gallery
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = Array.from(document.querySelectorAll(".project-image"));
const closeBtn = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function openModal(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;
    captionText.innerText = images[index].alt;
    currentIndex = index;
}

// Open modal on click
images.forEach((img, i) => {
    img.addEventListener("click", () => openModal(i));
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }

// Next / Previous
next.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    openModal(currentIndex);
};
prev.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openModal(currentIndex);
};
