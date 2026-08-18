import React from 'react';

const MOLD_IMAGES = [
  'https://i.imgur.com/eNOowL1.png',
  'https://i.imgur.com/fARK2ev.png',
  'https://i.imgur.com/3AySPn2.png',
  'https://i.imgur.com/3faUlh8.png',
  'https://i.imgur.com/Xqq1vdy.png',
  'https://i.imgur.com/lVwMPhz.png',
  'https://i.imgur.com/BDYfLIu.png',
  'https://i.imgur.com/yrxszaP.png',
];

export const MoldsShowcase: React.FC = () => {
  // Duplicate images for seamless 100% loop animation
  const carouselItems = [...MOLD_IMAGES, ...MOLD_IMAGES];

  return (
    <section id="moldes-showcase" className="py-16 sm:py-24 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Catálogo Exclusivo en PDF
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Mira algunos de los moldes incluidos
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed">
            Cada molde viene en <strong className="text-gray-900 font-bold">tamaño real</strong>, listo para imprimir en hojas A4 con cualquier impresora.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scroll Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Shadows for Smooth Edge Fading */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Carousel Track */}
        <div className="animate-infinite-scroll flex items-center gap-4 sm:gap-6">
          {carouselItems.map((imgUrl, index) => (
            <div
              key={index}
              className="w-60 sm:w-72 md:w-80 shrink-0 group rounded-2xl overflow-hidden bg-gray-50 border-2 border-gray-200 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="aspect-square w-full overflow-hidden bg-white flex items-center justify-center p-3">
                <img
                  src={imgUrl}
                  alt={`Molde incluido ${(index % MOLD_IMAGES.length) + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
