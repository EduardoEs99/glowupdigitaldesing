import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleCards((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const indexAttr = entry.target.getAttribute('data-index');
            const index = indexAttr ? Number(indexAttr) : -1;
            if (index >= 0) next.add(index);
          });
          return next;
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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
          {SERVICES.map((service, index) => {
            const isActive = activeCard === index;
            return (
            <div 
              key={service.id}
              data-index={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => setActiveCard(isActive ? null : index)}
              className={`group p-6 md:p-8 rounded-2xl backdrop-blur-[10px] border bg-surface/40 transition-all duration-700 ease-out border-white/5 ${
                isActive ? 'bg-white/5 -translate-y-2 shadow-[0_0_30px_rgba(139,92,246,0.15)] border-white/20 md:bg-surface/40 md:translate-y-0 md:shadow-none md:border-white/5' : ''
              } md:hover:bg-white/5 md:hover:-translate-y-2 md:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] md:hover:border-white/20 ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-surface flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${service.color}`}>
                <service.icon
                  size={24}
                  className={`md:w-7 md:h-7 ${isActive ? 'animate-icon-wiggle' : ''} md:group-hover:animate-icon-wiggle`}
                />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 text-white transition-all ${
                isActive ? 'text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300 md:text-white md:bg-none' : ''
              } md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-linear-to-r md:group-hover:from-white md:group-hover:to-gray-300`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Services;
