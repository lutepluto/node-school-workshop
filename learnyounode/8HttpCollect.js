var bl   = require('bl')
    http = require('http')

http.get(process.argv[2], function(response) {
  /**
   * Raw implementation
   * ========================================
   * var contents = []
   * response.setEncoding('utf8')
   * response.on('data', function(data) {
   *   contents.push(data)
   * })
   *
   * response.on('end', function() {
   *   console.log(contents.join('').length)
   *   console.log(contents.join(''))
   * })
   */
  
  // bl pipeline implementation
  response.pipe(bl(function(err, data) {
    if(err) return console.error(err)
    var content = data.toString()
    console.log(content.length)
    console.log(content)
  }))
})