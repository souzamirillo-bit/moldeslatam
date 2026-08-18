import React from 'react';
import { MoldCategory } from '../types';
import { X, Printer, Download, Sparkles, CheckCircle2, Scissors, Layers } from 'lucide-react';

interface TemplatePreviewModalProps {
  mold: MoldCategory | null;
  onClose: () => void;
  onSelectPlan: () => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  mold,
  onClose,
  onSelectPlan,
}) => {
  if (!mold) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200 relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gray-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-gray-800 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-gray-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                Tamaño Real 1:1
              </span>
              <span className="text-gray-300 text-xs font-mono">{mold.dimensions}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              {mold.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Printable A4 Sheet Mockup Canvas */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative shadow-inner">
            <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-md text-[11px] font-bold text-gray-700 border border-gray-200 shadow-2xs">
              Hoja Estándar A4 (210 x 297 mm)
            </div>

            <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-4 relative my-3">
              <svg className="w-full h-56 text-gray-700" viewBox="0 0 300 240" fill="none">
                {/* A4 border */}
                <rect x="5" y="5" width="290" height="230" rx="6" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1.5" />
                
                {/* Mesh pattern simulation */}
                <pattern id="modal-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#e2e8f0" strokeWidth="0.6" />
                </pattern>
                <rect x="20" y="20" width="260" height="200" fill="url(#modal-grid)" />

                {/* Scalloped / floral / circular pattern */}
                <circle cx="150" cy="120" r="90" stroke="#ea580c" strokeWidth="2.5" strokeDasharray="5 3" />
                <circle cx="150" cy="120" r="75" stroke="#d97706" strokeWidth="2" />
                <circle cx="150" cy="120" r="60" stroke="#d97706" strokeWidth="1.5" />
                <circle cx="150" cy="120" r="45" stroke="#d97706" strokeWidth="1.5" />
                <circle cx="150" cy="120" r="30" stroke="#d97706" strokeWidth="1.5" />
                <circle cx="150" cy="120" r="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <circle cx="150" cy="120" r="4" fill="#ea580c" />

                {/* Scale test ruler */}
                <line x1="20" y1="210" x2="100" y2="210" stroke="#0f172a" strokeWidth="2" />
                <line x1="20" y1="205" x2="20" y2="215" stroke="#0f172a" strokeWidth="2" />
                <line x1="100" y1="205" x2="100" y2="215" stroke="#0f172a" strokeWidth="2" />
                <text x="60" y="204" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">TEST ESCALA (5 cm)</text>

                {/* Labels */}
                <text x="150" y="32" fill="#ea580c" fontSize="9" fontWeight="bold" textAnchor="middle">LÍNEA NARANJA = CORTE DE MALLA</text>
                <text x="150" y="123" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">PUNTO 0</text>
              </svg>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
              <Scissors className="w-3.5 h-3.5 text-orange-600" />
              <span>Colocas tu malla sobre la hoja impresa y recortas el contorno exacto en segundos.</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-900">Especificaciones de este modelo:</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500 block">Base recomendada:</span>
                <strong className="text-gray-900">{mold.meshType}</strong>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                <span className="text-gray-500 block">Variaciones incluidas:</span>
                <strong className="text-gray-900">+{mold.count} modelos en la categoría</strong>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {mold.description}
            </p>
          </div>

          {/* CTA inside modal */}
          <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectPlan();
              }}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-sm py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>DESCARGAR TODOS LOS +300 MOLDES</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
