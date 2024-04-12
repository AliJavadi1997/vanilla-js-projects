const counterEl = document.getElementById("number");
let count = 0;

increase.addEventListener("click", () => {
  count++; // Increment count
  updateCounterDisplay();
});

decrease.addEventListener("click", () => {
  if (count > 0) {
    // Prevent going below 0
    count--;
  }
  updateCounterDisplay();
});

reset.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});

function updateCounterDisplay() {
  counterEl.textContent = count;
}
