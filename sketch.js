//@author Ethan Judice
let pressed, imgBackdrop, imgChicken, imgBeef, imgExplosion, imgConfetti, imgLoser;

function preload() {
  pressed = false;
  imgBackdrop = loadImage("backdrop.png");
  imgChicken = loadImage("chicken.webp");
  imgBeef = loadImage("beef.webp");
  imgExplosion = loadImage("explosion.gif");
  imgConfetti = loadImage("confetti.gif");
  imgLoser = loadImage("loser.gif");
}

function setup() {
  createCanvas(400, 400);
  chickenx = 105;
  chickeny = 170;
  beefx = 205;
  beefy = 55;
  topText = 'It seems you have a decision to make...';
  meatPicker = round(random());
  print(meatPicker)
}

function draw() {
  background(220);
  image(imgBackdrop, 0, 0, 400, 400);
  image(imgChicken, chickenx, chickeny, 50, 50);
  image(imgBeef, beefx, beefy, 50, 50);
  textSize(16);
  fill(255);
  stroke(0);
  strokeWeight(2);
  text(topText, 25, 40);
  if(pressed) {
    if(meatPicker){
      image(imgExplosion, 205, 55, 50, 50);
      beefx = 200;
      beefy = 325;
      topText = 'Only legends go for the 2 block vertical beef!';
      image(imgConfetti, 0, 0, 400, 400);
    } else {
      image(imgExplosion, 105, 170, 50, 50);
      chickenx = 200;
      chickeny = 325;
      topText = 'You chose the chicken, you coward!';
      image(imgLoser, 275, 170, 100, 100);
    }
  }
}

function mousePressed() {
  pressed = true;
}
