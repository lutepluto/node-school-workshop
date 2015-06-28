var http = require('http')
    url  = require('url')

var server = http.createServer(function(request, response) {
  var queryObject = url.parse(request.url, true)
  
  if(request.method == 'GET' && queryObject.pathname.substring(1).split('/').shift() == 'api') {
    var timeString = queryObject.query.iso
    var time = new Date(timeString)

    response.writeHead(200, { 'Content-Type': 'application/json' })

    if(queryObject.pathname.split('/').pop() == 'parsetime') {
      response.end(JSON.stringify({
        'hour': time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds()
      }), 'utf8')
    } else {
      response.end(JSON.stringify({
        'unixtime': time.getTime()
      }), 'utf8')
    }

  }
})

server.listen(process.argv[2])