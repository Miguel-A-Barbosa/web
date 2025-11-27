import logo from "../assets/logo.png";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const WHATSAPP_NUMBER = "573204133997";
const MESSAGE =
  "¡Hola! He visitado la web de pa'lantED y me interesa saber cómo pueden ayudarme a mejorar la toma de decisiones con datos en mi institución. ¿Podríamos agendar una breve llamada para explorar las soluciones?";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE
)}`;

export default function Footer() {
  return (
    <footer className="relative w-full lg:w-[98%] mx-auto z-0">
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #90CAF9 50%, #90CAF9 20%, #FFFFFF 90%)",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />

      <section className="container mx-auto px-4 lg:px-14 py-10 lg:py-14">
        <div className="flex flex-col xl:flex-row items-center xl:items-center gap-5">
          {/* TEXT */}
          <div className="w-full xl:w-[60%] text-center xl:text-left">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "#0B2545" }}
            >
              Decidir con datos no es una opción,
              <br />
              es una ventaja competitiva
            </h2>

            <p className="my-6 text-base md:text-lg mx-auto xl:mx-0 font-medium text-[#0B2545]">
              Da el siguiente paso hoy para mejorar tus resultados mañana.
              <br />
              Obtén una respuesta inmediata y una consulta sin compromiso.
            </p>
          </div>

          {/* BUTTON */}
          <div className="w-full xl:w-[40%] flex justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer overflow-hidden px-12 py-7 rounded-full font-bold shadow-lg text-2xl flex items-center gap-4 transition-all duration-300 hover:scale-105"
              style={{
                background: "#FFC857",
                color: "#0B2545",
                borderRadius: "100px",
              }}
            >
              <FaWhatsapp size={38} />
              <span>¡Escríbenos por WhatsApp!</span>
            </a>
          </div>
        </div>
      </section>

      {/* SEPARATOR LINE */}
      <div className="w-full h-px bg-[#0B2545]/10 mt-1"></div>

      <div className="px-10 py-6">
        <div className="flex flex-col items-center gap-4 lg:hidden">
          <div className="flex flex-row items-center justify-center gap-10">
            <a href="https://www.facebook.com/palanted" target="_blank">
              <FaFacebookF
                size={22}
                className="text-[#0B2545] hover:text-[#13315C]"
              />
            </a>

            <img src={logo} alt="Logo" className="w-32 opacity-90" />

            <a
              href="https://www.linkedin.com/in/pa-lanted-s-a-s-55a847398?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAGGoFlYB6AplReIbT_ufwX9-RieE3iiwgJ0"
              target="_blank"
            >
              <FaLinkedinIn
                size={22}
                className="text-[#0B2545] hover:text-[#13315C]"
              />
            </a>
          </div>

          <p className="text-[#0B2545] text-sm font-bold text-center">
            &copy; {new Date().getFullYear()} pa'lantED. Todos los derechos
            reservados.
          </p>
        </div>

        <div className="hidden lg:flex flex-row justify-between items-center">
          <img src={logo} alt="Logo" className="w-32 opacity-90" />

          <p className="text-[#0B2545] text-sm font-bold text-center">
            &copy; {new Date().getFullYear()} pa'lantED. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/palanted" target="_blank">
              <FaFacebookF
                size={22}
                className="text-[#0B2545] hover:text-[#13315C]"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/pa-lanted-s-a-s-55a847398"
              target="_blank"
            >
              <FaLinkedinIn
                size={22}
                className="text-[#0B2545] hover:text-[#13315C]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
