var fading = false;
var fadingStart = 0;
function setup() {
  createCanvas(800, 800);
  
  
  ellipseMode(CENTER);
}

function draw() {
  background(0);
  
  var s = second();
  var m = minute();
  var h = hour();
  
  
  fill('#44ff55');
  noStroke();
  
  // Create a loop that randomly places green
  // dots on the screen. The number of dots = seconds elapsed
  for(var i = 0; i < s; i++) {
    // ellipse(x, y, width, height);
    ellipse(random(width), random(height), 10, 10);  
  }
  
  
  
  var ballWidth = 30;
  
  // Calculate radius of the circle, this grows as more "balls" are
  // added to the ring
  var r = m > 1 ? (m * ballWidth) / (2 * Math.PI) : 0;
  
  // Two PI is an entire circle, so we divide
  // that by number of minutes to get the fraction of
  // angle for each ball
  var a = (Math.PI * 2) / m;
  
    console.log(s);
  
  
  // Create a loop that counts to numbe rof minutes
  for(var j = 0; j < m; j++) {
    
    if(s < 1 && j === 0) {
      fill('white');
    } else {
      fill('red');
    }
    
    
    
    // The formulas for calculating a point on the circumference
    // of a circle are below
    var x = Math.cos(a * j) * r + width / 2;
    var y = Math.sin(a * j) * r + height / 2;
    // Draw a ball at x, y
    ellipse(x, y, ballWidth);
  }
  
  
  fill('cyan')
  var ballWidthH = 50;
  
  // Two PI is an entire circle, so we divide
  // that by number of minutes to get the fraction of
  // angle for each ball
  var aH = (Math.PI * 2) / h;
  var rH = h > 1 ? (h * ballWidthH) / (2 * Math.PI) : 0;
  
  // Create a loop that counts to numbe rof hours
  for(var k = 0; k < h; k++) {
    
    // The formulas for calculating a point on the circumference
    // of a circle are below
    var xH = Math.cos(aH * k) * rH + width / 2;
    var yH = Math.sin(aH * k) * rH + height / 2;
    // Draw a ball at x, y
    ellipse(xH, yH, ballWidthH);
  }
}