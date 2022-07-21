// ==================== Solution =========================== //

const inputEl = document.querySelector("#name-input");

const nameOutputTextEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputTextListener);

function inputTextListener(event) {
  if (event.currentTarget.value === "") {
    nameOutputTextEl.textContent = "Anonymous";
  } else nameOutputTextEl.textContent = event.currentTarget.value;
}
