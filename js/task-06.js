// ==================== Solution =========================== //

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputFocusListener);

function inputFocusListener(event) {
  const inputValueLength = event.currentTarget.value.length;
  const inputValue = event.currentTarget;

  inputValueLength !== Number(inputValue.dataset.length)
    ? inputValue.classList.add("invalid")
    : inputValue.classList.remove("invalid");
  inputValue.classList.add("valid");
}
