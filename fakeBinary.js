// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  let y = x.split('')
  let binary = [];

  for (let i = 0; i < y.length; i++) {
    y[i] < 5 ? binary.push(0) : binary.push(1)
    }

return binary.join("");
}

// oneliner
const fakeBin = (x) => x.split('').map(bin => bin < 5 ? 0 : 1).join('')