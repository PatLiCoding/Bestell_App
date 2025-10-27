const dialogRef = document.getElementById("dia");
let smallCartPlaceholder = document.getElementById("smallCartPlaceholder");
let bigCartPlaceholder = document.getElementById("bigCartPlaceholder");
let cart = [
  {
    meal: [],
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

function renderCartDishesList() {
  document.getElementById("bigCartAddDishesContainer").innerHTML = "";
  document.getElementById("smallCartAddDishesContainer").innerHTML = "";

  for (let i = 0; i < cart[0].meal.length; i++) {
    getTemplateBigCart(i);
    getTemplateSmallCart(i);
  }
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

function getMenuIndex(menu) {
  let index = cart[0].meal.indexOf(menu);
  return index;
}

function addDishesToCart(i) {
  bigCartPlaceholder.innerHTML = "";
  smallCartPlaceholder.innerHTML = "";

  setAddCart(i);
}

function setAddCart(i) {
  let menue = dishes[i].name;
  let menuIndex = getMenuIndex(menue);
  if (menuIndex === -1) {
    cart[0].meal.push(dishes[i].name);
    cart[0].price.push(dishes[i].dishesPrice);
    cart[0].mealAmount.push(1);
  } else {
    cart[0].mealAmount[menuIndex]++;
    cart[0].price[menuIndex] = cart[0].price[menuIndex] + dishes[i].dishesPrice;
  }
  renderCartDishesList();
}

function setRemoveCart() {}
