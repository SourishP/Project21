//creating the objects
var wall,thickness;
var bullet,weight,speed;



function setup() {
    
 createCanvas(1600,400);
    
    thickness=random(22,83);
    speed=random(223,321);
    weight=random(30,52);

    bullet=createSprite(30,200,50,10);
    bullet.shapeColor="White";

    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);



}

function draw() {
  
  background("Black");

  bullet.velocityX=speed;

  if(bullet.isTouching(wall)){
      bullet.velocityX=0;

  }
  
 if (Has_Collided(bullet,wall)){

    bullet.velocityX=0;

    var damage=0.5* weight* speed *speed/(thickness*thickness*thickness);

    if (damage>10) {
      
      wall.shapeColor="Red";

    }

    if (damage<10) {

      wall.shapeColor="Green";

    }



 }
  
  
  drawSprites();

 console.log(thickness);

}

function  Has_Collided (lbullet,lwall) {
  
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {

    return true

  }
  
  return false
  
}  




