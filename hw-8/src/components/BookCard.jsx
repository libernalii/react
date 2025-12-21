import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.cover} alt={book.title} />

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>

            <Link to={`/books/${book.id}`}>
                Детальніше
            </Link>
        </div>
    );
};

export default BookCard;
