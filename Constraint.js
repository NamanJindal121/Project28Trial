class Constraint{
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 25
        }
        this.body = Matter.Constraint.create(options);

        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }
    
    display(){
        
        if(this.body.bodyA != null){
            var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}