const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".toggle-menu");
const leftAngle = document.querySelector(".fa-angle-left");
const rightAngle = document.querySelector(".fa-angle-right");
const landingContent = document.querySelectorAll("#landing .content");
const bullets = document.querySelectorAll(".bullets li");

// toggle menu on click
toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.classList.toggle("hide");
});

// track currentContent number
let currentContent = 0;

rightAngle.addEventListener("click", () => {
  // if it is the last child, go to the first one
  if (currentContent === landingContent.length - 1) {
    removeActive(currentContent);
    currentContent = 0;
  } else {
    removeActive(currentContent);
    currentContent++;
  }

  addActive(currentContent);
});

leftAngle.addEventListener("click", () => {
  // if it is the first child, go to the last one
  if (currentContent === 0) {
    removeActive(currentContent);
    currentContent = landingContent.length - 1;
  } else {
    removeActive(currentContent);
    currentContent--;
  }

  addActive(currentContent);
});

// remove class active
function removeActive(content) {
  landingContent[content].classList.remove("active");
  bullets[content].classList.remove("active");
}

// add class active
function addActive(content) {
  landingContent[content].classList.add("active");
  bullets[content].classList.add("active");
}
