 var r;
 var b;
 var cirX;
 var cirY;

 function setup() {
   createCanvas(windowWidth, windowHeight);
   background('white');
   frameRate(6)
 }
 function draw() {
   cirX = random(width);
   cirY = random(height);
   var size = random(150);
   r = random(255);
   b = random(255);
   fill(r, 0, b);
   noStroke();
   ellipse(cirX, cirY, size, size);

 }
