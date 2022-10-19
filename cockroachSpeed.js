// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored)

// SOLUTION:
function cockroachSpeed(s) {
  return Math.floor(s / 0.036)
}


function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;
  
  return Math.floor((s*centimetersInKilometers)/secsInHour);
}