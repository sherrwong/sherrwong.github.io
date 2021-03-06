let cards = []; // CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numCards = 13;

//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload() {
  
  //least efficient way, but most straightforward way
  let card1 = loadImage('https://sherrwong.github.io/final DP/T1.png'); // store image in a variable
  let card2 = loadImage('https://sherrwong.github.io/final DP/T2.png');
  let card3 = loadImage('https://sherrwong.github.io/final DP/T3.png');
  let card4 = loadImage('https://sherrwong.github.io/final DP/t4.png');
  let card5 = loadImage('https://sherrwong.github.io/final DP/t5.png');
  let card6 = loadImage('https://sherrwong.github.io/final DP/t6.png');
  let card7 = loadImage('https://sherrwong.github.io/final DP/t7.png');
  let card8 = loadImage('https://sherrwong.github.io/final DP/t8.png');
  let card9 = loadImage('https://sherrwong.github.io/final DP/t9.png');
  let card10 = loadImage('https://sherrwong.github.io/final DP/t10.png');
  let card11 = loadImage('https://sherrwong.github.io/final DP/t11.png');
  let card12 = loadImage('https://sherrwong.github.io/final DP/t12.png');
  let card13 = loadImage('https://sherrwong.github.io/final DP/t13.png');
  
  cards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13]; // store variables in an array, see top

  
}

function draw() {
  background(255);
  
  //draw the image from the center of the image
  imageMode(CENTER);
  // image(img, 10, 10, 50, 50);
  
  //store random image in a variable
  let randoImg = random(cards);
  //the array is put into the random function, it will choose one index value at random
  
 
  image(randoImg, width / 2, height / 2);
  
} 
var button;

function setup() {
  createCanvas(600, 600);
  background(255);
  button = createImg('https://sherrwong.github.io/final DP/pduck.png');
  button.position(100, 200);
  button.mousePressed(changeBG);
  noLoop();
  
}

function changeBG() {
  var val = random(205);
  background(val);
  draw();
}

 
