const gallery = document.getElementById("gallery");

/* FULL PROJECT DATA (ALL YOUR FILES) */
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
  { src: "images/print/plaque-1.jpg", category: "Print", title: "Plaque Design 1", desc: "Recognition plaque layout design." },
  { src: "images/print/sintra-board-1.jpg", category: "Print", title: "Sintra Board 1", desc: "Large-format print design." },
  { src: "images/print/sintra-board-2.jpg", category: "Print", title: "Sintra Board 2", desc: "Alternative layout for signage." },
  { src: "images/print/thank-you-card.jpg", category: "Print", title: "Thank You Card", desc: "Simple and elegant appreciation card design." },
  { src: "images/print/u-week-usa.jpg", category: "Print", title: "U-Week Poster", desc: "University event promotional material." },

  // SOCIAL
  { src: "images/social/pnp-fb-post-1.jpg", category: "Social", title: "PNP Post 1", desc: "Social media awareness campaign design." },
  { src: "images/social/pnp-fb-post-2.jpg", category: "Social", title: "PNP Post 2", desc: "Optimized visual for engagement." },
  { src: "images/social/pnp-fb-post-3.jpg", category: "Social", title: "PNP Post 3", desc: "Consistent branding for social media." },
  { src: "images/social/pnp-fb-post-4.jpg", category: "Social", title: "PNP Post 4", desc: "Informational post layout." },
  { src: "images/social/pnp-fb-post-5.jpg", category: "Social", title: "PNP Post 5", desc: "Clean visual hierarchy for readability." },
  { src: "images/social/pnp-fb-post-6.jpg", category: "Social", title: "PNP Post 6", desc: "Campaign-driven design." },
  { src: "images/social/pnp-fb-post-7.jpg", category: "Social", title: "PNP Post 7", desc: "Public awareness content design." },
  { src: "images/social/pnp-fb-post-8.jpg", category: "Social", title: "PNP Post 8", desc: "Visual consistency across posts." },
  { src: "images/social/pnp-fb-post-9.jpg", category: "Social", title: "PNP Post 9", desc: "Engagement-focused layout." },
  { src: "images/social/pnp-fb-post-10.jpg", category: "Social", title: "PNP Post 10", desc: "Campaign expansion design." },
  { src: "images/social/pnp-fb-post-11.jpg", category: "Social", title: "PNP Post 11", desc: "Structured social visual." },
  { src: "images/social/pnp-fb-post-12.jpg", category: "Social", title: "PNP Post 12", desc: "Final variation in series." }

];

/* FILTERS */
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

/* RENDER GALLERY */
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

    /* 3D HOVER EFFECT */
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });

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

/* SCROLL REVEAL */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
