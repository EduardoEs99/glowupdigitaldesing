import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20 border-y border-white/5 bg-surface/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-3xl md:text-5xl font-bold text-gradient mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;