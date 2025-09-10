let x = 0;
let y = 0;
let acc_x = 1;
let acc_y = 1;
let size = 20;
let size_inc = 5;
let mag = 6;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = (windowWidth/2)-(size/2);
  y = (windowHeight/2)-(size/2);
  acc_x = random(0.5, 1);
  acc_y = random(0.5, 1);
}


function draw() {
  background(255);
  fill(0);
  rect(x,y,size,size);
  x+=(acc_x*mag);
  y+=(acc_y*mag);
  if(x> (windowWidth-size)){
    acc_x *= -1;
    size+=size_inc;
    x-=size_inc;
  } else if(x < 0){
    acc_x *= -1;
    size+=size_inc;
    x+=size_inc;
  }
  if(y> (windowHeight-size)){
    acc_y *= -1;
    size+=size_inc;
    y-=size_inc;
  } else if(y < 0){
    acc_y *= -1;
    size+=size_inc;
    y+=size_inc;
  }
}
