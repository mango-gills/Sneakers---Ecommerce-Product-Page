const burgerMenu = document.getElementById("burger-menu");
const linksContainer = document.querySelector(
  ".navigation-bar-links-container"
);

burgerMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  linksContainer.classList.toggle("animate");

  document.querySelector(".overlay").classList.toggle("active");

  if (linksContainer.classList.contains("active")) {
    burgerMenu.src = "images/icon-close.svg";
  } else {
    burgerMenu.src = "images/icon-menu.svg";
  }
});
