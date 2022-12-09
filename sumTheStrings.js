// SOLUTION:

function sumStr(a,b) {
  let answer = +a + +b
  return answer.toString()
}


function sumStr(a,b) {
  return (+a+ +b)+''  
}

sumStr = (a,b) => String(+a + +b);
