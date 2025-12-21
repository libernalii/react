import { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { genres } from "../data/booksData";

const Books = ({ books, isAuth }) => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    const filteredBooks =
        selectedGenre === "all"
            ? books
            : books.filter(book => book.genre === selectedGenre);

    return (
        <div className="books-page page">
            <h2>Каталог книг</h2>

            <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="all">Всі жанри</option>
                {genres.map(g => (
                    <option key={g} value={g}>
                        {g}
                    </option>
                ))}
            </select>

            <div className="books-list">
                {filteredBooks.length === 0 ? (
                    <p>Книг цього жанру немає</p>
                ) : (
                    filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Books;
