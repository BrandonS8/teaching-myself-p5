
function setup () {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 200);
  // frameRate(400)
}

function draw () {
  if(mouseIsPressed) {
    addCircle(mouseX, mouseY);
  }
}

function addCircle(x,y){
  noStroke();
  smooth();
  ellipse(x, y, 20, 20);
}