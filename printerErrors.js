

// SOLUTION:

function printerError(s) {
  const good = /[a-m]/g
  const matched = ((s).match(good) || []).length
  return `${s.length - matched}/${s.length}`
}

// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;