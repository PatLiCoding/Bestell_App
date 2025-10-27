function getTemplateMainDishes(i) {
  document.getElementById("mainDishesContainer").innerHTML +=
    /*HTML*/
    `<div class="dishesBox">
                <img
                  class="dishesBoxAddBtn"
                  src="./assets/icon/add.png"
                  alt="Hinzufügen Button"
                  onclick="addDishesToCart(${i})"
                />
                <h3 class="dishesBoxHeadline">${dishes[i].name}</h3>
                <p>${dishes[i].ingredient.join(", ")}
                </p>
                <p class="dishesBoxPrice">${dishes[i].dishesPrice
                  .toFixed(2)
                  .replace(".", ",")}
                 €</p>
              </div>`;
}

function getTemplateCartPlaceholder() {
  smallCartPlaceholder.innerHTML += /*HTML*/ `                
              <p id="bigCartPlaceholderText" class="cartPlaceholderText">
                Noch wurde nichts den Warenkorb hinzugefügt.
              </p>`;
  bigCartPlaceholder.innerHTML += /*HTML*/ `                
              <p id="bigCartPlaceholderText" class="cartPlaceholderText">
                Noch wurde nichts den Warenkorb hinzugefügt.
              </p>`;
}

function getTemplateBigCart(i) {
  document.getElementById("bigCartAddDishesContainer").innerHTML +=
    /*HTML*/
    `<h5>${dishes[i].name}</h5>
        <div class="cartAddDishesNav">
        <div class="cartAddRemoveSection">
            <img
            class="cartBtn"
            src="./assets/icon/add.png"
            alt="Hinzufügen Button"
            onclick="setAddCart(${i})"
            />
            <span>${cart[0].mealAmount[i]}</span>
            <img
            class="cartBtn"
            src="./assets/icon/remove.png"
            alt="Entfernen Button"
            />
        </div>
        <span>${cart[0].price[i].toFixed(2).replace(".", ",")} €</span>
        <img
            class="cartBtn"
            src="./assets/icon/delete.png"
            alt="Aus dem Warenkorb entfernen Button"
        />
        </div>
        `;
}

function getTemplateSmallCart(i) {
  document.getElementById("smallCartAddDishesContainer").innerHTML.innerHTML +=
    /*HTML*/
    `<h5>${dishes[i].name}</h5>
        <div class="cartAddDishesNav">
        <div class="cartAddRemoveSection">
            <img
            class="cartBtn"
            src="./assets/icon/add.png"
            alt="Hinzufügen Button"
            onclick="setAddCart(${i})"
            />
            <span>${cart[0].mealAmount[i]}</span>
            <img
            class="cartBtn"
            src="./assets/icon/remove.png"
            alt="Entfernen Button"
            />
        </div>
        <span>${cart[0].price[i].toFixed(2).replace(".", ",")} €</span>
        <img
            class="cartBtn"
            src="./assets/icon/delete.png"
            alt="Aus dem Warenkorb entfernen Button"
        />
        </div>
        `;
}
