import style from "./sass/index.scss";

import SmoothScrollingArticle, { Item } from "future-scroll";
import "./js/accordions";
import "./js/cursor";
import "./js/collage";
import "./js/elements-move";
import "./js/gallery";
import "./js/konami";
import "./js/nav";
import "./js/mouse-move-shadow";

// Add in wacky console message
console.log(
  "%c This is an experimentation site of Joshua Fielding, a frontend developer, reach out at josh.e.fielding@gmail.com",
  "font-size: 50px;background:#00ff00;text-shadow:10px 10px 0 blue"
);

// Future Scroll
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// parallax scroll
const parallaxScroll = document.querySelectorAll(".parallax-scroll");
const items = [];

parallaxScroll.forEach((element) => {
  const item = new Item({
    element,
  });
  const change = element.getAttribute("data-max-change")
    ? element.getAttribute("data-max-change")
    : 80;
  // console.log(change);

  item.add({
    ease: 0.1,
    render: (title, currentPosition) => {
      //currentPosition is number from 0 to 1
      const val = map(currentPosition, 0, 0.9, change, change * -1);
      title.style.transform = `translate3d(0,${val}px,0)`;
      title.style.opacity = currentPosition;
    },
  });
  items.push(item);
});

new SmoothScrollingArticle({
  article: document.querySelector("article"),
  scrollable: document.querySelector(".scrolling-area"),
  items: items,
  fixedParents: [
    document.querySelector(".heading-wrapper"),
    document.querySelector(".canvas-wrapper"),
  ],
});
