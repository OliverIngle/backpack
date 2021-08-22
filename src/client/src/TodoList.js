import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
    return (
        <div className="todoContainer" >
            {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}  toggleTodo={toggleTodo} />
        })}
        </div>
    )
}
