/ /Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.




// SOLUTION:

function order(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
 }).join(' ');
}