import React from 'react';
import { 
  Sparkles, 
  Printer, 
  Download, 
  Scissors, 
  Zap,
  Play
} from 'lucide-react';

interface HeroSectionProps {
  onScrollToPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPricing }) => {
  return (
    <section id="hero-section" className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 bg-white overflow-hidden">
      {/* Subtle background decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Tag / Category Badge */}
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Moldes en Tamaño Real
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-4 tracking-tight">
            +300 <span className="text-[#78350F]">Moldes</span> para <span className="text-[#78350F]">Mesa Puesta</span> Listos para Imprimir en Tamaño Real
          </h1>

          {/* Subtitle with smaller font */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Crea y vende piezas elegantes para mesa puesta utilizando malla, yute y cordón, sin necesidad de dibujar, crear moldes desde cero ni saber coser.
          </p>

          {/* Video Notice / CTA */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-xs">
            <Play className="w-3.5 h-3.5 fill-amber-800 text-amber-800" />
            <span>Haz clic en el botón del video para reproducir</span>
          </div>

          {/* Vertical VSL (9:16 format) */}
          <div className="max-w-[320px] sm:max-w-[360px] mx-auto mb-10">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#78350F]/20 border-4 border-stone-100 bg-stone-950">
              <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1219049444?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="mini vsl latam moldes"
                />
              </div>
            </div>
          </div>

          {/* Key Value Points Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto mb-10 text-left">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Printer className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Imprime en Hoja A4</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Scissors className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Sin Dibujar ni Medir</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Zap className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Cero Costura</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Download className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Acceso Inmediato PDF</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="flex items-center justify-center max-w-xl mx-auto">
            <button
              id="hero-main-cta-btn"
              onClick={onScrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#78350F] hover:bg-[#5f2a0b] active:scale-98 text-white font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#78350F]/25 hover:shadow-xl transition-all cursor-pointer"
            >
              <span>QUIERO LOS +300 MOLDES AHORA</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
