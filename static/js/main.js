document.addEventListener("DOMContentLoaded", function() {
  const quoteBlockButton = document.getElementsByClassName(
    "quote-block__button"
  )[0];
  quoteBlockButton.onmouseover = function() {
    const firstArrow = document.getElementsByClassName("first")[0];
    const lastArrow = document.getElementsByClassName("last")[0];

    if (window.innerWidth >= 980) {
      firstArrow.classList.add("first--active");
      lastArrow.classList.add("last--hidden");
    }
  };

  quoteBlockButton.onmouseout = function() {
    const firstArrow = document.getElementsByClassName("first")[0];
    const lastArrow = document.getElementsByClassName("last")[0];

    if (window.innerWidth >= 980) {
      firstArrow.classList.remove("first--active");
      lastArrow.classList.remove("last--hidden");
    }
  };

  document.addEventListener("mousewheel", handleScroll);
  document.addEventListener("DOMMouseScroll", handleScroll);

  function handleScroll() {
    const currentScroll = window.scrollY;
    const pageHeader = document.getElementsByClassName("page-header")[0];
    const productFilters = document.getElementsByClassName(
      "products__filters"
    )[0];
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

  const mobileFilterHeader = document.getElementsByClassName(
    "products__filter__header"
  );
  const mobileFilterOptions = document.getElementsByClassName(
    "products__filter__options"
  );

  initializeMenu();
  function initializeMenu() {
    document
      .querySelectorAll("[data-icon=brand-hide]")[0]
      .classList.add("d-none");
    document
      .querySelectorAll("[data-icon=category-hide]")[0]
      .classList.add("d-none");

    for (let i = 0; i < mobileFilterHeader.length; i++) {
      const dataMenu = mobileFilterHeader[i].getAttribute("data-menu");
      const option = document.querySelectorAll(`[data-option=${dataMenu}]`);
      const filterContainer = document.getElementsByClassName(
        "products__filter__container"
      )[0];

      if (window.innerWidth >= 981) {
        option[0].style.maxHeight = option[0].scrollHeight + "px";

        document
          .querySelectorAll("[data-icon=brand-hide]")[0]
          .classList.add("d-none");
        document
          .querySelectorAll("[data-icon=category-hide]")[0]
          .classList.add("d-none");
        document
          .querySelectorAll("[data-icon=brand-show]")[0]
          .classList.add("d-none");
        document
          .querySelectorAll("[data-icon=category-show]")[0]
          .classList.add("d-none");
        filterContainer.style.maxHeight = 800 + "px";
      } else {
        option[0].style.maxHeight = null;
        document
          .querySelectorAll("[data-icon=brand-show]")[0]
          .classList.remove("d-none");
        document
          .querySelectorAll("[data-icon=category-show]")[0]
          .classList.remove("d-none");

        filterContainer.style.maxHeight = null;
      }
    }
  }

  window.addEventListener("resize", initializeMenu);

  // Handle filter menu clicking..
  for (let i = 0; i < mobileFilterHeader.length; i++) {
    mobileFilterHeader[i].onclick = function() {
      const dataMenu = this.getAttribute("data-menu");
      const option = document.querySelectorAll(`[data-option=${dataMenu}]`);

      if (window.innerWidth <= 980) {
        if (option[0].style.maxHeight) {
          option[0].style.maxHeight = null;
          document
            .querySelectorAll(`[data-icon=${dataMenu}-show]`)[0]
            .classList.remove("d-none");
          document
            .querySelectorAll(`[data-icon=${dataMenu}-hide]`)[0]
            .classList.add("d-none");
        } else {
          option[0].style.maxHeight = option[0].scrollHeight + "px";
          document
            .querySelectorAll(`[data-icon=${dataMenu}-show]`)[0]
            .classList.add("d-none");
          document
            .querySelectorAll(`[data-icon=${dataMenu}-hide]`)[0]
            .classList.remove("d-none");
        }
      }
    };
  }

  document.getElementsByClassName(
    "products__filter__mobile-close"
  )[0].onclick = function() {
    initializeMenu();
  };

  document.getElementsByClassName(
    "products__filter__mobile-header"
  )[0].onclick = function() {
    const filterContainer = document.getElementsByClassName(
      "products__filter__container"
    )[0];
    if (filterContainer.style.maxHeight) {
      filterContainer.style.maxHeight = null;
    } else {
      filterContainer.style.maxHeight = 800 + "px";
    }
  };

  document.getElementById("js_mobile_menu").onclick = function() {
    document.getElementsByClassName("mobile_navigation")[0].classList.toggle("show");
  }


});
