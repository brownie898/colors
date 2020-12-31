var fixedRectangle
var movingRectangle
function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(500,300,50,60)
  movingRectangle = createSprite(300,100,80,50)
  fixedRectangle.shapeColor = "purple"
  movingRectangle.shapeColor = "purple"

}

function draw() {
  background(255,255,255);   
  movingRectangle.x = mouseX
  movingRectangle.y = mouseY
  console.log(movingRectangle.x)
  if(movingRectangle.x - fixedRectangle.x < (fixedRectangle.width + movingRectangle.width)/2 &&
  fixedRectangle.x - movingRectangle.x < (movingRectangle.width + fixedRectangle.width)/2
  && movingRectangle.y - fixedRectangle.y < (fixedRectangle.height + movingRectangle.height)/2 &&
  fixedRectangle.y - movingRectangle.y < (movingRectangle.height + fixedRectangle.height)/2){

    fixedRectangle.shapeColor = "yellow"
  movingRectangle.shapeColor = "yellow"
  }
  else{
    fixedRectangle.shapeColor = "purple"
  movingRectangle.shapeColor = "purple"
  }
  drawSprites();
}