// SOLUTION:

function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

