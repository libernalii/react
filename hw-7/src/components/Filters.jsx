function Filters({ filter, sort, todos, onFilterChange, onSortChange }) {
    return (
        <div className="controls">
            <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
                <option value="all">Всі ({todos.length})</option>
                <option value="active">Активні ({todos.filter(t => !t.compleated).length})</option>
                <option value="completed">Виконані ({todos.filter(t => t.compleated).length})</option>
            </select>

            <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
                <option value="none">— не сортувати —</option>
                <option value="important">Важливі спочатку</option>
                <option value="unimportant">Неважливі спочатку</option>
            </select>
        </div>
    );
}

export default Filters;
