'use strict'

// Not perfect
// function reduce(array, callback, initialValue) {
//   if(array.length === 0) { return initialValue }
//   initialValue = callback(initialValue, array[0])
//   return reduce(array.slice(1), callback, initialValue)
// }

// Offical solution
function reduce(array, callback, initial) {
  return (function reduceOne(index, value) {
    if(index > array.length - 1) return value
    return reduceOne(index + 1, callback(value, array[index], index, array))
  }(0, initial))
}

module.exports = reduce