const dialogRef = document.getElementById("dia");
let smallCartPlaceholder = document.getElementById("smallCartPlaceholder");
let bigCartPlaceholder = document.getElementById("bigCartPlaceholder");
let cart = [
  {
    dishes: [],
    price: [],
    mealAmount: [],
    amountSum: 0,
    deliveryCosts: 5,
    resultSum: 0,
  },
];

function init() {
  for (let i = 0; i < dishes.length; i++) {
    getTemplateMainDishes(i);
  }
  renderCart();
  getTemplateCartPlaceholder();
}

function renderCart() {
  document.getElementById(
    "bigCartamountSum"
  ).innerHTML = `${cart[0].amountSum} €`;
  document.getElementById(
    "bigCartresultSum"
  ).innerHTML = `${cart[0].resultSum} €`;
  document.getElementById(
    "smallCartamountSum"
  ).innerHTML = `${cart[0].amountSum} €`;
  document.getElementById(
    "smallCartresultSum"
  ).innerHTML = `${cart[0].resultSum} €`;
}

function openCart() {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderCart();
}

function closeCart() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
  renderCart();
}

function eventBubbling(event) {
  if (event.target === dialogRef) {
    dialogRef.close(closeCart());
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function hiddenBody() {
  document.body.style.overflow = "hidden";
}

function showBody() {
  document.body.style.overflow = "";
}

function addDishesToCart(i) {
  bigCartPlaceholder.innerHTML = "";
  smallCartPlaceholder.innerHTML = "";

  getTemplateBigCart(i);
  getTemplateSmallCart(i);
}
