import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Введіть email та пароль");
            return;
        }

        setIsAuth(true);

        navigate("/");
    };

    return (
        <div className="login-page page">
            <h2>Вхід до системи</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default Login;
