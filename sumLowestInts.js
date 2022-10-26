// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 


// SOLUTION:
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b,0)
}


// alternatives:
function sumTwoSmallestNumbers(numbers) {
let [ a, b ] = numbers.sort((a, b) => a - b)
return a + b
}

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};