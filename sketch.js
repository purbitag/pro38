
var boat1, boat2 , boat3, boat4

function setup(){
 
  
    createCanvas(displayWidth-50,displayHeight-200);

  boat1=createSprite(100,500)
  boat1.shapeColor=rgb(240,128,128)
  boat2=createSprite(450,500)
  boat3=createSprite(800,500)
  boat4=createSprite(1150,500)
}

function draw(){
  background(rgb(5, 270, 199));
  boat1.velocityX=0
  boat1.velocityY=0

  camera.position.x=boat1.x+500
  camera.position.y=boat1.y
  if(keyIsDown(UP_ARROW)){
    boat1.velocityY=-5
  }

  if(frameCount%15===0){
    boat2.velocityY=random(-3,-7)
    boat3.velocityY=random(-3,-7)
    boat4.velocityY=random(-3,-7)
  }

  drawSprites()
}

