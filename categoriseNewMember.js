// SOLUTION:

function openOrSenior(data){
  return data.map(member => {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open'
  })
}


// refactor:
function openOrSenior(data){
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
}