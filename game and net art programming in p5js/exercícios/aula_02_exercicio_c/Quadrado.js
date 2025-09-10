class Quadrado{
  constructor(inX, inSize){
    //console.log("Objeto criado");
    this.size = inSize;
    this.x = inX;
    this.y = random(this.size, windowHeight - this.size);
    this.speed_x = random(-5, 5);
    this.speed_y = random(-5, 5);
    
    this.nome = [0, 100, 59];
    this.mostrarElemento = true;
  }
  
  mover(){
    this.x += this.speed_x;
    this.y += this.speed_y;
    this.bordas();
  }
  
  mostrar(){
    if(this.mostrarElemento){
      fill(0);
      rect(this.x, this.y, this.size, this.size);
    }
  }
  
  bordas(){
    if(this.x> (windowWidth-this.size)){
      this.speed_x *= -1;
      this.mostrarElemento = false;
    } else if(this.x < 0){
      this.speed_x *= -1;
      this.mostrarElemento = false;
    }
    if(this.y> (windowHeight-this.size)){
      this.speed_y *= -1;
      this.mostrarElemento = false;
    } else if(this.y < 0){
      this.speed_y *= -1;
      this.mostrarElemento = false;
    }
  }
  
}
