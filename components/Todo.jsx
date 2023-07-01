import React from 'react'


const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <>
            <div className="content">
                <p>{todo.text}</p>
                <p>{todo.category}</p>
            </div>
            <div className="content">
                <button className='green'>Completar</button>
                <button className='red' onClick={() => removeTodo(todo.id)}>X</button>
            </div>

        </>

    )
}

export default Todo