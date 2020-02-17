function setup() {
  var myCanvas = createCanvas();
  createCanvas(800, 250);
  frameRate(8);
  noStroke();
  background('#3CB371');
  myCanvas.parent(mySketch);
}

function draw() {

    var circSize = random(40);
  rect(mouseX, mouseY, circSize, circSize);
}
