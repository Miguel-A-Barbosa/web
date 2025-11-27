import { TrendingUpDown, Palette, CalendarCog,  UserRoundSearch } from "lucide-react";

const CUSTOM_COLORS = {
  1: {
    value: "#4DB6AC",
    bg: "bg-[#4DB6AC]",
    shadow: "shadow-[#4DB6AC]",
    rgb: "77, 182, 172",
  },
  2: {
    value: "#1A237E",
    bg: "bg-[#1A237E]",
    shadow: "shadow-[#1A237E]",
    rgb: "26, 35, 126",
  },
  3: {
    value: "#90CAF9",
    bg: "bg-[#90CAF9]",
    shadow: "shadow-[#90CAF9]",
    rgb: "144, 202, 249",
  },
  4: {
    value: "#FFC857",
    bg: "bg-[#FFC857]",
    shadow: "shadow-[#FFC857]",
    rgb: "255, 200, 87",
  },
};

const solutionsData = [
  {
    id: 1,
    title: "Sistema Predictivo de Deserción Temprana",
    description:
      "Identifica de forma anticipada a los estudiantes con mayor probabilidad de abandonar, analizando múltiples variables académicas, comportamentales y contextuales para activar intervenciones antes de que el riesgo escale.",
    icon: TrendingUpDown,
    ...CUSTOM_COLORS[1],
  },
  {
    id: 2,
    title: "Dashboards Interactivos y Personalizados",
    description:
      "Visualizaciones claras, estéticas y filtrables que resumen el estado de la permanencia, muestran tendencias clave y permiten profundizar en los datos sin complejidad técnica. Facilitan decisiones rápidas basadas en evidencia.",
    icon: Palette,
    ...CUSTOM_COLORS[2],
  },
  {
    id: 3,
    title: "Optimización de Recursos y Tiempo Institucional",
    description:
      "Reduce horas de trabajo manual con procesos de análisis y consolidación automatizados. Permite dedicar más tiempo a las acciones de permanencia en lugar de a la limpieza de datos, informes o cálculos repetitivos.",
    icon: CalendarCog,
    ...CUSTOM_COLORS[3],
  },
  {
    id: 4,
    title: "Perfilado y Clasificación Estratégica de Estudiantes",
    description:
      "Combina segmentación y análisis de motivos para revelar grupos de riesgo y sus causas más probables. Ayuda a entender quién está en riesgo y por qué, facilitando intervenciones más precisas y enfocadas.",
    icon: UserRoundSearch,
    ...CUSTOM_COLORS[4],
  },
];

const SolutionCard = ({ solution }) => {
  const { id, title, description, bg, rgb, icon: Icon } = solution;
  const numberText = id < 10 ? `0${id}` : `${id}`;

  return (
    <div
      style={{ "--color-rgb": rgb }}
      className={`
        relative p-8 bg-white rounded-xl overflow-hidden shadow-xl
        transition-all duration-300 ease-in-out cursor-pointer
        border border-gray-100 
        
        hover:scale-[1.03]
        hover:shadow-[0_0_25px_0_rgba(var(--color-rgb),0.7)]
        
        group 
      `}
    >
      {/* CIRCLE */}
      <div
        className={`
          w-28 h-28 ${bg} rounded-3xl absolute -right-6 -top-6 
          transition-shadow duration-300
        `}
      >
        <p className="absolute bottom-7 left-8 text-white text-3xl font-extrabold opacity-90">
          {numberText}
        </p>
      </div>

      {/* ICON */}
      <div
        className={`w-12 h-12 p-2 ${bg} rounded-lg text-white mb-4 shadow-md`}
      >
        {Icon && <Icon size={32} />}
      </div>

      {/* CONTENT */}
      <h3 className="font-extrabold text-xl text-[#0B2545] mt-4 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-6">{description}</p>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* TITLE AND TEXT */}
          <div
            className="
            lg:col-span-4 
            /* Flexbox para centrar contenido verticalmente */
            lg:flex lg:flex-col lg:justify-center 
            /* Se asegura de que la altura de esta columna sea igual a la del contenido de la derecha */
            lg:min-h-full
          "
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#0B2545] mb-4">
                Nuestras Soluciones Clave
              </h2>
              <p className="text-lg text-[#0B2545] leading-relaxed max-w-lg">
                Impulsa la permanencia estudiantil con herramientas creadas para
                identificar riesgos, optimizar intervenciones y transformar tus
                datos en acciones precisas y oportunas.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionsData.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
