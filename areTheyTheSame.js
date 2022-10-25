

// SOLUTION:
function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
    return array1.map(x => x * x).sort().toString() === array2.sort().toString();
  }


  function comp(a1, a2){
    return a2!=null&&a1.map(x=>x*x).sort().join('-')==a2.sort().join('-')
  }