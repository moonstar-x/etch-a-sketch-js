var sketcher;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent("app-holder");
  sketcher = new Sketcher();
  frameRate(30);  

  background(sketcher.bgColor);
  strokeWeight(sketcher.penSize);
  stroke(sketcher.penColor);
}

function draw() {
  sketcher.update();

  if (keyIsDown(UP_ARROW)) {
    sketcher.new.y--;
  } if(keyIsDown(DOWN_ARROW)) {
    sketcher.new.y++;
  } if(keyIsDown(LEFT_ARROW)) {
    sketcher.new.x--;
  } if(keyIsDown(RIGHT_ARROW)) {
    sketcher.new.x++;
  }
}

function keyPressed() {
  if (keyCode == ENTER) {
    background(sketcher.bgColor);
  }
  return false;
}