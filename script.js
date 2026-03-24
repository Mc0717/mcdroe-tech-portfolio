const gallery = document.getElementById("gallery");
const preview = document.getElementById("preview-gallery");

const images = [
  "images/branding/gymnastics-logo.jpg",
  "images/branding/jiloco-logo.jpg",
  "images/branding/mutya-logo.jpg",
  "images/print/graduation-program.jpg",
  "images/print/invitation-birthday.jpg",
  "images/social/pnp-fb-post-1.jpg",
  "images/social/pnp-fb-post-2.jpg"
];

// LOAD ALL
images.forEach((src, index) => {
  let img = document.createElement("img");
  img.src = src;
  img.onclick = () => openModal(src);
  gallery.appendChild(img);

  // FIRST 4 = FEATURED
  if (index < 4) {
    let pimg = document.createElement("img");
    pimg.src = src;
    pimg.onclick = () => openModal(src);
    preview.appendChild(pimg);
  }
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
