// Write a function findNeedle() that takes an array full of junk but containing one "needle"


// SOLUTIONS:

function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex((s) => s == 'needle')}`
}

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

