
// SOLUTION


function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;

  return walk.length === 10 && north === south && east === west;
}


// Alternative with helper function

function count(dir, walk) {
  return walk.filter(function(d) {
    return d == dir;
  }).length;
}

function isValidWalk(walk) {
  return walk.length === 10 &&
  count('n', walk) == count('s', walk) &&
  count('e', walk) == count('w', walk)
}