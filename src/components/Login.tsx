import { useState, FormEvent } from "react";
import { User } from "../types/user";
import { validade } from "../utils/validate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

/**
 * Renders a login form component with input fields for username/email and password, and a submit button.
 * The component uses the `useState` hook to manage the state of the login and password fields.
 * When the form is submitted, the `handleSubmit` function is called, which performs validation using the `validade` utility function.
 * If the validation is successful, the login and password fields are cleared, and an alert is shown.
 * If the validation fails, error messages are displayed using the `react-toastify` library.
 */
const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: User = {
            login,
            password
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

        alert("Obrigado por se inscrever!");
    };

    return (
        <>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <input
                        type="text"
                        value={login} onChange={(e) => setLogin(e.target.value)}
                        placeholder="Nome de usuário ou email"
                        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                    />
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
                    Entrar
                </button>
            </form>
            <ToastContainer />
        </>
    );
}

export default Login;