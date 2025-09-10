let x = 0;
let y = 0;
let acc_x = 1;
let acc_y = 1;
let size = 20;
let size_inc = 5;
let mag = 6;

let ball_x;
let ball_y;
let ball_speed_x = 5;
let ball_speed_y = 5;
let ball_size = 50;


let keyActive = [false, false, false, false]; // 0 = up, 1 = right…

//let upPressed = false;
//let upPressed = false;
//let upPressed = false;
//let upPressed = false;


function setup() {
  createCanvas(windowWidth,windowHeight);
  x = (windowWidth/2)-(size/2);
  y = (windowHeight/2)-(size/2);
  ball_x = windowWidth/2;
  ball_y = windowHeight/2;
  acc_x = random(0.5, 1);
  acc_y = random(0.5, 1);
  noStroke();
}


function draw() {
  background(255);
  
  /* quadrado
  */
  fill(0);
  rect(x,y,size,size);
  x+=(acc_x*mag);
  y+=(acc_y*mag);
  if(x> (windowWidth-size)){
    acc_x *= -1;
  } else if(x < 0){
    acc_x *= -1;
  }
  if(y> (windowHeight-size)){
    acc_y *= -1;
  } else if(y < 0){
    acc_y *= -1;
  }
  
  // jogador
  fill(255, 0, 0);
  ellipse(ball_x, ball_y, ball_size);
  
  strokeWeight(5);
  fill(0, 255, 0);
  ellipseMode(CORNER);
  ellipse(0, 0, 80);
  
  if(keyActive[0] == true)
  {
    ball_y = ball_y - ball_speed_y;
  }
    if(keyActive[2] == true)
  {
    ball_y = ball_y + ball_speed_y;
  }
    if(keyActive[3] == true)
  {
    ball_x = ball_x - ball_speed_x;
  }
    if(keyActive[1] == true)
  {
    ball_x = ball_x + ball_speed_x;
  }
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    keyActive[0] = true;
  } 
  
  if(keyCode === DOWN_ARROW){
    keyActive[2] = true;
  }
  if(keyCode === LEFT_ARROW){
    keyActive[3] = true;
  }
  if(keyCode === RIGHT_ARROW){
    keyActive[1] = true;
  }
}

function keyReleased(){
  if(keyCode === UP_ARROW){
    keyActive[0] = false;
  } 
  
  if(keyCode === DOWN_ARROW){
    keyActive[2] = false;
  }
  if(keyCode === LEFT_ARROW){
    keyActive[3] = false;
  }
  if(keyCode === RIGHT_ARROW){
    keyActive[1] = false;
  }
}
