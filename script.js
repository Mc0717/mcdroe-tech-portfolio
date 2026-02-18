// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('show');
});

// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Remove once shown for performance
      }
    });
  },
  { threshold: 0.3 }
);
faders.forEach(fade => observer.observe(fade));

// Modal Lightbox Gallery
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = Array.from(document.querySelectorAll(".project-image"));
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Open modal with image
function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerText = images[index].alt;
  currentIndex = index;
}

// Event: click on image
images.forEach((img, i) => {
  img.addEventListener("click", () => openModal(i));
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};
// Close modal on outside click
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
// Keyboard support for modal
window.addEventListener('keydown', (e) => {
  if (modal.style.display === 'block') {
    if (e.key === 'Escape') {
      modal.style.display = 'none';
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      openModal(currentIndex);
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      openModal(currentIndex);
    }
  }
});

// Prev/Next buttons
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
};
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
};
