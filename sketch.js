var car,wall;
var weight,speed;
var deformation;
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall= createSprite(1100, 200, 60,400);
 speed=random(55,99);
 car.velocityX=speed/2;
 weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car .collide(wall);
  drawSprites();
 if ((wall.x-car.x<car.width+wall.width)/2) {
   car.velocityX=speed/2;
   var deformation=0.5*speed*speed*weight/22500;
   if (deformation<180) {
     car.shapeColor=(255,0,0);
   }
   if (deformation>180&&deformation>100) {
    car.shapeColor=(230,230,0);
  }
  if (deformation>100) {
    car.shapeColor=(0,255,0);
  }

 }


}