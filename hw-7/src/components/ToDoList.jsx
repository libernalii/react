import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onPriorityChange, onDelete }) {
    if (todos.length === 0) return <p>Завдань немає</p>;

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onPriorityChange={onPriorityChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ToDoList;
