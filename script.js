const hamburger = document.getElementById("hamburger-icon");
const sideMenu = document.getElementById("side-menu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
  sideMenu.classList.add("absolute");
});
