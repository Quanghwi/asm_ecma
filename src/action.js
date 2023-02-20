export const btnCountDown = function () {
  plus.addEventListener("click", () => {
    amount.value = Number(amount.value) + 1;
  });

  minus.addEventListener("click", () => {
    amount.value = amount.value == 0 ? 0 : Number(amount.value) - 1;
  });
};
