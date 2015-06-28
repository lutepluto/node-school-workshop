var http = require('http')
    bl   = require('bl')

var contents = []
var count = 0

for(var i = 0; i < 3; i++) {
  (function(index) {
    http.get(process.argv[index + 2], function(response) {
      response.pipe(bl(function(err, data) {
        if(err) console.error(err)
        contents[index] = data.toString()

        count++
        if(count == 3) {
          contents.forEach(function(value) {
            console.log(value)
          })
        }
      }))
    })
  })(i)
}