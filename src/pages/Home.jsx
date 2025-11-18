import Header from "../components/Header";
import heroImg from "../assets/EJEMPLO.JPG";

export default function Home() {
  return (
    <>
      <Header />

      {/* WRAPPER DEL FONDO + CONTENIDO */}
      <div
        className="relative w-full lg:w-[98%] mx-auto z-0"
        style={{ minHeight: "calc(100vh - 130px)" }}
      >
        {/* FONDO RESPONSIVE QUE CRECE CON EL CONTENIDO */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, #FFFFFF 10%, #90CAF9 90%, #90CAF9 90%)",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        />

        {/* HERO SECCION */}
        <main className="relative overflow-hidden">
          <section className="container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* TEXTO IZQUIERDA */}
              <div className="lg:w-1/2">
                <h1
                  className="text-5xl lg:text-6xl font-extrabold leading-tight"
                  style={{
                    color: "#0B2545",
                    textShadow: "2px 3px 3px #4DB6AC",
                  }}
                >
                  Toma Mejores Decisiones Con Datos, No Con Supocisiones
                </h1>

                <p className="mt-6 text-lg max-w-xl font-medium text-[#0B2545]">
                  En pa'lantED convertimos tus datos en información clara y
                  accionable para mejorar resultados, reducir riesgos y aumentar
                  tu competitividad.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <button
                    className="px-6 py-3 rounded-full font-medium shadow"
                    style={{ backgroundColor: "#FFC857", color: "#0B2545" }}
                  >
                    ¡Escríbenos por WhatsApp!
                  </button>
                </div>
              </div>

              {/* IMAGEN DERECHA */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="w-[360px] lg:w-[420px] rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
