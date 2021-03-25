var mouse,mouseImg;
var cat,catImg;

//load the images here
function preload() {
        catImg=loadImage("cat1.png")
    mouseImg=loadImage("mouse1.png")
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,50.37,50);
    cat=createSprite(34,42,34,23);
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");


}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
        //the code to change the animation of  the cat and mouse
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");


    }
    
   

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
if(KeyCode===LEFT_ARROW){
    cat.velocity=-5;
    cat.addAnimation("catRunning,catImg2");
    cat.addAnimation("catRunning");

}

}
text(mouseX+','+mouseY,10,45);


