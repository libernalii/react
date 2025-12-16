import { useState } from "react";
import "./RegisterModal.scss";

const RegisterModal = ({ onClose, onRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = onRegister(email, password, repeatPassword);

        if (result) {
            setError(result);
        } else {
            setError("");
        }
    };

    return (
        <div className="overlay">
            <div className="modal">
                <button className="closeBtn" onClick={onClose}>
                    &times;
                </button>

                <h2>Реєстрація</h2>

                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label>Repeat password:</label>
                    <input
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />

                    {error && <p className="error">{error}</p>}

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
