// SOLUTION:

function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature.slice(i).reduce((a, b) => a + b))
  }
  return signature.slice(0, n)
}
