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

function getTemplateBigCart(i) {
  document.getElementById("bigCartAddDishesContainer").innerHTML +=
    /*HTML*/
    `<h3>Gericht</h3>
        <div class="cartAddDishesNav">
        <div class="cartAddRemoveSection">
            <img
            class="cartBtn"
            src="./assets/icon/add.png"
            alt="Hinzufügen Button"
            />
            <span>Anzahl</span>
            <img
            class="cartBtn"
            src="./assets/icon/remove.png"
            alt="Entfernen Button"
            />
        </div>
        <span>Summe €</span>
        <img
            class="cartBtn"
            src="./assets/icon/delete.png"
            alt="Aus dem Warenkorb entfernen Button"
        />
        </div>
        `;
}

function getTemplateSmallCart(i) {
  document.getElementById("smallCartAddDishesContainer").innerHTML +=
    /*HTML*/
    `<h3>Gericht</h3>
        <div class="cartAddDishesNav">
        <div class="cartAddRemoveSection">
            <img
            class="cartBtn"
            src="./assets/icon/add.png"
            alt="Hinzufügen Button"
            />
            <span>Anzahl</span>
            <img
            class="cartBtn"
            src="./assets/icon/remove.png"
            alt="Entfernen Button"
            />
        </div>
        <span>Summe €</span>
        <img
            class="cartBtn"
            src="./assets/icon/delete.png"
            alt="Aus dem Warenkorb entfernen Button"
        />
        </div>
        `;
}
