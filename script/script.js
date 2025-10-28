const dialogRef = document.getElementById("dia");
let smallCartPlaceholder = document.getElementById("smallCartPlaceholder");
let bigCartPlaceholder = document.getElementById("bigCartPlaceholder");
let cartLocalStorage = [];
let cart = [
  {
    meal: [],
    price: [],
    mealAmount: [],
    amountSum: 0,
    deliveryCosts: 5.0,
    resultSum: 0,
  },
];

function init() {
  for (let i = 0; i < dishes.length; i++) {
    getTemplateMainDishes(i);
  }
  loadFromLocalStorage();
  renderCart();
  renderCartDishesList();
}

function renderCart() {
  amountSumCalculation();
  resultSumCalculation();
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
  saveToLocalStorage();
}

function renderCartDishesList() {
  document.getElementById("bigCartAddDishesContainer").innerHTML = "";
  document.getElementById("smallCartAddDishesContainer").innerHTML = "";

  if (cart[0].meal.length === 0) {
    getTemplateCartPlaceholder();
  } else {
    for (let i = 0; i < cart[0].meal.length; i++) {
      getTemplateBigCart(i);
      getTemplateSmallCart(i);
    }
  }
  renderCart();
}

function openCart() {
  dialogRef.showModal();
  hiddenBody();
  dialogRef.classList.add("opened");
  renderCart();
  renderCartDishesList();
}

function closeCart() {
  dialogRef.close();
  showBody();
  dialogRef.classList.remove("opened");
  renderCart();
  renderCartDishesList();
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

function setOneRemoveCart(i) {
  if (cart[0].mealAmount[i] > 0) {
    cart[0].mealAmount[i]--;
    cart[0].price[i] = cart[0].price[i] - dishes[i].dishesPrice;
    renderCartDishesList();
  }
  if (cart[0].mealAmount[i] == 0) {
    setRemoveDishesFromCart(i);
  }
}

function setRemoveDishesFromCart(i) {
  cart[0].meal.splice(i, 1);
  cart[0].price.splice(i, 1);
  cart[0].mealAmount.splice(i, 1);
  renderCartDishesList();
}

function amountSumCalculation() {
  let sum = 0;
  for (let i = 0; i < cart[0].price.length; i++) {
    sum += cart[0].price[i];
  }
  cart[0].amountSum = sum.toFixed(2).replace(".", ",");
}

function resultSumCalculation() {
  cart[0].resultSum = (
    Number(cart[0].amountSum.replace(",", ".")) + Number(cart[0].deliveryCosts)
  )
    .toFixed(2)
    .replace(".", ",");
}

function toOrder() {
  cart[0].meal = [];
  cart[0].price = [];
  cart[0].mealAmount = [];
  cart[0].amountSum = 0;
  cart[0].resultSum = 0;
  renderCart();
  renderCartDishesList();
}

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadFromLocalStorage() {
  cartLocalStorage = localStorage.getItem("cart");

  if (cartLocalStorage != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
}
