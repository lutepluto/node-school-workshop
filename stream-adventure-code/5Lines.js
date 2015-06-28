'use strict'

var through2 = require('through2')
var split = require('split')

var i = 1

process.stdin
       .pipe(split())
       .pipe(
         through2(function(chunk, _, next){
           this.push(i % 2 === 0 ? chunk.toString().toUpperCase() + '\n' : chunk.toString().toLowerCase() + '\n')
           i++
           next()
         })
       ).pipe(process.stdout)
