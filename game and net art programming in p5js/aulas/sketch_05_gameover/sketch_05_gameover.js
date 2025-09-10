
let score = 0;
let lives = 3;

let balls = [];
let numBalls = 10;

let player;

let gameover = false;

let hudInc = 0;
let hudCounter = 0;
let hudAmp = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  
  for(i = 0; i < numBalls; i++){
    let type = 0;
    if(random(0,4)>=3){
      type = 1;
    }
    balls[i] = new Ball(type);
  }
  
  player = new Player();
}


function draw() {
  background(240);

  if(!gameover){
    for(i = 0; i < numBalls; i++){
      balls[i].show();
    }
    
    player.show();
    
    for(i = 0; i < numBalls; i++){
      if(balls[i].collision(player.x, player.y, player.size)){
        if(balls[i].type == 0){
          score++;
        }
        else{
          lives--;
        }
      }
    }
    
    if(lives <= 0 && !gameover){
      gameOver();
    }
    else if(lives == 1){
      animateHud();
    }
  }
  else{
    textAlign(CENTER);
    fill(0);
    textSize(30);
    text("GAME OVER", windowWidth/2, windowHeight/2-25);
    
    textSize(20);
    text("Pressione espaço para reiniciar", windowWidth/2, (windowHeight/2)+10);
  }
 
  hud();
}

function gameOver(){
  //console.log("game over");
  numBalls = 0;
  balls = [];
  gameover = true;
}

function restart(){
  gameover = false;
  lives = 3;
  score = 0;
  hudCounter = 0;
  hudInc = 0;
  hudAmp = 1;
  numBalls = floor(random(5,20));
  for(i = 0; i < numBalls; i++){
    let type = 0;
    if(random(0,4)>=3){
      type = 1;
    }
    balls[i] = new Ball(type);
  }
}

function hud(){
  textAlign(RIGHT);
  fill(0);
  textSize(30);
  text("🎯", windowWidth-50, 50);
  textSize(24);
  text(score, windowWidth-90, 50);
  
  if(lives > 0){
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textSize(30+hudInc);
    text("♥", 65, 50);
    textAlign(LEFT);
    fill(0);
    textSize(24);
    text(lives, 90, 48);
  } else{
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textSize(30);
    text("💔", 65, 50);   
  }
}

function animateHud(){
  hudCounter++;
  if(hudCounter%24 == 0){
    hudAmp *= -1;
  }
  hudInc += (hudAmp*0.5);
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
