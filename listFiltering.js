// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


// SOLUTIONS:
function filter_list(l) {
  let integers = []
   l.forEach(item => {
     Number.isInteger(item) ? integers.push(item) : null
   } )
   return integers
}

function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}