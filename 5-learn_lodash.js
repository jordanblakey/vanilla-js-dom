let _ = require('lodash')
const { objArr2 } = require('./data')
require('./data')

c = console.log

c(_.chunk(arr1, 2)) // chop into n sized subarrays (iterable, chunk_size)
c(arr2, _.compact(arr2)) // remove all falsey values
c(_.concat(arr1, 2, [3], [[4]])) // concatenate elements into one array
c(_.difference(arr1, [1, 2, 3])) // new array excluding values from the second
c(_.differenceBy([1.2, 2.4], [2.3, 3.4], Math.floor)) // like differences, adds a function to compare values by
c(_.differenceWith(objArr2, [{ x: 1, y: 2 }], _.isEqual))
c(_.drop([1, 2, 3, 4, 5, 6], 2)) // Create a slice with x elements dropped from beginning.
c(_.dropRight([1, 2, 3, 4, 5, 6], 2)) // Drop n elements from the end of array
