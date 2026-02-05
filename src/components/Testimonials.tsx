import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-linear-to-b from-transparent to-violet-900/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Lo que dicen <span className="text-fuchsia-500">nuestros clientes</span>
          </h2>
          <p className="text-gray-400">Resultados reales para empresas reales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-[10px] border border-white/5 p-6 md:p-8 rounded-2xl relative hover:bg-white/10 transition-colors group">
              <Quote className="absolute top-6 right-6 text-white/5 group-hover:text-white/10 transition-colors w-10 h-10 md:w-12 md:h-12" />
              <p className="text-gray-300 mb-6 italic text-sm md:text-base leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-full blur-[2px] opacity-70"></div>
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border border-white/20 relative z-10 object-cover"
                    />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">{t.name}</h4>
                  <p className="text-xs text-fuchsia-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
