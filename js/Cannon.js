class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage = loadImage("./assets/canon.png"); 
    this.cannonBaseImage = loadImage("./assets/cannonBase.png");

  }
  display(){
    if(keyIsDown(UP_ARROW)&&this.angle>-1){
      this.angle -= 0.02;
    }
    if(keyIsDown(DOWN_ARROW)&&this.angle<1){
      this.angle += 0.02;
    }
    push();
    translate(this.x,this.y)
    rotate(this.angle);
    image(this.cannonImage,0,0,this.width,this.height);
    pop();
    image(this.cannonBaseImage,60,40,200,200,PI,TWO_PI);
  }
}
