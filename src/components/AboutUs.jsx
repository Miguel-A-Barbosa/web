import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const titleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};


const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          
          {/* CONTENT */}
          <motion.div 
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="md:order-1 order-2 max-w-lg"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos especialistas en analítica, predicción y visualización
              orientada al sector educativo, dedicados a transformar datos
              institucionales en decisiones estratégicas. Combinamos rigor
              técnico con un enfoque humano para identificar riesgos, optimizar
              procesos y apoyar a cada institución en la toma de decisiones
              informadas. Nuestro trabajo integra modelado predictivo, análisis
              profundo y dashboards intuitivos que permiten comprender el
              presente, anticipar el futuro y actuar con precisión.
            </p>
          </motion.div>

          {/* TITLE */}
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="md:order-2 order-1 md:text-right max-w-lg"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0B2545] leading-tight">
              ¿Quiénes <br /> Somos <br /> Nosotros?
            </h2>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
