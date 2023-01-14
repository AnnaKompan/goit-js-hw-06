function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const controls = document.getElementById("controls");
// const allBoxes = document.getElementById("boxes");
// const btnCreate = document.querySelectorAll("button[data-create]");
// const btnDestroy = document.querySelectorAll("button[data-destroy]");
// const value = document.querySelector("input");

// const boxes = [];

// const randomHexColor = getRandomHexColor();

// allBoxes.append(...boxes);

// function createBoxes(amount) {
//   for (let i = 0; i <= amount; i += 1) {
//     const box = document.createElement("div");
//     box.style.width = 30;
//     box.style.height = 30;
//     box.style.backgroundColor = randomHexColor;
//     boxes.push(box);
//   }
// }

// createBtn.addEventListener("click", (onCreate) => {
//   box.style.width += 10;
//   box.style.height += 10;
// });
