// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.



// SOLUTION:
function sumArray(array) {
  if(array && array.length > 1) {
    return array.sort((a,b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
  } 
  return 0
  }


  // const sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
