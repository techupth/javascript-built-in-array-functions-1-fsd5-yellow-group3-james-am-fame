const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const avgScore = students.reduce((acc, student) => acc += student.score, 0) / students.length;
  return avgScore;
}

getAverageStudentScore(students);
