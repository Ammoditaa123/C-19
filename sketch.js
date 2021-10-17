var score = 0
var PLAY;
var END;
var gameState = PLAY;
var backgroundImg, background;
var player, thanos;



function preload(){

    backgroundImg = loadImage("background.jpg")
    player = loadImage("player.png")
    thanos = loadImage("thanos.png")
    ghost = loadImage("ghost.png")

}

function setup() {

    createCanvas(1400, 600);
    background = createSprite(840,300);
    background.addImage(backgroundImg);
    background.velocityX = -17;

    player = createSprite(100, 455)
    player.addImage("runner",player)
    player.scale = 0.8


    thanosGroup = createGroup()
    
    invisibleGround = createSprite(700, 520, 1400, 4)
    invisibleGround.visible = false

    
 
}

function draw() {


    if(gameState == PLAY){

        score = score + round( getFrameRate() / 60)


    if (background.x < 550){
        background.x = 820;
      }

      player.velocityY = player.velocityY + 2

    if(keyDown("space") && player.y>=455){
        player.velocityY = -30;
    }
    if(keyDown("up_arrow") && player.y>=455){
        man.velocityY = -30;
    }

    if(player.isTouching(thanosGroup)){
        gameState = END
        gameover.play()
    }


    player.velocityY = player.velocityY + 0.8

    spawnThanos()

 }

 else if(gameState == END){

    fill("white")
    textFont("Pixelade")
    textSize(50)
    strokeWeight(3)
    stroke("black")
    text("Score: " + score, 620, 100)


    fill("white")
    textFont("Pixelade")
    textSize(120)
    strokeWeight(4)
    stroke("black")
    text("Game Over", 500, 200)

    textSize(40)
    strokeWeight(2)
    text("Refresh to play again", 510, 250)


    player.velocityY = 0

    invisibleGround.velocityX = 0



 } 
 player.collide(invisibleGround);
 player.collide(thanosGroup);
    drawSprites()
 
}

function spawnThanos(){
    if (frameCount % 70 == 0){

        thanos = createSprite(1405, 480)
        thanos.addImage(thanos)
        thanos.velocityX = -17
        thanos.scale = 0.34

        randnum = round(random(1, 3))

        switch(randnum){

            case 1: thanos.addImage(thanos)
            break;
            
            case 2: thanos.addImage(ghost)
            break;
            
            case 3: thanos.addImage(thanos)
            break;

            default: break ;
        }
    

        thanosGroup.add(thanos);
        thanosGroup.add(ghost);

    }

}