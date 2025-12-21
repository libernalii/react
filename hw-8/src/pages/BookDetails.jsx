import { useParams, Link } from "react-router-dom";

const BookDetails = ({ books }) => {
    const { id } = useParams();

    const book = books.find(b => b.id === Number(id));

    if (!book) {
        return <p>Книгу не знайдено</p>;
    }

    return (
        <div className="book-details page">
            <img src={book.cover} alt={book.title} />

            <h2>{book.title}</h2>

            <p><b>Автор:</b> {book.author}</p>
            <p><b>Жанр:</b> {book.genre}</p>
            <p><b>Рік видання:</b> {book.year}</p>

            <p>{book.description}</p>

            <Link to="/books">← Назад до каталогу</Link>
        </div>
    );
};

export default BookDetails;
