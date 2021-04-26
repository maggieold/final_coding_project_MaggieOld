var a=0.0
var s=0.0

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  background(210);//color, 255 is white
  a = random(0, width);
  s = random(0, height);
  
  ellipse(a, s, 60, 60, 58);
  fill('purple');
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}