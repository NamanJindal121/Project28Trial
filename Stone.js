class Stone{
    constructor(x,y){
        var options ={
            'restitution': 0,
            'friction': 1.0,
            'density': 1.2
        }

        this.radius = 20;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.image = loadImage("sprites/stone.png");

        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,40, 40);

    }
}