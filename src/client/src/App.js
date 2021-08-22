import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  //creating todo list
  const [todos, setTodos] = useState([]);

  //getting input value
  const todoInput = useRef(null);

  useEffect( () => {

    let storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) setTodos(storedTodos);

  }, [] )

  useEffect( () => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

  }, [todos] );

  function addTodo() {

    let value = todoInput.current.value;

    setTodos((old) => {

      return [...old, {id: uuidv4(), value, complete: false}]

    });

    todoInput.current.value = null;
  }

  const clear = () =>{

    setTimeout(() => {
      let updatedTodos = todos.filter((todo) => !todo.complete);
      setTodos(updatedTodos);
    }, 3000);

  }

  function toggleTodo(id) {
    let newTodos = [...todos]
    let todo = newTodos.find(todo => todo.id === id)

    todo.complete = !todo.complete

    setTodos(newTodos);

    setTimeout(clear(), 3000);

  }

  return (
    <>
      <TodoList todos={ todos } toggleTodo={toggleTodo} s/>
      <input ref={todoInput} type="text"></input>
      <button onClick={addTodo}>add</button>
    </>
  );
}

export default App;
