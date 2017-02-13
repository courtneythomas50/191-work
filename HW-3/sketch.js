function setup() {
createCanvas(500,500)
background(153,204,255)
}

function draw() {
//head
  push();
  translate(250, 200);
  fill(250, 300, 100);
  stroke(0,0,0);
  strokeWeight(4);
  ellipse(0,0,200,200);
  pop();
//ears
  push();
  translate(130,50);
  fill(250, 300, 100);
  stroke(0,0,0);
  strokeWeight(4);
  triangle(40,85,40,40,76,59);
  pop();

  push();
  translate(250,50);
  fill(250, 300, 100);
  stroke(0,0,0);
  strokeWeight(4);
  triangle(40,60,80,40,76,85);
  pop();

  //eyes
  push();
  translate(250, 165);
  fill(255,255,255);
  ellipse(-35,0,35,30);
  ellipse(35,0,35,30);
  pop();

  //pupils
  //eyes
  push();
  translate(250, 165);
  fill(0,0,0);
  ellipse(-35,0,20,30);
  ellipse(35,0,20,30);
  pop();

//mouth
  push();
  translate(170,155);
  arc(80,80,30,30,0,PI+QUARTER_PI,CHORD);
  pop();

  //nose
  push();
  translate(225,165);
  fill(255, 153, 255);
  stroke(0,0,0);
  strokeWeight(1);
  triangle(10,45,25,20,40,45);
  pop();

  //right whiskers
  push();
  translate(265,200);
  line(2, 5, 40, 20);
  pop();

  push();
  translate(265,200);
  line(2, 5, 40, 10);
  pop();

  push();
  translate(265,200);
  line(2, 5, 40, 0);
  pop();
//left whiskers
  push();
  translate(190,180);
  line(6, 16, 43, 22);
  pop();

  push();
  translate(190,180);
  line(6, 25, 43, 22);
  pop();

  push();
  translate(190,180);
  line(6, 32, 43, 22);
  pop();

  //text
  push();
  fill(255,0,0);
  textSize(48);
  textFont("Mesquite Std");
  text("Courtney Thomas", 155, 55);

  pop();

  //collar
  push();
  translate(160,265);
  fill(255, 51, 51);
  rect(30, 20, 120, 20, 20);
  pop();

  push();
  translate(205,282);
  fill(255,255,0);
  rect(30, 20, 30, 30, 25);
  pop();
}
