const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, currentValue) {
  console.log(accumulator);
  console.log(currentValue.score);
  console.log(students.length);
  return accumulator + currentValue.score / students.length;
}

let result = students.reduce(getAverageStudentScore, 0);
console.log(result);
// Output: 87.5

let result2 = students.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.score / students.length;
}, 0);

console.log(result2);
