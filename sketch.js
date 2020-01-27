var r=100;
var g=150;
var b=200;



function setup() {
  createCanvas(800,400);
}

function draw() {
  background(r,g,b);  
  fill(155,0,0);
  ellipse(mouseX,mouseY,50,50);
}