'use strict'

function duckCount() {
  return Array.prototype.slice.call(arguments)
    .reduce(function(previous, current, index) {
      return Object.prototype.hasOwnProperty.call(current, 'quack') ? ++previous : previous
    }, 0)
}

// offical solution
// function duckCount() {
//   return Array.prototype.slice.call(arguments)
//     .filter(function(obj) {
//       return Object.prototype.hasOwnProperty.call(obj, 'quack')
//     }).length
// }

module.exports = duckCount