import { useState, FormEvent } from "react";
import { User } from "../types/user";
import { validade } from "../utils/validate";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook para redirecionar

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
        navigate("/home");
    };

    return (
        <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center">
            <div className="flex flex-row max-w-4xl w-full mx-4 shadow-lg rounded-lg overflow-hidden">
                <div className="flex-1 hidden lg:block">
                    <img
                        src="./src/assets/login-image.jpg"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
                <div className="flex-1 p-6 bg-white rounded-r-lg">
                    <h1 className="text-3xl font-bold text-center text-custom-blue-dark mb-6">Ark Contábil</h1>
                    <div className="mt-4 bg-custom-blue-light px-4 py-5 rounded-lg w-full">
                        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    value={login} onChange={(e) => setLogin(e.target.value)}
                                    placeholder="Nome de usuário"
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
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-sm text-custom-blue-dark">
                            Não tem uma conta?{" "}
                            <a href="#" className="font-bold text-custom-blue-dark hover:underline">
                                Cadastre-se
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
