# LearnWithUs
Where I put all of my LearnWithUs project

Code for sketch.js file 
let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1000; i++) {
    dots[i] = new Mover();
  }
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(128, 128, 128);
    fill(7, 14, 145);
    textSize(19);
    text("The Spanish Flu taking over the Human body", 7, 100);
    textSize(24);
    text("Click to see the growing virus model", 5, 200)
  } else if (sceneNum == 1) {
    background(153, 153, 0);

    for (let i = 0; i < 1000; i++) {
      dots[i].update();
      dots[i].show();
    }
  } else if (sceneNum == 2) {
    background(255, 10, 5);
    textSize(25);
    text("Thanks for your time and attention", 7, 50);
    textSize(20);
    text("A message from Ontario Health Board", 25, 200);      
  }
}




code for mover.js
var Mover = function(){
  this.x= 400/2;
  this.y = 400/2;
  
};

Mover.prototype.update = function(){
    this.x+=random(-3,3);
    this.y +=random(-3,3);
};

Mover.prototype.show = function(){
   
    fill(153, 255, 51);
    noStroke();
    ellipse(this.x + mouseX - 200, this.y + mouseY - 200, 5,5);
};


style css code

<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="mover.js"></script>

    <script src="sketch.js"></script>
        
  </body>
</html>
