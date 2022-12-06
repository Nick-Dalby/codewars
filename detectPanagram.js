// SOLUTION:

function isPangram(str) {
  // Remove numbers and punctuation from the string
  str = str.replace(/[0-9,.;:!?]/g, '');

  // Convert the string to lowercase
  str = str.toLowerCase();

  // Loop through the alphabet
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    // Check if the current letter is present in the string
    if (!str.includes(char)) {
      // If not, return false
      return false;
    }
  }

  // If all letters of the alphabet are present, return true
  return true;
}


// ALTERNATIVE

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}