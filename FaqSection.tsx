import React, { useState } from 'react';
import { FAQ_DATA } from '../data/landingData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default
  });

  const toggleFaq = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="preguntas-frecuentes" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Resolvemos tus Dudas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Todo lo que necesitas saber antes de comenzar a producir tus piezas.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openItems[item.id];
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-gray-50 border-gray-300 shadow-xs'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-orange-600 text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
