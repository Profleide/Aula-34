const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground; // variaveis, coelho, bolla e chão
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
   backgroundImg = loadImage("background.png");

 fruit=loadImage("melon.png");
 g=loadImage("basket.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(); // objeto chão
  
  //bola pedurada por um elástico 
  ball = Bodies.circle(50,200,20); // add um corpo dentro da variavel bola
  World.add(world,ball); // estamos add a bola no mundo 

  slingShot = new Slingshot(this.ball,{x:100,y:100}); // 

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  g.scale=.025;

  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);
  image(g,450,270)

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();

}
