const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ==================== Solution =========================== //

const createItemEl = (elements) => {
  return elements.map((element) => {
    const itemIngredientsEl = document.createElement("li");
    itemIngredientsEl.textContent = element;
    itemIngredientsEl.classList.add("item");

    return itemIngredientsEl;
  });
};

const elements = createItemEl(ingredients);

const listIngredientsEl = document.querySelector("#ingredients");

listIngredientsEl.append(...elements);

// ==================== Var 2 =========================== //
// const elements = ingredients.map((ingredient) => {
//   const itemIngredientsEl = document.createElement("li");
//   itemIngredientsEl.textContent = ingredient;
//   itemIngredientsEl.classList.add("item");
//   return itemIngredientsEl;
// });

// const listIngredientsEl = document.querySelector("#ingredients");
// listIngredientsEl.append(...ingredients);
// console.log(listIngredientsEl);
