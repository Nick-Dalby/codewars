// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// SOLUTION:

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}