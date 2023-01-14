const decrementBtn = document.querySelectorAll("button")[0];

const incrementBtn = document.querySelectorAll("button")[1];

let counterValue = 0;

decrementBtn.addEventListener("click", (onDecrBtnClick) => {
  counterValue -= 1;
  const value = document.querySelector("span");
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", (onIncrBtnClick) => {
  counterValue += 1;
  const value = document.querySelector("span");
  value.textContent = counterValue;
});
