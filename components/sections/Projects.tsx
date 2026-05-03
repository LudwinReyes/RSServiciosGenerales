'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { MapPin, ArrowRight, Zap, Target, Server } from 'lucide-react';
import { projectHeaderVariants, useStackedCards } from '@/animations/projectsMotion';

const projectData = [
  {
    id: 1,
    title: 'Modernización Eléctrica de Planta Pesquera',
    location: 'Chimbote, Perú',
    description: 'Instalación integral de tableros de transferencia automática, malla a tierra y diseño de media tensión bajo normativas estrictas de seguridad.',
    accentColor: 'text-brand-blue',
    borderColor: 'group-hover:border-brand-blue',
    buttonColor: 'border-slate-700 hover:border-brand-blue text-slate-300 hover:text-white',
    icon: Zap
  },
  {
    id: 2,
    title: 'Campamento Minero - Estructuras Modulares',
    location: 'Cajamarca, Perú',
    description: 'Fabricación y despliegue rápido en drywall con estructuras metálicas termoaislantes. Preparado para condiciones climáticas extremas.',
    accentColor: 'text-brand-blue',
    borderColor: 'group-hover:border-brand-blue',
    buttonColor: 'border-slate-700 hover:border-brand-blue text-slate-300 hover:text-white',
    icon: Target
  },
  {
    id: 3,
    title: 'Centro Corporativo Logístico',
    location: 'Callao, Perú',
    description: 'Implementación de cableado estructurado certificado, red de videovigilancia CCTV y climatización industrial para naves de almacenamiento.',
    accentColor: 'text-brand-red',
    borderColor: 'group-hover:border-brand-red',
    buttonColor: 'border-brand-red bg-brand-red focus:ring-brand-red text-white hover:opacity-90',
    icon: Server
  }
];

function ProjectCard({ project, index, progress, totalCards }: any) {
  const { scale, opacity } = useStackedCards(progress, index, totalCards);
  const Icon = project.icon;

  return (
    <div className="sticky top-0 w-full h-[100vh] flex flex-col justify-center items-center py-6 sm:py-12 md:py-24 px-4 sm:px-6">
      <motion.div 
        style={{ scale, opacity }}
        className={`group relative w-full max-w-5xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto sm:overflow-hidden bg-deep-slate border border-slate-800 ${project.borderColor} transition-colors duration-500 rounded-3xl p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-16 shadow-2xl origin-top scrollbar-hide`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-black/80 to-transparent pointer-events-none" />
        
        {/* Left Column */}
        <div className="relative z-10 w-full md:w-5/12 flex flex-col gap-4 sm:gap-5 lg:gap-6 shrink-0">
          <div className="flex items-center gap-3">
             <div className={`p-2 sm:p-3 bg-onyx-black border border-slate-800 rounded-xl ${project.accentColor}`}>
                <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5}/>
             </div>
             <span className={`font-heading text-[10px] sm:text-xs uppercase tracking-widest font-bold ${project.accentColor}`}>
               Caso de Éxito 0{index + 1}
             </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading text-white uppercase leading-[1.05] tracking-tight">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 text-slate-400 font-body text-xs sm:text-sm tracking-wider uppercase mt-2 md:mt-4 lg:mt-auto lg:pt-4">
             <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
             <span>{project.location}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative z-10 w-full md:w-7/12 flex flex-col justify-center gap-6 sm:gap-8 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8 lg:pl-12 shrink-0">
           <div className="space-y-3 sm:space-y-4">
             <h4 className="font-heading text-slate-500 text-[10px] sm:text-sm tracking-[0.2em] uppercase border-l-2 border-slate-700 pl-2">
               Solución Operativa
             </h4>
             <p className="font-body text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
               {project.description}
             </p>
           </div>
           
           <div className="mt-2 sm:mt-0">
             <button className={`inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border font-heading text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-deep-slate ${project.buttonColor}`}>
               <span>Ver Detalles Técnicos</span>
               <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="relative w-full bg-onyx-black pt-16 pb-8 sm:pt-24 sm:pb-32">
       {/* Structural background lines */}
       <div className="absolute top-0 bottom-0 left-0 right-0 z-0 pointer-events-none flex justify-center gap-8 sm:gap-24 lg:gap-48 opacity-[0.02]">
         <div className="w-[1px] h-full bg-white"></div>
         <div className="w-[1px] h-full bg-white"></div>
         <div className="hidden lg:block w-[1px] h-full bg-white"></div>
       </div>

       {/* Pinned Title/Header at the top of the section */}
       <div className="relative z-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 lg:mb-12">
          <motion.div
            variants={projectHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start lg:items-center text-left lg:text-center max-w-3xl lg:mx-auto"
          >
             <span className="text-[10px] sm:text-xs text-brand-blue font-bold tracking-[0.3em] uppercase mb-4 block border-l-2 lg:border-l-0 lg:border-b-2 border-brand-blue pl-2 lg:pl-0 lg:pb-2">
               Portafolio Corporativo
             </span>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white uppercase leading-[0.9] tracking-tight">
                Ejecución Probada. <br/>
                <span className="text-slate-500 block mt-2">Infraestructura Real.</span>
             </h2>
          </motion.div>
       </div>

       {/* Stacking Cards Container - relies on the children heights to extend the scroll area */}
       <div ref={containerRef} className="relative z-10 w-full pb-16 lg:pb-32">
          {projectData.map((project, i) => (
             <ProjectCard 
               key={project.id} 
               project={project} 
               index={i} 
               progress={scrollYProgress} 
               totalCards={projectData.length} 
             />
          ))}
       </div>
    </section>
  );
}
