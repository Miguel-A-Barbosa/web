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
    <header className="bg-white shadow-sm py-3 md:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* LOGO */}
        <Link to="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-auto sm:h-10 md:h-11 lg:h-12 xl:h-14 transition-all"
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base font-semibold">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:opacity-70 transition"
                >
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
            className="px-3 py-2 lg:px-4 lg:py-2 rounded-full text-[#0B2545] font-bold text-sm lg:text-base whitespace-nowrap"
            style={{ backgroundColor: "#FFC857" }}
          >
            Ingresar a la Plataforma
          </Link>
        </div>

        {/* LOGIN MÓVIL (BOTÓN) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-gray-300"
          >
            {open ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`md:hidden bg-white shadow-sm overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-5 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-center font-semibold text-lg hover:text-blue-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/login"
            className="mt-2 px-4 py-2 rounded-full font-bold text-center text-[#0B2545]"
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
