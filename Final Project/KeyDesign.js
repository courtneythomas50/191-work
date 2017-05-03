function Design(x,y,d){
  this.x = x;
  this.y = y;
  this.d = d;
}

Design.prototype.display = function(){
push();
  fill(0,0,255);
   ellipse(random(0, width), random(0, height), 50, 50);

   fill(255,255,255);
   ellipse(random(0, width), random(0, height), 15, 15);
pop();

};

// Design.prototype.move = fuction(){
//   
// }
