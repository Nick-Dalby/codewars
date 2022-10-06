// INSTRUCTIONS:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// SOLUTION:

function squareSum(numbers) {
  let arr = []
  numbers.forEach((number) => {
    return arr.push(number * number)
  })
  return arr.reduce((a, b) => a + b, 0)
}