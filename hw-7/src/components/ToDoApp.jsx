import { useEffect, useState } from "react";
import { initialTodos } from "../data/todos";

import AddTodo from "./AddTodo";
import Filters from "./Filters";
import ToDoList from "./ToDoList";
import ConfirmModal from "./ConfirmModal";

import "./ToDoApp.css";

function ToDoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        if (saved) {
            const parsed = JSON.parse(saved);
            return parsed.length ? parsed : initialTodos;
        }
        return initialTodos;
    });

    const [newTodoText, setNewTodoText] = useState("");
    const [filter, setFilter] = useState(() => localStorage.getItem("filter") || "all");
    const [sort, setSort] = useState(() => localStorage.getItem("sort") || "none");

    const [modalOpen, setModalOpen] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem("filter", filter);
    }, [filter]);

    useEffect(() => {
        localStorage.setItem("sort", sort);
    }, [sort]);

    const addTodo = () => {
        if (!newTodoText.trim()) return;
        setTodos(prev => [
            ...prev,
            { id: Date.now(), text: newTodoText, compleated: false, priority: "low" },
        ]);
        setNewTodoText("");
    };

    const toggleTodo = (id) => setTodos(prev =>
        prev.map(todo =>
            todo.id === id ? { ...todo, compleated: !todo.compleated } : todo
        )
    );

    const changePriority = (id, priority) => setTodos(prev =>
        prev.map(todo => todo.id === id ? { ...todo, priority } : todo)
    );

    const openDeleteModal = (todo) => {
        setTodoToDelete(todo);
        setModalOpen(true);
    };

    const confirmDelete = () => {
        setTodos(prev => prev.filter(t => t.id !== todoToDelete.id));
        setModalOpen(false);
        setTodoToDelete(null);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.compleated;
        if (filter === "completed") return todo.compleated;
        return true;
    });

    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sort === "important") return priorityOrder[b.priority] - priorityOrder[a.priority];
        if (sort === "unimportant") return priorityOrder[a.priority] - priorityOrder[b.priority];
        return 0;
    });

    return (
        <div className="todo-app">
            <h1>Мої завдання</h1>

            <AddTodo value={newTodoText} onChange={setNewTodoText} onAdd={addTodo} />

            <Filters
                filter={filter}
                sort={sort}
                todos={todos}
                onFilterChange={setFilter}
                onSortChange={setSort}
            />

            <ToDoList
                todos={sortedTodos}
                onToggle={toggleTodo}
                onPriorityChange={changePriority}
                onDelete={openDeleteModal}
            />

            {modalOpen && (
                <ConfirmModal
                    onConfirm={confirmDelete}
                    onCancel={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}

export default ToDoApp;
