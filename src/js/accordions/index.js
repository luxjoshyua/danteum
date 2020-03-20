const artworkShow = document.querySelectorAll('.artwork-show');
const artworkPreview = document.querySelectorAll('.artwork-preview');
console.log(artworkPreview);

const accordions = document.querySelectorAll('.accordion');

artworkShow.forEach(link => {
    link.addEventListener('mouseover', e => {
        for (let index = 0; index < artworkPreview.length; index++) {
            const element = artworkPreview[index];
            console.log(element);
            element.style.display = "block";
        }
    })
})

accordions.forEach(link => {
    link.addEventListener('mouseout', e => {
        for (let index = 0; index < artworkPreview.length; index++) {
            const element = artworkPreview[index];
            element.style.display = "none";
        }
    })
})