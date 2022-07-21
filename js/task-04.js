// ==================== Solution =========================== //

const refs = {
  decrementBtn: document.querySelector("[data-action=decrement]"),
  incrementBtn: document.querySelector("[data-action=increment]"),
  valueResultEl: document.querySelector("#value"),
};

const { decrementBtn, incrementBtn, valueResultEl } = refs;

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueResultEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueResultEl.textContent = counterValue;
});
