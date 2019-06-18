// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace 
// characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, 
// you should only replace the whitespace within the string.

const urlEncode = function(text) {
  var trimmed = '';
  trimmed = text.trim();
  var encoded = '';
  percent = '%20'
  for (i = 0; i < trimmed.length; i++) {
    if(trimmed[i] === ' ') {
      encoded += percent;
    }
    else {
      encoded += trimmed[i];
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
