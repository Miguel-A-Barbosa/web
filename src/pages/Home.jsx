import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="prose mx-auto mt-10">
      <h1>Home</h1>
      <p>Bienvenido. Esta es la página principal.</p>
      
      <Link
        to="/login"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Ir al Login
      </Link>
    </div>
  );
}

export default Home;
