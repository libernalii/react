function ToDoItem({ todo, onToggle, onPriorityChange, onDelete }) {
    const borderColor = {
        high: "red",
        medium: "yellow",
        low: "green",
    }[todo.priority];

    return (
        <div className={`todo-item ${todo.priority} ${todo.compleated ? "completed" : ""}`}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={todo.compleated}
                    onChange={() => onToggle(todo.id)}
                />
                {todo.text}
            </label>
            <select
                value={todo.priority}
                onChange={(e) => onPriorityChange(todo.id, e.target.value)}
                disabled={todo.compleated}
            >
                <option value="high">Високий</option>
                <option value="medium">Середній</option>
                <option value="low">Низький</option>
            </select>
            <button className="delete-btn" onClick={() => onDelete(todo)}>×</button>
        </div>

    );
}

export default ToDoItem;
