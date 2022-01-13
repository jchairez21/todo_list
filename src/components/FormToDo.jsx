import React, { useState } from 'react'

const FormToDo = (props) => {
    const [newTodo, setNewTodo] = useState("")

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(newTodo)

        const defaultStatus = {
            name: newTodo,
            status: false // Boolean For CheckBox ⬇
        }

        props.createToDo(defaultStatus) // CheckBox
        // Alone⬆⬆⬆ User able to use input(STATE updating "")
        setNewTodo("")
        // ⬆ Double Bind

    }



    return (
        <div>

            <form onSubmit={handleSubmitForm}>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                <br />
                <button style={{ backgroundColor: "blue", color: "white" }}>Add</button>
            </form>
        </div>
    )
}

export default FormToDo
