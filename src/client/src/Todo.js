import React from 'react'


export default function Todo({ todo, toggleTodo }) {

    function handleToggle() {

        toggleTodo(todo.id);

    }

    return (
        <>
            <div className="todo" >{todo.value} <input type="checkbox" checked={todo.complete} onChange={handleToggle}></input></div>
        </>
    )
}
