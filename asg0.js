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

  // add black background
  clearCanvas()
  handleDrawEvent()


  var drawButton = document.getElementById('drawButton')

  drawButton.addEventListener('click', handleDrawEvent)
}

function handleDrawEvent() {
    //to be handleDrawEvent
    var xInput = document.getElementById('xinput').value
    var yInput = document.getElementById('yinput').value

    v1 = new Vector3([xInput, yInput, 0])

    clearCanvas()
    drawVector(v1, 'red')
}

function clearCanvas() {
  //reset for a new vector
  var canvas = document.getElementById('example')
  var ctx = canvas.getContext('2d')

  console.log('clearing canvas!')

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color
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
  ctx.beginPath()
  ctx.moveTo(originX, originY)
  ctx.lineTo(originX + vec.elements[0] * 20, originY - vec.elements[1] * 20)
  ctx.stroke()
}
