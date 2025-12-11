import "./Header.css"

const Header = ({ onToggleForm, showForm }) => {
    return (
        <header className="header">
            <h1>Product Manager</h1>

            <button className="btn add-btn" onClick={onToggleForm}>
                {showForm ? "Close form" : "Add product"}
            </button>
        </header>
    );
};

export default Header;
