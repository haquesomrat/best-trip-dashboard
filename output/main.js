const hamburgMenu = document.querySelector(".hamburger-menu");

hamburgMenu.addEventListener("click", () => {
  let btSidebar = document.querySelector(".bt-sidebar");
  console.log(btSidebar);

  btSidebar.classList.toggle("hidden");
  if (btSidebar.classList.contains("hidden")) {
    btSidebar.classList.remove("lg:block");
  } else {
    btSidebar.classList.add("lg:block");
  }
});
