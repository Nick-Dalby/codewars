// SOLUTION:

function towerBuilder(nFloors) {
  let result = [];
  
  for (let i = 1; i <= nFloors; i++) {
    result.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i));
  }
  return result;
}


// function towerBuilder(n) {
//   return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
// }