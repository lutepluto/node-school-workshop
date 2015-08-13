'use strict'

// my solution
// The reason that I wrote the map function like this is that
// at the beginning I used concat function to return the array.
// Array concat function will concatenates values as well as 
// arrays. Therefore, if the temporary result is of operation
// function is array and returns it with the concat method,
// all values in the temporary array result would be concatenated
// with old ones as a new array.
// As I continues with concat, I found I faild the verification
// in multiple dimension array cases, which forced me to choose
// push method. However, I haven't realized that I should use
// push at the very beignning and there's no need for recursion
// at that moment.
// After I passed the verification and saw the offical solution,
// it occured me that concat method had mislead me a long way.
// I should read the api doc more carefully.
module.exports = function arrayMap(input, operation) {
  return input.reduce(function(prev, next) {
    if(!/Array/.test(Object.prototype.toString.call(next))) {
      prev.push(operation.call(undefined, next))
      return prev
    } else {
      prev.push(arrayMap(next, operation))
      return prev
    }
  }, [])
}

// offical solution
// modele.exports = function map(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }