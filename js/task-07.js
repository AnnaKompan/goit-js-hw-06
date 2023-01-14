const inputSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputSizeControl.oninput = function (input) {
  console.log(this.value);
  text.style.fontSize = inputSizeControl.value + "1px";
};
