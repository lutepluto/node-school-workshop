'use strict'

// failed to solve this problem
// function repeat(operation, num) {
//   if(num <= ) return
//   operation()
//   return repeat(operation, --num)
// }

// offical solution
function repeat(operation, num) {
  if (num <= 0) return

  operation()

  // release control every 10 or so iterations.
  // 10 is arbitrary
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num)
    })
  } else {
    repeat(operation, --num)
  }
}

module.exports = repeat