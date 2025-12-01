import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const cardsData = [
  {
    url: "src/assets/card_1.jpg",
    title: "Mejores Decisiones",
    id: 1,
    description:
      "Toma acciones estratégicas basadas en análisis que identifican riesgo estudiantil y priorizan a quienes más lo necesitan."
  },
  {
    url: "src/assets/card_2.jpg",
    title: "Predicción Fiable",
    id: 2,
    description:
      "Anticípate a la deserción con modelos que detectan patrones de riesgo y te permiten intervenir antes de que ocurra."
  },
  {
    url: "src/assets/card_3.jpg",
    title: "Procesos Inteligentes",
    id: 3,
    description:
      "Automatiza seguimientos, reportes y análisis clave para dedicar más tiempo a intervenciones de impacto."
  },
  {
    url: "src/assets/card_4.jpg",
    title: "Eficiencia Máxima",
    id: 4,
    description:
      "Optimiza recursos enfocándolos en los estudiantes y áreas donde realmente generan resultados."
  },
  {
    url: "src/assets/card_5.jpg",
    title: "Resultados Claros",
    id: 5,
    description:
      "Visualiza datos complejos de forma simple para comprender riesgos, avances y oportunidades en segundos."
  }
];

const Benefits = () => <HorizontalScrollCarousel />;

{ /* ANIMATED TITLE AND TEXT */ }
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState("0px");
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });

  { /* SCROLL LOGIC*/ }
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (cardsData.length - 1));
    setActiveIndex(newIndex);
  });

  useEffect(() => {}, []);

  useEffect(() => {
    const calculateScroll = () => {
      if (!scrollContainerRef.current) return;
      const totalWidth = scrollContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollAmount = -(totalWidth - viewportWidth);
      setMaxScroll(`${scrollAmount}px`);
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0px", maxScroll]);

  return (
    <section
      id="beneficios"
      ref={targetRef}
      className="relative bg-[#FFFFFF] h-[320vh] md:h-[350vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          className="relative w-full lg:w-[98%] h-[95%] mx-auto overflow-hidden rounded-[15px] flex flex-col"
          style={{
            background:
              "linear-gradient(to top, #90CAF9 0%, #FFFFFF 15%, #FFFFFF 65%, #90CAF9 100%)",
          }}
        >
          {/* ANIMATED CONTAINER */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center px-6 md:px-14 mt-10 md:mt-20 z-10 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0B2545]">
              Beneficios
            </h2>
            <p className="mt-6 max-w-4xl text-lg md:text-xl text-[#0B2545] font-medium leading-relaxed">
              Transforma el caos de datos en decisiones estratégicas de manera
              ágil con soluciones de analítica personalizadas.
            </p>
          </motion.div>

          <div className="flex items-center h-full pl-6 md:pl-14">
            <motion.div
              ref={scrollContainerRef}
              style={{ x }}
              className="flex gap-6 pr-20 md:pr-32"
            >
              {cardsData.map((card, index) => (
                <Card
                  card={card}
                  key={card.id}
                  isActive={activeIndex === index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, isActive }) => {
  return (
    <div
      className={`
        relative h-[400px] w-[85vw] sm:h-[450px] sm:w-[450px] 
        shrink-0 overflow-hidden bg-[#4DB6AC] rounded-xl shadow-lg 
        transition-all duration-500
        ${isActive ? "shadow-2xl scale-[1.02]" : "shadow-lg scale-100"} 
      `}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`
          absolute inset-0 z-0 transition-transform duration-700 
          ${isActive ? "scale-110" : "scale-100"}
        `}
      />

      {/* DARK OVERLAY */}
      <div
        className={`
          absolute inset-0 z-0 transition-colors duration-500
          ${isActive ? "bg-black/50" : "bg-black/20"}
        `}
      />

      {/* GLASSMORPHISM CONTAINER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {/* GLASS BOX */}
        <div
          className={`
            relative w-[90%] 
            backdrop-blur-md border rounded-xl overflow-hidden
            transition-all duration-500 ease-in-out
            ${
              isActive
                ? "bg-white/20 shadow-2xl border-white/40"
                : "bg-white/10 shadow-xl border-white/20"
            }
          `}
        >
          <div className="p-5 flex flex-col justify-center items-center text-center">
            {/* TITLE */}
            <h3
              className={`
                text-3xl sm:text-4xl font-black text-[#FFC857] drop-shadow-md 
                transition-transform duration-300
                ${isActive ? "-translate-y-1" : ""} 
              `}
              style={{ textShadow: "-2px 2px 4px rgba(0,0,0,0.6)" }}
            >
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <div
              className={`
                grid transition-all duration-500 ease-out
                ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-white text-base sm:text-lg font-medium leading-relaxed drop-shadow-sm">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
