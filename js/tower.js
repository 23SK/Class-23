class Tower {
    constructor(x,y,w,h){
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/tower.png")
        var towerOptions = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,w,h,towerOptions)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}