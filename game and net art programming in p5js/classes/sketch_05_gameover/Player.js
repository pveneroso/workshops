class Player{
  constructor(){
    this.x = windowWidth/4;
    this.y = windowHeight/4;
    this.speed_x = 5;
    this.speed_y = 5;
    this.size = 100;
    this.move = [false, false, false, false];
  }
  
  show(){
    this.movement();
    fill(50,174,94);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
  }
  
  movement(){
    if(this.move[0] == true){
      if(this.y- this.speed_y >= 0){
        this.y-= this.speed_y;
      }
      else{
        this.y = 0; 
      }
    }
    if(this.move[1] == true){
      if(this.y+ this.speed_y <= windowHeight){
        this.y+= this.speed_y;
      }
      else{
        this.y = windowHeight; 
      }
    }
    if(this.move[2] == true){
      if(this.x-this.speed_x >= 0){
        this.x-=this.speed_x;
      }
      else{
        this.x = 0; 
      }
    }
    if(this.move[3] == true){
      if(this.x+this.speed_x <= windowWidth){
        this.x+=this.speed_x;
      }
      else{
        this.x = windowWidth; 
      }
    }
  }
}
