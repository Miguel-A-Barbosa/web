import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Nosotros", href: "#nosotros" }
  ];

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:opacity-70 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* LOGIN ESCRITORIO */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "#FFC857" }}
          >
            Ingresar a la Plataforma
          </Link>
        </div>

        {/* LOGIN MOVIL */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-gray-300"
          >
            {open ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* MENU DESPLEGABLE MOVIL */}
      <div
        className={`md:hidden bg-white shadow-sm overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4 gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/login"
            className="mt-2 px-4 py-2 rounded-full text-white text-center"
            style={{ backgroundColor: "#FFC857" }}
            onClick={() => setOpen(false)}
          >
            Ingresar a la Plataforma
          </Link>
        </nav>
      </div>
    </header>
  );
}
