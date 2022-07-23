// ==================== Solution =========================== //

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ================= Refs =================== //
const refs = {
  inputEl: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

// ================= Events =================== //

refs.createBtn.addEventListener("click", createBoxes);

refs.destroyBtn.addEventListener("click", destroyBoxes);

// ================= Function create =================== //

function createBoxes(amount) {
  amount = refs.inputEl.value;

  let arrayBoxes = [];
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 1; i <= amount; i += 1) {
    const createdBox = document.createElement("div");
    createdBox.style.width = boxWidth + "px";
    createdBox.style.height = boxHeight + "px";
    createdBox.style.marginRight = "10px";
    createdBox.style.marginTop = "30px";
    createdBox.style.backgroundColor = getRandomHexColor();
    createdBox.style.display = "inline-block";

    boxWidth += 10;
    boxHeight += 10;
    arrayBoxes.push(createdBox);
  }
  console.log(refs.boxesEl);
  return refs.boxesEl.append(...arrayBoxes);
}

// ================= Function destroy =================== //

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
}
