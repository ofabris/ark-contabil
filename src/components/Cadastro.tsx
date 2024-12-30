import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Cadastro = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCadastro = () => {
    navigate("/cadastro");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleSair = () => {
    navigate("/login");
  };

  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    regime: "",
    cnpj: "",
    dataEntrada: "",
    observacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
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
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 7)}`; // Adiciona a barra após os 2 primeiros caracteres
    }
    setFormData((prev) => ({
      ...prev,
      dataEntrada: value.slice(0, 7), // Limita a 7 caracteres (MM/YYYY)
    }));
  };

  return (
    <div className="p-4">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            className="text-blue-600 text-2xl font-bold cursor-pointer"
            onClick={handleHome}
          >
            Ark Contábil
          </div>
          <div className="nav-links">
            <button onClick={handleCadastro} className="nav-link">Cadastro</button>
            <button onClick={handleHome} className="nav-link">Conciliacao</button>
            <button onClick={handleHome} className="nav-link">Consulta</button>
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
      <h1 className="text-2xl font-bold text-left mb-6 mt-20">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            <label htmlFor="codigo" className="block">Código</label>
            <input
              type="text"
              id="codigo"
              value={formData.codigo}
              onChange={(e) => handleChange(e, "codigo")}
              className="input-field w-20"
              maxLength={8}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="nome" className="block">Nome</label>
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => handleChange(e, "nome")}
              className="input-field w-full"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="cnpj" className="block">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              value={formData.cnpj}
              onChange={(e) => handleChange(e, "cnpj")}
              className="input-field w-60"
              maxLength={18}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            <label htmlFor="dataEntrada" className="block">Data de Entrada</label>
            <input
              type="text"
              id="dataEntrada"
              value={formData.dataEntrada}
              onChange={formatDataEntrada}
              className="input-field w-full"
              placeholder="MM/YYYY"
            />
          </div>
          <div>
            <label htmlFor="regime" className="block">Regime</label>
            <select
              id="regime"
              value={formData.regime}
              onChange={(e) => handleSelectChange(e, "regime")}
              className="input-field w-full"
            >
              <option value="">Selecione</option>
              <option value="SIMPLES">Simples Nacional</option>
              <option value="LUCRO REAL">Lucro Real</option>
              <option value="LUCRO PRESUMIDO">Lucro Presumido</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="observacao" className="block">Observação</label>
          <textarea
            id="observacao"
            value={formData.observacao}
            onChange={(e) => handleChange(e, "observacao")}
            className="input-field w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
