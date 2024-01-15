let bTogglers = document.querySelectorAll(".toggle");
let bLines = document.querySelectorAll(".toggle__line");
let bDots = document.querySelectorAll(".toggle__dot");

bTogglers.forEach((item) => {
  let bLine = item.querySelector(".toggle__line");
  let bDot = item.querySelector(".toggle__dot");

  item.addEventListener("click", () => {
    bDot.classList.toggle("left-[4px]");
    bDot.classList.toggle("left-[23px]");
    bLine.classList.toggle("bg-[#F1E7E7]");
    bLine.classList.toggle("bg-[#F50308]");
  });
});
