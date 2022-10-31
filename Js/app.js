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

window.__forceSmoothScrollPolyfill__ = true;
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

const isActive = (section) => {
  const { top } = section.getBoundingClientRect();

  section.classList.toggle("your-active-class", top >= 0);
};

const toggleActiveClass = () => {
  landingSections.forEach(isActive);
};

document.addEventListener("scroll", toggleActiveClass);
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//adding active menu link class with toggle
const navLinks = document.querySelectorAll(".nav-items a");

navLinks.forEach((Link) => {
  Link.addEventListener("click", (e) => {
    navLinks.forEach((d) => d.classList.remove("active"));
    e.target.classList.toggle("active");
    Link.scrollTo({ behavior: "smooth" });
  });
});

const notActive = (section) => {
  section.classList.remove("your-active-class");
};
