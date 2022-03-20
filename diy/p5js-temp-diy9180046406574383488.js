var img;
var initials ='sw'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('apple.png');
  img2 = loadImage('orange.png');
  img3 = loadImage('lemon.png');
  img4 = loadImage('lime.png');
  img5 = loadImage('blueberry.png');
  img6 = loadImage('grape.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(255,255,255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // small pen
   strokeWeight(2);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // big pen
    strokeWeight(7);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // small eraser
    strokeWeight(2);
    stroke(255,255,255);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { // big eraser
    strokeWeight(7);
    stroke(255, 255, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  }else if (toolChoice == 'a' || toolChoice == 'A') { // g places the image we pre-loaded
    image(img, mouseX-15, mouseY-15);
    
  }else if (toolChoice == 's' || toolChoice == 'S') { // g places the image we pre-loaded
    image(img2, mouseX-15, mouseY-15);
    
  }else if (toolChoice == 'd' || toolChoice == 'D') { // g places the image we pre-loaded
    image(img3, mouseX-15, mouseY-15);
    
  }else if (toolChoice == 'f' || toolChoice == 'F') { // g places the image we pre-loaded
    image(img4, mouseX-15, mouseY-15);
    
  }else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img5, mouseX-15, mouseY-15);
    
  }else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    image(img6, mouseX-15, mouseY-15);
    
    
  }
 }
 

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(255,255,255); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
