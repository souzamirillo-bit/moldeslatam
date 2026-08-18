import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface PolicyModalProps {
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    terms: {
      title: 'Términos y Condiciones de Uso',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            Bienvenida/o a la plataforma digital de <strong>+300 Moldes para Mesa Puesta en Malla</strong> de Sandra Ramos. Al adquirir o utilizar cualquiera de nuestros contenidos digitales, aceptas los siguientes términos:
          </p>
          <h4 className="font-bold text-stone-900">1. Licencia de Uso</h4>
          <p>
            Los moldes y archivos PDF adquiridos otorgan una licencia personal y comercial para la creación física de productos artesanales. Tienes total libertad para vender las piezas elaboradas con nuestros moldes. Queda estrictamente prohibida la reventa, redistribución o compartición no autorizada de los archivos digitales en PDF.
          </p>
          <h4 className="font-bold text-stone-900">2. Entrega Digital</h4>
          <p>
            Todos los materiales se entregan en formato digital inmediatamente después de procesado el pago a través de los datos de contacto suministrados por el comprador.
          </p>
          <h4 className="font-bold text-stone-900">3. Propiedad Intelectual</h4>
          <p>
            Todos los derechos de autor de las guías, diagramas y metodologías pertenecen a Sandra Ramos y Moldes para Mesa Puesta © 2026.
          </p>
        </div>
      )
    },
    privacy: {
      title: 'Política de Privacidad y Protección de Datos',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            Tu privacidad y la seguridad de tus datos son nuestra prioridad absoluta.
          </p>
          <h4 className="font-bold text-stone-900">1. Datos Recopilados</h4>
          <p>
            Únicamente solicitamos nombre, correo electrónico y número de WhatsApp con el exclusivo fin de enviar el acceso a los materiales comprados y brindar soporte al cliente.
          </p>
          <h4 className="font-bold text-stone-900">2. Seguridad</h4>
          <p>
            No almacenamos información financiera sensible (como números de tarjetas de crédito). Todas las transacciones son procesadas mediante pasarelas de pago seguras con cifrado SSL de 256 bits.
          </p>
          <h4 className="font-bold text-stone-900">3. No Spam</h4>
          <p>
            Nunca venderemos ni cederemos tus datos a terceros. Puedes solicitar la modificación o eliminación de tus datos en cualquier momento contactando a nuestro soporte.
          </p>
        </div>
      )
    },
    refund: {
      title: 'Política de Garantía y Reembolso (7 Días)',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-900 font-medium">
            Respaldamos la calidad de nuestros +300 Moldes con una <strong>Garantía Incondicional de 7 Días</strong>.
          </div>
          <h4 className="font-bold text-stone-900">1. Plazo para Solicitar Reembolso</h4>
          <p>
            Dispones de 7 días naturales a partir de la fecha y hora de tu compra para revisar el material. Si por cualquier motivo sientes que el producto no cumple tus expectativas, puedes solicitar la devolución del 100% de tu dinero.
          </p>
          <h4 className="font-bold text-stone-900">2. Proceso de Solicitud</h4>
          <p>
            Basta con enviar un mensaje a nuestro correo de soporte (soporte@mesapuestaenmalla.com) o por WhatsApp con el número de pedido o correo utilizado en la compra. El reembolso se procesará de forma inmediata según el método de pago original.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#3d1b08] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#54250a] shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {current.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200/60 hover:text-white rounded-full hover:bg-[#54250a] transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {current.body}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="bg-[#78350F] hover:bg-[#5f2a0b] text-white font-bold text-xs px-5 py-2.5 rounded-lg cursor-pointer transition-all"
          >
            Entendido y Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
