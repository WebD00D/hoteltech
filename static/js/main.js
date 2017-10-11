

const quoteBlockButton = document.getElementsByClassName("quote-block__button")[0];
quoteBlockButton.onmouseover = function() {

  const firstArrow = document.getElementsByClassName("first")[0];
  const lastArrow = document.getElementsByClassName("last")[0];

  firstArrow.classList.add("first--active");
  lastArrow.classList.add("last--hidden");

}

quoteBlockButton.onmouseout = function() {

  const firstArrow = document.getElementsByClassName("first")[0];
  const lastArrow = document.getElementsByClassName("last")[0];

  firstArrow.classList.remove("first--active");
  lastArrow.classList.remove("last--hidden");

}
