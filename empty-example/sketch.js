function setup () {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(200, 200, 200);
}

function draw () {
  background(200, 200, 200);
  if(mouseIsPressed){
    addCircle(mouseX, mouseY);
  }
}

function addCircle(x,y){
  noStroke();
  ellipse(x,y, 30, 30);
}