const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon, cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angle = -PI/8;
  ground = new Ground(0,595,3000,5);
  tower = new Tower(150,350,150,300);
  cannon = new Cannon(110,120,130,100,angle);
  cannonBall = new CannonBall(cannon.x,cannon.y);
}

function draw(){
  Engine.update(engine);

  background(backgroundImg);
  ground.display();
  tower.display();
  cannon.display();

}