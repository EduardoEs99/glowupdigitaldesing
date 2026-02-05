import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Soluciones digitales 360° diseñadas meticulosamente para el crecimiento exponencial de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-6 md:p-8 rounded-2xl backdrop-blur-[10px] border bg-surface/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] border-white/5 hover:border-white/20"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-surface flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${service.color}`}>
                <service.icon size={24} className="md:w-7 md:h-7 group-hover:animate-icon-wiggle" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
