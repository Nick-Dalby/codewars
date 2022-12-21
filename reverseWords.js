// SOLUTION:

function reverseWords(str) {
  const words = str.split(' ')

  // Reverse each word in the array
  const reversedWords = words.map((word) => word.split('').reverse().join(''))

  // Join the reversed words back into a single string
  return reversedWords.join(' ')
}


function reverseWords(str) {
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


const reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
