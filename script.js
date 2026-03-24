const gallery = document.getElementById("gallery");

/* PROJECT DATA */
const projects = [
  { src: "images/branding/gymnastics-logo.jpg", category: "Branding", title: "Gymnastics Logo", desc: "A clean and dynamic logo representing movement, strength, and balance." },
  { src: "images/branding/jiloco-logo.jpg", category: "Branding", title: "JILoco Logo", desc: "Minimalist branding focused on clarity and identity." },
  { src: "images/branding/mutya-logo.jpg", category: "Branding", title: "Mutya Logo", desc: "Elegant cultural-inspired logo design." },

  { src: "images/it/animation-logo.jpg", category: "IT", title: "Animation Logo", desc: "Motion-based logo animation concept." },
  { src: "images/it/usa-pos-1.jpg", category: "IT", title: "POS System UI", desc: "User interface for point-of-sale system." },
  { src: "images/it/usa-pos-2.jpg", category: "IT", title: "POS Layout Variation", desc: "Improved transaction workflow UI." },

  { src: "images/print/graduation-program.jpg", category: "Print", title: "Graduation Program", desc: "Formal event layout with structured typography." },
  { src: "images/print/invitation-birthday.jpg", category: "Print", title: "Birthday Invitation", desc: "Creative invitation design with visual balance." },

  { src: "images/social/pnp-fb-post-1.jpg", category: "Social", title: "PNP Post", desc: "Social media awareness post design." },
  { src: "images/social/pnp-fb-post-2.jpg", category: "Social", title: "PNP Campaign", desc: "Optimized visual for engagement." }
];

/* FILTER UI */
const categories = ["all", "Branding", "IT", "Print", "Social"];

const filterContainer = document.createElement("div");
filterContainer.classList.add("filters");

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.innerText = cat.toUpperCase();
  btn.onclick = () => renderGallery(cat);
  filterContainer.appendChild(btn);
});

document.querySelector("#work").prepend(filterContainer);

/* RENDER */
function renderGallery(filter) {
  gallery.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const img = document.createElement("img");
    img.src = p.src;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `<h3>${p.title}</h3><p>${p.category}</p>`;

    card.appendChild(img);
    card.appendChild(overlay);

    card.onclick = () => openModal(p);

    gallery.appendChild(card);
  });
}

renderGallery("all");

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

const modalTitle = document.createElement("h2");
const modalCategory = document.createElement("span");
const modalDesc = document.createElement("p");

modal.appendChild(modalTitle);
modal.appendChild(modalCategory);
modal.appendChild(modalDesc);

function openModal(project) {
  modal.style.display = "block";
  modalImg.src = project.src;

  modalTitle.innerText = project.title;
  modalCategory.innerText = project.category;
  modalDesc.innerText = project.desc;
}

document.getElementById("close").onclick = () => {
  modal.style.display = "none";
};

/* SCROLL ANIMATION */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
