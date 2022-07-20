// ==================== Solution =========================== //

// Количество категорий
const categoriesItemEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItemEl.length}`);
console.log("");

// Текст и количество элементов в категории

categoriesItemEl.forEach((el, index) => {
  const countSubListEl = el.querySelectorAll(".item li");
  const categoriesTitleText = document.querySelectorAll(".item h2");

  console.log(
    `Category: ${categoriesTitleText[index].textContent}
Elements: ${countSubListEl.length}`
  );
  console.log("");
});

// ==================== Var 2 =========================== //
// categoriesItemEl.forEach((el) => {
//   const countSubListEl = el.querySelectorAll(".item li");
//   const categoriesTitleText = el.firstElementChild;

//   console.log(
//     `Category: ${categoriesTitleText.textContent}
// Elements: ${countSubListEl.length}`
//   );
//   console.log("");
// });
