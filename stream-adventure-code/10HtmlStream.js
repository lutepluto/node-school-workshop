'use strict'

var trumpet = require('trumpet')
var through2 = require('through2')

var tr = trumpet()

var loud = tr.select('.loud').createStream()
loud.pipe(through2(function(chunck, _, next) {
  this.push(chunck.toString().toUpperCase())
  next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)
