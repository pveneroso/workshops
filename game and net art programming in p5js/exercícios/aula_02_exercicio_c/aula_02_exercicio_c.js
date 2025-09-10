let elemento = [];

let ball_x;
let ball_y;
let ball_speed_x = 5;
let ball_speed_y = 5;
let ball_size = 50;


let keyActive = [false, false, false, false]; // 0 = up, 1 = right…

function setup() {
  createCanvas(windowWidth,windowHeight);

  for(i = 0; i < 100; i++){
    let size = random(20, 50);
    let temp_x = random(size, windowWidth - size);
    console.log(temp_x);
    elemento[i] = new Quadrado(temp_x, size);
  }

  ball_x = windowWidth/2;
  ball_y = windowHeight/2;
  noStroke();
}


function draw() {
  background(255);
  
  // quadrado
  for(i = 0; i < elemento.length; i++){
    elemento[i].mover();
    elemento[i].mostrar();
  }
  
  

  // jogador
  fill(255, 0, 0);
  ellipse(ball_x, ball_y, ball_size);
  
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
