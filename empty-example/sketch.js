
function setup () {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 200);
  frameRate(150);
}

function draw () {

}

function mouseDragged(){
  smooth();
  strokeWeight(20)
	line(mouseX, mouseY, pmouseX, pmouseY);
}