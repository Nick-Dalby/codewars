// REGEX SOLUTIONS:

function domainName(url) {
  let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
   let domain = sourceString.split(".")[0];
   return domain;
}

function domainName(url) {
  // return url.replace(/.+\/\/|www.|\..+/g, '')
  // return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]
}

// split and replace

function domainName(url) {
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  url = url.replace('www.', '')
  return url.split('.')[0]
}
