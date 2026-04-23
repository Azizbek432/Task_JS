const demo = document.getElementById("demo");
const input = document.getElementById("input");
const add = document.getElementById("add");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");

let currentValue = 0;

add.addEventListener("click", () => {
  currentValue++;
  demo.textContent = currentValue;
});

addBtn.addEventListener("click", () => {
  const inputValue = parseInt(input.value);
  if (!isNaN(inputValue)) {
    currentValue += inputValue;
    demo.textContent = currentValue;
    input.value = "";
  }
});

resetBtn.addEventListener("click", () => {
  currentValue = 0;
  demo.textContent = "0";
  input.value = "";
});
