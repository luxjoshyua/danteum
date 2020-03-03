const heading = document.getElementById('heading-move');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const scrollArea = 1000 - windowHeight;


// update position of heading when scroll event fires
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || window.scrollTop;
  console.log(scrollTop);
  const scrollPercent = scrollTop/scrollArea || 0;
  console.log(scrollPercent);
  
//   heading.style.left = scrollPercent*window.innerWidth + 'px';
  heading.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});