let accordionItems = document.querySelectorAll(".bt-accordion");

accordionItems.forEach((item) => {
  let accordionBtn = item.querySelector(".accordion-trigger");
  let dropdownItem = item.querySelector(".dropdown");
  let btChevron = item.querySelector(".bt-chevron");

  accordionBtn.addEventListener("click", () => {
    for (let i = 0; i < accordionItems.length; i++) {
      let otherDropdownItem = accordionItems[i].querySelector(".dropdown");
      let otherChevron = accordionItems[i].querySelector(".bt-chevron");
      let accordionSingle =
        accordionItems[i].querySelector(".accordion-trigger");
      let menuText = accordionItems[i].querySelector(".menu-text");
      let menuIcon = accordionItems[i].querySelector(".menu-icon");
      let chevronSvg = accordionItems[i].querySelector(".chevron-svg");

      if (accordionItems[i] != item) {
        otherDropdownItem.classList.add("hidden");
        otherChevron.classList.remove("rotate-180");
        accordionSingle.classList.remove("bg-[#FFEFEF]");
        menuText.classList.remove("text-[#F5474A]");
        menuIcon.classList.remove("text-[#F5474A]");
        chevronSvg.classList.remove("text-[#F5474A]");
      } else {
        dropdownItem.classList.toggle("hidden");
        btChevron.classList.toggle("rotate-180");
        accordionSingle.classList.toggle("bg-[#FFEFEF]");
        menuText.classList.toggle("text-[#F5474A]");
        menuIcon.classList.toggle("text-[#F5474A]");
        chevronSvg.classList.toggle("text-[#F5474A]");
      }
    }
  });
});
