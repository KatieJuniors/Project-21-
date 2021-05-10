var canvas;
var music;

var brick1, brick2, brick3, brick4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    brick1 = createSprite(560,500,100,20);
    brick1.shapeColor="blue";
    brick2 = createSprite(440,500,100,20);
    brick2.shapeColor="pink";
    brick3 = createSprite(320,500,100,20);
    brick3.shapeColor="green";
    brick4 = createSprite(200,500,100,20);
    brick4.shapeColor="yellow";

    //create box sprite and give velocity

    box = createSprite(random(20,750),100,20,20);
    box.shapeColor="white"
    box.velocityX=8;
    box.velocityY=8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    
    box.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box

    if(box.isTouching(brick1) && box.bounceOff(brick1)) {
        box.shapeColor="blue";
    }
 
    if(box.isTouching(brick2) && box.bounceOff(brick2)) {
        box.shapeColor="pink";
    }

    if(box.isTouching(brick3) && box.bounceOff(brick3)) {
        box.shapeColor="green";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(box.isTouching(brick4) && box.bounceOff(brick4)) {
        box.shapeColor="yellow";
        music.play();
    }
    drawSprites();
}
