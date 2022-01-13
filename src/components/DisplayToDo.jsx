import React from 'react'

const DisplayToDo = ({ todo, idx, deleteTodo, updateTodo }) => {
    const handleChange = () => {
        updateTodo(idx)
    }

    const handleDelete = () => {
        deleteTodo(idx)
    }
    return (
        <div style={{ textDecoration: todo.status ? "line-through" : "" }}>
            <p>{todo.name}<input //You were passing in a List Array. Need OBJ todo.name
                type="checkbox"
                checked={todo.status} onChange={handleChange} />
                <button onClick={handleDelete}>Delete</button></p>
        </div>
    )
}

export default DisplayToDo
