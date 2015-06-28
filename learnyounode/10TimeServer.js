var net = require('net')

var server = net.createServer(function(socket) {
  var date = new Date()

  var year   = date.getFullYear()
      month  = date.getMonth() + 1
      day    = date.getDate()
      hour   = date.getHours()
      minute = date.getMinutes()

  // format date string
  var dateString = year + '-' +
                   pad(month) + '-' +
                   pad(day) + ' ' +
                   pad(hour) + ':' +
                   pad(minute)

  // console.log(dateString)
  socket.end(dateString)
})

server.listen(process.argv[2])

function pad(value, length) {
  value = value.toString()
  length = length || 2
  while(value.length < length) value = '0' + value
  return value
}