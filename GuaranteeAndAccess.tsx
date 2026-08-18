import React from 'react';
import { Lock, Mail, Smartphone, Infinity as InfinityIcon, ShieldCheck } from 'lucide-react';

interface GuaranteeAndAccessProps {
  onScrollToPricing: () => void;
}

export const GuaranteeAndAccess: React.FC<GuaranteeAndAccessProps> = ({ onScrollToPricing }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Immediate Access Banner */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Entrega Automatizada
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Acceso inmediato después de la compra
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Después de la confirmación del pago, recibirás las instrucciones de acceso directamente en tu correo electrónico y WhatsApp.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center text-center hover:border-orange-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Compra 100% Segura
            </h3>
            <p className="text-xs text-gray-500">
              Tus datos están protegidos con encriptación SSL de 256 bits.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center text-center hover:border-orange-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Acceso Digital Inmediato
            </h3>
            <p className="text-xs text-gray-500">
              Descarga tus archivos en PDF y visualízalos al instante sin esperas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center text-center hover:border-orange-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Correo y WhatsApp
            </h3>
            <p className="text-xs text-gray-500">
              Envío automático a tu e-mail y mensaje directo a tu celular.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col items-center text-center hover:border-orange-200 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <InfinityIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">
              Acceso de por Vida
            </h3>
            <p className="text-xs text-gray-500">
              Garantizado en el Paquete Completo, con todas las futuras actualizaciones.
            </p>
          </div>

        </div>

        {/* 7 Days Guarantee Box */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl border-2 border-green-300 p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-20 h-20 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center shrink-0 border border-green-200">
            <ShieldCheck className="w-10 h-10 text-green-700" />
          </div>

          <div className="space-y-2 text-center md:text-left flex-1">
            <div className="inline-block bg-green-100 text-green-900 text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
              7 Días de Garantía Incondicional
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
              Pruébalo sin ningún riesgo
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Si al acceder al material sientes que los moldes no son lo que esperabas o no se adaptan a tu taller, tienes 7 días completos para solicitar el reembolso total de tu dinero sin preguntas ni complicaciones.
            </p>
          </div>

          <button
            onClick={onScrollToPricing}
            className="shrink-0 bg-[#78350F] hover:bg-[#5f2a0b] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Asegurar mi Acceso
          </button>
        </div>

      </div>
    </section>
  );
};
