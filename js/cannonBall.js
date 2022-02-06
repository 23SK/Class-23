class CannonBall{
    constructor(x,y){
        var options ={
            restitution:0.8,
            friction:0.8,
            density:1,
        }
        this.r = 40;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("./assets/cannonBall.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}