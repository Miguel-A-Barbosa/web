import React from 'react';
import { Cloud, Zap, Shield, Globe } from 'lucide-react'; // Iconos para las tarjetas

// Datos de las tarjetas de soluciones
const solutionsData = [
  {
    id: 1,
    title: "Infraestructura Cloud Escalable",
    description: "Diseñamos y desplegamos arquitecturas en la nube que crecen contigo, garantizando alta disponibilidad y rendimiento óptimo.",
    color: "bg-[#007ACC]", // Azul moderno
    icon: Cloud,
  },
  {
    id: 2,
    title: "Optimización de la Experiencia (UX)",
    description: "Fusionamos la estética visual con la usabilidad intuitiva para crear interfaces que deleitan a tus usuarios y mejoran las conversiones.",
    color: "bg-[#E84855]", // Coral vibrante
    icon: Zap,
  },
  {
    id: 3,
    title: "Ciberseguridad y Cumplimiento",
    description: "Blindamos tus activos digitales con soluciones de seguridad avanzadas y aseguramos el cumplimiento de normativas internacionales.",
    color: "bg-[#00BFA5]", // Verde Menta
    icon: Shield,
  },
  {
    id: 4,
    title: "Estrategias de Marketing Digital",
    description: "Implementamos campañas de SEO/SEM y redes sociales basadas en datos para maximizar tu alcance y el retorno de la inversión.",
    color: "bg-[#FFB300]", // Ámbar cálido
    icon: Globe,
  },
];

// Componente para una única tarjeta de solución
const SolutionCard = ({ solution }) => {
  const { id, title, description, color, icon: Icon } = solution;
  const numberText = id < 10 ? `0${id}` : `${id}`;
  const shadowColor = color.replace('bg-', 'shadow-'); // Ej: shadow-[#007ACC]/50

  return (
    <div 
      className={`relative p-8 bg-white rounded-xl overflow-hidden shadow-lg 
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-2xl ${shadowColor}/50
                  border border-gray-100`}
    >
      
      {/* Círculo de fondo y número (posición absoluta) */}
      <div className={`w-28 h-28 ${color} rounded-full absolute -right-6 -top-6`}>
        <p className="absolute bottom-7 left-8 text-white text-3xl font-extrabold opacity-90">
          {numberText}
        </p>
      </div>

      {/* Icono */}
      <div className={`w-12 h-12 p-2 ${color} rounded-lg text-white mb-4 shadow-md`}>
        {Icon && <Icon size={32} />}
      </div>
      
      {/* Contenido de la tarjeta */}
      <h3 className="font-extrabold text-xl text-[#0B2545] mt-4 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-6">
        {description}
      </p>

      {/* Placeholder para un botón o enlace "Ver más" */}
      <button 
        className={`mt-4 text-sm font-semibold text-white px-4 py-2 rounded-lg 
                    ${color} transition-colors duration-200 
                    hover:bg-opacity-80`}
      >
        Descubre más
      </button>

    </div>
  );
};

// Componente principal de la sección Soluciones
const Solutions = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Columna de Título y Párrafo (Izquierda) */}
          <div className="lg:col-span-4 self-start sticky top-0 lg:pt-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2545] mb-4">
              Nuestras Soluciones Clave
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Ofrecemos una suite completa de servicios digitales, desde la base técnica hasta la estrategia de crecimiento, impulsando tu negocio al futuro.
            </p>
          </div>
          
          {/* Columna de Cards (Derecha) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {solutionsData.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
              {/* Añadimos un par de tarjetas extra para llenar el grid en el diseño de 4 columnas */}
              <div className="hidden xl:block"></div> 
              <div className="hidden xl:block"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Solutions;