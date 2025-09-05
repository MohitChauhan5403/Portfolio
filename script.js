
  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("droplist-icon");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

