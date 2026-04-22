const demo = document.getElementById("demo");
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

let currentValue = 0;
let resetValue = "0";

addBtn.addEventListener("click", () => {
  const inputValue = parseInt(input.value);
  if (!isNaN(inputValue)) {
    currentValue += inputValue;
    demo.textContent = currentValue;
    input.value = "";
  }
});

add.addEventListener("click", () => {
  currentValue++;
  demo.textContent = currentValue;
});

resetBtn.addEventListener("click", () => {
  currentValue = resetValue;
  demo.textContent = "0";
  input.value = "";
});
