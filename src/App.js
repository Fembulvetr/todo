import { useState } from 'react';
import Todo from './content/todo';
import TodoForm from './content/todoForm';
import './content/todo.css';

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      let newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )])
  }

  return (
    <div className="app">
      <div className='appItem'>
        <header className='header'>
          Кількість завдань: {todos.length}
        </header>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
