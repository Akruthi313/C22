const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var groundOptions={
    isStatic:true
  }

  ground=Bodies.rectangle(0,390,800,10,groundOptions);


  World.add(world,ground);

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  rectMode(CENTER);
  rect(roupnd.position.x,ground.position.y,800,10);
  
}