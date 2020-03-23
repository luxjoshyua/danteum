const canvasTag = document.querySelector('.collage-draw');
import img1 from "../../assets/collage/06.jpg";
const collageWrapper = document.querySelector('.collage-wrapper canvas');



// window.innerWidth is how wide the screen is
canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

// context is the context you're drawing the canvas in e.g. 2d, 3d, 4d
const context = canvasTag.getContext("2d")
context.scale(2, 2)

const image = document.createElement('img')
image.src = img1;


collageWrapper.addEventListener('mousemove', (event) => {
    // complete checks if image has been loaded by browser

    if (image.complete) {
        context.drawImage(image, event.pageX - 200, event.pageY - 300, 400, 600)
    }

})