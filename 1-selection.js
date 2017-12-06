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
headerTitle.innerHTML += '<small>Added an HTML element with JS</small>'
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
