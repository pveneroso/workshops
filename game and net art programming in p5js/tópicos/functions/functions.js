function setup() {
  createCanvas(windowWidth, windowHeight);

  drawRect(100, 100, 50);
  drawRect(1024, 900, 100);
  
  console.log(somar(10, 40));
  console.log(somar(100, 2340));
  console.log(somar(10, 40));
}


function draw() {

}

function drawRect(x, y, size){

    fill(0);
    rect(x, y, size);
}

function somar(asas, sasa){
  let tempNum = asas + sasa;
  return tempNum;
}
