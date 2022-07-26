// ==================== Solution =========================== //

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonChangeColor = document.querySelector("button.change-color");
const valueColor = document.querySelector("span.color");

buttonChangeColor.addEventListener("click", buttonChangeColorClickListener);

function buttonChangeColorClickListener() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;
}
