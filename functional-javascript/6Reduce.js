'use strict'

module.exports = function(words) {
  return words.reduce(function(prev, next) {
    prev[next] = prev[next] ? ++prev[next] : 1
    return prev
  }, {})
}