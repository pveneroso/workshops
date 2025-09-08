let x = 0;
let y = 0;
let acc_x = 1;
let acc_y = 1;
let size = 20;
let mag = 4;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = (windowWidth/2)-(size/2);
  y = (windowHeight/2)-(size/2);
  acc_x = random(0.1, 1);
  acc_y = random(0.1, 1);
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
}
