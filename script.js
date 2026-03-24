const gallery = document.getElementById("gallery");

/* FULL PROJECT DATASET */
const projects = [

  // BRANDING
  { src: "images/branding/gymnastics-logo.jpg", cat: "branding", desc: "Gymnastics logo design emphasizing motion, strength, and athletic identity." },
  { src: "images/branding/jiloco-logo.jpg", cat: "branding", desc: "Modern minimalist logo crafted for brand recognition and simplicity." },
  { src: "images/branding/mutya-logo.jpg", cat: "branding", desc: "Elegant identity design inspired by cultural and feminine aesthetics." },

  // IT
  { src: "images/it/animation-logo.jpg", cat: "it", desc: "Animated logo concept designed for digital presentation and motion branding." },
  { src: "images/it/usa-pos-1.jpg", cat: "it", desc: "Point-of-sale system interface design (UI layout sample 1)." },
  { src: "images/it/usa-pos-2.jpg", cat: "it", desc: "Point-of-sale system interface design (UI layout sample 2)." },

  // PRINT
  { src: "images/print/graduation-program.jpg", cat: "print", desc: "Graduation program layout combining hierarchy, readability, and formal typography." },
  { src: "images/print/invitation-birthday.jpg", cat: "print", desc: "Birthday invitation design with balanced composition and festive tone." },
  { src: "images/print/ligtas-undas-2024-1.jpg", cat: "print", desc: "Ligtas Undas awareness poster design for public safety communication." },
  { src: "images/print/ligtas-undas-2024-2.jpg", cat: "print", desc: "Complementary poster layout for Ligtas Undas campaign." },
  { src: "images/print/plaque-1.jpg", cat: "print", desc: "Recognition plaque design with formal typography and layout." },
   { src: "images/print/sintra-board-1.jpg", cat: "print", desc: "Sintra board layout design for large-format display printing." },
   { src: "images/print/thank-you-card.jpg", cat: "print", desc: "Thank you card design focused on minimalism and clarity." },
  { src: "images/print/u-week-usa.jpg", cat: "print", desc: "University Week promotional print design with vibrant layout." },

  // SOCIAL
  { src: "images/social/pnp-fb-post-1.jpg", cat: "social", desc: "Facebook post design for promotional or informational campaign." },
  { src: "images/social/pnp-fb-post-2.jpg", cat: "social", desc: "Social media content layout optimized for engagement and clarity." },
  { src: "images/social/pnp-fb-post-3.jpg", cat: "social", desc: "Graphic post designed for visual storytelling on social platforms." },
  { src: "images/social/pnp-fb-post-4.jpg", cat: "social", desc: "Social media visual designed with hierarchy and branding consistency." },
  { src: "images/social/pnp-fb-post-5.jpg", cat: "social", desc: "Content post optimized for readability and visual balance." },
  { src: "images/social/pnp-fb-post-6.jpg", cat: "social", desc: "Engagement-focused social media graphic design." },
  { src: "images/social/pnp-fb-post-7.jpg", cat: "social", desc: "Clean layout post for announcements and digital communication." },
  { src: "images/social/pnp-fb-post-8.jpg", cat: "social", desc: "Visual content created for consistent branding across posts." },
  { src: "images/social/pnp-fb-post-9.jpg", cat: "social", desc: "Social post layout emphasizing typography and spacing." },
  { src: "images/social/pnp-fb-post-10.jpg", cat: "social", desc: "Graphic post designed for public information sharing." },
  { src: "images/social/pnp-fb-post-11.jpg", cat: "social", desc: "Social media design with strong visual hierarchy." },
  { src: "images/social/pnp-fb-post-12.jpg", cat: "social", desc: "Final variation of campaign-style social media content." }

];

/* RENDER FUNCTION */
function render(filter = "all") {
  gallery.innerHTML = "";

  projects.forEach(p => {
    if (filter === "all" || p.cat === filter) {
      let img = document.createElement("img");
      img.src = p.src;
      img.onclick = () => openModal(p);
      gallery.appendChild(img);
    }
  });
}

render();

/* FILTER BUTTONS */
function filterProjects(cat) {
  render(cat);
}

/* MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

function openModal(project) {
  modal.style.display = "block";
  modalImg.src = project.src;
  modalDesc.innerText = project.desc;
}

document.getElementById("close").onclick = () => {
  modal.style.display = "none";
};

/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ACTIVE NAV */
const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
