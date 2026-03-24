const gallery = document.getElementById("gallery");

// AUTO LOAD IMAGES
const images = {
  branding: [
    "images/branding/gymnastics-logo.jpg",
    "images/branding/jiloco-logo.jpg",
    "images/branding/mutya-logo.jpg"
  ],
  print: [
    "images/print/graduation-program.jpg",
    "images/print/invitation-birthday.jpg",
    "images/print/u-week-usa.jpg"
  ],
  social: [
    "images/social/pnp-fb-post-1.jpg",
    "images/social/pnp-fb-post-2.jpg",
    "images/social/pnp-fb-post-3.jpg",
    "images/social/pnp-fb-post-4.jpg",
    "images/social/pnp-fb-post-5.jpg"
  ]
};

function loadImages(filter = "all") {
  gallery.innerHTML = "";

  for (let category in images) {
    if (filter === "all" || filter === category) {
      images[category].forEach(src => {
        let div = document.createElement("div");
        div.className = "item";

        let img = document.createElement("img");
        img.src = src;

        // CLICK = OPEN MODAL
        img.onclick = () => openModal(src);

        div.appendChild(img);
        gallery.appendChild(div);
      });
    }
  }
}

// FILTER
function filterSelection(category) {
  loadImages(category);
}

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
}

document.getElementById("close").onclick = function () {
  modal.style.display = "none";
};

// INIT LOAD
loadImages();
