// SOLTUIONS:

function alphabetPosition(text) {
  var result = ''
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += code - 64 + ' '
  }

  return result.slice(0, result.length - 1)
}

function alphabetPosition(text) {
  return text
    .split('')
    .filter((v) => /[a-zA-Z]/.test(v))
    .map((v) => v.toLowerCase().charCodeAt(0) - 96)
    .join(' ')
}

let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(' ')
