var bg,bgImg
var boy,boyImg
var virus1,virus1Img
var virus2,virus2Img
var virus3,virus3Img
var virus4,virus4Img
var virus5,virus5Img
var v1,v1Img
var v2,v2Img
var immunity,immunityImg,immunityGrp;
var edges;
var lives=3;
var virusGroup;
var gameOverImg;
var gameOver
var count=0;
function preload(){
    bgImg= loadImage("bg6.jpg")
    boyImg=loadImage("doreamon.png")
    virus1Img=loadImage("VR1.png")
    virus2Img=loadImage("VR2.png")
    virus3Img=loadImage("VR3.png")
    virus4Img=loadImage("VR4.png")
    virus5Img=loadImage("VR5.png")
    v1Img=loadImage("vc1.png")
    v2Img=loadImage("vc2.png")
    immunityImg=loadImage("imunity.png")
    gameOverImg=loadImage("gameover.png")


    virusGroup=new Group()
immunityGrp=new Group()

}
function setup(){
    createCanvas(windowWidth,windowHeight)
     //bg = createSprite(width/2,height/2)
     //bg.addImage(bgImg)
    // bg.scale=2.5
    // bg.velocityX=-3

    boy= createSprite(width/2,height/2)
    boy.addImage(boyImg)
    boy.scale=0.1

    virus1=createSprite(100,100)
    virus1.addImage(virus1Img)
    virus1.velocityX=4
    virus1.velocityY=6
    virus1.scale=0.3

    virus2=createSprite(700,200)
    virus2.addImage(virus2Img)
    virus2.velocityX=-5
    virus2.velocityY=4
    virus2.scale=0.3

    virus3=createSprite(900,50)
    virus3.addImage(virus3Img)
    virus3.velocityX=5
    virus3.velocityY=7
    virus3.scale=0.3

    virus4=createSprite(600,100)
    virus4.addImage(virus4Img)
    virus4.velocityX=4
    virus4.velocityY=-5
    virus4.scale=0.3

    virus5=createSprite(400,200)
    virus5.addImage(virus5Img)
    virus5.velocityX=-4
    virus5.velocityY=6
    virus5.scale=0.3

    virusGroup.add(virus1)
    virusGroup.add(virus2)
    virusGroup.add(virus3)
    virusGroup.add(virus4)
    virusGroup.add(virus5)
    boy.debug=true
    boy.setCollider("circle",0,0,20)


edges= createEdgeSprites()
    createEdgeSprites()

     v1=createSprite(50,120)
     v1.addImage(v1Img)

     v2=createSprite(1420,620)
     v2.addImage(v2Img)

     

//createImmunity(600,600)
// createImmunity(1000,600)
// createImmunity(1310,140)
// createImmunity(950,360)






}


function draw(){
    background("white")
    console.log("count " + count)
   // if (bg.x<300)
   // bg.x=bg.width/2
if (frameCount%80===0){
    createImmunity(Math.round(random(200,1000)),-10)
}
   virus1.bounceOff(edges)
   virus2.bounceOff(edges)
   virus3.bounceOff(edges)
   virus4.bounceOff(edges)
   virus5.bounceOff(edges)

    drawSprites()
textSize(35)
fill("black")
    text("lives: " + lives,50,50)

    if (virusGroup.isTouching(boy)){
        lives=lives-1;
        console.log("live lost")
//boy.scale=1
boy.x=100
boy.y=100
    }
if (lives===0){
    gameOver=createSprite(width/2,height/2)
    gameOver.addImage(gameOverImg)
    virusGroup.destroyEach()
}

if (boy.isTouching(v1)|| boy.isTouching(v2)){
    lives=lives+1
    if (boy.isTouching(v1))
    v1.destroy()
    if(boy.isTouching(v2))
    v2.destroy()
}
    if (boy.isTouching(immunityGrp)){
        count=count+1
        immunityGrp.destroyEach()

    }
    if (count===2){
        virus1.destroy()
       // lives=lives+1
    }

}


function keyPressed(){
    console.log("anyKey")
    if (keyCode===UP_ARROW){
boy.y=boy.y-10
    }

    if (keyCode===DOWN_ARROW){
        boy.y=boy.y+10
            }

    if (keyCode===LEFT_ARROW){
                boy.x=boy.x-10
                    }


     if (keyCode===RIGHT_ARROW){
                        boy.x=boy.x+10
                            }
}

function createImmunity(x,y){
    
    immunity=createSprite(x,y)
    immunity.addImage(immunityImg)
    immunity.scale=0.5
    immunityGrp.add(immunity)
    immunity.velocityY=7
}
