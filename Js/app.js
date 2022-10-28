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

const notActive = (section) => {
  section.classList.remove("your-active-class");
};
//When clicking an item from the navigation menu, the link should scroll to the appropriate section.
const onMenuScroll = () => {
  const scroll = document.querySelectorAll(".nav-items a");
  scroll.forEach((item) => {
    item.addEventListener("click", () => {
      for (i = 0; i < landingSections; i++) {
        landingSections[i].addEventListener("click", sectionScroll(item));
      }
    });
  });
};

onMenuScroll();
