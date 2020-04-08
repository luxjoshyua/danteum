const hero = document.querySelector(".mouse-shadow-area");
// const hero = document.querySelectorAll(".mouse-shadow-area");
// console.log(hero);
const text = document.querySelector(".brand-text");
// const text = document.querySelectorAll(".brand-text");
// console.log(text);
const walk = 20; // 100px

function shadow(e) {
    // get the width and height of the hero
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // const { offsetWidth: width, offsetHeight: height } = hero; technicaly the same as doing the two lines above
    let x = e.offsetX;
    let y = e.offsetY;

    // console.log("What does text equal", text);
    // if this does not equal target
    // console.log(this, e.target); // this is div.hero because that's what you've added the event listener to,
    // e.target is the content editable

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;

    console.log(text);
}

hero.addEventListener("mousemove", shadow);

// hero.forEach((item) => {
//     item.addEventListener("mousemove", shadow);
// });
