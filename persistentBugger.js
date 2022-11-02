// SOLUTION:

function persistence(num) {
  let i = 0
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split('')
      .reduce((a, b) => a * b)
    i++
  }
  return i
}

// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num
//       .toString()
//       .split('')
//       .reduce((t, c) => c * t)
//   }
//   return i
// }
