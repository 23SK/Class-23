class Ground  {
constructor(x,y,w,h){
    this.w = w;
    this.h = h;
    var groundOptions = {
        isStatic:true,
    }
    this.body = Bodies.rectangle(x,y,w,h,groundOptions);
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER)
    rect(0,0,this.w,this.h);
    pop();
}
}