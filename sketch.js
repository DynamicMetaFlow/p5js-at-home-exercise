//You should declare any variables here
var xPosition, yPosition, diameter;

//This function is run ONCE at the beginning
function setup() {
  createCanvas(640,480);

  xPosition = width / 2;
  yPosition = height / 2;
  diameter = 50;

  noStroke();
}


//This function is run CONTINUOUSLY in a loop
function draw() {
  background(200);

  fill(200, 0, 0);
  ellipse(xPosition, yPosition, diameter, diameter);
}

//I usually declare functions here
