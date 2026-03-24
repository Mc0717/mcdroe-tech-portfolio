// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

function showSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);
