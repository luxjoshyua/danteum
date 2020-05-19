const canvas = document.querySelector(".cursor--canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// randomColor generator
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

// set a randomColor
context.strokeStyle = "#" + randomColor;
context.lineWidth = 260;
context.shadowBlur = 200;
// end of the line
context.lineCap = "round";

// by default false
// let shouldPaint = true;

document.addEventListener("mousedown", (e) => {
  shouldPaint = true;
  context.moveTo(e.pageX, e.pageY);
  context.beginPath();
});

// document.addEventListener("mouseup", (e) => {
//   shouldPaint = false;
// });

document.addEventListener("mousemove", (e) => {
  //   if (shouldPaint) {
  context.lineTo(e.pageX, e.pageY);
  context.stroke();
  //   }
});
