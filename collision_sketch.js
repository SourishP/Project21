var movingRectangle,FixedRectangle;



function setup() {
  createCanvas(800,400);
  FixedRectangle=createSprite(400, 200, 50, 50);
  FixedRectangle.shapeColor="Green";
  FixedRectangle.debug=true;

  movingRectangle=createSprite(500, 100, 40, 50);
  movingRectangle.debug=true;
  movingRectangle.shapeColor="Green";



}

function draw() {
  background("LightBlue");  

movingRectangle.y=mouseY;
movingRectangle.x=mouseX;

if  (movingRectangle.x-FixedRectangle.x<movingRectangle.width/2+FixedRectangle.width/2 &&
FixedRectangle.x-movingRectangle.x<movingRectangle.width/2+FixedRectangle.width/2&&
  movingRectangle.y-FixedRectangle.y<movingRectangle.height/2+FixedRectangle.height/2 &&
  FixedRectangle.y-movingRectangle.y<movingRectangle.height/2+FixedRectangle.height/2){

 FixedRectangle.shapeColor="Red";
 movingRectangle.shapeColor="Red";



}else{

FixedRectangle.shapeColor="Green";
movingRectangle.shapeColor="Green";


}


  drawSprites();
}

