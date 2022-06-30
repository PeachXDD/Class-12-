var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ran
var cloudimg

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloundimg= loadImage("cloud.png");
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    ran = Math.round(random(10, 20));

}
function draw() {
    background(100);

    //text(frameCount, 50, 50);

    //jump when the space button is pressed
    if (keyDown("space")&& trex.y>=155) {
        trex.velocityY = -10;
    }

    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);


    /*
    / - division & finding the quotient
        8/4 = 2
    
    % - modulo - division & finds the remainder
        8%4 = 0
    */
    //SPAWNING CLOUDS

    if(frameCount%60===0){
        var cloud = createSprite(610,random(20,100),30,10)
        cloud.velocityX=-4
        cloud.addImage(cloundimg)
        cloud.scale=0.1
    }
    

    drawSprites();
}
