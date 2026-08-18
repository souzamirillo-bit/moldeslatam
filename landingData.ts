import { BonusItem, PricingPlan, Testimonial, MoldCategory, FaqItem } from '../types';

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bono-1',
    number: 'Bono #01',
    title: 'Guía de Mallas y Cordones',
    description: 'Te explicamos las diferencias entre malla, yute y malla plástica para ayudarte a elegir la base ideal para cada proyecto.',
    originalPrice: '$15.00 USD',
    freeBadge: 'GRATIS',
    iconName: 'Layers',
    highlights: ['Malla plástica vs. Yute vs. Malla metálica', 'Grosor ideal de cordón', 'Flexibilidad y acabados'],
    image: 'https://i.imgur.com/1ZpBLQT.png'
  },
  {
    id: 'bono-2',
    number: 'Bono #02',
    title: 'Guía de Precios',
    description: 'Aprende a calcular el costo de los materiales, definir tu margen de ganancia y cobrar el precio correcto por cada pieza.',
    originalPrice: '$18.00 USD',
    freeBadge: 'GRATIS',
    iconName: 'Calculator',
    highlights: ['Planilla de cálculo de costos', 'Margen de ganancia sugerido', 'Cómo presupuestar juegos de 4, 6 y 8 puestos'],
    image: 'https://i.imgur.com/sbku1bN.png'
  },
  {
    id: 'bono-3',
    number: 'Bono #03',
    title: 'Lista Completa de Materiales',
    description: 'Una lista organizada con todo lo necesario para comenzar a producir, sin olvidar ningún material importante.',
    originalPrice: '$12.00 USD',
    freeBadge: 'GRATIS',
    iconName: 'CheckSquare',
    highlights: ['Tijeras, pegamentos y cordones recomendados', 'Bases y mallas exactas', 'Kit de inicio económico'],
    image: 'https://i.imgur.com/G3sFlBz.png'
  },
  {
    id: 'bono-4',
    number: 'Bono #04',
    title: 'Guía de Impresión en Tamaño Real',
    description: 'Aprende a configurar tu impresora correctamente para imprimir los moldes en su tamaño real y utilizarlos sin complicaciones.',
    originalPrice: '$9.00 USD',
    freeBadge: 'GRATIS',
    iconName: 'Printer',
    highlights: ['Configuración 100% escala en A4', 'Cualquier impresora convencional', 'Ensamble de hojas sin errores'],
    image: 'https://i.imgur.com/bnA9eVR.png'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carolina M.',
    city: 'Artesana y Emprendedora',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    time: '14:28',
    salesHighlight: 'Vendió 10 kits este fin de semana',
    messages: [
      {
        sender: 'customer',
        text: '“Wow, necesitaba agradecerte por este material.”',
        time: '14:28'
      },
      {
        sender: 'customer',
        text: '“Logré vender 10 kits este fin de semana.”',
        time: '14:29'
      },
      {
        sender: 'customer',
        text: '“No puedo creer que haya tardado tanto en comprarlo.”',
        time: '14:30'
      },
      {
        sender: 'sandra',
        text: '“Me alegra mucho poder ayudarte, ¡te mando un abrazo!”',
        time: '14:35'
      },
      {
        sender: 'sandra',
        text: '“Muchas gracias, Sandra.”',
        time: '14:36'
      }
    ]
  },
  {
    id: 'test-2',
    name: 'Valeria R.',
    city: 'Taller de Mesa Puesta',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    time: '18:12',
    salesHighlight: '3 ventas concretadas hoy',
    messages: [
      {
        sender: 'customer',
        text: '“¡Te quedó hermosísimo amiga!”',
        time: '18:12'
      },
      {
        sender: 'customer',
        text: '“Valió cada centavo, ¡ya vendí 3 hoy!”',
        time: '18:14'
      }
    ]
  },
  {
    id: 'test-3',
    name: 'Lucía G.',
    city: 'Decoración Artesanal',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    time: '11:05',
    salesHighlight: 'Corrigió sus precios y multiplicó ganancias',
    messages: [
      {
        sender: 'customer',
        text: '“El bono de precios literalmente me salvó.”',
        time: '11:05'
      },
      {
        sender: 'customer',
        text: '“Todo este tiempo estaba cobrando mal.”',
        time: '11:06'
      },
      {
        sender: 'customer',
        text: '“Ahora por fin estoy obteniendo una ganancia de verdad.”',
        time: '11:07'
      },
      {
        sender: 'sandra',
        text: '“Esta guía es indispensable, ¿verdad?”',
        time: '11:15'
      },
      {
        sender: 'customer',
        text: '“Ni me digas, fue un gran alivio.”',
        time: '11:17'
      }
    ]
  }
];

