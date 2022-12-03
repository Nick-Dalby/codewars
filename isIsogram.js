// SOLUTIONS:

function isIsogram(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Create a set to store the unique characters
  const set = new Set();

  // Loop through the characters in the string
  for (const c of str) {
    // If the character is not in the set, add it to the set
    if (!set.has(c)) {
      set.add(c);
    } else {
      // If the character is already in the set, the string is not an isogram
      return false;
    }
  }

  // If we reach this point, the string is an isogram
  return true;
}

// WITH REGEX:

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}