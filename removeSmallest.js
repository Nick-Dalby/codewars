// SOLUTION:

function removeSmallest(numbers) {
  if (!numbers) return []
  let smallest = Math.min(...numbers)
  let newNums = numbers.slice(0)
  newNums.splice(newNums.indexOf(smallest), 1)
  return newNums
}


// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }