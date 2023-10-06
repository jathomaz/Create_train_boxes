var opaqueness=50;
function setup() { 
  createCanvas(536, 514);
  background(220,100,100);
} 

function draw() { 

  noStroke();
  fill(mouseY,0,mouseX,opaqueness);  //value of mousey, 255, value of mousex, opaqueness
  rect(mouseX,mouseY,20, 20);
 // console.log (mouseX);
 // console.log(mouseY);
  
}

function mousePressed(){
  background(220, 100, 100);  //function called at anytime independently renew bground
}
