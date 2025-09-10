
let score = 0;

let balls = [];
let numBalls = 10;

let player;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  
  for(i = 0; i < numBalls; i++){
    balls[i] = new Ball();
  }
  
  player = new Player();
}


function draw() {
  background(255);

  for(i = 0; i < numBalls; i++){
    balls[i].show();
  }
  
  player.show();
  
  for(i = 0; i < numBalls; i++){
    if(balls[i].collision(player.x, player.y, player.size)){
      score++;
    }
  }
  
  textAlign(RIGHT);
  fill(0);
  textSize(30);
  text(score, windowWidth-50, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.move[0] = true;
  }

  if (keyCode === DOWN_ARROW) {
    player.move[1] = true;
  }
  
  if (keyCode === LEFT_ARROW) {
    player.move[2] = true;
  }
  
  if (keyCode === RIGHT_ARROW) {
    player.move[3] = true;
  }
  
  if (key == ' ') {
    restart();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    player.move[0] = false;
  }

  if (keyCode === DOWN_ARROW) {
    player.move[1] = false;
  }
  
  if (keyCode === LEFT_ARROW) {
    player.move[2] = false;
  }
  
  if (keyCode === RIGHT_ARROW) {
    player.move[3] = false;
  }
}
