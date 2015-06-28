var fs = require('fs')

var content = fs.readFileSync(process.argv[2]).toString()
// console.log(content)
// console.log(content.split('\n'))
var countOfLines = content.split('\n').length

console.log(countOfLines - 1)
