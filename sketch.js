var box
function setup() {
  createCanvas(400,400);
  background("white")
  box = createSprite(200,200,40,40)
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    background("blue");
  }
 
  if(keyIsDown(LEFT_ARROW)){
    background("red");
  }

  if(keyIsDown(UP_ARROW)){
    background("pink");
  }

  if(keyIsDown(DOWN_ARROW)){
    background("purple");
  }
  drawSprites()
}




