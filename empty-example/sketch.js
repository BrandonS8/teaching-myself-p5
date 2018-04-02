var r = 255;
var g = 255;
var b =  255;
function setup () {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  // sliders to control color
  // red
  sliderR = createSlider(0, 255, 0);
  sliderR.position(windowWidth*0.85, 20);
  // green
  sliderG = createSlider(0, 255, 0);
  sliderG.position(windowWidth*0.85, 40);
  // blue
  sliderB = createSlider(0, 255, 0);
  sliderB.position(windowWidth*0.85, 60);
  clearButton = createButton('CLEAR');
  clearButton.position(windowWidth*0.885, 150);
  clearButton.mouseClicked(clearDrawing);
  frameRate(200);
}

function draw () {
  r = sliderR.value();
  g = sliderG.value();
  b = sliderB.value();
  fill(color(r,g,b));
  noStroke();
  rect(windowWidth*0.885, 80, 50, 50);
  cursor(ARROW);
}

function mouseDragged(){
  if(mouseX < windowWidth*0.82){
    smooth();
    strokeWeight(20);
    stroke(r, g, b);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clearDrawing(){
  clear();
}