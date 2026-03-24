// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});

// Fade-in animation on scroll
const items = document.querySelectorAll('.item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(50px)";
  item.style.transition = "0.5s";
  observer.observe(item);
});
