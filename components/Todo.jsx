import React from 'react'


const Todo = ({todo}) => {
    return (
        <>
            <div className="content">
                <p>{todo.text}</p>
                <p>{todo.category}</p>
            </div>
            <button className='green'>Completar</button>
            <button className='red'>X</button>
        </>

    )
}

export default Todo