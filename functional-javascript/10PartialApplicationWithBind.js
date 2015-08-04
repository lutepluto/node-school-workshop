'use strict'

module.exports = function(namespace) {
  function logger() {
    console.log.apply(console, Array.prototype.slice.call(arguments))
  }

  return logger.bind(undefined, namespace)
}

// official solution
// module.exports = function(namespace) {
//   return conosle.log.bind(console, namespace)
// }