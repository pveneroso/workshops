let modules = [];
let size = 100;
let col = 3;
let row = 3;
let margin = 20;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  let posx = 0;
  let posy = 0;
  let offsetx = (windowWidth/2)-(size*(col/2))-(floor(col/2)*margin);
  let offsety = (windowHeight/2)-(size*(row/2))-(floor(row/2)*margin);
  for(i = 0; i < (col*row); i++){
    let currentcol = i%col;
    let currentrow = floor(i/col);
    posx = offsetx+(size*currentcol)+(margin*currentcol);
    posy = offsety+(size*currentrow)+(margin*currentrow);
    modules[i] = new Module(posx, posy, size, i);
    modules[i].show();
  }
}

function draw() {
  background(255);
  for(i = 0; i < (col*row); i++){
    modules[i].hover(mouseX, mouseY);
    modules[i].show();
  }
}

function mouseClicked() {
  for(i = 0; i < (col*row); i++){
    modules[i].click();
  }
}

class Module{
  constructor(x, y, size, id){
    this.x = x;
    this.y = y;
    this.size = size;
    this.id = id;
    this.over = false;
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.targetRed = 0;
    this.targetGreen = 0;
    this.targetBlue = 0;
    this.colorinc = 5;
    this.fillColor = color(this.red, this.green, this.blue);
  }
  
  show(){
    this.animateColor();
    fill(this.fillColor); 
    rect(this.x, this.y, this.size);
    if(this.over){
      fill(255, 50);
      rect(this.x, this.y, size);
    }
  }
  
  animateColor(){
    if(this.targetRed < this.red){
      this.red -= this.colorinc;
      if(this.red < this.targetRed){
        this.red = this.targetRed;
      }
    } else if(this.targetRed > this.red){
      this.red += this.colorinc;
      if(this.red > this.targetRed){
        this.red = this.targetRed;
      }
    }

    if(this.targetGreen < this.green){
      this.green -= this.colorinc;
      if(this.green < this.targetGreen){
        this.green = this.targetGreen;
      }
    } else if(this.targetGreen > this.green){
      this.green += this.colorinc;
      if(this.green > this.targetGreen){
        this.green = this.targetGreen;
      }
    }
    
    if(this.targetBlue < this.blue){
      this.blue -= this.colorinc;
      if(this.blue < this.targetBlue){
        this.blue = this.targetBlue;
      }
    } else if(this.targetBlue > this.blue){
      this.blue += this.colorinc;
      if(this.blue > this.targetBlue){
        this.blue = this.targetBlue;
      }
    }
    this.fillColor = color(this.red, this.green, this.blue);
  }
  
  hover(x, y){
    if(x>this.x&&x<this.x+size&&y>this.y&&y<this.y+size){
      this.over = true;
    }
    else{
      this.over = false;
    }
  }
  
  click(){
    if(this.over){
      this.targetRed = floor(random(0, 255));
      this.targetGreen = floor(random(0, 255));
      this.targetBlue = floor(random(0, 255));
      this.fillColor = color(this.red, this.green, this.blue);
    }
  }
}
