//mobile menu toggle
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

// image slider
const images = [
  "./images/slider_images/1.jpg",
  "./images/slider_images/2.webp",
  "./images/slider_images/3.webp",
  "./images/slider_images/4.webp",
  "./images/slider_images/5.webp",
  "./images/slider_images/6.webp",
];

let currentIndex = 0;
const sliderImg = document.getElementById("hero-slider");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImg.src = images[currentIndex];
}, 3000);
