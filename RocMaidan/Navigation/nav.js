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
 window.onload = function() {
  // setCopyright();
}
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
/* function setCopyright() {
  (document.getElementById("copyright-year")).write(new Date().getFullYear());
} */