// using querySelector just selects the one
const clientTag = document.querySelector("div.client")
const pixelsTag = document.querySelector("div.pixels")

// PIXELS SCROLLED
// when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener("scroll", function () {
    // console.log("scroll")
    // want to see how far we've scrolled on the y-direction
    const pixels = window.pageYOffset
    // changes the pixels tag to be the value of the pixels
    // pixelsTag.innerHTML = pixels + 'pixels scrolled'
    // pixelsTag.innerHTML = `${pixels} pixels scrolled`
  })
  

