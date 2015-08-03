'use strict'

module.exports = function(namespace) {
  return function logger() {
    var args = Array.prototype.slice.call(arguments)
    args.unshift(namespace)
    console.log.apply(null, args)
  }
}

// offical solution
// var slice = Array.prototype.slice

// function logger(namespace) {
//   return function() {
//     console.log(console, [namespace].concat(slice.call(arguments)))
//   }
// }

 // module.exports = logger