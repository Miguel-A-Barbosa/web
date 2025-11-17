import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="prose mx-auto mt-10">
      <h1>Dashboard</h1>
      <p>Estás dentro del sistema.</p>

      <div className="flex gap-4 mt-4">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
