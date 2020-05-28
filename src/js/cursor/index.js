const canvas = document.querySelector(".cursor--canvas");
if (canvas !== null) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext("2d");

  let color1 = "255,223,186";
  let color2 = "255,179,186";

  let myColors = [
    "255,179,186",
    "255,223,186",
    "255,255,186",
    "186,255,201",
    "186,225,255",
  ];

  document.addEventListener("mousedown", (e) => {
    tRan = Math.floor(Math.random() * myColors.length);
    tRan1 = myColors[tRan];
    tMyColors = myColors.slice(0);

    tMyColors = tMyColors.filter((item) => item !== tRan1);
    tRan2 = tMyColors[Math.floor(Math.random() * tMyColors.length)];

    color1 = tRan1;
    color2 = tRan2;
  });
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    //   console.log("X/Y ", e, x, y);
    context.lineTo(x, y);

    // gradient fill effect
    let widthOfRect = window.innerWidth * 0.25;
    let halfOfRect = widthOfRect / 2;
    let grd = context.createRadialGradient(x, y, 0, x, y, halfOfRect);
    grd.addColorStop(0, "rgba(" + color2 + ",1)");
    grd.addColorStop(1, "rgba(" + color1 + ",0)");
    context.fillStyle = grd;
    context.globalCompositeOperation = "source-over";
    context.fillRect(x - halfOfRect, y - halfOfRect, widthOfRect, widthOfRect);
  });
}
