import React, { useState, useRef, useEffect } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';

const LOCALKEY = 'todos'

function App() {

  const [todos, setTodos] = useState([ ]);

  const todoRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALKEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALKEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAdd(e) {
    const name = todoRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoRef.current.value = null;
  }

  return (
    <>
       <Todos todos={todos} toggleTodo={toggleTodo}/>
       <input type="text" ref={todoRef}></input>
       <button onClick={handleAdd}>add</button>
    </>
  );
}

export default App;
