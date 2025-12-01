import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MotionConfig, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header className="bg-white py-3 md:py-4 animate-fadeInUp-header relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto sm:h-11 md:h-12 lg:h-14 transition-all duration-300"
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base font-semibold">
            {links.map((link) => (
              <li key={link.name} className="relative group cursor-pointer">
                <a
                  href={link.href}
                  className="hover:opacity-80 transition text-[#0B2545]"
                >
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

        {/* ANIMATED MOBILE MENU BUTTON */}
        <div className="md:hidden z-50">
          <AnimatedHamburgerButton active={open} setActive={setOpen} />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out absolute w-full left-0 top-full ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-center font-semibold text-lg text-[#0B2545] hover:text-[#4DB6AC] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE LOGIN BUTTON */}
          <Link
            to="/login"
            className="mt-2 px-6 py-3 rounded-full font-bold text-center transition-all duration-300 hover:scale-105 w-full max-w-xs"
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

const AnimatedHamburgerButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-12 w-12 rounded-full transition-colors focus:outline-none"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[3px] w-8 bg-[#0B2545] rounded-full"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[3px] w-8 bg-[#0B2545] rounded-full"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[3px] w-4 bg-[#0B2545] rounded-full"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 8px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 8px)",
    },
  },
};
