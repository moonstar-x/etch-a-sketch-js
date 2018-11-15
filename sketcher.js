function Sketcher() {
  // Positioning
  this.old = createVector(random(0, width), random(0, height));
  this.new = createVector(this.old.x, this.old.y);

  // Body Limits
  var x1 = 99;
  var x2 = 540;
  var y1 = 90;
  var y2 = 372;

  // Draw Settings
  this.bgColor = [131, 132, 132];
  this.penColor = [76, 77, 77];
  this.penSize = 2;

  // Moving
  this.update = function() {
    this.new.x = constrain(this.new.x, x1, x2);
    this.new.y = constrain(this.new.y, y1, y2);
    rect(this.new.x, this.new.y, this.penSize, this.penSize);
    this.old.x = this.new.x;
    this.old.y = this.new.y;
  }
}