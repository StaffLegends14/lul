//var for Gamestate

CONTOL = 3;
SERVE = 0;
PLAY = 1;
END = 2;

var Gamestate = SERVE;
//variables while in server state

var Background,Label,Start,Controls,button;
var back_img,label_img,start_img,control_img;

//variables while in play state
var back_img2,rover;

var rover_img;

//variables while in Controls
var rules,board,refresh;

var rulez,boardz,refreshimg;





function preload(){
back_img = loadImage("marsbro.png");
label_img = loadImage("MAR.png");
start_img = loadImage("Play.png");
back_img2 = loadImage("marsbro.png");
control_img = loadImage("controls.png");
rulez = loadImage("board.png"); 
rover_img = loadImage("Rover..png");
boardz = loadImage("Lol.png"); 
refreshimg = loadImage("back.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
   
 //create variable
 

// rules.visible = false;
Background = createSprite(width/2,height/2);
Label = createSprite(width/2,height/4);
Label.scale = 1.5;
Start = createSprite(width/2,height/2,300,150);
Controls = createSprite(width/2 - 200,height/1.5,300,150);
button = createSprite(width/2,height/1.5,300,150);
button.visible = false;
//console.log("ok why you here when console is working");
}

function draw() {
    if(Gamestate === SERVE){
        //load image
        Label.addImage(label_img);
        Background.addImage(back_img2);
        Background.scale = 5;
        Controls.addImage(control_img);
        Controls.scale = 0.4;
        Controls.debug = true;
        Controls.setCollider("rectangle",400,0,1000,100);
        Start.addImage(start_img);

        if(mousePressedOver(Start)){
            Gamestate = PLAY;
            //Start.scale = 4; 
            Label.visible = false;
            Start.visible = false;
            Controls.visible = false;
            
        }

        if(mousePressedOver(Controls)){
            Gamestate = 3;
            //Start.scale = 4; ;
            
        }

        if(Gamestate === PLAY){
       // Background.addImage(back_img2);
           // Background.visible = false;
           Background.velocityX = -12;
           if(Background.x < 0){
              Background.x = width/2;
           }
        }

       if(Gamestate === 3){
       //rules.visible = true;      
       //Label.visible = false;
       //Start.visible = false;
       //Controls.visible = false;
       rules = createSprite(width/1.5,height/2,width,height);
 board = createSprite(rules.width - 500,rules.height/2 + 40);
 rover = createSprite(width/3/2,height/2);
       rules.scale = 2.5;
             rules.addImage(rulez);
             
             board.addImage(boardz);
      
             rover.addImage(rover_img);
             text("ROVER",width/3/2,height/1.5);
       refresh = createSprite(width/2,height/2,500,500);
       //refresh.addImage(refreshimg);
       refresh.scale = 0.1;
       refresh.debug = true;
       refresh.setCollider("rectangle",0,0,1000,1000);
       back();
       if(mousePressedOver(refresh)){
       // Gamestate = 0;
       refresh.scale = 10;
        //board.visible = false;
        //rules.visible = false;
        //0 + 20,height - 20
    }
        }

    }
 drawSprites();
}
function back(){

}