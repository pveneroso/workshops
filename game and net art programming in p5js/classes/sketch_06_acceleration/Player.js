class Player{
  constructor(){
    this.acc = 0.2;
    this.position = createVector(windowWidth/4, windowHeight/4);
    this.speed = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = 100;
    this.move = [false, false, false, false];
  }
  
  show(){
    this.movement();
    fill(50,174,94);
    ellipseMode(CENTER);
    ellipse(this.position.x, this.position.y, this.size);
  }
  
  movement(){
    if(this.move[0] == true){
      this.acceleration.y = -this.acc;
    }
    if(this.move[1] == true){
      this.acceleration.y = this.acc;
    }
    if(this.move[2] == true){
      this.acceleration.x = -this.acc;
    }
    if(this.move[3] == true){
      this.acceleration.x = this.acc;
    }
    
    if(!this.move[0] && !this.move[1]){
      this.acceleration.y = 0;
    }
    if(!this.move[2] && !this.move[3]){
      this.acceleration.x = 0;
    }
    
    this.boundaries();
    this.speed.add(this.acceleration);
    this.speed.limit(10);
    this.speed.mult(0.99);
    this.position.add(this.speed);
  }
  
  boundaries(){
      if(this.position.x + this.speed.x + (this.size/2) > windowWidth){
        this.speed.x *= -1;
        this.position.x = windowWidth-(this.size/2);
      } else if(this.position.x - this.speed.x - (this.size/2) < 0){
        this.speed.x *= -1;
        this.position.x = (this.size/2);
      }
      if(this.position.y + this.speed.y + (this.size/2) > windowHeight){
        this.speed.y *= -1;
        this.position.y = windowHeight-(this.size/2);
      }
      else if(this.position.y - this.speed.y - (this.size/2) < 0){
        this.speed.y *= -1;
        this.position.y = (this.size/2);
      }
  }
}
