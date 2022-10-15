// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell);
// you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// SOLUTION:

const DNAStrand = (dna) => {
  let complement = ''
  dna.split('').forEach((x) => {
    x == 'A'
      ? (complement += 'T')
      : x == 'T'
      ? (complement += 'A')
      : x == 'C'
      ? (complement += 'G')
      : x == 'G'
      ? (complement += 'C')
      : ''
  })
  return complement
}

function DNAStrand(dna) {
  const DNAComplement = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T',
  }

  return dna
    .split('')
    .map((elem) => DNAComplement[elem])
    .join('')
}
