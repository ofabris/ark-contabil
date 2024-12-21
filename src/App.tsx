import AppRoutes from "./routes/AppRoutes"; // Importa o roteador configurado
import './App.css';

/**
 * Renders the main App component with routing.
 * The application uses `AppRoutes` for navigation and route management.
 */
function App() {
  return (
    <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center">
      <AppRoutes />
    </div>
  );
}

export default App;
