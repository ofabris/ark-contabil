import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Cadastro from "../components/Cadastro";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
);

export default AppRoutes;
