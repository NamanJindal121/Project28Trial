
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImg, tree, stone;
var constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(700, 400, 450, 500);
	stone  = new Stone(100, 400);
	ground = new Ground(500, 650, 1000, 20);

	mango1 = new Mango(550, 350);
	mango2 = new Mango(625, 300);
	mango3 = new Mango(650, 250);
	mango4 = new Mango(700, 200);
	mango5 = new Mango(710, 325);
	mango6 = new Mango(780, 340);
	mango7 = new Mango(817, 278);
	mango8 = new Mango(730, 275);
	mango9 = new Mango(900, 312);
	mango10 = new Mango(640, 350);

	boy = createSprite(150, 580, 75, 100);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	constraint = new Constraint(stone.body, {x: 100, y: 520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  tree.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  constraint.display();

  detectCollision(mango1, stone);
  detectCollision(mango2, stone);
  detectCollision(mango3, stone);
  detectCollision(mango4, stone);
  detectCollision(mango5, stone);
  detectCollision(mango6, stone);
  detectCollision(mango7, stone);
  detectCollision(mango8, stone);
  detectCollision(mango9, stone);
  detectCollision(mango10, stone);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	constraint.fly();
}

function detectCollision(lmango, lstone){
	var mangopos = lmango.body.position;
	var stonepos = lstone.body.position;

	var distance = dist(mangopos.x, mangopos.y, stonepos.x, stonepos.y);

	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}


