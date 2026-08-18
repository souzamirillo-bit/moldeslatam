import React from 'react';

interface FooterSectionProps {
  onOpenPolicy: (type: 'terms' | 'privacy' | 'refund') => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-[#2a1306] text-amber-100/90 py-8 border-t border-[#451e08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-amber-200/80">
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Términos y Condiciones
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Reembolso
            </button>
          </div>

          <p className="text-amber-200/70 font-medium">
            © 2026 <strong className="text-amber-100">Moldes para Mesa Puesta</strong>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
