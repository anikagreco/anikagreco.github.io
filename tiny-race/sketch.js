let racerXs = [30, 60, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
}

function draw() {
  background("lavender");
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 5);
    }
    if (keyIsDown(RIGHT_ARROW)){
      racerXs[i] += 5;
    }
    if (keyIsDown(LEFT_ARROW)){
      racerXs[i] += -3;
    } 
    if(keyIsDown(UP_ARROW)){
      fill("#8568ca");
    }
    if(keyIsDown(DOWN_ARROW)){
      fill("#66c490");
    }
    circle(racerXs[i], y, 24);  
  }
}