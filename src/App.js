import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: 'Water Plants',
    id: 1,
    completed: false
  },
  {
    task: 'Exercise',
    id: 2,
    completed: false
  },
  {
    task: 'Bake Muffins',
    id: 3,
    completed: false
  },
  {
    task: 'Study',
    id: 4,
    completed: false
  },
  {
    task: 'Make Jewelry',
    id: 5,
    completed: false
  }
]

function App() {
  const [todo, setTodo] = useState([todos]);

  const addNewTodo = newTodo => {
    setTodo({
      ...todo,
      todo: [
        ...todo,
        {task: newTodo, id: Date.now(), completed: false}
      ]
    })
  }

  return (
    <div className="App">
      <h1> Welcome to your Todo List!</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
