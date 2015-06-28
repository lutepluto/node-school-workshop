
'use strict'

function foo() {

  var bar

  // assign value to quxx without var or let in function foo
  quux = 0

  function zip() {
    var quux = 1
  }

}
