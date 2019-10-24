// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker
var w = 640,
    h = 480;

let s1, s2;
let gravity = 9.0;
let mass = 2.0;

let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    fill(255);
    // Inputs: x, y, mass, gravity
     s1 = new Spring2D(0.0, width / 2, mass, gravity);
     s2 = new Spring2D(0.0, width / 2, mass, gravity);
    
    //clock 
    stroke(255);

    let radius = min(width, height) / 2;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7;
}

function draw() {
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    noFill();
    //stroke(255);
    noStroke();
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    //noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        //ellipse(positions[i][0], positions[i][1], 4, 4);
       // text(i, positions[i][0], positions[i][1]);
    }

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20);

        // uncomment for a surprise
         noStroke();
         fill(255, 0, 162);
         ellipse(positions[62][0], positions[62][1], 10, 10);

         s1.update(positions[62][0], positions[62][1]);
         s1.display(positions[62][0], positions[62][1]);
         s2.update(s1.x, s1.y);
         s2.display(s1.x, s1.y);

         //clock
         // Draw the clock background
         noStroke();
         fill(244, 0, 162, 200);
         ellipse(positions[62][0], positions[62][1], clockDiameter + 25, clockDiameter + 25);
         fill(237, 34, 93);
         ellipse(positions[62][0], positions[62][1], clockDiameter, clockDiameter);

        // Angles for sin() and cos() start at 3 o'clock;
        // subtract HALF_PI to make them start at the top
        let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
        let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(positions[62][0], positions[62][1], positions[62][0] + cos(s) * secondsRadius, positions[62][1] + sin(s) * secondsRadius);
  strokeWeight(2);
  line(positions[62][0], positions[62][1], positions[62][0] + cos(m) * minutesRadius, positions[62][1] + sin(m) * minutesRadius);
  strokeWeight(4);
  line(positions[62][0], positions[62][1], positions[62][0] + cos(h) * hoursRadius, positions[62][1] + sin(h) * hoursRadius);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = positions[62][0] + cos(angle) * secondsRadius;
    let y = positions[62][1] + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
 
    }
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 5;
  this.stiffness = 0.2;
  this.damping = 0.7;

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(255, 51, 153);
    line(this.x, this.y, nx, ny);
  }
}
