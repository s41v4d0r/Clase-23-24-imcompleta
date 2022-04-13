const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower,cannon,cannonball;
var balls=[];

var angle;

function preload() {

  backgroundImg=loadImage("./assets/background.gif");
  towerImage=loadImage("./assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle=15 
  
  var options={
    isStatic:true


  }
 
  ground=Bodies.rectangle(0, height - 1, width * 2 , 1, options);
  World.add(world,ground);

  tower=Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);

  cannon= new Cannon(180,110,130,100,angle);
  cannonball= new CannonBall(cannon.x,cannon.y);
}

function draw() {
  //background(189);

image(backgroundImg,0,0,width,height);
 
  

  Engine.update(engine);
  rect(ground.position.x, ground.position.y,width*2,1)
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160,310);
  pop();

  for(var i=0; i<balls.length; i++){
    showCannonBalls(balls[i]);
  }

  cannon.display();
  cannonball.display();

}

function KeyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonball=new CannonBall(cannon.x,cannon.y)
    cannonball.trayectory=[];
    Matter.Body.setAngle(cannonball.body,cannon.angle);
    balls.push(cannonball);
  }
}

 function keyRealsed(){
   if(keyCode===DOWN_ARROW){
     ball[balls.length-1].shoot();
   }
 }

 function showCannonBalls(ball,i){
   if(ball){
     ball.display();
   }
 }