// SOLUTION:

snail = function(array) {
  const result = []
  while (array.length) {
    result.push(...array.shift());
    array.map(row => result.push(row.pop()))
    array.reverse().map(row => row.reverse());
  }
  
  return result
}