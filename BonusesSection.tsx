import React from 'react';
import { BONUSES_DATA } from '../data/landingData';
import { 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface BonusesSectionProps {
  onScrollToPricing: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section id="bonos-exclusivos" className="py-16 sm:py-24 bg-stone-50/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300/60 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Bonos Exclusivos Incluidos
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Bonos Exclusivos Incluidos
          </h2>

          <p className="text-base sm:text-lg text-[#78350F] font-black tracking-wide uppercase">
            TODO LO QUE NECESITAS PARA IMPULSAR TUS VENTAS DE MESA PUESTA.
          </p>

          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Disponibles sin ningún costo adicional al adquirir el <strong className="text-gray-900 font-bold">Paquete Completo</strong> en esta oferta especial.
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 sm:gap-10 mb-14">
          {BONUSES_DATA.map((bono, index) => {
            return (
              <div
                key={bono.id}
                className="bg-white rounded-3xl border-2 border-stone-200/90 p-6 sm:p-8 shadow-lg shadow-[#78350F]/5 hover:shadow-2xl hover:shadow-[#78350F]/15 hover:border-[#78350F]/50 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Top Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#78350F] group-hover:h-2 transition-all"></div>

                <div>
                  {/* Number & Free Badge Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="px-3.5 py-1 rounded-lg bg-amber-50 text-[#78350F] border border-amber-300/80 font-black text-xs uppercase tracking-wider shadow-xs">
                      Bono 0{index + 1}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 font-black text-xs px-2.5 py-0.5 rounded-full uppercase">
                        Gratis
                      </span>
                      {bono.originalPrice && (
                        <span className="line-through text-xs font-bold text-gray-400">
                          {bono.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bonus Mockup Image with warm brown drop shadow overlay */}
                  {bono.image && (
                    <div className="mb-6 flex items-center justify-center p-4 bg-gradient-to-b from-stone-50 to-amber-50/30 rounded-2xl border border-stone-100 relative overflow-hidden">
                      {/* Ambient brown light layer */}
                      <div className="absolute inset-0 bg-radial from-amber-600/5 via-transparent to-transparent pointer-events-none" />
                      
                      <img
                        src={bono.image}
                        alt={bono.title}
                        referrerPolicy="no-referrer"
                        className="w-full max-h-56 sm:max-h-64 object-contain drop-shadow-[0_14px_22px_rgba(120,53,15,0.22)] group-hover:scale-103 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                      {bono.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {bono.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-gray-100">
                    {bono.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                  <span>Formato Digital Inmediato</span>
                  <span className="text-emerald-700 font-bold">100% Bonificado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Callout Card */}
        <div className="bg-[#451e08] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#5c2a0b] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#78350F] text-amber-200 text-xs font-black px-3 py-1 rounded-md uppercase border border-amber-600/40">
              Ahorro de más de $54.00 USD en bonos
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Llévate los 4 Bonos GRATIS con el Paquete Completo
            </h3>
            <p className="text-amber-100/80 text-sm max-w-2xl">
              Cada guía fue diseñada para ahorrarte tiempo, dinero en materiales y garantizar que tus piezas queden perfectas desde el primer intento.
            </p>
          </div>

          <button
            onClick={onScrollToPricing}
            className="shrink-0 inline-flex items-center gap-2 bg-[#78350F] hover:bg-[#5f2a0b] text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg border border-amber-500/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>VER PAQUETE CON BONOS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
