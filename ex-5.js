const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let avg = null;

  let total = students.reduce((accumulator, currentValue) => {
    accumulator = accumulator + currentValue.score;
    return accumulator;
  }, 0);

  avg = total / students.length;

  return avg;
}

let result = getAverageStudentScore(students); // Output: 87.5
console.log(result);
