// FILTER FUNCTION
function filterSelection(category) {
  let items = document.getElementsByClassName("item");

  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    let el = items[i];

    if (el.className.indexOf(category) > -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }
}

// Default = show all
filterSelection("all");


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
