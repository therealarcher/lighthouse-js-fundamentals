// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.
// If there are two instructors with the longest name, return the first one.

const instructorWithLongestName = function(instructors) {
  let longest = 0
  let current;
  for(i = 0; i < instructors.length; i++) {
    current = instructors[i].name.length;
    if(current > longest) {
      longest = current;
      indexLongest = i;
    }
  }
  return instructors[indexLongest];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

