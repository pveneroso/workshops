let x, y;
let size = 400;
let speed = 5;
let keyRight = false;
let enableKeyboard = false;

function setup() {
  background(210);
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2-size/2;
  y = (windowHeight/2)-(size/2);
}

function draw() {
  background(210);
  stroke(0);
  for(i = 0; i < windowWidth; i+=20){
    line(i, windowHeight/2, i-5, windowHeight/2);
  }
  noStroke();
  
  if(x >= windowWidth){
    x = 0;
  } 
  else if(x > windowWidth-size){
    rect(x-(windowWidth), (windowHeight/2) - size/2, size, size);
  }
  fill(255);
  rect(x, y, size, size);
  
  if(!enableKeyboard){
    x+=speed;
  } else{
    if(keyRight == true){
      x+=speed;
    }
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    //x+=speed;
    keyRight = true;
  }
  if(key == ' '){
    enableKeyboard = !enableKeyboard;
  }
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW){
    keyRight = false;
  }
}
