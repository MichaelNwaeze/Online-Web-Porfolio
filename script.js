function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  console.log(menu, icon); // Add this line to debug
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
