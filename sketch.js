var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
	
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	var options = {
		isStatic:true	
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,options);
 	World.add(world, ground);

	//boxLeftBody = Bodies.rectangle(300,610,20,100,options);
	//World.add(world, boxLeftBody);

	//boxBottomBody = Bodies.rectangle(410,650,200,20,options);
	//World.add(world, boxBottomBody);
	
	//boxRightBody = Bodies.rectangle(520,610,20,100,options);
	//World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  //fill("red")
  //rect(300,610,20,100);
  //rect(410,650,200,20);
  //rect(520,610,20,100);

  if(keyDown("LEFT_ARROW")){
	helicopterSprite.x = helicopterSprite.x-20
	translation = {
	x:-20,
    y: 0 
	}
   Matter.Body.translate(packageBody,translation);
  }

  if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x = helicopterSprite.x+20
	translation = {
	x:20,
    y: 0 
	}
   Matter.Body.translate(packageBody,translation);
  }

  if(keyDown("DOWN_ARROW")){
   Matter.Body.setStatic(packageBody,false);
  }


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



