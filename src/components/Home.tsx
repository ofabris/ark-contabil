import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };
  
  const handleConciliacao = () => {
    navigate("/home");
  };

  const handleConsulta = () => {
    navigate("/home");
  };

  const handleSair = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-blue-600 text-2xl font-bold">
            Ark Contábil
          </div>
          <div className="nav-links">
            <button onClick={handleCadastro} className="nav-link">Cadastro</button>
            <button onClick={handleConciliacao} className="nav-link">Conciliacao</button>
            <button onClick={handleConsulta} className="nav-link">Consulta</button>
            <button onClick={handleSair} className="nav-link">Sair</button>
          </div>
          <div className="menu-icon">
            <button
              onClick={toggleMenu}
              className="text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
