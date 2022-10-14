// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.


// SOLUTIONS:


function descendingOrder(n){
  return Number(n.toString().split('').sort((a,b)=> b-a).join(''));
}

function descendingOrder(n){
  return parseInt((n+'').split('').sort().reverse().join(''))
}

function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}