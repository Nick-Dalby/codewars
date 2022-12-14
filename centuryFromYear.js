// SOLUTION:

function century(year) {
  return year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1
}

function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}