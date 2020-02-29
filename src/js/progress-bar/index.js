const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

// when we scroll the page, make a progress bar that keeps track of the distance
document.addEventListener("scroll", function () {
    // fine to use pixels again as the constant
    // because it's in the same box
    const pixels = window.pageYOffset
    // gives you the height of 3200 
    const pageHeight = bodyTag.getBoundingClientRect().height
    // find the total scrollable distance which is
    // page height - window height
    const totalScrollableDistance = pageHeight - window.innerHeight
    const percentage = pixels / totalScrollableDistance
    progressTag.style.width = `${100 * percentage}%`
  })