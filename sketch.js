let sceneNum = 0;
let dot = new Mover();
let dots = [];
let img;
let bg;

function setup() {
  bg = loadImage('Assets/Digestive image.jpg');
  createCanvas(400, 400);

  for (let i = 0; i < 7000; i++) {
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
    //background(51, 0, 51);
    background(bg)
    for (let i = 0; i < 7000; i++) {
      dots[i].update();
      dots[i].show();
    }
  } else if (sceneNum == 2) {
    background(128, 128, 128);
    textSize(25);
    text("Thanks for your Time and Attention", 7, 50);
    textSize(20);
    text("A Message from Ontario Health Board", 25, 200);
  }
}
