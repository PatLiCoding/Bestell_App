function getTemplateMainDishes(i) {
  document.getElementById("mainDishesContainer").innerHTML +=
    /*HTML*/
    `<div class="dishesBox">
                <img
                  class="dishesBoxAddBtn"
                  src="./assets/icon/add.png"
                  alt="Hinzufügen Button"
                />
                <h3 class="dishesBoxHeadline">${dishes[i].name}</h3>
                <p>${dishes[i].ingredient.join(", ")}
                </p>
                <p class="dishesBoxPrice">${dishes[i].price
                  .toFixed(2)
                  .replace(".", ",")}
                 €</p>
              </div>`;
}
