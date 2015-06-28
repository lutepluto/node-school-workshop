'use strict'

var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var concat = require('concat-stream')

var parser = tar.Parse()

parser.on('entry', function(e) {
  if(e.type !== 'File') return

  var h = crypto.createHash('md5', { encoding: 'hex' })
  e.pipe(h).pipe(concat(function(hash) {
    console.log(hash + ' ' + e.path)
  }))
})

process.stdin
  .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
  .pipe(zlib.createGunzip())  
  .pipe(parser)

