const burger = document.querySelector("div.burger");
const flexList = document.querySelector(".flex-list");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementsByTagName("header")[0];
let sticky = header.offsetTop;
burger.addEventListener("click", () => {
  if (flexList.classList.contains("open")) {
    console.log(flexList.classList);
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  } else if (flexList.classList.contains("closed")) {
    flexList.classList.toggle("closed");
    flexList.classList.toggle("open");
  } else {
    flexList.classList.toggle("open");
  }
});
window.onscroll = function() {
  stickyNav();
};
/* window.onload = function() {
  setArticleRows();
}
window.onresize = function() {
  setArticleRows();
} */
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/* function setArticleRows() {
  let articles = document.getElementsByClassName("article");
  let viewWidth = (document.querySelector("body")).offsetWidth;
  let fr = viewWidth / 30;
  for (let count = 0; count < articles.length; count = count + 1) {
    console.log(articles[count]);
     articles[count].style.gridTemplateRows = `repeat(12, ${fr}px)`;
  } 
} */
