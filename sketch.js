var trex,trexrunning,ground, ground2, invisibleground;

function preload() {
  trexrunning = loadAnimation ("trex1.png","trex3.png","trex4.png");
  
  ground2 = loadImage ("ground2.png");
}


function setup() {
  createCanvas(600,300);
  
  trex = createSprite (100,250,50,50);
trex.addAnimation ("running",trexrunning);
  trex.scale = 0.5;
  
  ground = createSprite (300,250,600,10);
  ground.addImage ("ground",ground2);
  
  ground.velocityX = -3
  
  invisibleground = createSprite (300,270,600,10);
  
  invisibleground.visible = false;
}
function draw() {
  background(220);
  trex.collide(invisibleground);
  if (keyDown ("space")){
    trex.velocityY = -10;
  }
   if (ground.x<0){
     ground.x = ground.width/2;
   }
  trex.velocityY = trex.velocityY + 0.5;
  drawSprites();
  
}