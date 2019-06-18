// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string

const numberOfVowels = function(data) {
  var count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var string = data.toLowerCase();

  for (s = 0; s < string.length; s++) {
    for (v = 0; v < vowels.length; v++) {
      if(string[s] === vowels[v]) {
        count += 1;
  }
  return count;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
