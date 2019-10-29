var Mover = function() {
  this.x = 400 / 2;
  this.y = 400 / 2;

};

Mover.prototype.update = function() {
  this.x += random(-3, 3);
  this.y += random(-3, 3);
};

Mover.prototype.show = function() {

  if (random(1) < 0.5) {
    fill(153, 51, 255);
  } else {
    fill(51, 0, 51)
  }
  noStroke();
  ellipse(this.x + mouseX - 200, this.y + mouseY - 200, 5, 5);
};
