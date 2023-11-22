

let img;
let radio

function preload() {
  img = loadImage('./bricks.jpg');


}

function setup() {
  createCanvas(400, 400)

  radio = createRadio();
  radio.option(1, 'invert');
  radio.option(2, 'gray');
  radio.option(3, 'threshold');
  radio.option(4, 'opaque');
  radio.option(5, 'posterize');
  radio.option(6, 'blur 1');
  radio.option(7, 'dilate');
  radio.option(8, 'erode');
  radio.option(9, 'blur 2');
  radio.style('width', '1000px');


  textAlign(CENTER);
  fill(255, 0, 0);

}


function draw() {
  image(img, 0, 0, width, height);

  let val = radio.value()

  if (val == 1) {
    filter(INVERT);
  }
  else if (val == 2) {
    filter(GRAY)
  }
  else if (val == 3) {
    filter(THRESHOLD)
  }
  else if (val == 4) {
    filter(OPAQUE)
  }
  else if (val == 5) {
    filter(POSTERIZE, 3)
  }
  else if (val == 6) {
    filter(BLUR, 3)
  }
  else if (val == 7) {
    filter(DILATE)
  }
  else if(val == 8) {
    filter(ERODE)
  }
  else if(val == 9) {
    filter(BLUR, 3, false)
  }


  describe('A blue brick wall.');

  // noLoop();
}

