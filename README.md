# vanilla-js-dom

jQuery?

## Part 3: Events

```js
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

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')

itemInput.addEventListener('keydown', runEvent2)
itemInput.addEventListener('keyup', runEvent2)
itemInput.addEventListener('keypress', runEvent2)

itemInput.addEventListener('focus', runEvent2)
itemInput.addEventListener('blur', runEvent2)

itemInput.addEventListener('cut', runEvent2)
itemInput.addEventListener('copy', runEvent2)
itemInput.addEventListener('paste', runEvent2)

itemInput.addEventListener('input', runEvent2)

function runEvent2(e) {
  console.log('Event Type: ' + e.type)
  console.log('Target Value: ' + e.target.value)
  document.getElementById('output').innerHTML = e.target.value
  if (e.type == 'cut') {
    document.body.style.display = 'none'
  }
}

let select = document.querySelector('select')
select.addEventListener('change', runEvent3)
select.addEventListener('input', runEvent3)

let submit = document.querySelector('input[type="submit"]')
form.addEventListener('submit', runEvent3) // must call this e.preventDefault on the form element, not the submit button

function runEvent3(e) {
  e.preventDefault()
  console.log('Event: ' + e)
  console.log('Event type: ' + e.type)
  console.log('select value: ' + e.target.value)
}
```

## Part 2: Traversing

```js
///////////////////////////////////////////////////////
// TRAVERSING
///////////////////////////////////////////////////////
let itemList = document.querySelector('#items')

console.groupCollapsed('Traverse')

// parentNode
console.log(itemList.parentNode)
console.log(itemList.parentElement) // Seem to be the same thing?

itemList.parentNode.style.backgroundColor = '#f4f4f4'

console.log(itemList.parentNode.parentNode)
console.log(itemList.parentNode.parentNode.parentNode) // Traversing up the tree

// parentElement
console.log(itemList.parentElement)

itemList.parentElement.style.backgroundColor = '#f4f4f4'

console.log(itemList.parentElement.parentElement)
console.log(itemList.parentElement.parentElement.parentElement) // Traversing up the tree

// childNodes
console.log(itemList.childNodes) // Returns a NodeList which includes line breaks and any textContent
console.log(itemList.children) // Gets elements only, no text. Returns an HTMLCOllection
console.log(itemList.children[1])
console.log((itemList.children[1].style.backgroundColor = 'yellow'))

// firstChild, firstElementChild
console.log(itemList.firstChild) // looks in the NodeList, and so includes linebreaks, etc
console.log(itemList.firstElementChild) // looks in HTMLCollection, like .children, and ignores any unparented text.
itemList.firstElementChild.textContent =
  'Changing the firstElementChild.textContent' // Manip text
itemList.firstElementChild.style.background = 'red'

// lastChild, lastElementChild
console.log(itemList.lastChild) // looks in the NodeList, and so includes linebreaks, etc
console.log(itemList.lastElementChild) // looks in HTMLCollection, like .children, and ignores any unparented text.
itemList.lastElementChild.textContent =
  'Changing the lastElementChild.textContent'
itemList.lastElementChild.style.background = 'blue'

// nextSibling
console.log(itemList.nextSibling)
// nextElementSibling
console.log(itemList.nextElementSibling)
itemList.nextElementSibling.textContent =
  'Changed with itemList.nextElementSibling.textContent'

// previousSibling
console.log(itemList.previousSibling)
// previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.textContent =
  'changed with itemList.prevousElementSibling'

console.groupEnd('Traverse')

/////////////////////\/////////////////////////////////
// RENDER NEW ELEMENTS
///////////////////////////////////////////////////////

// create a new <div>
let newDiv = document.createElement('div')

// add a class
newDiv.className = 'assigned-className'

// add an id
newDiv.id = 'assigned-id'

// set an arbitrary attribute
newDiv.setAttribute('title', 'setAttribute assigned title')

// createTextNode
let newDivText = document.createTextNode('Added with insertBefore')

// add text
newDiv.appendChild(newDivText)

// NOTE THAT WE HAVE NOT ACTUALLY RENDERED THE ELEMENT TO THE DOM //////////////

// Get the place we want to insertBefore/insertAfter the constructed element
// Note that appendChild/prependChild adds the element INSIDE the selected element
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')

console.log(newDiv)

// Can manipulate created elements just like any normal DOM element
newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1)
```

## Part 1: Selection

