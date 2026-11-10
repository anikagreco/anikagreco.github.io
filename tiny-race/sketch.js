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
    if (keyIsDown(RIGHT_ARROW)) {
      racerXs[i] += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      racerXs[i] += -3;
    }
    if (i == 0){
      fill("#709e96");
    } else {
      fill ("purple");
    }
    if (i == 0 && racerXs[i] >= finishX) {
      fill("gold");
    }
    circle(racerXs[i], y, 24);
    if (i % 2 == 0){
      racerXs[i] += 2;
    }
  }
}
function keyPressed() {
  if (keyCode == 38) {
    racerXs.push(30);
  } else if (keyCode == 40) {
    racerXs.pop();
  }
  if (key == "a") {
    racerXs.push(random(30,100));
  }
  
resizeCanvas(600, startY + yStep * racerXs.length);

}
