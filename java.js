/* hamburger menu toggle */

const hamburger = document.querySelector(".hamburger");
const navsub = document.querySelector(".sub");

function clickStar() {
   hamburger.classList.toggle("change");
   navsub.classList.toggle("nav-change");
}
