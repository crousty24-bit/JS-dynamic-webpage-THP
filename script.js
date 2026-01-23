// 1. When user click on footer : display "click" in console
const footer = document.querySelector("footer");
footer.addEventListener("click", function(e){
  //console.log("click");
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

btn.addEventListener("click", function(e){
  nav.classList.toggle("collapse");
});

// 3. Change first card text color to red when button 'edit' is clicked
const card = document.querySelector(".col-md-4");
const firstBtn = document.querySelector(".btn.btn-sm.btn-outline-secondary");

firstBtn.addEventListener("click", function(e){
  card.style.color = "red";
});

// 4. Change second card text color to green/default when button 'edit' is clicked
const secondCard = document.getElementsByClassName("col-md-4")[1]; // index to find second class card
const secondBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

secondBtn.addEventListener("click", function(e){
  if (secondCard.style.color === "green"){
    secondCard.style.color = "black";
  } else {
    secondCard.style.color = "green";
  }
});

// 5. Disable/ enable stylesheet when navbar is double clicked
const navbar = document.querySelector("header");
const style = document.querySelector("link");

navbar.addEventListener("dblclick", function(e){
  if (style.disabled === true){
    style.disabled = false;
  } else {
    style.disabled = true;
  }
});

// 6. change card width when mouseover on 'view' button
const view = document.querySelectorAll(".row")[1]; //select parent

view.addEventListener("mouseover", function(e){
  let targetBtn = e.target.closest("button.btn.btn-sm.btn-success"); //target filter 'view' button
  if (targetBtn === null){ //if no 'view' btn nothing happens
    return
  }
  let targetCard = targetBtn.closest(".col-md-4"); //find card from that specific 'view' btn
  if (targetCard === null){
    return
  }
  let img = targetCard.querySelector(".card-img-top"); // find child img
  let text = targetCard.querySelector(".card-text"); // find child text
  img.style.transform = "scale(0.2)"; // scale 20%
  text.style.transform = "scale(0)";
  img.style.transition = "transform 0.2s"; // add smooth transition
  text.style.transition = "transform 0.2s";
});

// 6.1 back to default when mouseout 'view' button
const viewOut = document.querySelectorAll(".row")[1]; //select parent

viewOut.addEventListener("mouseout", function(e){
  let targetBtn = e.target.closest("button.btn.btn-sm.btn-success");
  if (targetBtn === null){
    return
  }
  let targetCard = targetBtn.closest(".col-md-4");
  if (targetCard === null){
    return
  }
  let img = targetCard.querySelector(".card-img-top");
  let text = targetCard.querySelector(".card-text");
  img.style.transform = "scale(1)";
  text.style.transform = "scale(1)";
  img.style.transition = "transform 0.2s";
  text.style.transition = "transform 0.2s";
});

// 7. move cards from bottom to top when grey button is clicked
const greyBtn = document.querySelector(".btn.btn-secondary.my-2");

greyBtn.addEventListener("click", function(e){
  const cards = document.querySelectorAll(".row")[1];
  const allCards = document.querySelectorAll(".col-md-4");
  const firstCard = allCards[0];
  const lastCard = allCards[allCards.length -1];
  cards.insertBefore(lastCard, firstCard); // method takes 1.element to move, 2.element where 1 will be placed before
});

// 8. move cards from top to bottom when grey button is clicked
const blueBtn = document.querySelector(".btn.btn-primary.my-2");

blueBtn.addEventListener("click", function(e){
  e.preventDefault(); // block link to reload page
  const cards = document.querySelectorAll(".row")[1]; // parent
  const allCards = document.querySelectorAll(".col-md-4"); // child
  const firstCard = allCards[0]; // sibling
  const lastCard = allCards[allCards.length -1]; // sibling
  cards.insertBefore(firstCard, lastCard.nextSibling); // DIY .insertAfter using nextSibiling
});

// 9. keyboard press change body
const logoSelec = document.querySelector(".navbar-brand.d-flex.align-items-center");
//console.log(logoSelec);
logoSelec.setAttribute("tabindex", "0"); //add tabindex to make logoSelec "focusable"
const body = document.body; // var of body
//console.log(body)

logoSelec.addEventListener("keypress", function(e){
  const targetKey = e.key; // target key pressed
  body.className = ""; // reset of body before attributing new class
  if (targetKey === "a"){
    body.className = ("col-4");
  } else if (targetKey === "y"){
    body.className = ("col-4 offset-md-4");
  } else if (targetKey === "p"){
    body.className = ("col-4 offset-md-8");
  } else if (targetKey === "b"){
  }
});

