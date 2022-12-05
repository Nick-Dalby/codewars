// SOLUTION:

function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

repeatStr = (n, s) => s.repeat(n)
