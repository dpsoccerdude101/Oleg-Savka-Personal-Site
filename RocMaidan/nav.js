const burger = document.querySelector("div.burger");
const flexList = document.querySelector(".flex-list");
burger.addEventListener("click", () => {
    flexList.classList.toggle("open");
});