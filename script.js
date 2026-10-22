// Mobile menu: show/hide the navigation links when the button is clicked
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// Close the menu after a link is clicked
const links = menu.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});
