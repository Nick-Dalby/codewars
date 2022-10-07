// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// SOLUTION:
function past(h, m, s){
  return (s * 1000) + (m * 60000) + (h * 3600000)
}