const burger = document.querySelector("div.burger");
const flexList = document.querySelector(".flex-list");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementsByTagName("header")[0];
let sticky = 200;
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
console.log(header.offsetHeight);
console.log(window.pageYOffset);
window.onscroll = function() {
  stickyNav();
  closeInvisibleNav();
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
    header.classList.remove("invisible");
    flexList.classList.add("stickyFlex");
  } 
  else {
    header.classList.remove("sticky");
    flexList.classList.remove("stickyFlex")
  }
}
function closeInvisibleNav() {
  if (window.pageYOffset >= header.offsetHeight) {
    if (window.pageYOffset <= 195) {
      header.classList.add("invisible");
    }
  } else {
    header.classList.remove("invisible");
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
