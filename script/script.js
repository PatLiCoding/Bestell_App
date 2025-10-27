const dialogRef = document.getElementById("dia");
let amountSum = 0;
let resultSum = 0;

function init() {
  for (let i = 0; i < dishes.length; i++) {
    getTemplateMainDishes(i);
  }
  renderCart();
}

function renderCart() {
  document.getElementById("bigCartamountSum").innerHTML = `${amountSum} €`;
  document.getElementById("bigCartresultSum").innerHTML = `${resultSum} €`;
  document.getElementById("smallCartamountSum").innerHTML = `${amountSum} €`;
  document.getElementById("smallCartresultSum").innerHTML = `${resultSum} €`;
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
