const conditionalSum = function(values, condition) {
  var numbers = [];
  var total = 0;
  if(values === []) {
    return total;
  }  
  else if(condition === 'even') {
    for(i = 0; i < values.length; i++) {
      if(values[i] % 2 === 0) {
        numbers.push(values[i]);
      }
    }
  }
  
  else {
    for(i = 0; i < values.length; i++) {
      if(values[i] % 2 != 0) {
        numbers.push(values[i]);
      }
    }
  }

  for (j = 0; j < numbers.length; j++) {
    total += numbers[j];
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));