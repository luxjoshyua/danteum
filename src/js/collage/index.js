const canvasTag = document.querySelector('.collage-draw');
import img1 from "../../assets/collage/06.jpg";
import img2 from "../../assets/collage/15.jpg";
import img3 from "../../assets/collage/18.jpg";
import img4 from "../../assets/collage/19.jpg";
import img5 from "../../assets/collage/28.jpg";
import img6 from "../../assets/collage/31.png";
import img7 from "../../assets/collage/55.png";
import img8 from "../../assets/collage/58.jpg";
import img9 from "../../assets/collage/62.jpg";
import img10 from "../../assets/collage/apricot.png";
import img11 from "../../assets/collage/banana.png";
import img12 from "../../assets/collage/garfield.jpg";
import img13 from "../../assets/collage/starfish.png";
import img14 from "../../assets/collage/pussyriot.jpg";


const collageWrapper = document.querySelector('.collage-wrapper');


// window.innerWidth is how wide the screen is
canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

// context is the context you're drawing the canvas in e.g. 2d, 3d, 4d
const context = canvasTag.getContext("2d")
context.scale(2, 2)

// const image = document.createElement('img')
// image.src = img1;


let aimX = null;
let aimY = null;
let currentX = null
let currentY = null


// i = index
let i = 0;
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14
    // .map takes the input and turns it into something new
].map(src => {
    const image = document.createElement('img')
    image.src = src
    return image
})

collageWrapper.addEventListener('mousemove', (event) => {
    // aimX = event.pageX
    aimX = event.offsetX
    aimY = event.offsetY
    // aimY = event.pageY
    if (currentX === null) {
        currentX = event.pageX
        // console.log("Current X is", currentX)
        currentY = event.pageY
    }

})

canvasTag.addEventListener('click', () => {
    // 0 becomes 1 as soon as we click, click again 1 becomes 2 etc
    i = i + 1
    if (i >= images.length) {
        i = 0;
    }
})


const draw = () => {
    // console.log("getting to here");
    // console.log(currentX)
    if (currentX) {
        // complete checks if image has been loaded by browser
        // console.log("correctly logging", event)
        if (images[i].complete) {
            // console.log(currentX, currentY)
            context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600)
        }

        // 0.01 makes it super slow
        currentX = currentX + (aimX - currentX) * 0.1
        currentY = currentY + (aimY - currentY) * 0.1

    }

    // run draw on every frame
    requestAnimationFrame(draw)
}


draw()