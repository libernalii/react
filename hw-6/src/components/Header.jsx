import "./Header.scss"

const Header = ({ currentUser, onLoginModalOpen, onRegisterModalOpen, onLogout }) => {
    return (
        <header className="header">
            <h1 className="logo">My App</h1>

            {!currentUser ? (
                <div className="authButtons">
                    <button 
                        className="loginBtn" 
                        onClick={onLoginModalOpen}
                    >
                        Login
                    </button>

                    <button 
                        className="loginBtn" 
                        onClick={onRegisterModalOpen}
                    >
                        Register
                    </button>
                </div>
            ) : (
                <div className="userWrapper">
                    <span className="email">{currentUser.email}</span>
                    <button
                        className="logoutBtn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            )}

        </header>
    )
}

export default Header
