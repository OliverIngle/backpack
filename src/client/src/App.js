import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //creating todo list
  const [todos, setTodos] = useState([]);

  //getting input value
  const todoInput = useRef(null)

  function addTodo() {

    let value = todoInput.current.value;

    setTodos((old) => {

      return [...old, {id: uuidv4(), value, complete: false}]

    });

    todoInput.current.value = null;
  }

  return (
    <>
      <TodoList todos={ todos }/>
      <input ref={todoInput} type="text"></input>
      <button onClick={addTodo}>add</button>
    </>
  );
}

export default App;
