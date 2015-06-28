'use strict'

var through2 = require('through2')
var http = require('http')

var server = http.createServer(function(request, response) {
  if(request.method == 'POST') {
    request.pipe(through2(function(chunk, _, next) {
      this.push(chunk.toString().toUpperCase())
      next()
    })).pipe(response)
  }
})

server.listen(process.argv[2])
