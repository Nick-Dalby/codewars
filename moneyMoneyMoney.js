// SOLUTION:

function calculateYears(principal, interest, tax, desired) {
  let year = 0
  while (principal < desired) {
    year++
    principal = principal + principal * interest - principal * interest * tax
  }
  return year
}

function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / Math.log(1 + interest * (1 - tax))
  )
}
