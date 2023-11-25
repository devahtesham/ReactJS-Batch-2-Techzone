import React, { memo } from 'react'

const Todo = ({ todos, addTodo }) => {
    console.log("child render")
    return (
        <>
            {
                todos.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))
            }
            <button onClick={addTodo}>Add Todo </button>

        </>
    )
}

export default memo(Todo)