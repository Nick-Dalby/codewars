// SOLUTION:

const factorial = (n) => {
  if (!n) return '1'
  let i, next, carret
  const result = n.toString().split``.reverse().map(Number)

  while (--n) {
    i = carret = 0
    while ((next = result[i++]) !== undefined || carret) {
      carret += n * (next || 0)
      result[i - 1] = carret % 10
      carret = parseInt(carret / 10)
    }
  }

  return result.reverse().join``
}
