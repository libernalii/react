import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { genres } from "../data/booksData";

const AddBook = ({ setBooks }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState(genres[0]);
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !year || !description || !cover) {
            alert("Будь ласка, заповніть всі поля");
            return;
        }

        const newBook = {
            id: Date.now(),
            title,
            author,
            genre,
            year: Number(year),
            description,
            cover
        };

        setBooks(prevBooks => [...prevBooks, newBook]);

        navigate(`/books/${newBook.id}`);
    };

    return (
        <div className="add-book-page page">
            <h2>Додати нову книгу</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Назва книги"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Автор"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    {genres.map(g => (
                        <option key={g} value={g}>{g}</option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Рік видання"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />

                <textarea
                    placeholder="Опис"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="URL обкладинки"
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                />

                <button type="submit">Додати книгу</button>
            </form>
        </div>
    );
};

export default AddBook;
