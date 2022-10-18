// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// SOLUTION:

const oddOrEven = (array) =>
  array.reduce((a, b) => a + b, 0) % 2 === 0 || !array.length ? 'even' : 'odd'

function oddOrEven(array) {
  if (array.reduce((a, b) => a + b, 0) % 2 === 0 || !array.length) {
    return 'even'
  } else {
    return 'odd'
  }
}

// refactor:
const oddOrEven = (array) =>
  array.reduce((a, b) => a + b, 0) % 2 === 0 || !array.length ? 'even' : 'odd'

// refactor:
const oddOrEven = (array) =>
  array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'
