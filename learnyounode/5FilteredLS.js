
var fs = require('fs')
var path = require('path')

var dir       = process.argv[2],
    extension = process.argv[3]

fs.readdir(dir, function(err, files) {
  files.forEach(function(filename, index) {
    if(path.extname(filename).substring(1) === extension)
      console.log(filename)
  })
})