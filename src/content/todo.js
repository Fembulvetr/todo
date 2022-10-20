import './todo.css';


const Todo = ({ todo, toggleTask, removeTask}) => {
    return (
        <div className="itemTask">
            <div 
                className={todo.complete ? "itemText strike" : "itemText"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="itemDelete" onClick={() => removeTask(todo.id)}>X</div>
        </div>
    )
}

export default Todo;