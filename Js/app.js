// const smoothScroll = document.querySelector("html");
const navMenu = document.getElementById("MenuItems");
const landingSections = Array.from(document.querySelectorAll("section"));

console.log(navMenu);
//nav menu creation
function Menu_creator() {
  for (section of landingSections) {
    let navItems = document.createElement("li");
    const section_id = section.id;
    const section_title = section.dataset.nav;
    navItems.innerHTML = `<li class="nav-items"><a href="#${section_id}">${section_title}</a></li>`;
    navMenu.appendChild(navItems);
  }
}

Menu_creator();

//adding active menu link class with toggle
const navLinks = document.querySelectorAll(".nav-items a");

navLinks.forEach((Link) => {
  Link.addEventListener("click", (e) => {
    navLinks.forEach((d) => d.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

// selecting all anchors to add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((scrollLink) => {
  scrollLink.addEventListener("click", function (b) {
    b.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//adding active class based on top of viewport
window.onscroll = function () {
  landingSections.forEach(function (sectionActive) {
    if (
      sectionActive.getBoundingClientRect().top >= -500 &&
      sectionActive.getBoundingClientRect().top <= 100
    ) {
      sectionActive.classList.add("your-active-class");
    } else {
      sectionActive.classList.remove("your-active-class");
    }
  });
};
