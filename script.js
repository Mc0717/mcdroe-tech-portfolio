const gallery = document.getElementById("gallery");

/* PROJECT DATA */
const projects = [
  { src: "images/branding/gymnastics-logo.jpg", category: "Branding", title: "Gymnastics Logo", desc: "Strength, motion, and balance identity." },
  { src: "images/branding/jiloco-logo.jpg", category: "Branding", title: "JILoco Logo", desc: "Minimalist brand identity." },
  { src: "images/branding/mutya-logo.jpg", category: "Branding", title: "Mutya Logo", desc: "Cultural-inspired design." },

  { src: "images/it/animation-logo.jpg", category: "IT", title: "Animation Logo", desc: "Motion logo concept." },
  { src: "images/it/usa-pos-1.jpg", category: "IT", title: "POS UI", desc: "User-friendly POS interface." },
  { src: "images/it/usa-pos-2.jpg", category: "IT", title: "POS UI Variant", desc: "Improved layout flow." },

  { src: "images/print/graduation-program.jpg", category: "Print", title: "Graduation Program", desc: "Formal layout design." },
  { src: "images/print/invitation-birthday.jpg", category: "Print", title: "Birthday Invitation", desc: "Event invitation design." },

  { src: "images/social/pnp-fb-post-1.jpg", category: "Social", title: "PNP Post", desc: "Campaign design series." },
  { src: "images/social/pnp-fb-post-2.jpg", category: "Social", title: "PNP Post", desc: "Consistent branding." }
];

/* RENDER */
function render(filter = "all") {
  gallery.innerHTML = "";

  const data = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${p.src}" loading="lazy">
      <div class="overlay">
        <h3>${p.title}</h3>
        <p>${p.category}</p>
      </div>
    `;

    card.onclick = () => openModal(p);
    gallery.appendChild(card);
  });
}

/* FILTER */
const buttons = document.querySelectorAll(".filters button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDesc = document.getElementById("modal-desc");

function openModal(p) {
  modal.style.display = "flex";
  modalImg.src = p.src;
  modalTitle.textContent = p.title;
  modalCategory.textContent = p.category;
  modalDesc.textContent = p.desc;
}

document.getElementById("close").onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

/* CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* INIT */
render();
