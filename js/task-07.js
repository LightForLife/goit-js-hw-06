// ==================== Solution =========================== //

const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

inputEl.addEventListener("input", inputFontSizeListener);

function inputFontSizeListener(event) {
  const inputValue = event.currentTarget.value;

  textEl.style.fontSize = inputValue + "px";
}
