const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var superman;
var rope;
var ground;
var engine;
var world;
var box1,box2,box3,box4,box5,box6,boxe1,boxe2,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

var GameState = 

function preload(){


}
function setup() {
 var canvas = createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(750,590,1500,20);
box1 = new Box(900,100,20,20);
box2 = new Box(900,150,20,20);
box3 = new Box(900,200,20,20);
box4 = new Box(9004300,20,20);
box5 = new Box(900,500,20,20);
box6 = new Box(900,100,20,20);
boxe1 = new Box(900,200,20,20);
boxe2 = new Box(900,300,20,20);
box7 = new Box(800,400,20,20);
box8 = new Box(800,500,20,20);

superman = new Superhero(200,200,80,80);
rope = new Rope(superman.body,{x:500,y:50});
}
function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  boxe1.display();
  boxe2.display();
  box7.display();
  box8.display();
   
  superman.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY});
}