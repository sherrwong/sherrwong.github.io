var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2, img3, img4, img5, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";

function preload() {

  img1 = loadImage('sherrwong.github.io/p5game /jimmy.png');//LITTLE JIMMY
  img2 = loadImage('sherrwong.github.io/p5game /grass.jpg'); //SCENE 1 grass
  img3 = loadImgae('sherrwong.github.io/p5game /jimmy pond copy.jpg');//SCENE 2 pond
  img4 = loadImgae('sherrwong.github.io/p5game /lake.jpg');//SCENE 3
  img5 = loadImgae('sherrwong.github.io/p5game /ducky and jimmy.jpg');//DUCKY WITH JIMMY
  beginImg = loadImage('sherrwong.github.io/p5game /ducky .jpg');//DUCKY
}

function setup() {
  createCanvas(600, 600);
  let c =color(200, 100, 100); //text color
  fill(c);
  textAlign(CENTER);
  textSize(20); 
} // end of setup


function draw() {
  
if(gameState =="begin"){
  background(beginImg);
  beginGame();
}
  
if(gameState =="L1"){
  background(img2);
  levelOne();
}
if(gameState =="L2"){
    background(img3);
  levelTwo();
}
if(gameState =="L3"){
    background(img4);
  levelThree();
}
if(gameState =="Win"){
    background(img5);
  win();
}
  text(("Score: " + score), width/2, 40);
} // end of draw

function beginGame(){
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame


function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=5){
    gameState= "L2";
  }
  line(ballx+20, bally+20, mouseX, mouseY);
  image(img1, ballx, bally);
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=10){
       gameState= "L3";
  }
   image(img1, ballx, bally);
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -1;
  } // end if
  if (score>=35){
       gameState= "Win";
  }
      image(img1, ballx, bally, ballSize, ballSize);
} // end level 3

function win(){
  text("You Won", width/2, height-20);
} // end win
