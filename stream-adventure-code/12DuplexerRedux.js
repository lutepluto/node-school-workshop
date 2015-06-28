'use strict'

var duplexer = require('duplexer2')
var through2 = require('through2').obj

// This is the offical reference solution for this problem.
// But I still don't understand how the readable stream 'counter' becomes the source of the writable stream.
// It should be studied further.
module.exports = function(counter) {
  var counts = {}
  return duplexer(through2(function(chunk, _, next) {
    counts[chunk.country] = (counts[chunk.country] || 0) + 1
    next()
  }, function(done) {
    counter.setCounts(counts)
    done()
  }), counter)
}
