const gallery = document.getElementById("gallery");

const projects = [
  { src: "images/branding/gymnastics-logo.jpg", cat: "branding", desc: "Gymnastics logo design focused on movement and strength." },
  { src: "images/branding/jiloco-logo.jpg", cat: "branding", desc: "Minimal logo identity for Jiloco brand." },
  { src: "images/branding/mutya-logo.jpg", cat: "branding", desc: "Elegant branding inspired by cultural aesthetics." },

  { src: "images/it/animation-logo.jpg", cat: "it", desc: "Animated logo concept for digital systems." },
  { src: "images/it/usa-pos-1.jpg", cat: "it", desc: "POS system UI mockup." },
  { src: "images/it/usa-pos-2.jpg", cat: "it", desc: "POS system interface variation." },

  { src: "images/print/graduation-program.jpg", cat: "print", desc: "Graduation program layout design." },
  { src: "images/print/invitation-birthday.jpg", cat: "print", desc: "Birthday invitation print design." },

  { src: "images/social/pnp-fb-post-1.jpg", cat: "social", desc: "Social media campaign post design." },
  { src: "images/social/pnp-fb-post-2.jpg", cat: "social", desc: "Facebook post visual for branding." }
];

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

/* FILTER */
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

/* THEME */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* NAV ACTIVE */
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
