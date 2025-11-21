import Header from "../components/Header";
import heroImg from "../assets/front_image.png";

export default function Home() {
  return (
    <>
      <Header />

      <div
        className="relative w-full lg:w-[98%] mx-auto z-0"
        style={{ minHeight: "calc(100vh - 130px)" }}
      >
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
          <section className="container mx-auto px-4 lg:px-14 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* TEXTO */}
              <div className="w-full lg:basis-[45%] pl-0 lg:pl-10 text-center lg:text-left">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                  style={{
                    color: "#0B2545",
                    textShadow: "2px 3px 3px #4DB6AC",
                  }}
                >
                  Toma Mejores Decisiones Con Datos, No Con Supocisiones
                </h1>

                <p className="my-10 md:my-14 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium text-[#0B2545]">
                  En pa'lantED convertimos tus datos en información clara y
                  accionable para mejorar resultados, reducir riestos y aumentar
                  tu competitividad.
                </p>

                <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                  <button
                    className="relative group cursor-pointer overflow-hidden px-8 py-5 rounded-full font-bold shadow-lg text-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "#FFC857",
                      color: "#0B2545",
                      borderRadius: "100px",
                    }}
                  >
                    {/* HALO GIRATORIO */}
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full opacity-100"
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0deg, #4DB6AC 90deg, transparent 180deg)",
                        animation: "spin 4s linear infinite",
                        filter: "blur(12px)",
                      }}
                    ></span>

                    {/* CAPA INTERNA */}
                    <span
                      className="absolute inset-1 rounded-full"
                      style={{ background: "#FFC857" }}
                    ></span>

                    {/* ICONO */}
                    <svg
                      className="relative w-7 h-7 z-10"
                      fill="#0B2545"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 0 0-8.71 15.06L2 22l5.17-1.35A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.06-1.12l-.29-.17-3.07.8.82-2.98-.19-.3A8 8 0 1 1 12 20Zm4.25-5.36c-.23-.12-1.38-.68-1.59-.76s-.37-.12-.53.12-.61.76-.75.92-.28.18-.52.06a6.56 6.56 0 0 1-1.94-1.2 7.22 7.22 0 0 1-1.33-1.66c-.14-.24 0-.37.1-.49s.24-.28.37-.43a1.68 1.68 0 0 0 .24-.4.44.44 0 0 0 0-.43c-.06-.12-.53-1.28-.73-1.76s-.4-.41-.53-.42h-.45a.87.87 0 0 0-.63.3 2.65 2.65 0 0 0-.84 2c0 1.18.86 2.32 1 2.49s1.7 2.6 4.16 3.64a14.83 14.83 0 0 0 1.48.55 3.56 3.56 0 0 0 1.63.1c.5-.07 1.38-.56 1.57-1.1a2 2 0 0 0 .14-1.1c-.06-.1-.21-.16-.44-.28Z" />
                    </svg>

                    {/* TEXTO */}
                    <span className="relative z-10 whitespace-nowrap">
                      ¡Escríbenos por WhatsApp!
                    </span>
                  </button>
                </div>
              </div>

              {/* IMAGEN */}
              <div className="lg:basis-[55%] flex justify-center">
                <img
                  src={heroImg}
                  alt="Imagen representativa con la analítica de datos"
                  style={{
                    animation: "floatUpDown 5s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
