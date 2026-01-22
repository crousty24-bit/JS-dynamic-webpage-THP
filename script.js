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

// 3. Change first card text color to red when button 'view' is clicked
const card = document.querySelector(".col-md-4");
const firstBtn = document.querySelector(".btn.btn-sm.btn-success");
console.log(card);
console.log(firstBtn);
firstBtn.addEventListener("click", function(e){
  card.style.color = "red";
});

// 4. Change second card text color to green/default when button 'edit' is clicked
const secondCard = document.getElementsByClassName("col-md-4")[1]; // index to find second class card
const secondBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(secondCard);
console.log(secondBtn);
secondBtn.addEventListener("click", function(e){
  if (secondCard.style.color === "green"){
    secondCard.style.color = "black";
  } else {
    secondCard.style.color = "green";
  };
});

// 5. Disable/ enable stylesheet when navbar is double clicked
const navbar = document.querySelector("header");
console.log(navbar)
const style = document.querySelector("link");
console.log(style);
navbar.addEventListener("dblclick", function(e){
  if (style.disabled === true){
    style.disabled = false;
  } else {
    style.disabled = true;
  }
});

// 6. change card width when mouseover on 'view' button
const view = document.querySelectorAll(".row")[1]; //select parent
console.log(view)
view.addEventListener("mouseover", function(e){
  let targetBtn = e.target.closest("button.btn.btn-sm.btn-success"); //target filter 'view' button
  if (targetBtn === null){ //if no 'view' btn nothing happens
    return
  }
  let targetCard = targetBtn.closest(".col-md-4"); //find card from that specific 'view' btn
  if (targetCard === null){
    return
  }
    targetCard.style.width = "20%";
});

// 6.1 back to default when mouseout 'view' button
const viewOut = document.querySelectorAll(".row")[1]; //select parent
console.log(viewOut)
viewOut.addEventListener("mouseout", function(e){
  let targetBtn = e.target.closest("button.btn.btn-sm.btn-success"); //target filter 'view' button
  if (targetBtn === null){ //if no 'view' btn nothing happens
    return
  }
  let targetCard = targetBtn.closest(".col-md-4"); //find card from that specific 'view' btn
  if (targetCard === null){
    return
  }
  if (targetCard.style.width === "20%"){ // when mouseout condition back to default
    targetCard.style.width = "100%";
  }
});

// 7. move cards from bottom to top when grey button is clicked
const greyBtn = document.querySelector(".btn.btn-secondary.my-2");
console.log(greyBtn)
greyBtn.addEventListener("click", function(e){
  const cards = document.querySelectorAll(".row")[1];
  const allCards = document.querySelectorAll(".col-md-4");
  const firstCard = allCards[0];
  const lastCard = allCards[allCards.length -1];
  cards.insertBefore(lastCard, firstCard); // method takes 1.element to move, 2.element where 1 will be placed before
});

// 8. move cards from top to bottom when grey button is clicked
const blueBtn = document.querySelector(".btn.btn-primary.my-2");
console.log(blueBtn)
blueBtn.addEventListener("click", function(e){
  e.preventDefault(); // block link to reload page
  const cards = document.querySelectorAll(".row")[1]; // parent
  const allCards = document.querySelectorAll(".col-md-4"); // child
  const firstCard = allCards[0]; // sibling
  const lastCard = allCards[allCards.length -1]; // sibling
  cards.insertBefore(firstCard, lastCard.nextSibling); // DIY .insertAfter using nextSibiling
})
