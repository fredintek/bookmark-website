// ======== NAVIGATION =========
const navBar = document.querySelector(".nav-bar");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const mobileNav = document.querySelector(".nav-mobile");

navOpen.addEventListener("click", function (e) {
  e.preventDefault();

  mobileNav.style.transform = "translateY(0)";
});

navClose.addEventListener("click", function (e) {
  e.preventDefault();

  mobileNav.style.transform = "translateY(-200%)";
});

window.addEventListener("scroll", function () {
  navBar.classList.toggle("sticky-nav", window.scrollY > 0);
});

// ======== FEATURES DESKTOP FUNCTIONALITY (AT MIN-WIDTH:800PX;) =======
const featuresContainer = document.querySelector(".features-header__titles");
const featuresContainerEl = Array.from(
  document.querySelectorAll(".features-header")
);
const barTracker = document.querySelector(".features-header__tracker");
const featuresBodyContainer = document.querySelector(".features-body");
const featuresBodyContent = Array.from(
  document.querySelectorAll(".features-body__content")
);
const featuresTitleArr = Array.from(
  document.querySelectorAll(".features-header")
);

featuresContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("features-header")) {
    const targetNum = e.target.dataset.num;

    featuresTitleArr.forEach((el) => el.classList.remove("active-feature"));

    //prettier-ignore
    featuresContainer.querySelector(`.features-header-${targetNum}`).classList.add("active-feature");

    barTracker.style.transform = `translateX(${targetNum * 100}%)`;

    // handle features-body
    featuresBodyContent.forEach((el) =>
      el.classList.remove("active-feature-body")
    );
    featuresBodyContainer
      .querySelector(`.body-${targetNum}`)
      .classList.add("active-feature-body");
  }
});

// FEATURES MOUSE OVER RESPONSE
featuresContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("features-header")) {
    e.target.classList.add("color-active");
  }
});

featuresContainer.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("features-header")) {
    e.target.classList.remove("color-active");
  }
});

// ============ FREQUENTLY ASKED QUESTIONS ==============
const faqBox = document.querySelector(".faq-box");
const faqDetail = document.querySelector(".faq-detail");

console.log(faqBox);

faqBox.addEventListener("click", function (e) {
  if (e.target.closest(".faq-detail-question")) {
    e.target.closest(".faq-detail").classList.toggle("active");
  }
});
