import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="bg-white py-3 md:py-4 animate-fadeInUp-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-auto sm:h-10 md:h-11 lg:h-12 xl:h-14 transition-all"
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base font-semibold">
            {links.map((link) => (
              <li key={link.name} className="relative group cursor-pointer">
                <a href={link.href} className="hover:opacity-80 transition">
                  {link.name}
                </a>

                {/* NAVIGATION ANIMATION */}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#4DB6AC] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* DESKTOP LOGIN BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="group flex items-center gap-2 px-5 py-3 lg:px-6 lg:py-3 rounded-full font-bold text-sm lg:text-base transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#FFC857", color: "#0B2545" }}
          >
            Ingresar a la Plataforma
            {/* ARROW */}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#0B2545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-gray-300"
          >
            {open ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Mantiene el shadow-sm aquí, lo cual es correcto */}
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
              className="text-center font-semibold text-lg hover:text-[#1A237E] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE LOGIN BUTTON */}
          <Link
            to="/login"
            className="mt-2 px-4 py-2 rounded-full font-bold text-center transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#FFC857", color: "#0B2545" }}
            onClick={() => setOpen(false)}
          >
            Ingresar a la Plataforma
          </Link>
        </nav>
      </div>
    </header>
  );
}
