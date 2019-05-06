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


//INTENSIVITY
drawIntensivity = (posX, posY, positive) => {
  let xC = 77;
  let yC = 45;
  let step = 10;
  let xOffset = 20;
  let yOffset = 20;
  let baseR = 3;
  let maxR = 8;
  let minR = 0;
  for (let i = 0; i < xC; i++) {
    for (let j = 0; j < yC; j++) {
      let x = xOffset + i * step;
      let y = yOffset + j * step;
      let r = baseR + (positive ? 1: -1) * (1 / Math.sqrt((x-posX)*(x-posX)+(y-posY)*(y-posY))) * 200;

      if (r > maxR) {
        r = maxR;
      } else if (r < minR) {
        r = minR;
      }
      drawCircle(x, y, r);
    }
  }
};


canvas.addEventListener('mousemove', (event) => {
  const bounds = canvas.getBoundingClientRect();
  const posX = event.clientX - bounds.left;
  const posY = event.clientY - bounds.top;
  // console.log(posX, posY);
  clear();
  drawIntensivity(posX, posY, true);
  }
);
//END INTENSIVITY
