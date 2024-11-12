const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-2 py-4 border-t mt-4 text-xs text-stone-500">
            <div className="flex gap-3 flex-wrap justify-center">
                <a href="#" className="hover:underline">Sobre</a>
                <a href="#" className="hover:underline">Acessibilidade</a>
                <a href="#" className="hover:underline">Central de Ajuda</a>
                <a href="#" className="hover:underline">Privacidade e Termos</a>
                <a href="#" className="hover:underline">Preferências de Anúncios</a>
                <a href="#" className="hover:underline">Carreiras</a>
                <a href="#" className="hover:underline">Configurações</a>
            </div>
            <p className="text-center text-stone-400">
                © 2024 - Sua Empresa, Inc.
            </p>
        </footer>
    );
};

export default Footer;