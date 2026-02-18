// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); // Trigger earlier for better feel

faders.forEach(fade => {
    observer.observe(fade);
});

// Image Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".project-card img"); // Fixed selector
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

// Close if user clicks outside the image
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};
