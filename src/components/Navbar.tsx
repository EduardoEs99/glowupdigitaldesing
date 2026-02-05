import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <div className="bg-linear-to-br from-violet-600 to-fuchsia-600 p-2 rounded-lg group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300">
              <Zap className="text-white w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              GlowUp<span className="text-fuchsia-500">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-md font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-fuchsia-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-white text-black px-6 py-2.5 rounded-full text-md font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-8 px-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-medium text-white hover:text-fuchsia-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-8 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg shadow-violet-600/30"
            onClick={() => setIsOpen(false)}
          >
            Comenzar Proyecto
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
