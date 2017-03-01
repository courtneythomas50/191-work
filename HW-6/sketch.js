
var x = 400;
var y = 400;
var d = 100;
var state = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (state) {
  //if (mouseX>= width/2) {
    background(255,0,0,10);

    fill(0,0,255);
    ellipse(random(0, width), random(0, height), 50, 50);

    fill(255,255,255);
    ellipse(random(0, width), random(0, height), 15, 15);

  } else {
    background(0,100,200);
  }
  ellipse(x, y, d, d);
  fill(230,210,255);
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    state = !state;
  }
}
