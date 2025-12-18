function AddTodo({ value, onChange, onAdd }) {
    return (
        <div className="add-todo">
            <input
                value={value}
                placeholder="Додати нове завдання"
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onAdd()}
            />
            <button onClick={onAdd}>Додати</button>
        </div>
    );
}

export default AddTodo;
