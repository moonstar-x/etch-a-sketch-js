function Sketcher() {
  this.old = createVector(random(0, width), random(0, height));
  this.new = createVector(this.old.x, this.old.y);

  this.bgColor = [131, 132, 132];
  this.penColor = [76, 77, 77];
  this.penSize = 2;

  this.update = function() {
    this.new.x = constrain(this.new.x, 0, width-this.penSize);
    this.new.y = constrain(this.new.y, 0, height-this.penSize);
    rect(this.new.x, this.new.y, this.penSize, this.penSize);
    this.old.x = this.new.x;
    this.old.y = this.new.y;
  }
}