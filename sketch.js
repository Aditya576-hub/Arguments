var fix, mov;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 100, 50, 80);
  fix.shapeColor = "green"
  fix.debug = true;
  mov = createSprite(400, 800, 80, 30);
  mov.shapeColor = "green"
  mov.debug = true;
  gameObject1 = createSprite(100,100,50,50)
  gameObject1.shapeColor = "green"
  gameObject2 = createSprite(200,100,50,50)
  gameObject2.shapeColor = "green"
  gameObject3 = createSprite(300,100,50,50)
  gameObject3.shapeColor = "green"
  gameObject4 = createSprite(400,100,50,50)
  gameObject4.shapeColor = "green"
  mov.velocityY = -5;
  fix.velocityY = 5;
}

function draw() {
  background(255,255,255); 
  //mov.x = World.mouseX;
  //mov.y = World.mouseY; 
  
  console.log(mov.x, fix.x)
 bounceOff(mov, fix);
 
  /*if (isTouching(mov, gameObject2)) {
    mov.shapeColor = "blue"
   gameObject1.shapeColor = "blue"
   }
   else {
    mov.shapeColor = "green"
    gameObject1.shapeColor = "green"
    }*/
  drawSprites();
}

