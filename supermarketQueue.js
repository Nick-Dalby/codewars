// SOLUTION:

function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  
  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

function queueTime(customers, n) {
  let w = new Array(n).fill(0);
  for(let t of customers){
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
    }
  return Math.max(...w);
}

// function queueTime(customers, n) {
//   return Math.max(...customers.reduce((acc, c) => { let i = acc.indexOf(Math.min(...acc)); acc[i] = acc[i] + c;  return acc; },Array(n).fill(0)))
//  }