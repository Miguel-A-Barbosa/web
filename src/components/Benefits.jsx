import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const cards = [
  { url: "src/assets/card_1.jpg", title: "Mejores Decisiones", id: 1 },
  { url: "src/assets/card_2.jpg", title: "Predicción Fiable", id: 2 },
  { url: "src/assets/card_3.jpg", title: "Procesos Inteligentes", id: 3 },
  { url: "src/assets/card_4.jpg", title: "Eficiencia Máxima", id: 4 },
  { url: "src/assets/card_5.jpg", title: "Resultados Claros", id: 5 }
];

const Scroll = () => <HorizontalScrollCarousel />;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState("0px");

  const { scrollYProgress } = useScroll({ target: targetRef });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const calculateScroll = () => {
      if (!scrollContainerRef.current) return;

      const totalWidth = scrollContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // --- AJUSTE AQUÍ ---
      // Aumentamos el número negativo final (buffer). 
      // Antes era -50, ahora -250 para empujar más el final hacia la vista.
      const scrollAmount = -(totalWidth - viewportWidth) - 50;

      setMaxScroll(`${scrollAmount}px`);
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", maxScroll]);

  return (
    <section
      ref={targetRef}
      // Aumenté ligeramente la altura en md y xl para dar más recorrido de scroll
      className="relative bg-[#FFFFFF] h-[320vh] md:h-[350vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        <div 
          className="relative w-full lg:w-[98%] h-[95%] mx-auto overflow-hidden rounded-[15px] flex flex-col"
          style={{
            background: "radial-gradient(circle, #ffffff, #f3f3fe, #e3e8fd, #cfdefd, #b7d5fc, #abd1fb, #9ecefa, #90caf9, #90caf9, #90caf9)"
          }}
        >
          {/* Contenedor de Textos */}
          <div className="flex flex-col items-center px-6 md:px-14 mt-10 md:mt-20 z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0B2545]">
              Beneficios
            </h2>

            <p className="mt-6 max-w-4xl text-lg md:text-xl text-[#0B2545] font-medium leading-relaxed">
              Estas son algunas de las ventajas clave que tu institución obtiene al integrar
              soluciones basadas en datos, desde decisiones más precisas hasta procesos
              avanzados impulsados por inteligencia.
            </p>
          </div>

          {/* Contenedor del Carrusel Horizontal */}
          <div className="flex items-center h-full pl-6 md:pl-14">
            <motion.div
              ref={scrollContainerRef}
              style={{ x }}
              // --- AJUSTE AQUÍ ---
              // Agregué 'pr-20 md:pr-32' (Padding Right)
              // Esto crea espacio físico invisible al final de la fila de cards
              className="flex gap-6 pr-20 md:pr-32"
            >
              {cards.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[400px] w-[85vw] sm:h-[450px] sm:w-[450px] shrink-0 overflow-hidden bg-[#4DB6AC] rounded-xl shadow-lg">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 z-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

      <div className="absolute inset-0 z-10 grid place-content-center"> 
        <p className="p-4 text-3xl sm:text-4xl font-black text-white backdrop-blur-sm bg-white/10 rounded-lg text-center border border-white/20 mx-4 shadow-xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Scroll;