import { useState, FormEvent } from "react";
import { User } from "../types/user";
import { validade } from "../utils/validate";

/**
 * Renders a login form component with input fields for username/email and password, and a submit button.
 * The component handles form submission, validates the input data, and displays any validation errors.
 * Upon successful submission, it clears the input fields and displays an alert message.
 */
const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setErrors(null);

        const data: User = {
            login,
            password
        };

        const validateErrors = validade(data);

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }

        setLogin("");
        setPassword("");

        alert("Obrigado por se inscrever!");
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <input
                    type="text"
                    value={login} onChange={(e) => setLogin(e.target.value)}
                    placeholder="Nome de usuário ou email"
                    className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                />
                {errors?.login && (
                    <small className="text-xs text-red-500 mt-1">{errors?.login}</small>
                )}
            </div>
            <div className="flex flex-col">
                <input
                    type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
                />
                {errors?.password && (
                    <small className="text-xs text-red-500 mt-1">{errors?.password}</small>
                )}
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 font-medium text-sm py-2 px-4 rounded-lg text-white">
                Entrar
            </button>
        </form>
    )
}

export default Login