class Ball{
  constructor(type){
    this.type = type;
    this.size = 20;
    this.mag = 4;
    this.position = createVector(random(this.size, windowWidth-this.size), random(this.size, windowHeight-this.size));
    this.speed = createVector(0, 0);
    this.acceleration = createVector(random(-0.15, 0.15), random(-0.15, 0.15));
    this.acc = random(0.05, 0.15);
    this.noise_level = 100;
    this.noise_scale = 0.5;
    this.nt = 0;
    this.col = color(0);
    this.speed_limit = random(1,7);
    this.force_limit = 0.1;
    this.cursor = loadImage('cursor.png');
    this.angle = 0;
    this.sight = 300;
    this.temp_target = null;
    this.searching_modifier = 0.3;
    
    if(this.type == 1){
      this.col = color(255, 0, 0);
    }
  }
  
  show(){
    this.move();
    fill(this.col);
    if(this.type == 0){
      rect(this.position.x,this.position.y,this.size);
    }
    else{
      //ellipseMode(CORNER);
      //ellipse(this.position.x, this.position.y, this.size);
      push();
      translate(this.position.x+10, this.position.y+10);
      rotate(this.angle);
      //fill(0,255,0);
      //rect(-10,-10,20,20);
      image(this.cursor, -15, -15, 30, 30);
      pop();
    }
  }
  
  seek(target) {
    this.desired = p5.Vector.sub(target, this.position);
    this.desired.setMag(this.speed_limit);
    this.steer = p5.Vector.sub(this.desired, this.speed);
    this.steer.limit(this.force_limit);
    this.applyForce(this.steer);
  }
  
  applyForce(force) {
    this.acceleration.add(force);
    //if(this.temp_target != null){
    //  this.acceleration.mult(this.searching_modifier);
    //}
  }
  
  move(){
    //this.nt = this.noise_scale * frameCount;
    //this.acceleration.x = map(this.noise_level * noise(this.nt), 0, 1, -1, 1);
    //this.acceleration.y = map(this.noise_level * noise(this.nt+10000), 0, 1, -1, 1);
    this.speed.add(this.acceleration);
    if(this.temp_target == null){
      this.speed.limit(this.speed_limit);
    }
    else{
      this.speed.limit(this.speed_limit*this.searching_modifier);
    }
    this.position.add(this.speed);
    this.acceleration.mult(0);
    //if(this.type == 0){
      if(this.position.x > (windowWidth-this.size)){
        this.speed.x *= -1;
        this.position.x = windowWidth-this.size;
      }
      else if(this.position.x < 0){
        this.speed.x *= -1;
        this.position.x = 0;
      }
      if(this.position.y> (windowHeight-this.size)){
        this.speed.y *= -1;
        this.position.y = windowHeight-this.size;
      }
      else if(this.position.y < 0){
        this.speed.y *= -1;
        this.position.y = 0;
      }
    //}
    //else{
       this.angle = this.speed.heading()+90;
       //console.log(this.angle);
    //}
    if(this.temp_target != null && dist(this.position.x, this.position.y, this.temp_target.x, this.temp_target.y) < 20){
      this.temp_target = null;
    }
  }
  
  collision(x, y, size){
    if(dist(x, y, (this.position.x+this.size/2), (this.position.y+this.size/2)) < (size/2)+(this.size/2)){
      //console.log("COLISÃO");
      this.reset();
      return true;
    }
    return false;
  }
  
  internalCollision(x, y, size){
    if(dist(x, y, (this.position.x+this.size/2), (this.position.y+this.size/2)) < (size/2)+(this.size/2)){
      return true;
    }
    return false;
  }
  
  findTarget(){
    //let rand_x = random(20, 150);
    //let rand_y = random(20, 150);
    //if(random(0, 2) > 1){
    //  rand_x *= -1;
    //}
    //if(random(0, 2) > 1){
    //  rand_y *= -1;
    //}
    
    //this.temp_target = createVector(this.randomizeTarget('x')+this.position.x, this.randomizeTarget('y')+this.position.y);
    
    //this.rand = createVector();
    
    this.temp_target = createVector(random(this.size*2, windowWidth-(this.size*2)), random(this.size*2, windowHeight-(this.size*2)));
  }
  
  randomizeTarget(coordinate){
    //let temp_angle = random(0, 360);
    //let temp_dist = random(20, 200);
    //let rand = createVector(temp_dist * cos(temp_angle), temp_dist * sin(temp_angle));
    //return rand;
  }
  
  reset(){
    this.position.x = random(0, windowWidth-this.size);
    this.position.y = random(0, windowHeight-this.size);
    this.speed = createVector(0, 0);
  }
}