```js
// Grouping Console messages
console.groupCollapsed('Getting things from the page.')

// Getting basic things from the DOM
console.dir(document)
console.log('Current URL:', document.URL)
console.log('The root element:', document.activeElement)
console.log('If set the hex of the active link color', document.alinkColor)
console.log('An htmlCollection of all the ', document.all)
console.log('direct children of the selected dom node', document.childNodes)
console.log(
  'An object containing the html attributes',
  document.getElementById('testlink').attributes
)

// Change the document title
console.log('Document Title:', document.title)
document.title = 'Changed title'
console.log('Document Title:', document.title)

// Check the doctype
console.log('Document Title:', document.doctype)
console.groupEnd('Getting things from the page.')
// console.log('Group escaped')

console.groupCollapsed('More Selection and node elements')
// Benchmark a section of JS
console.time('benchmark1')
console.timeEnd('benchmark1')

// Digging around in a node
console.dir(document)
console.dir(document.getElementsByTagName('body'))
console.dir(document.getElementsByTagName('body')[0].childNodes)
console.dir(document.getElementsByTagName('body')[0].childNodes[3].textContent)
console.dir(document.getElementsByTagName('body')[0].childNodes[3])
console.dir(document.getElementsByTagName('body')[0].innerHTML)
console.log(document.all[1])
console.groupEnd('group2')

// MORE SELECTION AND CONTENT MANIPULATION
console.groupCollapsed('selction2-manipulation')
// Get all the elments on the page by tag
console.log(document.forms)
console.log(document.forms[0]) // Grab a specific element
console.log(document.links)
// Note can't manipulate HTMLCollections as an array, must convert first
console.log(document.images)

// Get an element and store it in a variable
console.log(document.getElementById('header-title'))
let headerTitle = document.getElementById('header-title')
console.log(headerTitle)

// Manipulate that element via the variable (same memory location)
headerTitle.textContent = 'Changed with JS. '
headerTitle.innerText = 'Changed with JS2. '
console.log('textContent (actual text):', headerTitle.textContent)
console.log('innerText (rendered text):', headerTitle.innerText)
console.log('innerHTML (parsed html):', headerTitle.innerHTML)
console.log('outerText (not sure)', headerTitle.outerText)
console.log(headerTitle.textContent) // gets the inner text from
let textContent = headerTitle.textContent
textContent = 'Does this reference the same memory location?'
console.log(textContent)
// no, it does not.
console.groupEnd('selection2-manipulation')

// MANIPULATING STYLES
console.groupCollapsed('Manipulating styles')
headerTitle.style.borderBottom = 'solid 3px #000'
headerTitle.style.color = 'red'
console.groupEnd('Manipulating styles')

// Selectors: GET ELEMENT('s') BY
let cg = console.group
let cgc = console.groupCollapsed
let cge = console.groupEnd
let c = console.log

cgc('Selectors')
c(document.getElementById('testlink'))
c(document.getElementsByClassName('container'))
c(document.getElementsByName('CHARLES'))
c(document.getElementsByTagName('input'))
c(document.getSelection()) // Not sure

cge('Selectors')

// STYLE SPECIFIC SELECTION
cgc('Style Multiple')
let items = document.getElementsByClassName('list-group-item')
c(items)
c(items[1])
// items.style.backgroundColor = '#f4f4f4' // Doesn't work, must loop through
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'lightgrey'
}
c((items[1].style.fontWeight = 'bold'))
c((items[1].style.backgroundColor = 'yellow'))
cge('Style Multiple')

// STYLE BY TAG NAME
cgc('Style Others')
let li = document.getElementsByTagName('input')
c(li)
c(li[1])
// li.style.backgroundColor = '#f4f4f4' // Doesn't work, must loop through
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = '#ccaaff'
}
c((li[1].style.fontWeight = 'bold'))
c((li[1].style.backgroundColor = 'blue'))
cge('Style Others')

// querySelector (Vanilla JQuery)
cgc('querySelector')
let header = document.querySelector('#main-header') // Query this ID
header.style.borderTop = 'dashed 4px green'

let input = document.querySelector('input') // Query tag name
input.value = 'Text changed via querySelector'

let submit = document.querySelector('input[type = "submit"]')
submit.value = 'changed by querying input[type="submit"]'

let item = document.querySelector('.list-group-item') // note that it only gets the first item, similary to .indexOf()
item.style.color = 'red'

let lastItem = document.querySelector('.list-group-item:last-child') // note that you can use ANY CSS selector
lastItem.style.backgroundColor = 'green'

let secondItem = document.querySelector('.list-group-item:nth-child(3)') // Nth child works!
secondItem.style.color = 'coral'
cge('querySelector')

cg('querySelectorAll')
let titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'querySelectorAll'
for (let i = 0; i < titles.length; i++) {
  titles[i].textContent = 'qSA Manip'
}

let odd = document.querySelectorAll('li:nth-child(odd)')
let even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'orange'
  even[i].style.backgroundColor = 'purple'
}

cge('querySelectorAll')
```
