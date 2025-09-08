let x = 0;
let y = 0;
let acc_x = 1;
let acc_y = 1;
let size = 20;
let mag = 4;

let ballx, bally, ballsize;
let ballinc = 5;

let ballmove = [false, false, false, false];

let score = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  x = (windowWidth/2)-(size/2);
  y = (windowHeight/2)-(size/2);
  acc_x = random(-1, 1);
  acc_y = random(-1, 1);
  
  ballx = windowWidth/4;
  bally = windowHeight/4;
  ballsize = 100;
  
  textAlign(RIGHT);
}


function draw() {
  background(255);
  fill(0);
  rect(x,y,size,size);
  x+=(acc_x*mag);
  y+=(acc_y*mag);
  if(x> (windowWidth-size) || x < 0){
    acc_x *= -1;
  }
  if(y> (windowHeight-size) || y < 0){
    acc_y *= -1;
  }
  
  fill(255,0,0);
  
  if(ballmove[0] == true){
    if(bally-ballinc >= 0){
      bally-=ballinc;
    }
    else{
      bally = 0; 
    }
  }
  if(ballmove[1] == true){
    if(bally+ballinc <= windowHeight){
      bally+=ballinc;
    }
    else{
      bally = windowHeight; 
    }
  }
  if(ballmove[2] == true){
    if(ballx-ballinc >= 0){
      ballx-=ballinc;
    }
    else{
      ballx = 0; 
    }
  }
  if(ballmove[3] == true){
    if(ballx+ballinc <= windowWidth){
      ballx+=ballinc;
    }
    else{
      ballx = windowWidth; 
    }
  }
  ellipse(ballx, bally, ballsize);
  
  if(dist(ballx, bally, (x+size/2), (y+size/2)) < (ballsize/2)+(size/2)){
    console.log("COLISÃO");
    score++;
    
    x = random(0, windowWidth-size);
    y = random(0, windowHeight-size);
    acc_x = random(-1, 1);
    acc_y = random(-1, 1);
  }
  
  fill(0);
  textSize(30);
  text(score, 50, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ballmove[0] = true;
  }

  if (keyCode === DOWN_ARROW) {
    ballmove[1] = true;
  }
  
  if (keyCode === LEFT_ARROW) {
    ballmove[2] = true;
  }
  
  if (keyCode === RIGHT_ARROW) {
    ballmove[3] = true;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    ballmove[0] = false;
  }

  if (keyCode === DOWN_ARROW) {
    ballmove[1] = false;
  }
  
  if (keyCode === LEFT_ARROW) {
    ballmove[2] = false;
  }
  
  if (keyCode === RIGHT_ARROW) {
    ballmove[3] = false;
  }
}
