const burger = document.querySelector("div.burger");
const flexList = document.querySelector(".flex-list");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  if (flexList.classList.contains("open")) {
    console.log(flexList.classList);
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  }
  else if (flexList.classList.contains("closed")) {
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  } else {
    flexList.classList.toggle("open");
  }
});
