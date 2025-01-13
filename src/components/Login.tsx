import { useState, FormEvent } from "react";
import { User } from "../types/user";
import { validade } from "../utils/validate";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: User = {
            login,
            password,
        };

        const validateErrors = validade(data);

        if (Object.keys(validateErrors).length > 0) {
            Object.values(validateErrors).forEach((message) => {
                toast.error(message);
            });
            return;
        }

        setLogin("");
        setPassword("");
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-image hidden lg:block">
                    <img
                        src="./src/assets/login-image.jpg"
                        alt="Login"
                        className="image-full"
                    />
                </div>
                <div className="login-form">
                    <h1 className="login-title">Ark Contábil</h1>
                    <div className="form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    placeholder="Nome de usuário"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Senha"
                                    className="form-input"
                                />
                            </div>
                            <button type="submit" className="form-button">Entrar</button>
                        </form>
                        <ToastContainer
                            toastStyle={{
                                backgroundColor: "#1D4ED8",
                                color: "#ffffff",
                            }}
                        />
                    </div>
                    <div className="form-footer">
                        <span className="footer-text">
                            Não tem uma conta? <a href="#" className="footer-link">Cadastre-se</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;