const gallery = document.getElementById("gallery");

const images = [
  "images/branding/gymnastics-logo.jpg",
  "images/branding/jiloco-logo.jpg",
  "images/branding/mutya-logo.jpg",
  "images/print/graduation-program.jpg",
  "images/print/invitation-birthday.jpg",
  "images/print/u-week-usa.jpg",
  "images/social/pnp-fb-post-1.jpg",
  "images/social/pnp-fb-post-2.jpg",
  "images/social/pnp-fb-post-3.jpg",
  "images/social/pnp-fb-post-4.jpg"
];

// LOAD IMAGES
images.forEach(src => {
  let img = document.createElement("img");
  img.src = src;
  img.onclick = () => openModal(src);
  gallery.appendChild(img);
});

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

document.getElementById("close").onclick = () => {
  modal.style.display = "none";
};

// SCROLL REVEAL
const reveals = document.querySelectorAll(".card, .gallery img");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// INITIAL STATE
reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s ease";
});
