import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías validar usuario real
    navigate("/dashboard");
  };

  return (
    <div className="prose mx-auto mt-10">
      <h1>Login</h1>
      <p>Ingresa para continuar.</p>

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Iniciar sesión
      </button>

      <div className="mt-4">
        <Link to="/">Volver al Home</Link>
      </div>
    </div>
  );
}

export default Login;
