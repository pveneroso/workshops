class Element{
  constructor(x, y, size){
   this.x = x;
   this.y = y;
   this.size = size;
   this.speed_x = 5;
   this.speed_y = 5;
  }
  
  move(){
    this.x += this.speed_x;
    this.y += this.speed_y;
  }
  
  boundaries(){ 
    if(this.x > windowWidth){
      this.x = 0;
    } else if(this.x < 0){
      this.x = windowWidth;
    }
    
    if(this.y > windowHeight){
      this.y = 0;
    } else if(this.y < 0){
      this.y = windowHeight;
    }
  }
  
  show(){
    this.boundaries();
    fill(255);
    rect(this.x, this.y, this.size);
  }
  
  showDuplicate(){
    rect(this.x, this.y - windowHeight, this.size);
    rect(this.x + windowWidth, this.y, this.size);
    rect(this.x, this.y + windowHeight, this.size);
    rect(this.x - windowWidth, this.y, this.size);
    rect(this.x - windowWidth, this.y - windowHeight, this.size);
    rect(this.x + windowWidth, this.y - windowHeight, this.size);
    rect(this.x + windowWidth, this.y + windowHeight, this.size);
    rect(this.x - windowWidth, this.y + windowHeight, this.size);
  }
  
  control(){
    if(keyIsDown(LEFT_ARROW)){
      this.x -= this.speed_x;
    } else if(keyIsDown(RIGHT_ARROW)){
      this.x += this.speed_x;
    } 
    
    if(keyIsDown(UP_ARROW)){
      this.y -= this.speed_y;
    } else if(keyIsDown(DOWN_ARROW)){
      this.y += this.speed_y;
    }
  }
}
