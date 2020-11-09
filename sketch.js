const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pinkos = [];
var particles = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,375,800,20);

  division1 = new Ground(400,300,10,200);
  division2 = new Ground(300,300,10,200);
  division3 = new Ground(200,300,10,200);
  division4 = new Ground(100,300,10,200);
  division5 = new Ground(500,300,10,200);
  division6 = new Ground(600,300,10,200);
  division7 = new Ground(700,300,10,200);

  pinko1 = new Pinko(100,100,10);

  particle1 = new Particle(100,70,10);
}

function draw() {
  background("black");

  for (var j = 40; j <= width; j= j+50) {
    pinkos.push(new Pinko(j,75));
    
  }
  for (var j = 15; j <= width-10; j= j+50) {
    pinkos.push(new Pinko(j,175));
    
  }

  for (var j = 0; j < particles.length; j++) {
 particles[j].display();
    
  }
 if (frameCount%60 === 0) {
    particles.push(random(width/2-10,width/2+10),10,10);
  }
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  pinko1.display();
  particle1.display();
  drawSprites();
}