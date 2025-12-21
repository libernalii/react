import { Link } from "react-router-dom";

const Navbar = ({ isAuth, setIsAuth }) => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Бібліотека</Link>
            </div>

            <div className="links">
                <Link to="/">Головна</Link>
                <Link to="/books">Каталог</Link>

                {isAuth ? (
                    <>
                        <Link to="/books/new">Додати книгу</Link>
                        <button onClick={() => setIsAuth(false)}>Вийти</button>
                    </>
                ) : (
                    <Link to="/login">Увійти</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
