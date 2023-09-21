const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  let currentNumber = "0";
  const dataCeil = counterEl.getAttribute("data-ceil");
  const increment = Math.floor(dataCeil / 15);
  updateCounter();
  function updateCounter() {  
    currentNumber = +currentNumber + increment;

    if (currentNumber <= dataCeil) {
      counterEl.innerText = currentNumber;
      setTimeout(updateCounter, 10);
    } else {
        counterEl.innerText = dataCeil;
      }
  }
});
