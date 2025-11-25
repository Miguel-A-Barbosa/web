import heroImg from "../assets/front_image.png";
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = "573204133997";
const MESSAGE =
  "¡Hola! He visitado la web de pa'lantED y me interesa saber cómo pueden ayudarme a mejorar la toma de decisiones con datos en mi institución. ¿Podríamos agendar una breve llamada para explorar las soluciones?";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE
)}`;

export default function Hero() {
  return (
    <div
      className="relative w-full lg:w-[98%] mx-auto z-0 animate-fadeInUp-hero"
      style={{ minHeight: "calc(100vh - 130px)" }}
    >
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 10%, #90CAF9 90%, #90CAF9 90%)",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      />

      <main className="relative overflow-hidden">
        <section className="container mx-auto px-4 lg:px-14 py-8 lg:py-20">
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-10">
            {/* LEFT SIDE TEXT */}
            <div className="w-full xl:basis-[45%] pl-0 xl:pl-10 text-center xl:text-left">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
                style={{
                  color: "#0B2545",
                  textShadow: "2px 3px 3px #4DB6AC",
                }}
              >
                Toma Mejores Decisiones Con Datos, No Con
                Suposiciones
              </h1>
              <p className="my-8 md:my-12 text-base md:text-lg max-w-xl mx-auto xl:mx-0 font-medium text-[#0B2545]">
                En pa'lantED convertimos tus datos en
                información clara y accionable para mejorar
                resultados, reducir riesgos y aumentar tu
                competitividad.
              </p>
              {/* BUTTON */}
              <div className="mt-6 md:mt-8 flex justify-center xl:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer overflow-hidden px-6 py-4 sm:px-8 sm:py-5 rounded-full font-bold shadow-lg text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "#FFC857",
                    color: "#0B2545",
                    borderRadius: "100px",
                  }}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, #4DB6AC 90deg, transparent 180deg)",
                      animation: "spin 6s linear infinite",
                      filter: "blur(8px)",
                    }}
                  ></span>
                  <span
                    className="absolute inset-1 rounded-full"
                    style={{ background: "#FFC857" }}
                  ></span>
                  <FaWhatsapp size={32} className="relative z-10" />
                  <span className="relative z-10 whitespace-nowrap">
                    ¡Escríbenos por WhatsApp!
                  </span>
                </a>
              </div>
            </div>
            {/* IMAGE + CARDS */}
            <div className="w-full xl:basis-[55%] relative flex flex-col justify-center items-center py-6 xl:py-0">
              {/* MAIN IMAGE */}
              <img
                src={heroImg}
                alt="Imagen representativa con la analítica de datos"
                className="relative z-10 w-[80%] sm:w-[70%] md:w-[60%] xl:w-full h-auto drop-shadow-2xl"
                style={{ animation: "floatUpDown 5s ease-in-out infinite" }}
              />
              {/* FLOATING CARDS */}
              <div className="hidden md:block">
                {/* CARD 1 */}
                <div className="absolute top-0 left-0 md:top-[5%] md:left-[5%] xl:left-0 z-20 glass-card rounded-2xl p-3 flex items-center gap-3 shadow-sm min-w-[150px]">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-[#0B2545]">
                    Ahorra Tiempo y Recursos
                  </h3>
                </div>
                {/* CARD 2 */}
                <div className="absolute top-[10%] right-0 md:right-[5%] xl:right-0 z-20 glass-card rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm min-w-[220px]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-base text-[#0B2545] font-medium mb-0.5">
                        Retención Estudiantil
                      </p>
                      <h3 className="text-xl font-black text-[#0B2545]">85%</h3>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end whitespace-nowrap">
                    <svg
                      className="w-8 h-5 text-[#4DB6AC]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <p className="text-base font-bold text-[#4DB6AC]">+ 12%</p>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="absolute bottom-0 left-0 md:bottom-[3%] md:left-[10%] z-20 glass-card rounded-2xl p-3 px-5 flex items-center gap-4 shadow-sm">
                  <div className="w-11 h-11 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2545]">
                      Decisiones Basadas en Datos
                    </h3>
                    <p className="text-base text-[#0B2545]">
                      Identificación temprana de estudiantes en riesgo
                    </p>
                  </div>
                </div>
              </div>
              {/* STACKED CARDS */}
              <div className="flex flex-col gap-4 mt-8 w-full px-4 md:hidden">
                {/* CARD 1 */}
                <div className="glass-card w-full rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-base font-black text-[#0B2545]">
                    Ahorra Tiempo y Recursos
                  </h3>
                </div>
                {/* CARD 2 */}
                <div className="glass-card w-full rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0B2545]">
                        Retención Estudiantil
                      </p>
                      <h3 className="text-lg font-black text-[#0B2545]">85%</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-[#4DB6AC]">+12%</p>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="glass-card w-full rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#0B2545] flex items-center justify-center text-[#4DB6AC]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B2545]">
                      Decisiones Basadas en Datos
                    </h3>
                    <p className="text-sm text-[#0B2545]">
                      Identificación temprana de estudiantes en riesgo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}