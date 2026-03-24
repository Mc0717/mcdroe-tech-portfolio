const gallery = document.getElementById("gallery");

const projects = [
  // BRANDING
 { src: "images/branding/gymnastics-logo.jpg", category: "Branding", title: "Gymnastics Logo", desc: "Dynamic identity representing strength, motion, and balance." },
  { src: "images/branding/jiloco-logo.jpg", category: "Branding", title: "JILoco Logo", desc: "Minimalist brand identity with clean typography." },
  { src: "images/branding/mutya-logo.jpg", category: "Branding", title: "Mutya Logo", desc: "Cultural-inspired logo with elegant styling." },

  // IT
  { src: "images/it/animation-logo.jpg", category: "IT", title: "Animation Logo", desc: "Motion graphics logo animation concept." },
  { src: "images/it/usa-pos-1.jpg", category: "IT", title: "POS UI Design", desc: "Point-of-sale system interface for usability and workflow." },
  { src: "images/it/usa-pos-2.jpg", category: "IT", title: "POS UI Variation", desc: "Alternative layout improving transaction flow." },

  // PRINT
 { src: "images/print/graduation-program.jpg", category: "Print", title: "Graduation Program", desc: "Formal printed layout with structured typography." },
  { src: "images/print/invitation-birthday.jpg", category: "Print", title: "Birthday Invitation", desc: "Creative invitation design with visual hierarchy." },
  { src: "images/print/ligtas-undas-2024-1.jpg", category: "Print", title: "Ligtas Undas Poster 1", desc: "Public safety awareness print design." },
  { src: "images/print/ligtas-undas-2024-2.jpg", category: "Print", title: "Ligtas Undas Poster 2", desc: "Complementary campaign visual." },
  { src: "images/print/plaque-1.jpg", category: "Print", title: "Plaque Design", desc: "Recognition plaque layout design." },
  { src: "images/print/sintra-board-1.jpg", category: "Print", title: "Sintra Board", desc: "Large-format print design." },
  { src: "images/print/thank-you-card.jpg", category: "Print", title: "Thank You Card", desc: "Elegant appreciation card design." },
  { src: "images/print/u-week-usa.jpg", category: "Print", title: "U-Week Poster", desc: "University event promotional material." },

  // SOCIAL
{ src: "images/social/pnp-fb-post-1.jpg", category: "Social", title: "PNP Post Series", desc: "Social media awareness campaign design." },
  { src: "images/social/pnp-fb-post-2.jpg", category: "Social", title: "PNP Post Series", desc: "Consistent branding for social media." }
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
/* =========================
   RENDER GALLERY
========================= */
function renderGallery(filter = "all") {
  gallery.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${p.src}" alt="${p.title}">
      <div class="overlay">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(p));

    gallery.appendChild(card);
  });
}
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
