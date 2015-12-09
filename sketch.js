//Moving sprites
var pot, lobster;
var potSprite, lobsterSprite;
var direction = 90; //circle initial direction moving down

function setup() {
  var cnv=createCanvas(850,550);
  cnv.parent("myContainer");
  pot=loadImage( "img/pot.png");
  lobster=loadImage("img/lobster.png");
  //create the sprites
 	potSprite = createSprite(600, 200, 150, 400);
	potSprite.addImage(pot);
 	lobsterSprite = createSprite(400, 200, 150, 400);
  	lobsterSprite.addImage(lobster);
  	
}

function draw() {
  background(255,209,0);  
  
  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  //circle.setSpeed(3, direction);
  lobsterSprite.setSpeed(3,direction);
  potSprite.attractionPoint(.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can 
  //set a limit to it with maxSpeed
  potSprite.maxSpeed = 5;
  //you can rotate the sprite according the directio it is moving
  //uncomment this
  //circle.rotateToDirection = true;
  
  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  //ghost.attractionPoint(.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can 
  //set a limit to it with maxSpeed
  //ghost.maxSpeed = 5;
  
  //draw the sprite
  drawSprites();
}

