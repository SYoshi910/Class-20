var move, static;

function setup() {
  //frameRate = 166;
  createCanvas(2560/2,1080);
  static = createSprite(400, 500, 50, 50);
  move = createSprite(400,100,50,50);
  move.velocityY = 3;
  static.velocityY = -3;
  move.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
 // move.x = mouseX;
  //move.y = mouseY;
  if(move.x - static.x == move.width/2 + static.width/2 ||
     static.x - move.x == static.width/2 + move.width/2 ||
     move.y - static.y == move.height/2 + static.height/2 ||
     static.y - move.y < static.height/2 + move.height/2){
     
     //static.shapeColor = "green";
     move.velocityY = -move.velocityY;
     static.velocityY = -static.velocityY;
  }
  else{
    //move.shapeColor = "red";
    static.shapeColor = "red";
  }
  drawSprites();
}