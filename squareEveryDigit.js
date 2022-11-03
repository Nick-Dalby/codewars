// square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// SOLUTION:
function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((num) => parseInt(num))
      .map((num) => num * num)
      .join('')
  )
}

const squareDigits = (num) => +num.toString().split('').map((i) => i * i).join('')

