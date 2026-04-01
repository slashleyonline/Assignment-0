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
  var opDrawButton = document.getElementById('opDrawButton')

  drawButton.addEventListener('click', handleDrawEvent)
  opDrawButton.addEventListener('click', handleDrawOperationEvent)
}

function handleDrawEvent() {
    clearCanvas()
    
    var xInput1 = document.getElementById('xInput1').value
    var yInput1 = document.getElementById('yInput1').value

    var xInput2 = document.getElementById('xInput2').value
    var yInput2 = document.getElementById('yInput2').value

    v1 = new Vector3([xInput1, yInput1, 0])
    v2 = new Vector3([xInput2, yInput2, 0])


    drawVector(v1, 'red')
    drawVector(v2, 'blue')
}

function handleDrawOperationEvent() {
  clearCanvas()
  handleDrawEvent()

  var operation = document.getElementById('operations').value
  var scalar = document.getElementById('scalar').value

  var xInput1 = document.getElementById('xInput1').value
  var yInput1 = document.getElementById('yInput1').value

  var xInput2 = document.getElementById('xInput2').value
  var yInput2 = document.getElementById('yInput2').value

  v1 = new Vector3([xInput1, yInput1, 0])
  v2 = new Vector3([xInput2, yInput2, 0])


  //draw third vector
  if (operation == 'add') {
    v3 = v1.add(v2)
    drawVector(v3, 'green')
  }
  else if (operation == 'subtract') {
    v3 = v1.sub(v2)
    drawVector(v3, 'green')
  }
  else if (operation == 'multiply') {
    v3 = v1.mul(scalar)
    v4 = v2.mul(scalar)
    drawVector(v3, 'green')
    drawVector(v4, 'green')
  }
  else if (operation == 'divide') {
    v3 = v1.div(scalar)
    v4 = v2.div(scalar)
    drawVector(v3, 'green')
    drawVector(v4, 'green')
  }
  else if (operation == 'magnitude') { 
    v1mag = v1.magnitude()
    v2mag = v2.magnitude()
    console.log ('Magnitude v1: ', v1mag)
    console.log ('Magnitude v2: ', v2mag)
  }
  else if (operation == 'normalize') {
    v3 = v1.normalize()
    v4 = v2.normalize()
    drawVector(v3, 'green')
    drawVector(v4, 'green')
  }
  else if (operation == 'angle between') { 
    d = Vector3.dot(v1,v2)
    cosa = d / (v1.magnitude() * v2.magnitude())
    angle = Math.acos(cosa) * (180 / Math.PI)
    console.log('Angle: ', angle)
  }
  else if (operation == 'cross product') { 
    v3 = Vector3.cross(v1, v2)
    console.log('Cross:', v3.elements[2])
  }
  else if (operation == 'area') { 
    v3 = Vector3.cross(v1, v2)
    console.log('Area:', (v3.elements[2]) / 4)
  }
}

function areaTriangle(v1, v2) {
  return;
}

function clearCanvas() {
  //reset for a new vector
  var canvas = document.getElementById('example')
  var ctx = canvas.getContext('2d')


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

