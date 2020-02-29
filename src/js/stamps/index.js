let number = 0

const stamps = [
    // "./assets/shapes/circles.svg",
    "../assets/shapes/circles.svg",
    "../assets/shapes/heart.svg",
    "../assets/shapes/moon.svg",
    "../assets/shapes/rainbow.svg",
    "../assets/shapes/shooting-star.svg",
    "../assets/shapes/waves.svg"
]

const stampsTag = document.querySelector(".stamps")
console.log(stampsTag);

const addStamp = function (x, y) {

    // console.log(x, y)
    const img = document.createElement("img")

    img.setAttribute("src", stamps[number])
    // remove half the window width so it's centered 
    img.style.left = (x - window.innerWidth / 2) + "px"
    img.style.top = y + "px"
    stampsTag.appendChild(img)

    // add some audio
    const audio = document.createElement("audio")
    audio.setAttribute("src", "assets/shapes/plop.mp3")
    audio.play()

    number = number + 1
    // if we run out of numbers, go back to the beginning, cycle through again
    if (number > stamps.length - 1) {
        number = 0
    }
}

document.addEventListener("click", function () {
    // console.log(event)
    addStamp(event.pageX, event.pageY)
})