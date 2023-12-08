const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  return todos.filter(task => task.completed);
}

/* 
  Output:
  [
    { topic: 'Doing pre-work', completed: true },
    { topic: 'Playing computer games', completed: true },
    { topic: 'Clean the room', completed: true }
  ]
*/
