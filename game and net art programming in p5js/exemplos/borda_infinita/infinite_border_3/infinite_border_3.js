let el;
let size = 100;
let enable_control = false

function setup() {
  background(210);
  createCanvas(windowWidth, windowHeight);
  
  let ref_x = (windowWidth/2)-(size/2);
  let ref_y = (windowHeight/2)-(size/2);
  
  el = new Element(ref_x, ref_y, size);
}

function draw() {
  background(210);
  drawGrid();

  noStroke();
  fill(255);
  
  el.show();
  el.showDuplicate();
  
  if(enable_control){
    el.control();
  } else{
    el.move();
  }
}

function drawGrid(){
  stroke(0);
  for(i = 0; i < windowWidth; i+=20){
    line(i, windowHeight/2, i-5, windowHeight/2);
  }
  for(i = 0; i < windowHeight; i+=20){
    line(windowWidth/2, i, windowWidth/2, i-5);
  }
  stroke(160);
  noFill();
  rect(size, size, windowWidth-size*2, windowHeight-size*2);
}

function keyPressed(){
  if(key === ' '){
    enable_control = !enable_control;
  }
}
