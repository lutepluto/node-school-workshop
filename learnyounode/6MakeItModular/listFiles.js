
var fs   = require('fs')
    path = require('path')

module.exports = function(dir, extension, callback) {
  fs.readdir(dir, function(err, files) {
    if(err) return callback(err)
    var data = files.filter(function(file) {
      return path.extname(file).substring(1) === extension
    })
    callback(null, data)
  })
}