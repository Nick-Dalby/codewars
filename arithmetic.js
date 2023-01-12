// SOLUTION:

function arithmetic(a, b, operator) {
  return operator === 'add'
    ? a + b
    : operator === 'subtract'
    ? a - b
    : operator === 'multiply'
    ? a * b
    : operator === 'divide'
    ? a / b
    : null
}

function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
  }
}
