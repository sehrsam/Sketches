//let divisions;
let divisionsSlider;
//let startColor;
let startPicker;
//let endColor;
let endPicker;

function setup() {
  createCanvas(640, 480);
  //startColor = color("blue");
  //endColor = color("green");
  noStroke();
  divisionsSlider = createSlider(2, 200, 100, 1);
  divisionsSlider.position(width / 2, height + 25);
  startPicker = createColorPicker("blue").position(width / 2, height + 50);
  endPicker = createColorPicker("red").position(width / 2, height + 75);
}

function draw() {
  background(255);
  colorMode(RGB);
  let divisions = divisionsSlider.value();
  let startColor = startPicker.color();
  let endColor = endPicker.color();
  for (let i = divisions; i > 0; i--) {
    rect(width * (i / divisions), 0, width / divisions, 200).fill(
      lerpColor(startColor, endColor, i / divisions)
    );
  }
  colorMode(HSB);
  for (let i = divisions; i > 0; i--) {
    rect(width * (i / divisions), 300, width / divisions, 200).fill(
      lerpColor(startColor, endColor, i / divisions)
    );
  }
}
