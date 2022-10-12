
// SOLUTION:
const number = (busStops) => {
  let count = 0;
    busStops.forEach(a => count = count + a[0] - a[1]);
    return count
}