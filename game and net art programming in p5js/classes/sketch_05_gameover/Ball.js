class Ball{
  constructor(type){
    this.type = type;
    this.size = 20;
    this.mag = 4;
    this.x = (windowWidth/2)-(this.size/2);
    this.y = (windowHeight/2)-(this.size/2);
    this.speed_x = random(-1, 1);
    this.speed_y = random(-1, 1); 
    this.col = color(0);
    
    if(this.type == 1){
      this.col = color(255, 0, 0);
    }
  }
  
  show(){
    this.move();
    fill(this.col);
    if(this.type == 0){
      rect(this.x,this.y,this.size);
    }
    else{
      ellipseMode(CORNER);
      ellipse(this.x, this.y, this.size);
      //ellipseMode();
    }
  }
  
  move(){
    this.x+=(this.speed_x*this.mag);
    this.y+=(this.speed_y*this.mag);
    if(this.x> (windowWidth-this.size) || this.x < 0){
      this.speed_x *= -1;
    }
    if(this.y> (windowHeight-this.size) || this.y < 0){
      this.speed_y *= -1;
    }
  }
  
  collision(x, y, size){
    if(dist(x, y, (this.x+this.size/2), (this.y+this.size/2)) < (size/2)+(this.size/2)){
      console.log("COLISÃO");
      this.reset();
      return true;
    }
    return false;
  }
  
  reset(){
    this.x = random(0, windowWidth-this.size);
    this.y = random(0, windowHeight-this.size);
    this.speed_x = random(-1, 1);
    this.speed_y = random(-1, 1); 
  }
}
