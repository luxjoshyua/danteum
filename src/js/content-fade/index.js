// fade in content effect
// FIXME: deleted img and section img from here due to fucking with the lookbook page
const animatedTags = document.querySelectorAll("a.menu-toggle, li a, nav h3, h2, h3, h2 a, p, a.button, .social-links-footer a")


// fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {
    // let delay = 0.25
    let delay = 0.05
    animatedTags.forEach(tag => {
        // the () runs it
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom
        if (tagTop < window.innerHeight && tagBottom > 0) {
            // keep the s because we want it to be a second
            tag.style.animation = `fadeIn 1s ${delay}s both`
            // delay = delay + 0.25
            delay = delay + 0.05
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
    fadeIn()
})

window.addEventListener("resize", function () {
    fadeIn()
})