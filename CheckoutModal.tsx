import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Download, 
  Mail, 
  Smartphone, 
  CreditCard, 
  QrCode, 
  Sparkles, 
  Gift, 
  ArrowRight,
  Printer
} from 'lucide-react';

interface CheckoutModalProps {
  planId: 'basic' | 'complete' | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ planId, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!planId) return null;

  const isComplete = planId === 'complete';
  const price = isComplete ? '$9.90 USD' : '$5.90 USD';
  const originalPrice = isComplete ? '$39.90 USD' : '$19.90 USD';
  const planTitle = isComplete ? 'PAQUETE COMPLETO (+300 Moldes + 4 Bonos Exclusivos)' : 'PAQUETE BÁSICO (+300 Moldes en PDF)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) {
      window.location.href = 'https://pay.hotmart.com/H107205850J?off=gqkvc7sb';
      return;
    } else {
      window.location.href = 'https://pay.hotmart.com/O107206318C?off=hedzpb57';
      return;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#3d1b08] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#54250a] shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#78350F] text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded uppercase border border-amber-600/40">
                Pago Seguro SSL
              </span>
              {isComplete && (
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  ⭐ Más Elegido
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              {step === 'form' ? 'Finalizar tu Acceso Inmediato' : '¡Felicitaciones! Acceso Confirmado'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200/60 hover:text-white rounded-full hover:bg-[#54250a] transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Order Summary Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{planTitle}</h4>
                    <span className="text-xs text-gray-500">Acceso digital inmediato por correo y WhatsApp</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through block">{originalPrice}</span>
                    <span className="text-xl font-black text-orange-600">{price}</span>
                  </div>
                </div>

                {isComplete && (
                  <div className="pt-2 border-t border-gray-200 text-xs text-green-700 font-semibold flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-green-600" />
                    <span>4 Bonos Exclusivos GRATIS incluidos en tu orden</span>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Tus Datos de Entrega
                </label>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico (para enviar los archivos)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp con código de país (ej: +55 11 99999-9999)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Método de Pago
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-green-600 bg-green-50 text-green-900 font-bold ring-1 ring-green-500'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-green-600" />
                    <span className="text-xs">PIX / QR Code (Inmediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-orange-600 bg-orange-50 text-orange-900 font-bold ring-1 ring-orange-500'
                        : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    <span className="text-xs">Tarjeta de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#78350F] hover:bg-[#5f2a0b] active:scale-98 text-white font-black text-base py-4 rounded-xl shadow-lg shadow-[#78350F]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Generando acceso seguro...
                  </span>
                ) : (
                  <>
                    <span>CONFIRMAR Y RECIBIR ACCESO ({price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  Garantía 7 Días
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                  Transacción Encriptada
                </span>
              </div>
            </form>
          ) : (
            /* Success Screen */
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-gray-900">¡Acceso Liberado con Éxito!</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-sm mx-auto">
                  Hemos enviado los enlaces de descarga y credenciales a <strong>{email || 'tu correo electrónico'}</strong> y a tu WhatsApp.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                  <Printer className="w-4 h-4 text-orange-600" />
                  <span>Tus archivos listos para imprimir en A4:</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-gray-200">
                    <span className="font-semibold text-gray-800">📂 Paquete_300_Moldes_Mesa_Puesta.pdf</span>
                    <span className="text-green-600 font-bold">Listo (128 MB)</span>
                  </div>

                  {isComplete && (
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-gray-200">
                      <span className="font-semibold text-gray-800">🎁 Pack_4_Bonos_Exclusivos_Sandra.pdf</span>
                      <span className="text-green-600 font-bold">Listo (35 MB)</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Iniciando descarga de los moldes de muestra en PDF...');
                  onClose();
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-sm py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DESCARGAR MOLDES AHORA</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
