const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var cubo;
var circulo;
var rectangle;

function setup(){
  var canvas = createCanvas(1200, 600);
   engine = Engine.create();
   world = engine.world;

   plane = new Plane(600, height, 1200, 20)
   hammer = new Hammer(10, 100);

   cubo = new Box(50, 50, 10, 100);
   circulo = new Rubber(200, 10, 50, 50);
   rectangle = new cudos(10, 5, 400, 5);
}

function draw(){

 background("lightBlue");

    Engine.update(engine);

    plane.display();
    hammer.display();

    cubo.display();
    circulo.display();
    rectangle.display();
}