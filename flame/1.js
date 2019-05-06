let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;

clear = () => {
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, width, height);
};

drawCircle = (x, y, r) => {
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
};

// RANDOM
drawRandom = () => {
  let xC = 77;
  let yC = 45;
  let xStep = 10;
  let yStep = 10;
  let xOffset = 20;
  let yOffset = 20;
  let baseR = 3;
  for (let i = 0; i < xC; i++) {
    for (let j = 0; j < yC; j++) {
      let r = baseR * Math.random();
      drawCircle(xOffset + i * xStep, yOffset + j * yStep, r);
    }
  }
};


setInterval(() => {
  clear();
  drawRandom();
}, 300);
//END RANDOM
