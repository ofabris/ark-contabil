import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="navbar-content">
          <div className="navbar-brand" onClick={() => handleNavigation("/home")}>Ark Contábil</div>
          <div className="navbar-links">
            <button onClick={() => handleNavigation("/cadastro")} className="nav-button">Cadastro</button>
            <button onClick={() => handleNavigation("/home")} className="nav-button">Conciliacao</button>
            <button onClick={() => handleNavigation("/home")} className="nav-button">Consulta</button>
            <button onClick={() => handleNavigation("/login")} className="nav-button">Sair</button>
          </div>
          <button className="menu-icon" onClick={toggleMenu}>☰</button>
        </div>
      </nav>
    </div>
  );
};

export default Home;