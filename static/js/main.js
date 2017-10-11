

const quoteBlockButton = document.getElementsByClassName("quote-block__button")[0];
quoteBlockButton.onmouseover = function() {

  const firstArrow = document.getElementsByClassName("first")[0];
  const lastArrow = document.getElementsByClassName("last")[0];

  if ( window.innerWidth >= 980 ) {
    firstArrow.classList.add("first--active");
    lastArrow.classList.add("last--hidden");
  }



}

quoteBlockButton.onmouseout = function() {

  const firstArrow = document.getElementsByClassName("first")[0];
  const lastArrow = document.getElementsByClassName("last")[0];

  if ( window.innerWidth >= 980 ) {
    firstArrow.classList.remove("first--active");
    lastArrow.classList.remove("last--hidden");
  }

}


document.addEventListener("mousewheel", handleScroll);
document.addEventListener("DOMMouseScroll", handleScroll);

function handleScroll() {

  const currentScroll = window.scrollY;
  const pageHeader = document.getElementsByClassName("page-header")[0];
  const productFilters = document.getElementsByClassName("products__filters")[0];
  const productGrid = document.getElementsByClassName("products__grid")[0];
  const quoteBlock = document.getElementsByClassName("quote-block")[0];

  // TODO: Handle filter bar scrolling position.
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
