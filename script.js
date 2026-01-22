// 1. When user click on footer : display "click" in console
const footer = document.querySelector("footer");
footer.addEventListener("click", function(e){
  console.log("click");
});

// 1.1 Update with count each time footer is clicked
const footerCount = document.querySelector("footer");
let count = 0;
footerCount.addEventListener("click", function(e){
    count++;
    console.log(`Click N° ${count}`);
});

// 2. Make navbar 'Hamburger' menu work
const btn = document.querySelector(".navbar-toggler");
const nav = document.querySelector("#navbarHeader")
console.log(btn);
console.log(nav);
btn.addEventListener("click", function(e){
  nav.classList.toggle("collapse");
});