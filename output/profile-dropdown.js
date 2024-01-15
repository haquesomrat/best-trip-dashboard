let profileMain = document.querySelector(".profile-main");

profileMain.addEventListener("click", () => {
  let profileDropdown = document.querySelector(".profile-dropdown");
  let chevronPr = document.querySelector(".pr-chevron");

  profileDropdown.classList.toggle("hidden");
  chevronPr.classList.toggle("rotate-180");
});
