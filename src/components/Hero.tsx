import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4">
      {/* Background Blobs - Optimized for mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-10 w-64 h-64 md:w-96 md:h-96 bg-violet-600/30 rounded-full mix-blend-screen filter blur-[80px] md:blur-[128px] animate-blob"></div>
        <div className="absolute top-1/3 -right-10 w-64 h-64 md:w-96 md:h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[80px] md:blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[80px] md:blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 md:mb-8 animate-float shadow-lg shadow-violet-500/10">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs md:text-sm font-medium text-gray-200">La agencia digital del futuro</span>
        </div>

        {/* Main Heading - Responsive sizes */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
          Tu Marca Merece <br className="hidden md:block" />
          <span className="text-gradient drop-shadow-sm">Brillar Más.</span>
        </h1>

        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          Diseñamos experiencias digitales que conectan, convierten y cautivan. 
          Llevamos tu negocio al siguiente nivel con tecnología de punta y creatividad sin límites.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href="#services"
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-lg shadow-white/10"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-violet-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2">
              Ver Servicios <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-4 glass-panel text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all w-full sm:w-auto border border-white/20 hover:border-white/40"
          >
            Agendar Reunión
          </a>
        </div>
      </div>

      {/* Decorative Grid Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;