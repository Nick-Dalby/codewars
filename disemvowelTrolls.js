// Your task is to write a function that takes a string and return a new string with all vowels removed.

// SOLUTION:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}