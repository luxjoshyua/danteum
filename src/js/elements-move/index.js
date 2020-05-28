// imports the whole lodash package, can customise to not import whole package
var _ = require("lodash");
const heading = document.getElementById("heading-move");

const heroSection = document.querySelector(".hero-first-section");
const heroSectionHeight = heroSection.getBoundingClientRect().height;

const widthText = heading.getBoundingClientRect().width;
// gets full width of the heading e.g. 3000px
const headingWidth = heading.clientWidth;

// if we move 1px, will go left widthText / heroSectionHeight;
const calculateMovement = widthText / heroSectionHeight;
// console.log(calculateMovement);

function headingMove() {
  // use the window.scrollY instead of positioning relative to a DOM element; more accurate
  const scrollTop = Math.round(window.scrollY);
  // for every 1px scrolled, we need to use var calculateMovement
  // round to 1 so we don't get percentages that will fuck the calculation
  const mathMovement = Math.round(calculateMovement * scrollTop * -1);
  // change from positive to negative number, because we're translating negative x so it goes off the screen
  if (mathMovement >= headingWidth * -1) {
    //then apply the movement to your heading element
    heading.style.transform = `translateX(${mathMovement}px)`;
  }
}

// update position of heading when scroll event fires
// window.addEventListener("scroll", function () {
//   headingMove();
// });

window.addEventListener(
  "scroll",
  //   every 10 miliseconds, position is updated on scroll
  _.throttle(headingMove, 1, { leading: true, trailing: true })
);
