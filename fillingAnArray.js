// SOLUTION:

const arr = N => Array.from({length: N}, (_, i) => i)


// ALT:

// const arr = n => n ? [...Array(n).keys()] : [];

// const arr = (n = 0) => [...Array(n).keys()]