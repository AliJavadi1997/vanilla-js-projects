const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener("click", () => {
  number.innerHTML = Number(number.innerHTML) + 1;
});

decrease.addEventListener("click", () => {
  number.innerHTML = Number(number.innerHTML) - 1;
});

reset.addEventListener("click", () => {
  number.innerHTML = 1;
});
