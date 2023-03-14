function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  fill(random(50, 255), random(50, 255), random(50, 255));
  noStroke();
  x1 = random(-300, 300);
  x2 = random(-300, 300);
  x3 = random(-300, 300);
  x4 = random(-300, 300);
  y1 = random(-300, 300);
  y2 = random(-300, 300);
  y3 = random(-300, 300);
  y4 = random(-300, 300);
  x5 = random(-300, 300);
  x6 = random(-300, 300);
  y5 = random(-300, 300);
  y6 = random(-300, 300);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(x4, y4, x5, y5, x6, y6, x1, y1);
}

function keyTyped() {
  if (key === "p") {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
  if (key === "r") {
    clear();
  }
}
