import Header from "../components/Header";
import heroImg from "../assets/EJEMPLO.JPG";

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
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        />

        <main className="relative overflow-hidden">
          <section className="container mx-auto px-4 lg:px-14 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              {/* TEXTO */}
              <div className="w-full lg:basis-[55%] pl-0 lg:pl-12 text-center lg:text-left">
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
                  En pa'lantED convertimos tus datos en información clara y accionable para mejorar resultados, reducir riestos y aumentar tu competitividad.
                </p>

                <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                  <button
                    className="px-6 py-4 md:px-8 md:py-5 rounded-full font-bold shadow text-lg md:text-2xl"
                    style={{ backgroundColor: "#FFC857", color: "#0B2545" }}
                  >
                    ¡Escríbenos por WhatsApp!
                  </button>
                </div>
              </div>

              {/* IMAGEN */}
              <div className="w-full lg:basis-[45%] flex justify-center lg:pl-10">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="w-[270px] md:w-[330px] lg:w-[420px] rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
