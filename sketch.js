
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  
fixedRect = createSprite(200,200,50,50);
movingRect = createSprite(400,200,80,30);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
fixedRect.debug = true;
movingRect.debug = true;

gameObject1 = createSprite (100,100,50,50);
gameObject1.shapeColor = "green";

gameObject2 = createSprite (200,100,50,50);
gameObject2.shapeColor = "green";

gameObject3 = createSprite (300,100,50,50);
gameObject3.shapeColor = "green";

gameObject4 = createSprite (400,100,50,50);
gameObject4.shapeColor = "green";

}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameObject1, movingRect)){
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
   }

   if (isTouching(gameObject2, movingRect)){
    gameObject2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else {
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
   }

   if (isTouching(gameObject3, movingRect)){
    gameObject3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }else {
    gameObject3.shapeColor = "green";
    movingRect.shapeColor = "green";
   }



  drawSprites();

}

