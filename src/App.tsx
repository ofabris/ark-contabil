import Login from "./components/Login";
import './App.css';

/**
 * Renders the main App component, which includes a login form and an image.
 * The component is centered on the page and has a custom blue background color.
 * The login form is rendered using the `Login` component, which is imported from the `./components/Login` module.
 */
function App() {
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
            <Login />
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

export default App;