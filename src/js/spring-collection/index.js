// can call the const whatever you want
// finds the div with a class of pixels
const pixelsTag = document.querySelector("div.pixels")
// find the body
// const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

const pageTag = document.querySelector("div.page")

// for the header to change to white 
const headerTag = document.querySelector("header")






const sections = document.querySelectorAll(".spring-section")
const clientTag = document.querySelector(".client");
console.log("I am returning " + clientTag);

// data is dark
if (clientTag !== null && sections !== null) {
    document.addEventListener("scroll", function () {
        const pixels = window.pageYOffset
        // using the arrow is a shortcut function, still does the same thing
        sections.forEach(section => {
            // offsetTop is equal to or less than pixels
            // - 100 gives it a bit of padding before the text changes because the threshold is 50px less in the viewport
            if (section.offsetTop - 50 <= pixels) {
                // clientTag.innerHTML = "test1234" "test1234" is a string that doesn't update, hence won't work

                clientTag.innerHTML = section.getAttribute("data-client")
                pageTag.innerHTML = section.getAttribute("data-page")
                // target s3 heading
                if (section.hasAttribute("data-is-dark")) {
                    // if it is the dark section, we want to add a class of white
                    headerTag.classList.add("white")
                    progressTag.classList.add("white")
                } else {
                    // removes the header white if the data-is-dark="yes" attribute isn't there
                    // in the HTML
                    headerTag.classList.remove("white")
                    progressTag.classList.remove("white")
                }
            }
        })
    })

}