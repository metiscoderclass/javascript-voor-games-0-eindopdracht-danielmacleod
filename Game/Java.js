var xCar; //Meest links boven
var yCar; //Meest links boven
var wheelSize;
var speed;
var lives;
var truen = true;
var sterren = [];
var points = 0;
var est1 = 0;
var sterspeed = 3;
var bound = 25;
var bg;

function ster(x,y) {
  this.xPos = x; // random(0,1000);
  this.yPos = y;

  this.display = function() {
    noStroke();
    fill(255, 242, 0);
    rect(this.xPos,this.yPos,20,20)
    if (this.yPos > 1000) {
      this.xPos = random(1000);
      this.yPos = 0;
    }
    if (truen == true) {
      this.yPos += sterspeed;
    }
    if (this.yPos > 999) {
      points +=1
    }
  }

  this.isGebotst = function(x, y, h, w){
   if (this.xPos < x + w &&
   this.xPos + 20 > x &&
   this.yPos < y + h &&
   20 + this.yPos > y){
     lives = 0
   }
  }
  }



function setup() {
  bg = loadImage("street.jpg");
  createCanvas(1024, 807);
  xCar = 100;
  yCar = 580;
  wheelSize = 30;
  speed = 5;
  var ster1 = new ster(random(1000),-1001);
  sterren.push(ster1);
  var ster2 = new ster(random(1000),-1001);
  sterren.push(ster2);
  var ster3 = new ster(random(1000),-950);
  sterren.push(ster3);
  var ster4 = new ster(random(1000),-900);
  sterren.push(ster4);
  var ster5 = new ster(random(1000),-850);
  sterren.push(ster5);
  var ster6 = new ster(random(1000),-800);
  sterren.push(ster6);
  var ster7 = new ster(random(1000),-750);
  sterren.push(ster7);
  var ster8 = new ster(random(1000),-700);
  sterren.push(ster8);
  var ster9 = new ster(random(1000),-650);
  sterren.push(ster9);
  var ster10 = new ster(random(1000),-600);
  sterren.push(ster10);

  var ster11 = new ster(random(1000),-550);
  sterren.push(ster11);
  var ster12 = new ster(random(1000),-500);
  sterren.push(ster12);
  var ster13 = new ster(random(1000),-450);
  sterren.push(ster13);
  var ster14 = new ster(random(1000),-400);
  sterren.push(ster14);
  var ster15 = new ster(random(1000),-350);
  sterren.push(ster15);
  var ster16 = new ster(random(1000),-300);
  sterren.push(ster16);
  var ster17 = new ster(random(1000),-250);
  sterren.push(ster17);
  var ster18 = new ster(random(1000),-200);
  sterren.push(ster18);
  var ster19 = new ster(random(1000),-150);
  sterren.push(ster19);
  var ster20 = new ster(random(1000),-100);
  sterren.push(ster20);
  var ster21 = new ster(random(1000),-50);
  sterren.push(ster21);
  var ster22 = new ster(random(1000),0);
  sterren.push(ster22);
}

function drawCar(xCar, yCar, wheelSize) {
    noStroke();
    fill(255, 0, 0);
    rect(xCar, yCar, 110, 20);
    rect(xCar + 10, yCar-22, 70, 40);
    stroke(255);
    strokeWeight(2);
    fill(255, 255, 255);
    ellipse(xCar + 25, yCar + 21, wheelSize, wheelSize);
    ellipse(xCar + 80, yCar + 21, wheelSize, wheelSize);
    stroke(9);
}

function draw() {
  background(bg)
    if (keyIsDown(RIGHT_ARROW)) {
      speed = 15;
      xCar += speed;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      speed = -15;
      xCar += speed;
    }

    for (var i=0; i<sterren.length; i++) {
      sterren[i].display();

    sterren[i].isGebotst(xCar, yCar, 40,70)
    sterren[i].isGebotst(xCar, yCar, 20,100)
    }


    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > width || xCar < 0){
        speed = -speed;
    }
    if (lives == 0){
      window.location = "index.html"
    };
    if (xCar > 900){
      lives = 0;
    };
    if (xCar < 0){
      lives = 0;
    };
    if (points > bound ){
      sterspeed = sterspeed + 1
      bound = bound + bound
    }
};
