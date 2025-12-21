import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page">
            <h1>Ласкаво просимо до Бібліотеки</h1>
            <p>Переглядайте та додавайте книги</p>
            <Link to="/books">Перейти до каталогу</Link>
        </div>
    );
};

export default Home;
