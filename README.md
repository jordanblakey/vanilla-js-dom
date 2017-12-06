# vanilla-js-dom

jQuery?

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
