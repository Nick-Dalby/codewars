// SOLUTION:

function nbYear(p0, percent, aug, p) {
  let i = 0
  for (i; p0 < p; i++) {
    p0 += Math.floor(p0 * (percent / 100) + aug)
  }
  return i
}
