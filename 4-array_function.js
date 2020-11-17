c = console.log
let fruits = ['Apple', 'Banana']

// Array.length
c(fruits.length)

// Array[index]
let first = fruits[0]
let last = fruits[fruits.length - 1]
c(first, last)

// Loop over Array, passing in curr, i, and original array
fruits.forEach(function (item, index, array) {
  c(item, index, array)
})

// Add item to end of Array (Array.push modifies array, returns new length)
let newLength = fruits.push('Orange')
c(fruits, newLength)

// Remove item from the end of an Array (Modify original and return last item)
let popped = fruits.pop()
c(fruits, popped)

// Remove item from the beginning of Array
let shifted = fruits.shift()
c(shifted, fruits)

// Add item to the beginning of the array
let newLength2 = fruits.unshift('Strawberry')
c(fruits, newLength2)

// Find the index of an item in the Array
fruits.push('Mango')
let position = fruits.indexOf('Banana')
c(fruits, position)

// Remove items by index, remove n items
let removedItem = fruits.splice(position, 1)
c(fruits, removedItem)
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
vegetables.splice(2, 2)
c(vegetables)

// Copy an Array
let shallowCopy = fruits.slice()
c(shallowCopy, fruits)

// Concatenate two arrys
let produce = fruits.concat(vegetables)
c(produce)
// Can concatenate arrays or values
let superArray = produce.concat(fruits, [1, 2, 3], 4)
c(superArray)

// Array entries - create an iterator object
const iterator1 = superArray.entries()
c(iterator1.next().value, iterator1.next().value)

for (let e of iterator1) {
  c(e)
}

// Every - retern an boolean indicating if every element returns truthy from the comparison function
c(superArray.every(Number.isInteger))
// Some - return a boolean indicating some element(s) returns truthy from the comparison function
c(superArray.some(Number.isInteger))

// Fill - fill indices with a static value
c(superArray.fill(0))
c(superArray)
c(superArray.fill(5, 2))
c(superArray.fill(6, 4, 9))

// Filter - return a subarray of elements matching the comparison function
let result = superArray.filter((curr, i, array) => {
  // console.log(i, array)
  return curr < 6
})
c(result, superArray)

// Find - like filter, but only returns the first matching element
result = produce.find((e) => e === 'Cabbage')
let index = produce.findIndex((e) => e === 'Cabbage')
c(result, index, produce)

// Includes - Flatten array up to depth
deepArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
c(deepArray.includes(1))
c(deepArray.includes([]))
c(deepArray.includes([1, 2, 3]))
c(deepArray.includes([1, 2, 3, [1, 2, 3]]))
c(deepArray.includes(Array))

//  IndexOf
c(deepArray.indexOf(3))
c(superArray.lastIndexOf(5))

// Array.prototype.keys, Array.prototype.values
let keys = superArray.keys()
c(keys.next(), keys.next(), keys.next())
let values = superArray.values()
c(values.next(), values.next(), values.next())

// Map - Apply a map function to every element of array
const mapArray = [1, 4, 9, 16]
const map1 = mapArray.map(function (curr, index, array) {
  return curr * 2
})
c(map1)

// Reduce - Apply a reducer function to every element of an array, returning a single value
const reduceArray = [1, 2, 3, 4]
function reducerFunction(accumulator, currentValue, currentIndex, sourceArray) {
  c(
    'accumulator:',
    accumulator,
    'currentValue:',
    currentValue,
    'currentIndex:',
    currentIndex,
    'sourceArray:',
    sourceArray
  )
  return accumulator * currentValue
}
reduction = reduceArray.reduce(reducerFunction)
c(reduceArray, reduction)

// Reverse = reverses an array in place
const reverseArray = [1, 2, 3, 4, 5]
c(reverseArray)
reverseArray.reverse()
c(reverseArray)
Array.prototype.reverse.call(reverseArray)
c(reverseArray)

// Properties
c(reverseArray.name)
c(reverseArray.length)

c(Array.prototype.reverse.call.name)
c(Array.prototype.reverse.call.displayName) //  Deprecated
c(Array.prototype.reverse.call.length)

// Call, Bind, Apply
const arr1 = ['a', 'b']
const elms1 = [1, 2, 3]
arr1.push.apply(arr1, elms1)
console.info(arr1)

function foo(x) {
  console.warn(this, x)
}
// foo(4)

// c(process.pid)
// c(process.env)
