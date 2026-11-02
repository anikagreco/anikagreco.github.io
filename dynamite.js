let creatureX = 100;
let creatureY = 310;
let numTrees = 3;
let numCoins = 3;
let treeX = 180;
let treeY = 300;
let coinX = 230;
let coinY = 310;
let coinCount = 0;
let collectedCoins = [];
let gameOver = false;

function setup() {
  createCanvas(707, 590);
}

function draw() {
  background("#165692");

  if (keyIsDown(RIGHT_ARROW) && gameOver == false) {
    creatureX = creatureX + 10;
  }

  if (keyIsDown(LEFT_ARROW) && gameOver == false) {
    creatureX = creatureX - 10;
  }

  if (keyIsDown(UP_ARROW) && gameOver == false) {
    creatureY = creatureY - 10;
  }

  if (keyIsDown(DOWN_ARROW) && gameOver == false) {
    creatureY = creatureY + 10;
  }

  creatureX = constrain(creatureX, 10, width - 10);
  creatureY = constrain(creatureY, 25, height - 25);

  for (let o = 1; o <= numCoins; o++) {
    if (!collectedCoins.includes(o)) {
      fill("#ffbc05");
      circle(coinX * o, coinY, 25);
    }
  }

  for (let o = 1; o <= numCoins; o++) {
    if (abs(creatureX - coinX * o) <= 20 && abs(creatureY - coinY) <= 40) {
      if (!collectedCoins.includes(o)) {
        coinCount = coinCount + 1;
        collectedCoins.push(o);
      }
    }
  }

  textSize(50);
  text("COINS: " + coinCount, 250, 200);

  for (let i = 1; i <= numTrees; i++) {
    fill("#900909");
    rect(treeX * i, treeY, 20, 20);
  }

  fill("#8568ca");
  ellipse(creatureX, creatureY, 20, 50);

  if (coinCount == 3) {
    background("black");
    fill("#52aa18");
    textSize(70);
    text("YOU WIN!", 200, 310);
    textSize(20);
    text("press r to restart", 285, 360);
  }

  for (let i = 1; i <= numTrees; i++) {
    if (abs(creatureX - treeX * i) <= 20 && abs(creatureY - treeY) <= 40) {
      background("black");
      fill("#900909");
      textSize(70);
      text("GAME OVER!", 140, 310);
      textSize(20);
      text("press r to restart", 280, 360);
      coinCount = 0;
      gameOver = true;
      coinCount = 0;
    }

    if (keyIsDown("r")) {
      gameOver = false;
      creatureX = 100;
      creatureY = 310;
      coinCount = 0;
      collectedCoins = [];
    }
  }
}
