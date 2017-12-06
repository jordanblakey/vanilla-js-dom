console.groupCollapsed('Everything Before')

// RECAP
// elem = document.createElement('h1')
// elem.textContent = 'Created Element'
// document.querySelector('body').appendChild(elem)
// console.log(elem)

// ATTR onclick (Old way to do this) ///////////////////////////////////////////
let onClick = x => {
  console.log(x) // Passes in the event, since its an event listener
}

// ANON CB FUNCTION ////////////////////////////////////////////////////////////
// Use event listeners instead to enforce seperation of concerns
let button2 = document
  .getElementById('button2')
  .addEventListener('click', function(e) {
    console.log('Callback function defined in the event listener')
    console.log(e) // The MouseEvent
    console.log('\n')
    document.querySelector('#main').style.backgroundColor = 'yellow'
  })

// NAMED CB FUNCTION ///////////////////////////////////////////////////////////
let button3 = document
  .getElementById('button3')
  .addEventListener('click', buttonClick)
console.groupEnd('Everything Before')

function buttonClick(e) {
  // Named functions are much more robust as they're hoisted to the global scope
  console.log(
    ' Callback as named function. Event is the first param, can we pass others?'
  ) // Guess not...
  console.log(arguments) // Arguments array
  console.log(e) // The event, since its an event listener (mouseEvent)
  document.getElementById('header-title').textContent =
    "Changed with 'click' event listener"

  console.groupCollapsed('Event props')
  console.log('e.target:', e.target) // What was clicked
  console.log('e.altKey:', e.altKey) // Modifiers
  console.log('e.shiftKey:', e.shiftKey)
  console.log('e.ctrlKey:', e.ctrlKey)
  console.log('e.bubbles:', e.bubbles) // ???
  console.log('e.buttons:', e.buttons) // ???
  console.log('e.cancelable:', e.cancelable) // ???
  console.log('e.clientX:', e.clientX) // Mouse position in client window
  console.log('e.clientY:', e.clientY) // Mouse position in client window
  console.log('e.composed:', e.composed) // ???
  console.log('e.defaultPrevented:', e.defaultPrevented)
  console.log('e.detail:', e.detail)
  console.log('e.currentTarget:', e.currentTarget)
  console.log('e.fromElement:', e.fromElement)
  console.log('e.isTrusted:', e.isTrusted)
  console.log('e.layerX:', e.layerX)
  console.log('e.layerY:', e.layerY)
  console.log('e.metaKey:', e.metaKey)
  console.log('e.movementX:', e.movementX)
  console.log('e.movementY:', e.movementY)
  console.log('e.offsetX:', e.offsetX) // Mouse position in the target element
  console.log('e.offsetY:', e.offsetY) // Mouse position in the target element
  console.log('e.pageX:', e.pageX)
  console.log('e.pageY:', e.pageY)
  console.log('e.path:', e.path)
  console.log('e.relatedTarget:', e.relatedTarget)
  console.log('e.returnValue:', e.returnValue)
  console.log('e.screenX:', e.screenX)
  console.log('e.screenY:', e.screenY)
  console.log('e.sourceCapabilities:', e.sourceCapabilities)
  console.log('e.srcElement:', e.srcElement)
  console.log('e.timeStamp:', e.timeStamp)
  console.log('e.toElement:', e.toElement)
  console.log('e.type:', e.type) // 'click' IMPORTANT
  console.log('e.view:', e.view) // Window status at event
  console.log('e.which:', e.which) // ???
  console.log('e.x:', e.x) // Mouse coordinates in window
  console.log('e.y:', e.y) // Mouse coordinates in window

  // GETTING ATTRIBUTES OUT OF THE TARGET
  console.log('e.target:', e.target) // What was clicked
  console.log('e.target.id:', e.target.id) // Attributes of the target
  console.log('e.target.className:', e.target.className) // All classes as a string
  console.log('e.target.classList:', e.target.classList) // All classes as an array
  console.groupEnd('Event props')
  let output = document.getElementById('output')
  output.innerHTML = '<h3>Clicked element ID: ' + e.target.id + '</h3>'
}

// OTHER MOUSE EVENTS //////////////////////////////////////////////////////////
// ALL CLICK EVENTS
let button4 = document.getElementById('button4')
console.log(button4)

button4.addEventListener('click', runEvent)
button4.addEventListener('dblclick', runEvent)
button4.addEventListener('mousedown', runEvent)
button4.addEventListener('mouseup', runEvent)

function runEvent(e) {
  console.log('Event type: ' + e.type)
  output.innerHTML =
    '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>'
  document.body.style.backgroundColor =
    'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)'
}

// MOUSE MOVEMENT
let box = document.getElementById('box')
console.log(box)

box.addEventListener('mouseenter', runEvent) // Parent element only
box.addEventListener('mouseover', runEvent) // Any inner elements

box.addEventListener('mouseleave', runEvent) // Parent element only
box.addEventListener('mouseout', runEvent) // Any inner elements
box.addEventListener('mousemove', runEvent) // Any inner elements

// KEYBOARD AND INPUT EVENTS ///////////////////////////////////////////////////
