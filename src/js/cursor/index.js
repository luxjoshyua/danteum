const canvas = document.querySelector(".cursor--canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");
let color1 = "120,20,255";

context.lineWidth = 260;
context.shadowBlur = 200;
// end of the line
context.lineCap = "round";

// Create gradient
let grd = context.createLinearGradient(0, 0, canvas.width, 0);
grd.addColorStop(0, "rgb(" + color1 + ")");
grd.addColorStop(1, "white");

// Fill with gradient
// context.fillStyle = grd;
context.strokeStyle = grd;
// context.fillRect(0, 0, canvas.width, canvas.height);

const setStrokeColour = () => {
  const color1 = "255,179,186";
  const color2 = "255,223,186";
  const color3 = "255,255,186";
  const color4 = "186,255,201";
  const color5 = "186,225,255";

  let myColors = [
    "255,179,186",
    "255,223,186",
    "255,255,186",
    "186,255,201",
    "186,225,255",
  ];

  let randomColor = myColors[Math.floor(Math.random() * myColors.length)];
};

document.addEventListener("mousedown", (e) => {
  context.moveTo(e.pageX, e.pageY);
  context.beginPath();
});

document.addEventListener("mousemove", (e) => {
  context.lineTo(e.pageX, e.pageY);
  context.stroke();
});
