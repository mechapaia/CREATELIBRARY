var rect1, rect2,object1,object2;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);

  rect1 = createSprite (200,200,50,50);
  rect2 = createSprite (400,200,80,30);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  if (isTouching(rect2,gameObject1)){
    gameObject1.shapeColor = "red";
    rect2.shapeColor = "red";
  }else {
    gameObject1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  drawSprites();
}
