import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 md:pt-24 pb-8 bg-surface relative overflow-hidden">
        {/* Glow effect for footer */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-violet-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Contact Info */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Empecemos a trabajar</h2>
            <p className="text-gray-400 mb-8 text-base md:text-lg">
              ¿Listo para hacer brillar tu marca? Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
            </p>

            <div className="space-y-6 inline-block text-left">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform group-hover:bg-violet-500/10">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Email</p>
                  <a href="mailto:hola@glowupdigital.cl" className="text-white hover:text-fuchsia-400 transition-colors text-sm md:text-base">hola@glowupdigital.cl</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform group-hover:bg-cyan-500/10">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Teléfono</p>
                  <a href="tel:+56912345678" className="text-white hover:text-fuchsia-400 transition-colors text-sm md:text-base">+56 9 1234 5678</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform group-hover:bg-fuchsia-500/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Ubicación</p>
                  <p className="text-white text-sm md:text-base">Santiago, Chile</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 mt-10">
              <a
                href="#"
                className="
                  w-10 h-10 rounded-full
                  bg-white/5
                  flex items-center justify-center
                  text-white

                  hover:-translate-y-1
                  transition-transform

                  hover:bg-[linear-gradient(180deg,#405de6_0%,#5851db_12%,#833ab4_25%,#c13584_40%,#e1306c_55%,#fd1d1d_70%,#f56040_82%,#f77737_90%,#fcaf45_96%,#ffdc80_100%)]
                "
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] transition-all hover:-translate-y-1 text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1778F2] transition-all hover:-translate-y-1 text-white">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="order-1 lg:order-2 bg-white/5 backdrop-blur-[10px] p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl shadow-violet-900/10">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-gray-400 ml-1">Nombre</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-gray-400 ml-1">Empresa</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" placeholder="Tu negocio" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm text-gray-400 ml-1">Email</label>
                <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm" placeholder="tucorreo@ejemplo.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm text-gray-400 ml-1">Mensaje</label>
                <textarea rows={4} className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none text-sm" placeholder="Cuéntanos tu idea..."></textarea>
              </div>

              <button className="w-full bg-linear-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3 md:py-4 rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 text-center md:text-left">
          <p>© 2024 Glow Up Digital. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
