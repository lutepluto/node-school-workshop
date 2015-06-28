
var path      = require('path')
    listFiles = require('./listFiles')

listFiles(process.argv[2], process.argv[3], function(err, data) {
  if(!err) {
    data.forEach(function(value) {
      console.log(value)
    })
  }
})