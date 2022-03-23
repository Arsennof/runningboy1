  var path,boy, leftBoundary,rightBoundary;
  var pathImg,boyImg;
  var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;


  boy1 = createSprite(180,340,30,30);
  boy1.scale=0.08;
  boy1.addAnimation("JakeRunning",boyImg);

  boy2 = createSprite(180,360,30,30);
  boy2.scale=0.08;
  boy2.addAnimation("JakeRunning",boyImg);

  boy3 = createSprite(180,400,30,30);
  boy3.scale=0.08;
  boy3.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);

  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
    background(0);

    path.velocityY = 4;
    
    boy1.x = World.mouseX;
    boy1.y = World.mouseY;
    boy2.x = World.mouseX+100;
    boy3.x = World.mouseX-100;
    
    edges= createEdgeSprites();
    boy1.collide(edges[3]);
    boy1.collide(leftBoundary);
    boy1.collide(rightBoundary);
    
    boy2.collide(edges[3]);
    boy2.collide(leftBoundary);
    boy2.collide(rightBoundary);

    boy3.collide(edges[3]);
    boy3.collide(leftBoundary);
    boy3.collide(rightBoundary);

    boy2.collide(boy3)
    boy3.collide(boy2)

    if(path.y > 400 ){
       path.y = height/2;
    }




  
    drawSprites();
}
