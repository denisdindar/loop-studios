const iconOpen = document.querySelector(".nav__toggle--open");
const iconClose = document.querySelector(".nav__toggle--close");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");

iconOpen.addEventListener("click", () => {
  nav.style.opacity = "1";
  nav.style.zIndex = "10";
  iconOpen.style.display = "none";
  iconClose.style.display = "inline-block";
});

iconClose.addEventListener("click", () => {
  nav.style.opacity = "0";
  nav.style.zIndex = "-1";
  iconOpen.style.display = "inline-block";
  iconClose.style.display = "none";
});
