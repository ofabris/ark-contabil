import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    regime: "",
    cnpj: "",
    dataEntrada: "",
    observacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const formatDataEntrada = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 7)}`;
    }
    setFormData((prev) => ({
      ...prev,
      dataEntrada: value.slice(0, 7),
    }));
  };

  return (
    <div className="page-container">
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

      <h1 className="page-title">Cadastro</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="codigo" className="form-label">Código</label>
            <input
              type="text"
              id="codigo"
              value={formData.codigo}
              onChange={(e) => handleChange(e, "codigo")}
              className="form-input"
              maxLength={8}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => handleChange(e, "nome")}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cnpj" className="form-label">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              value={formData.cnpj}
              onChange={(e) => handleChange(e, "cnpj")}
              className="form-input"
              maxLength={18}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dataEntrada" className="form-label">Data de Entrada</label>
          <input
            type="text"
            id="dataEntrada"
            value={formData.dataEntrada}
            onChange={formatDataEntrada}
            className="form-input"
            placeholder="MM/YYYY"
          />
        </div>
        <div className="form-group">
          <label htmlFor="regime" className="form-label">Regime</label>
          <select
            id="regime"
            value={formData.regime}
            onChange={(e) => handleChange(e, "regime")}
            className="form-input"
          >
            <option value="">Selecione</option>
            <option value="SIMPLES">Simples Nacional</option>
            <option value="LUCRO REAL">Lucro Real</option>
            <option value="LUCRO PRESUMIDO">Lucro Presumido</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="observacao" className="form-label">Observação</label>
          <textarea
            id="observacao"
            value={formData.observacao}
            onChange={(e) => handleChange(e, "observacao")}
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
};

export default Cadastro;