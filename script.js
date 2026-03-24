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