export const MOLDS_SHOWCASE: MoldCategory[] = [
  {
    id: 'sousplat-redondo',
    title: 'Sousplats Redondos & Clásicos',
    subtitle: 'Bases circulares con patrones espirales y calados',
    dimensions: '35 cm a 38 cm de diámetro (Escala Real 1:1)',
    meshType: 'Malla plástica / Yute rígido',
    count: 75,
    image: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?w=600&auto=format&fit=crop&q=80',
    description: 'Los moldes más pedidos para juegos de mesa diarios y eventos. Guías milimétricas para enrollar cordón de algodón o yute sin desfasar el centro.',
    tags: ['A4 Listo', 'Sin Dibujar', 'Cero Costura']
  },
  {
    id: 'sousplat-floral',
    title: 'Sousplats Florales & Ondulados',
    subtitle: 'Bordes tipo margarita, pétalos y festón rústico',
    dimensions: '36 cm a 40 cm de diámetro',
    meshType: 'Malla plástica / Cordón nautico o yute',
    count: 60,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80',
    description: 'Diseños con ondas perimetrales exactas para cortar la malla en segundos y rellenar con cordón con pegamento de contacto rápido.',
    tags: ['Alta Demanda', 'Diseño Elegante', 'Fácil Recorte']
  },
  {
    id: 'porta-vasos',
    title: 'Porta Vasos y Porta Copas',
    subtitle: 'Juegos a juego para copas, tazas y botellas',
    dimensions: '10 cm a 14 cm de diámetro',
    meshType: 'Malla liviana o yute',
    count: 50,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80',
    description: 'Aprovecha todos los retazos de malla sobrantes de los sousplats para crear juegos complementarios de altísimo margen de ganancia.',
    tags: ['Cero Desperdicio', 'Venta Rápida', 'A4 Múltiple']
  },
  {
    id: 'servilleteros',
    title: 'Porta Cubiertos & Servilleteros',
    subtitle: 'Anillos cilíndricos y bolsillos individuales de mesa',
    dimensions: 'Moldes adaptables con marcas de pliegue',
    meshType: 'Yute, malla y cordón fino',
    count: 45,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&auto=format&fit=crop&q=80',
    description: 'Piezas compactas que transforman cualquier mesa puesta. Incluye moldes de servilleteros en forma de hoja, lazo, aro doble y rústicos.',
    tags: ['Complemento Ideal', 'Rápida Fabricación']
  },
  {
    id: 'centros-mesa',
    title: 'Centros de Mesa & Caminos',
    subtitle: 'Bases ovaladas y caminos segmentados modulares',
    dimensions: 'De 45 cm hasta 1.20 m (moldes ensamblables A4)',
    meshType: 'Malla reforzada y cordón grueso',
    count: 40,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=80',
    description: 'Moldes en secciones A4 numeradas para unir con cinta y cortar mallas grandes de forma perfectamente simétrica.',
    tags: ['Piezas Premium', 'Alto Valor de Venta']
  },
  {
    id: 'organicos-geometricos',
    title: 'Formas Orgánicas & Geométricas',
    subtitle: 'Diseños contemporáneos, hexagonales y curvas libres',
    dimensions: 'Variados según el modelo',
    meshType: 'Malla y combinaciones de fibras naturales',
    count: 35,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    description: 'Tendencia absoluta en decoración de interiores moderna y mesas bohemias de lujo.',
    tags: ['Tendencia 2026', 'Diseño Exclusivo']
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo recibo el acceso a los moldes?',
    answer: 'El acceso se envía inmediatamente a tu correo electrónico y WhatsApp después de la confirmación del pago. Recibirás un enlace para acceder y descargar todo el material.'
  },
  {
    id: 'faq-2',
    question: '¿Dónde puedo comprar los materiales?',
    answer: 'En el Paquete Completo recibirás la Lista Completa de Materiales e Insumos con las especificaciones de mallas, cordones y pegamentos necesarios para comenzar.'
  },
  {
    id: 'faq-3',
    question: '¿Las piezas no se despegan?',
    answer: 'Siguiendo correctamente las instrucciones de preparación, pegado y acabado mostradas en el material y las guías de apoyo, podrás producir tus piezas de la forma indicada con total firmeza y durabilidad.'
  },
  {
    id: 'faq-4',
    question: '¿Cómo sé cómo ensamblar cada molde?',
    answer: 'Cada molde en PDF incluye sus líneas de guía, especificaciones de medidas y la guía ilustrada paso a paso para recortar la malla y pegar el cordón fácilmente.'
  },
  {
    id: 'faq-5',
    question: '¿Necesito saber coser o tener experiencia con manualidades?',
    answer: 'No. El material fue pensado para que puedas comenzar incluso si eres principiante. Los moldes ya vienen listos para imprimir y las instrucciones muestran cómo utilizarlos paso a paso.'
  },
  {
    id: 'faq-6',
    question: '¿Necesito una impresora especial?',
    answer: 'No. Los moldes fueron preparados para que puedan imprimirse en hojas A4 utilizando una impresora convencional. En el Paquete Completo también recibirás una guía para imprimir correctamente en tamaño real.'
  },
  {
    id: 'faq-7',
    question: '¿El acceso tiene fecha de vencimiento?',
    answer: 'No. Al elegir el Paquete Completo, tendrás acceso de por vida al material adquirido y también a las futuras actualizaciones incluidas en el producto.'
  }
];
