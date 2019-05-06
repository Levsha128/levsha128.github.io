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

//AUDIO 2
clear();
canvas.addEventListener('click', () => {
  var player = document.getElementById('player');
  player.play();

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var analyser = audioCtx.createAnalyser();
  var source = audioCtx.createMediaElementSource(player); // this is where we hook up the <audio> element

  source.connect(analyser);
  source.connect(audioCtx.destination);


  analyser.fftSize = 256;
  var bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);
  var dataArray = new Uint8Array(bufferLength);

  function draw() {
    drawVisual = requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    clear();
    let xC = 77;
    let yC = 45;
    let step = 10;
    let xOffset = 20;
    let yOffset = 20;
    let baseR = 3;
    let maxR = 6;
    let minR = 1;
    let m = [];
    for (let i = 0; i < xC; i++) {
      for (let j = 0; j < yC; j++) {
        let x = xOffset + i * step;
        let y = yOffset + j * step;

        let r = baseR;
        if (r > maxR) {
          r = maxR;
        } else if (r < minR) {
          r = minR;
        }

        m[i * xC + j] = r;
      }
    }

    for(let k = 0; k< yC; k++) {
      for (let l = 0; l < xC; l++) {

        let r = 6 - (6 * Math.abs(k -yC/2)/5) * dataArray[l] / 255;
        if (r > maxR) {
          r = maxR;
        } else if (r < minR) {
          r = minR;
        }

        m[l * xC + k] = r;
      }
    }
    for (let i = 0; i < xC; i++) {
      for (let j = 0; j < yC; j++) {
        let x = xOffset + i * step;
        let y = yOffset + j * step;
        r = m[i * xC + j];
        drawCircle(x, y, r);
      }
    }
  };
  draw();
});
//AUDIO 2


