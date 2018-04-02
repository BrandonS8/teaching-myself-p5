let r = 255;
let g = 255;
let b =  255;
let size = 20;
function setup () {
  // create canvas
  createCanvas(windowWidth, windowHeight)
  // sliders to control color
  colorsLabel = createP('Colors (RGB)')
  colorsLabel.position(windowWidth*0.85, 0)
  // red
  sliderR = createSlider(0, 255, 0)
  sliderR.position(windowWidth*0.85, 30)
  // green
  sliderG = createSlider(0, 255, 0)
  sliderG.position(windowWidth*0.85, 50)
  // blue
  sliderB = createSlider(0, 255, 0)
  sliderB.position(windowWidth*0.85, 70)
  // size slider
  sizeLabel = createP('Size')
  sizeLabel.position(windowWidth*0.85, 80)
  sliderSize = createSlider(1, 255, 20)
  sliderSize.position(windowWidth*0.85, 110)
  // clear button
  clearButton = createButton('CLEAR')
  clearButton.position(windowWidth*0.885, 140)
  clearButton.mouseClicked(clearDrawing)
  // using div to show size and color so it changes without having to clear the canvas and redraw everytime it shrinks
  div1 = createDiv('')
  div1.position((windowWidth*0.81)-size, 150)
  div1.style('display', 'flex')
  div1.style('justify-content', 'center')
  div1.style('align-items', 'center')
  div2 = createDiv('')
  div2.parent(div1)
  div2.style('border-radius', '50%')
  // line showing area u can draw in it disappears when you hit clear and adding this to draw doesn't fix....
  line(windowWidth*0.82, 0, windowWidth*0.82, windowHeight)
  // this makes the drawing a bit more accurate
  frameRate(200)
}

function draw () {
  // slider values need to be used here because setup only runs once
  r = sliderR.value()
  g = sliderG.value()
  b = sliderB.value()
  size = sliderSize.value()
  div1.size(300, 300)
  // set size preview
  div2.size(size, size)
  // setting the color preview
  div2.style('background', `rgb(${r}, ${g}, ${b})`)
  // making cursor an arrow everywhere cuz it looks nice
  cursor(ARROW)
}

function mouseDragged(){
  // using mouseDragged is a more simple way but I had to sacrifice being able to click to make a dot
  // if the mouse or last mouse position is inside the area on the right side for the sliders then don't draw anything
  // pmouse is the second to most recent mouse position
  if(mouseX < windowWidth*0.81 && pmouseX < windowWidth*0.81){
    smooth()
    strokeWeight(size)
    stroke(r, g, b)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function clearDrawing(){
  // clears the canvas
  clear()
}