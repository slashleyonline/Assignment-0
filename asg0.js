// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color

  var v1 = new Vector3([2.25, 2.25, 0])
  drawVector(v1, 'red')
}

function drawVector(vec, color) {
  // Retrieve <canvas> element

  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d')
  ctx.strokeStyle = color

  //defining the origin as the center of the canvas
  var originX = canvas.width / 2
  var originY = canvas.height / 2 

  //adding the vector to the origin
  ctx.moveTo(originX, originY)
  ctx.lineTo(originX + vec.elements[0] * 20, originY - vec.elements[1] * 20)
  ctx.stroke()
}
