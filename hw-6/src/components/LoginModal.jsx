import { useState } from "react"
import "./LoginModal.scss"

const LoginModal = ({onClose, onSuccessLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = onSuccessLogin(email, password);

        if (result) {
            setError(result)
        } else {
            setError("");
        }
    }
    
    
    return (
        <div className="overlay">
            <div className="modal">
                <button className="closeBtn" onClick={onClose}>&times;</button>

                <h2>Увійти</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Увійти</button>
                </form>
            </div>

        </div>
    )
}

export default LoginModal
