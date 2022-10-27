// SOLUTION:

function findNb(m) {
  let total = 0
   let n = 0
 
   while(total < m) {
     n++
     total += n**3
   }
 
   return total === m ? n : -1
 }


//  function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }