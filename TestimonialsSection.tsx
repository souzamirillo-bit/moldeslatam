import React from 'react';

const TESTIMONIAL_IMAGES = [
  'https://i.imgur.com/O3OZuFt.png',
  'https://i.imgur.com/X7b9Rrm.png',
  'https://i.imgur.com/b281q74.png',
];

export const TestimonialsSection: React.FC = () => {
  // Repeating 4 times for seamless continuous looping
  const carouselItems = [
    ...TESTIMONIAL_IMAGES,
    ...TESTIMONIAL_IMAGES,
    ...TESTIMONIAL_IMAGES,
    ...TESTIMONIAL_IMAGES,
  ];

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-gray-50/70 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            Casos de Éxito Reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Artesanas que ya generan ingresos con nuestros moldes
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed">
            Mira los resultados reales de quienes transformaron su taller utilizando nuestros moldes exclusivos.
          </p>
        </div>
      </div>

      {/* Testimonials Auto-Scroll Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Shadows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50/90 via-gray-50/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50/90 via-gray-50/70 to-transparent z-10" />

        {/* Carousel Track with Faster Animation */}
        <div className="animate-infinite-scroll flex items-center gap-5 sm:gap-7">
          {carouselItems.map((imgUrl, index) => (
            <div
              key={index}
              className="w-72 sm:w-80 md:w-96 shrink-0 group rounded-2xl overflow-hidden bg-white border-2 border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="w-full overflow-hidden bg-white flex items-center justify-center p-2 sm:p-3">
                <img
                  src={imgUrl}
                  alt={`Resultado y testimonio de alumna ${(index % TESTIMONIAL_IMAGES.length) + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[480px] object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-xs text-gray-400 font-medium">
          💡 Pasa el cursor o mantén presionado para pausar
        </span>
      </div>
    </section>
  );
};
