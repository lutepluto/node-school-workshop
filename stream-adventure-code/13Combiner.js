'use strict'

var combine = require('stream-combiner')
var through2 = require('through2')
var split = require('split')
var zlib = require('zlib')

module.exports = function() {
  var grouper = through2(write, end)
  var current

  function write(chunk, _, next) {
    if(chunk.length == 0) return next()
    var row = JSON.parse(chunk)

    if(row.type === 'genre') {
      if(current) {
        this.push(JSON.stringify(current) + '\n')
      }
      current = { name: row.name, books: [] }
    } else if(row.type === 'book') {
      current.books.push(row.name)
    }

    next()
  }

  function end(next) {
    if(current) {
      this.push(JSON.stringify(current) + '\n')
    }
    next()
  }

  return combine(split(), grouper, zlib.createGzip())
}