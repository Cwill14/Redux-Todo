import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
