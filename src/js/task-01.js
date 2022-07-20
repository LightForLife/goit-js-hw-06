// =============================================== //

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
