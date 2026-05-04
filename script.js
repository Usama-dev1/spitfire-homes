const hamburger = document.getElementById("hamburger-icon");
const sideMenu = document.getElementById("side-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
  sideMenu.classList.add("absolute");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
