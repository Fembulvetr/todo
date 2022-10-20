import { useState } from "react";
import './todo.css';




const TodoForm = ( {addTask} ) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                className="input"
                value={userInput}
                type="text" 
                onChange={handleChange}
                placeholder="Запишіть завдання..."
            />
            <a onClick={handleSubmit} className="todoBtn">Зберегти</a>
        </form>
    )
}

export default TodoForm;