class Box {
    constructor(x,y,width,height){
        var Options = {
            'restitution':0.8,
            'density':1.0,
            'friction':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,Options);
        this.width = width;
        this.image = loadImage("Monster-01.png");
        this.height = height; 
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("blue");
        rectMode("center");
        rect(0,0,this.width,this.height);
        pop()
    }
}