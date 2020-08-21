var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
   speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(70, 200, 80, 30);
  
  wall = createSprite(1500,200,60,height/2);


}

function draw() {
  background(80,80,80);  
  car.velocityX = speed;

  collide(car,wall);
  drawSprites();
}

function collide(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2
      && object2.x - object1.x <= object2.width/2 + object1.width/2){
          object1.velocityX = 0;

          var deformation = 0.5*weight*speed*speed / 22500;
          if(deformation<=100){
            car.shapeColor = "green";
          }
          if(deformation>100 && deformation < 180){
            car.shapeColor = "yellow";
          }
          if(deformation>=180){
            car.shapeColor = "red";
          }
      }

  }