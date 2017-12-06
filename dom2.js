////////////////////////////////////////////////////////////////////////////////
// TRAVERSE THE DOM
////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////
// RENDER NEW ELEMENTS
////////////////////////////////////////////////////////////////////////////////

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
