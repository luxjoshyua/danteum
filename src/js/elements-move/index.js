const heading = document.getElementById('heading-move');

const heroSection = document.querySelector('.hero-first-section');
const heroSectionHeight = heroSection.getBoundingClientRect().height;

const widthText = heading.getBoundingClientRect().width;
// console.log(widthText);

// if we move 1px, will go left widthText / heroSectionHeight;
const calculateMovement = widthText / heroSectionHeight;
console.log(calculateMovement);


const headingMove = () => {

  const scrollTop = heroSection.getBoundingClientRect().top;
  // console.log(scrollTop);


  // for every 1px scrolled, we need to use var calculateMovement

  const mathMovement = calculateMovement * scrollTop;
  heading.style.transform = `translateX(${mathMovement}px)`;

}


// update position of heading when scroll event fires
window.addEventListener('scroll', function () {
  headingMove();
});