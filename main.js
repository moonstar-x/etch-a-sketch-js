var sketcher;
var img;
var outerBody;

// Etch-a-Sketch Body Preload Image
function preload() {
  img = loadImage('./img/body.png');
}

function setup() {
  // Canvas Settings
  var canvas = createCanvas(640, 480);
  canvas.parent("app-holder"); //app-holder css id
  frameRate(30);  
  sketcher = new Sketcher();

  // Etch-a-Sketch Body Graphics
  outerBody = createGraphics(width, height);
  outerBody.imageMode(CORNERS);
  
  // Apply Sketcher Drawing Settings
  background(sketcher.bgColor);
  strokeWeight(sketcher.penSize);
  stroke(sketcher.penColor);
}

function draw() {
  // Draw Body
  image(outerBody, 0, 0);
  outerBody.image(img, 0, 0, outerBody.width, outerBody.height);

  // Update Movement
  sketcher.update();

  // Controls
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
    background(sketcher.bgColor); // Clear screen
  }
  return false;
}