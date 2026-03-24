const gallery = document.getElementById("gallery");

/* =========================
   PROJECT DATA
========================= */
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
  { src: "images/social/pnp-fb-post-2.jpg", category: "Social", title: "PNP Post Series", desc: "Consistent branding for social media." },
{ src: "images/social/pnp-fb-post-3.jpg", category: "Social", title: "PNP Post 3", desc: "Public safety awareness visual focused on community vigilance and crime prevention messaging." },
{ src: "images/social/pnp-fb-post-4.jpg", category: "Social", title: "PNP Post 4", desc: "Informational campaign design highlighting emergency response and preparedness guidelines." },
{ src: "images/social/pnp-fb-post-5.jpg", category: "Social", title: "PNP Post 5", desc: "Social media content emphasizing law enforcement visibility and public trust communication." },
{ src: "images/social/pnp-fb-post-6.jpg", category: "Social", title: "PNP Post 6", desc: "Awareness post promoting safety practices and community cooperation initiatives." },
{ src: "images/social/pnp-fb-post-7.jpg", category: "Social", title: "PNP Post 7", desc: "Campaign visual designed to educate the public on proper reporting and response procedures." },
{ src: "images/social/pnp-fb-post-8.jpg", category: "Social", title: "PNP Post 8", desc: "Graphic content focused on reinforcing discipline, order, and civic responsibility." },
{ src: "images/social/pnp-fb-post-9.jpg", category: "Social", title: "PNP Post 9", desc: "Public service announcement layout promoting awareness and community engagement." },
{ src: "images/social/pnp-fb-post-10.jpg", category: "Social", title: "PNP Post 10", desc: "Social post design highlighting safety reminders and proactive prevention strategies." },
{ src: "images/social/pnp-fb-post-11.jpg", category: "Social", title: "PNP Post 11", desc: "Visual communication piece supporting government outreach and information dissemination." },
{ src: "images/social/pnp-fb-post-12.jpg", category: "Social", title: "PNP Post 12", desc: "Final series post reinforcing consistent branding and unified messaging for the campaign." }
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

/* =========================
   FILTER BUTTONS
========================= */
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    renderGallery(filter);

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

/* =========================
   MODAL
========================= */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

function openModal(project) {
  modal.style.display = "flex";
  modalImg.src = project.src;
}

document.getElementById("close").onclick = () => {
  modal.style.display = "none";
};

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

/* INIT */
renderGallery("all");
