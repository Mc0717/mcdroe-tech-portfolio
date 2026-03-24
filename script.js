const gallery = document.getElementById("gallery");

const projects = [
  // BRANDING
  { src: "images/branding/gymnastics-logo.jpg", category: "branding" },
  { src: "images/branding/jiloco-logo.jpg", category: "branding" },
  { src: "images/branding/mutya-logo.jpg", category: "branding" },

  // IT
  { src: "images/it/animation-logo.jpg", category: "it" },
  { src: "images/it/usa-pos-1.jpg", category: "it" },
  { src: "images/it/usa-pos-2.jpg", category: "it" },

  // PRINT
  { src: "images/print/graduation-program.jpg", category: "print" },
  { src: "images/print/invitation-birthday.jpg", category: "print" },
  { src: "images/print/ligtas-undas-2024-1.jpg", category: "print" },
  { src: "images/print/ligtas-undas-2024-2.jpg", category: "print" },
  { src: "images/print/plaque-1.jpg", category: "print" },
  { src: "images/print/sintra-board-1.jpg", category: "print" },
  { src: "images/print/thank-you-card.jpg", category: "print" },
  { src: "images/print/u-week-usa.jpg", category: "print" },

  // SOCIAL
  { src: "images/social/pnp-fb-post-1.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-2.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-3.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-4.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-5.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-6.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-7.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-8.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-9.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-10.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-11.jpg", category: "social" },
  { src: "images/social/pnp-fb-post-12.jpg", category: "social" },
];

// Create filter buttons
const categories = ["all", "branding", "it", "print", "social"];

const filterContainer = document.createElement("div");
filterContainer.classList.add("filters");

categories.forEach(cat => {
  let btn = document.createElement("button");
  btn.innerText = cat.toUpperCase();
  btn.onclick = () => renderGallery(cat);
  filterContainer.appendChild(btn);
});

document.querySelector("#work").prepend(filterContainer);

// Render gallery
function renderGallery(filter) {
  gallery.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach(p => {
    let img = document.createElement("img");
    img.src = p.src;
    img.onclick = () => openModal(p.src);
    gallery.appendChild(img);
  });
}

// Default load
renderGallery("all");

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
