// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.


// SOLUTION:
function count (string) {  
  let obj = { }
  string.split('').map(letter => obj[letter] = obj[letter] + 1 || 1)
  return obj
}