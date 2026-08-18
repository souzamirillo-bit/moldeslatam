import React from 'react';
import { Award, Users, Heart, CheckCircle2, Sparkles } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  return (
    <section id="sobre-creadora" className="py-16 sm:py-24 bg-gray-50/60 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 sm:p-12 shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            
            {/* Creator Photo / Graphic */}
            <div className="w-full md:w-5/12 flex flex-col items-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80"
                    alt="Sandra Ramos - Creadora y Especialista en Mesa Puesta"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-2 bg-[#451e08] text-white rounded-2xl p-3 shadow-lg border border-[#5c2a0b] flex items-center gap-2.5">
                  <Award className="w-6 h-6 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs font-black text-amber-400 block">12 AÑOS</span>
                    <span className="text-[10px] text-amber-200/80 font-medium">De Trayectoria</span>
                  </div>
                </div>
              </div>

              {/* Verified Instructor Badge */}
              <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                <span>Especialista Certificada en Mesa Puesta</span>
              </div>
            </div>

            {/* Creator Bio Content */}
            <div className="w-full md:w-7/12 space-y-5 text-center md:text-left">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                Conoce a tu Mentora
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Sobre la Creadora
                </h3>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1">
                  SANDRA RAMOS
                </h2>
              </div>

              <div className="space-y-3.5 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Sandra es artesana y especialista en mesa puesta elaborada con <strong className="text-gray-900 font-semibold">malla y cordón</strong>.
                </p>
                <p>
                  Enseña a mujeres a crear piezas bonitas y sofisticadas de una manera sencilla, <strong className="text-gray-900 font-semibold">incluso sin experiencia previa en costura o manualidades</strong>.
                </p>
                <p>
                  Con sus moldes listos para imprimir, ayuda a otras artesanas a simplificar el proceso de creación y comenzar a producir sus propias piezas para generar ingresos desde casa.
                </p>
              </div>

              {/* Official Credential Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-black text-sm shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">12 AÑOS DE EXPERIENCIA</span>
                    <span className="text-[11px] text-gray-500">Técnicas probadas y perfeccionadas</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-800 flex items-center justify-center font-black text-sm shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">+5.000 ARTESANAS AYUDADAS</span>
                    <span className="text-[11px] text-gray-500">Comunidad activa en toda la región</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
