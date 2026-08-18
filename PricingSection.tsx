import React from 'react';
import { 
  Zap, 
  Check, 
  X, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: 'basic' | 'complete') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="oferta-precios" className="py-16 sm:py-24 bg-gray-50/60 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
            Oferta por Tiempo Limitado
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Elige la opción que mejor se adapte a tu momento
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Acceso digital inmediato a los moldes listos para imprimir en tamaño real A4.
          </p>
        </div>

        {/* Pricing Cards Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch pt-4">
          
          {/* Card 1: PAQUETE BÁSICO */}
          <div className="bg-white rounded-[28px] border-2 border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-xl text-gray-900 relative">
            <div>
              {/* Header */}
              <div className="text-center pb-6 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  PAQUETE BÁSICO
                </h3>
                
                {/* Price area */}
                <div className="mt-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    DE <span className="line-through text-red-500 font-bold">$19.90</span> POR
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mt-1">
                    $5.90 <span className="text-lg font-bold text-gray-500">USD</span>
                  </div>
                </div>
              </div>

              {/* Lo que recibes */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                  LO QUE RECIBES:
                </h4>
                
                <ul className="space-y-3 text-sm font-semibold text-gray-800">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>+300 Moldes de Mesa Puesta en PDF</span>
                  </li>
                </ul>

                {/* Lo que pierdes box */}
                <div className="mt-6 bg-[#fff5f5] border border-red-200 rounded-2xl p-4 sm:p-5 space-y-3">
                  <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                    <span>⚠️</span>
                    LO QUE PIERDES:
                  </h5>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5 text-gray-700">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>
                        <strong className="text-gray-900 block font-bold">Sin bonos incluidos</strong>
                        <span className="text-gray-500 text-xs">(Solamente en el Paquete Completo)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-gray-700">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>
                        <strong className="text-gray-900 block font-bold">Sin actualizaciones futuras</strong>
                        <span className="text-gray-500 text-xs">(Solamente en el Paquete Completo)</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                id="btn-buy-basic"
                href="https://pay.hotmart.com/O107206318C?off=hedzpb57"
                className="w-full py-4 bg-[#00875A] hover:bg-[#00704a] active:scale-98 text-white font-black rounded-xl text-base sm:text-lg transition-all shadow-md flex items-center justify-center uppercase tracking-wide cursor-pointer text-center"
              >
                ELEGIR BÁSICO
              </a>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Pago 100% Seguro</span>
              </div>
            </div>
          </div>


          {/* Card 2: PAQUETE COMPLETO */}
          <div className="bg-white rounded-[28px] border-[3px] border-[#78350F] p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-gray-900 relative">
            
            {/* Top Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#78350F] text-amber-200 border-2 border-amber-400 font-black text-xs sm:text-sm px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2 whitespace-nowrap">
              <span>⭐</span>
              <span>MÁS ELEGIDO</span>
              <span>⭐</span>
            </div>

            <div>
              {/* Header */}
              <div className="text-center pb-6 border-b border-gray-100 pt-2">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                  PAQUETE COMPLETO
                </h3>
                
                {/* Price area */}
                <div className="mt-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    DE <span className="line-through text-red-500 font-bold">$39.90</span> POR
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mt-1">
                    $9.90 <span className="text-lg font-bold text-gray-500">USD</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-amber-800 uppercase tracking-wider mt-1.5">
                    ECONOMIZA MÁS DE $54.00 USD
                  </div>
                </div>
              </div>

              {/* Lo que recibes */}
              <div className="py-6 space-y-4">
                <ul className="space-y-3 text-sm font-semibold text-gray-800">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>+300 Moldes</strong> de Mesa Puesta en PDF</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span><strong>Acceso de por vida</strong> y Actualizaciones Futuras</span>
                  </li>
                </ul>

                {/* Todos los Bonos Incluidos Box */}
                <div className="mt-4 bg-[#f2fbf5] border-2 border-emerald-400 rounded-2xl p-4 sm:p-5 space-y-2 text-center">
                  <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-900 flex items-center justify-center gap-1.5 mb-2.5">
                    TODOS LOS BONOS INCLUIDOS
                  </h5>
                  <div className="space-y-1.5 text-xs sm:text-sm font-bold text-gray-900">
                    <div className="text-gray-900">
                      Guía de Mallas y Cordones
                    </div>
                    <div className="text-gray-900">
                      Guía de Precios
                    </div>
                    <div className="text-gray-900">
                      Lista Completa de Materiales
                    </div>
                    <div className="text-gray-900">
                      Guía de Impresión en Tamaño Real
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                id="btn-buy-complete"
                href="https://pay.hotmart.com/H107205850J?off=gqkvc7sb"
                className="w-full py-4 bg-[#00875A] hover:bg-[#00704a] active:scale-98 text-white font-black rounded-xl text-base sm:text-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center uppercase tracking-wide cursor-pointer text-center"
              >
                QUIERO COMPLETO
              </a>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garantía de 7 Días
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-gray-500" />
                  Pago 100% Seguro
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
