/* ═══════════════════════════════════════════
   lightbox.js — Galería de producto con descripción
   Chao Pescao · Tienda de Mascotas
═══════════════════════════════════════════ */

/* ── DATOS DE PRODUCTOS ──────────────────────
   Aquí defines cada producto con sus fotos y descripción.
   Agrega tantas fotos como quieras en el array "images".
   El primer elemento de "images" es la foto principal.
─────────────────────────────────────────── */
const PRODUCTOS = {
  /*═══ TARJETA 1: Agility Gold Gatitos ═══*/ 
  'agility-gold-gatitos': {
    name:     'Agility Gold Gatitos 500g',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$16.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento súper premium especialmente formulado para gatitos en crecimiento. Rico en proteínas de alta calidad, vitaminas y minerales esenciales para un desarrollo saludable.',
    features: [
      { icon: '✅', text: 'Fórmula súper premium', color: '#2A9D3B' },
      { icon: '🐟', text: 'Alto contenido de proteína de pescado', color: '#1A6FC4' },
      { icon: '💊', text: 'Vitaminas A, D y E incluidas', color: '#F28C28' },
      { icon: '🧡', text: 'Ideal para gatitos de 2 a 12 meses', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility_Gold_Gatitos_500g.png',
      'Imagenes/Agility_Gold_Gatitos_1_5Kg.png',
      'Imagenes/Agility_Gold_Gatitos_3kg.png',
      'Imagenes/Agility_Gold_Gatitos_1_5Kg_tabla.png',
    ]
  },
  /*═══ TARJETA 2: Agility Gold Gatos ═══ */
  'agility-gold-gatos': {
    name:     'Agility Gold Gatos 500g',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$14.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es un concentrado ideal para suministrar en todas las etapas de la vida de los gatos.',
    features: [
      { icon: '✅', text: 'Su fórmula libre de granos será ideal para proporcionar una alimentación adecuada y una digestión más rápida.', color: '#2A9D3B' },
      { icon: '💪', text: 'Alto en proteína y sus croquetas contienen mezclas de texturas llamativas.', color: '#F28C28' },
      { icon: '🦴', text: 'Ideal para proporcionar una alimentación completa y balanceada.', color: '#1A6FC4' },
      { icon: '✨', text: 'Ideal para gatos de todas las etapas y razas.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility_Gold_Gatos-500gr.jpg',
      'Imagenes/Agility_Gold_Gatos-1.5kg.jpg',
      'Imagenes/Agility_Gold_Gatos-3kg.jpg',
      'Imagenes/Agility_Gold_Gatos-tabla.jpg',
    ]
  },
  /*═══ TARJETA 3: Agility Gold Gatos Esterilizados ═══*/
    'agility-gold-cuidadoEspecial-esterilizados': {
    name:     'Agility Gold Gatos Adultos - Cuidado especial - Esterilizados',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$42.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es un alimento especializado que se ha formulado para satisfacer las necesidades nutricionales de los gatos castrados.',
    features: [
      { icon: '✅', text: 'Incorpora L-Carnitina, un aminoácido que estimula la movilización de grasas y el desarrollo de masa muscular magra.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Salmón y pollo.Promueve la salud del tracto urinario al regular el pH de manera efectiva.', color: '#1A6FC4' },
      { icon: '💊', text: 'Vitaminas A, D y E incluidas', color: '#F28C28' },
      { icon: '🧡', text: 'Facilita el control de la formación de bolas de pelo, mejorando así la salud digestiva del gato.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility_Gold_GatosAdultos_esterelizados-1.5kg.jpg',
      'Imagenes/Agility_Gold_GatosAdultos_esterelizados-3kg.png',
      'Imagenes/Agility_Gold_GatosAdultos_esterelizados-tabla.jpg',
    ]
  },

/*═══ TARJETA 4: Monello Cat castrados y esterilizados ═══*/
    'Monello-Cat-CastradosyEsterilizados-1kg': {
    name:     'Monello Cat Castrados y Esterilizados',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$30.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Desarrollada especialmente para la etapa post castración de los felinos.',
    features: [
      { icon: '✅', text: 'Rico en fibras que asegura una serie de beneficios al actuar directamente en la salud intestinal y provocar más saciedad después de las comidas.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Pavo, salmón y pulpa de remolacha.', color: '#1A6FC4' },
      { icon: '💊', text: 'La fórmula tiene calorías reducidas y la adición de L-carnitina, una sustancia que actúa en la transformación de la grasa en energía. ', color: '#F28C28' },
      { icon: '🧡', text: 'Es libre de colorantes y aromatizantes artificiales.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Cat-CastradosyEsterilizados-1kg.png',
      'Imagenes/Monello-Cat-CastradosyEsterilizados-tabla.png',
    ]
  },
/*TARJETA 5: Monello Cat Adultos Bolas de Pelos 1kg ═══ */
    'Monello-Cat-Adultos-Bolas-de-Pelos-1kg': {
    name:     'Monello Cat Adultos Bolas de Pelos ',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$30.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es un alimento desarrollado para las mascotas que tienen problemas con la ingestión de pelos.',
    features: [
      { icon: '✅', text: 'Favorece un tracto urinario sano, lo cual previene la formación de cálculos renales y genera más bienestar.', color: '#2A9D3B' },
      { icon: '🐟', text: ' Pollo, pescado y pulpa de remolacha. ', color: '#1A6FC4' },
      { icon: '💊', text: 'La presencia de celulosa ayuda a eliminar las bolas de pelos y evita que sean repelidas por el vómito.', color: '#F28C28' },
      { icon: '🧡', text: 'Promueve la salud del órgano y provoca la reducción del volumen y olor de las heces.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Cat-Adultos-Bolas-de-Pelos-1kg.png',
      'Imagenes/Monello-Cat-Adultos-Bolas-de-Pelos-tabla.png',
    ]
  },
/*═══ TARJETA 6: Monello Cat Adultos 1kg ═══*/
    'Monello-Cat-Adultos-1kg': {
    name:     'Monello Cat Adultos',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$28.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'La fórmula cuenta con la adición de ingredientes de calidad superior.',
    features: [
      { icon: '✅', text: 'Actúa en la prevención de enfermedades del sistema urinario, infelizmente comunes en los felinos.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Salmón y Pollo.', color: '#1A6FC4' },
      { icon: '💊', text: 'Cuenta con la presencia de hexametafosfato de Sodio, que actúa en la limpieza de los dientes, lo cual evita la formación de sarro y el consecuente mal aliento.', color: '#F28C28' },
      { icon: '🧡', text: 'Los nuggets rellenos son responsables por volver las comidas más sabrosas y agradables.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Cat-Adultos-1Kg.png',
      'Imagenes/Monello-Cat-Adultos-tabla.png',
    ]
  },
  /*═══ TARJETA 7: Monello Cat Gatitos 1kg ═══*/
    'Monello-Cat-Gatitos-1kg': {
    name:     'Monello Cat Gatitos',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$30.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Libre de colorantes y aromatizantes artificiales.',
    features: [
      { icon: '✅', text: 'Ingredientes nobles y de excelencia que actúan en las defensas del organismo y proporcionan a los felinos un desarrollo cognitivo sano.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Salmón, pollo, levadura de cerveza y manano-oligosacáridos (MOS) prebiótico, taurina aminoácido esencial.', color: '#1A6FC4' },
      { icon: '💊', text: 'Actúa en la salud intestinal al asegurar la máxima absorción de los nutrientes.', color: '#F28C28' },
      { icon: '🧡', text: 'Ayuda en la higiene de los ambientes internos, ya que reduce el volumen y el olor de las heces.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Cat-Gatitos-1kg.png',
      'Imagenes/Monello-Cat-Gatitos-tabla.png',
    ]
  },
/*═══ TARJETA 8: Max Cat Professional Gato Adulto Pollo y Arroz ═══*/
    'Max-Cat-Professional-Gato-Adulto-Pollo-y-Arroz-1kg': {
    name:     'Max Cat Professional Gato Adulto Pollo y Arroz',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$28.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento para gatos adultos.',
    features: [
      { icon: '✅', text: 'Alimento balanceado de mantenimiento para gatos.', color: '#2A9D3B' },
      { icon: '🐥', text: 'Pollo, arroz, yucca schidigera, taurina.', color: '#1A6FC4' },
      { icon: '💊', text: 'Su fórmula está enriquecida con vitaminas A, B12, C y D.', color: '#F28C28' },
      { icon: '🧡', text: 'Alimento libre de colorantes y aromatizantes artificiales.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Cat-Professional-Gato-Adulto-Pollo-y-Arroz-1kg.png',
      'Imagenes/Max-Cat Professional-Gato Adulto-Pollo-y-Arroz-3kg.png',
      'Imagenes/Max-Cat-Professional-Gato-Adulto-Pollo-y-Arroz-tabla.png',
    ]
  },
/*═══ TARJETA 9: Max Cat Professional Line Castrados Pollo═══*/
    'Max-Cat-Professional-Line-Castrados-Pollo-1kg': {
    name:     'Max Cat Professional Line Castrados',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$33.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento para gatos adultos, indicado para combatir la ganancia de peso después de la castración.',
    features: [
      { icon: '✅', text: 'Producido por especialistas para tener nutrientes específicos para una recuperación y vida sana.', color: '#2A9D3B' },
      { icon: '🐥', text: 'Pollo', color: '#1A6FC4' },
      { icon: '💊', text: 'Sin adición de colorantes.', color: '#F28C28' },
      { icon: '🧡', text: 'Producido con L-carnitina para favorecer el metabolismo.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Cat-Professional-Gato-Adulto-Pollo-y-Arroz-1kg.png',
      'Imagenes/Max-Cat-Professional-Line-Castrados-Pollo-3kg.png',
      'Imagenes/Max-Cat-Professional-Line-Castrados-Pollo-tabla.png',
    ]
  },
  /*═══ TARJETA 10: Max Cat Vita Atún y Camaron═══*/
    'Max-Cat-Vita-Atún-y-Camaron-1kg': {
    name:     'Max Cat Vita Atún y Camaron',
    category: '🐱 Nutrición felina',
    catColor: '#F28C28',
    price:    '$28.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Para gatos adultos. Receta balanceada que favorece la visión y el corazón, con nutrientes esenciales para su vitalidad.',
    features: [
      { icon: '✅', text: ' Excelente digestión y absorción.', color: '#2A9D3B' },
      { icon: '🦐', text: ' Con sabores del mar, atún y camarones.', color: '#1A6FC4' },
      { icon: '💊', text: 'Ayuda en la salud del sistema urinario.', color: '#F28C28' },
      { icon: '🧡', text: 'Reducción del olor de las heces.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Cat-Vita-Atún-y-Camaron-1kg.png',
      'Imagenes/Max-Cat-Vita-Atún-y-Camaron-tabla.png',
    ]
  },


/* ═══ TARJETA 11: Agility Gold Perros Cachorros ═══ primera fase*/
  'agility-gold-perros-cachorros': {
    name:     'Agility Gold perros Cachorros',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$16.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es una fórmula avanzada que fortalece su sistema inmunológico desde el principio; con proteínas de pollo y salmón que mejoran la salud intestinal más Prebióticos y probióticos que inducen a cambios en la microbiota intestinal para un desarrollo saludable.',
    features: [
      { icon: '✅', text: 'Incorpora calostro como un estimulante natural de la respuesta inmunológica, con un elevado contenido de inmunoglobulinas.', color: '#2A9D3B' },
      { icon: '🐕', text: 'Asegura una óptima provisión de aminoácidos con una mayor aceptación y facilidad de digestión.', color: '#1A6FC4' },
      { icon: '💊', text: 'Con la inclusión de probióticos y prebióticos, se fomenta el crecimiento de la microbiota intestinal, mejorando la absorción de nutrientes y reforzando el sistema inmunológico.', color: '#F28C28' },
      { icon: '🧡', text: 'Favorece el desarrollo cognitivo mediante la presencia de omega-3 y DHA, que contribuyen al desarrollo cerebral.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold Concentrado-perros-cachorros500g.png',
      'Imagenes/Agility-Gold Concentrado-perros-cachorros1.5kg.jpg',
      'Imagenes/Agility-Gold Concentrado-perros-cachorrostabla.jpg',
    ]
  },
  /*═══ TARJETA 12: Agility Gold Pequeños Cachorros ═══ */
  'Agility-Gold-pequeños-cachorros': {
    name:     'Agility Gold pequeños cachorros',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$36.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es una línea de alimentos Súper Premium, fabricados con la mejor tecnología que existe hoy en el mercado internacional.',
    features: [
      { icon: '✅', text: 'Su fórmula especialmente diseñada para cachorros de razas pequeñas es libre de granos para asegurar una sana digestión.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Con seleccionados ingredientes, incluyendo como principal ingrediente carne Real de Pollo, Salmón y cordero.', color: '#1A6FC4' },
      { icon: '💊', text: 'Su fórmula contiene niveles de proteínas, vitaminas y minerales balanceados y aptos para asegurar una buena digestión y un sistema inmunológico fuerte.', color: '#F28C28' },
      { icon: '🧡', text: 'Gracias a los ácidos grasos presentes en su fórmula, este concentrado ayudará a mantener una piel y un pelaje saludable. ', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold-pequeños-cachorros-1.5kg.png',
      'Imagenes/Agility-Gold-pequeños-cachorros-3kg.png',
      'Imagenes/Agility-Gold-pequeños-cachorros-8kg.png',
      'Imagenes/Agility-Gold-pequeños-cachorros-tabla.png',
    ]
  },
  /*═══ TARJETA 13: Agility Gold Perros Pequeños Adultos ═══*/
  'Agility-Gold-Perros-Pequeños-Adultos': {
    name:     'Agility Gold Perros Pequeños Adultos',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$13.500',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Especialmente formulado para satisfacer las necesidades nutricionales de tu perro adulto de raza pequeña.',
    features: [
      { icon: '✅', text: 'Combinación equilibrada de ingredientes de alta calidad,pelaje brillante y energía constante.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Cada bocado está diseñado para maximizar el bienestar de tu perro, ofreciendo todos los nutrientes esenciales.', color: '#1A6FC4' },
      { icon: '💊', text: 'Notarás mejoras en la salud general de tu mascota, desde su piel hasta su energía diaria.', color: '#F28C28' },
      { icon: '🧡', text: 'Su presentación en croquetas hace que la alimentación sea práctica y disfrutable.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-gold-perros-pequeños-adultos500g.png',
      'Imagenes/Agility-gold-perros-pequeños-adultos1.5kg.jpg',
      'Imagenes/Agility-gold-perros-pequeños-adultos3kg.jpg',
      'Imagenes/Agility-gold-perros-pequeños-adultos7kg.jpg',
      'Imagenes/Agility-gold-perros-pequeños-adultos-tabla.jpg',
    ]
  },
  /*═══TARJETA 14: Agility Gold Perros Grandes Cachorros ═══*/ 
  'Agility-Gold-Perros-Grandes-Cachorros': {
    name:     'Agility Gold Perros Grandes Cachorros',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$32.900',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Para cachorros de razas grandes está formulada para satisfacer las altas demandas nutricionales de esta etapa',
    features: [
      { icon: '✅', text: 'Promueve el crecimiento equilibrado de huesos y músculos, mientras fortalece el sistema inmune y el desarrollo cognitivo.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Las croquetas están diseñadas para adaptarse al tamaño de su mandíbula, facilitando la masticación y la digestión.', color: '#1A6FC4' },
      { icon: '💊', text: 'Con proteínas de alta calidad, DHA, calcio, fósforo y otros minerales esenciales.', color: '#F28C28' },
      { icon: '🧡', text: 'Este concentrado no contiene colorantes artificiales y ofrece un sabor que motiva al cachorro a alimentarse bien desde el inicio.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold-Perros-Grandes-cachorros-1.5kg.jpg',
      'Imagenes/Agility-Gold-Perros-Grandes-cachorros-3kg.jpg',
      'Imagenes/Agility-Gold-Perros-Grandes-cachorros-tabla.jpg',
    ]
  },
 /*═══ TARJETA 15: Agility Gold Perros Grandes Adultos Piel Sensible ═══*/ 
  'Agility-Gold-Perros-GrandesAdultos-PielSensible': {
    name:     'Agility Gold Perros Grandes Adultos Piel Sensible',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$170.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es un producto diseñado para nutrir la piel y pelaje de perros adultos.',
    features: [
      { icon: '✅', text: 'Gracias a las vitaminas y minerales esenciales, tu mascota tendrá más energía y vitalidad.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Con ingredientes específicos para este fin, contiene proteínas de Salmón y Cordero altamente digestibles que apoyan la formación ideal del pelo (resistente y brillante).', color: '#1A6FC4' },
      { icon: '💊', text: 'Contamos con ácidos grasos esenciales Omegas 3, 6 y Dha, que promueven una piel hidratada y elástica la cual favorece la salud integral de la misma.', color: '#F28C28' },
      { icon: '🧡', text: 'Con antioxidantes naturales y minerales orgánicos los cuales apoyan el fortalecimiento del sistema inmunológico.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-PielSensible-8kg.jpg',
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-PielSensible-tabla.jpg',
    ]
  },
 /*═══ TARJETA 16: Agility Gold Adultos Obesos ═══ */ 
  'Agility-Gold-Adultos-Obesos-1.5kg': {
    name:     'Agility Gold Adultos Obesos',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$38.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento que contribuyen al mantenimiento de una masa muscular óptima.',
    features: [
      { icon: '✅', text: 'Cuidado especial diseñado para promover una pérdida de peso saludable.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Pollo, arroz, fibra de arveja, salmón, pulpa de remolacha, aceite de pollo, aceite de romero, hidrolizado de hígado de pollo, celulosa, lignocelulosa, cloruro de sodio, cloruro de potasio, inulina, manano-oligosacáridos, L-Carnitina, extracto de yucca schidigera.', color: '#1A6FC4' },
      { icon: '💊', text: 'Reducido en calorías y grasas sin afectar la palatabilidad del producto.', color: '#F28C28' },
      { icon: '🧡', text: 'Con niveles adecuados de fibra que generan sensación de saciedad en la mascota sin afectar su apetito.', color: '#D72638' },
    ],
    images: [
      'Imagenes/AGILITY-GOLD-ADULTO-PERROS-OBESOS-1.5Kg.jpg',
      'Imagenes/AGILITY-GOLD-ADULTO-PERROS-OBESOS-tabla.png',
    ]
  },
  /*═══ TARJETA 17: Agility Gold Perros Grandes Adultos ═══ */ 
  'Agility-Gold-Perros-GrandesAdultos': {
    name:     'Agility Gold perros Grandes Adultos',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$34.500',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Para perros de razas grandes, fabricado en Colombia.',
    features: [
      { icon: '✅', text: 'Su fórmula sin granos está especialmente diseñada para promover la salud integral de tu mascota.', color: '#2A9D3B' },
      { icon: '🐟', text: ' Además, los ácidos grasos EPA y DHA contribuyen a la salud cerebral y de la piel.', color: '#1A6FC4' },
      { icon: '💊', text: 'Enriquecido con prebióticos, favorece una digestión óptima y mejora la calidad de las heces.', color: '#F28C28' },
      { icon: '🧡', text: 'Opción ideal para una nutrición equilibrada y saludable.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-1.5Kg.jpg',
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-3Kg.jpg',
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-8Kg.png',
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-15Kg.jpeg',
      'Imagenes/Agility-Gold-Perros-GrandesAdultos-tabla.jpg',
    ]
  },
  /*═══ TARJETA 18: Agility Gold Perros Adultos Pequeños Piel Sensible ═══ */ 
  'Agility-Gold-Perros-AdultosPequeños-PielSensible-1.5Kg': {
    name:     'Agility Gold Perros Adultos Pequeños Piel Sensible',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$38.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Nutre y asegura una alimentación balanceada para nuestras mascotas.',
    features: [
      { icon: '✅', text: 'Es producida con la mejor tecnología que existe hoy en el mercado internacional, la cual nos permite inyectar dentro de nuestras croquetas carne real.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Salmón y cordero.', color: '#1A6FC4' },
      { icon: '💊', text: 'Es una línea de concentrados premium fabricada en colombia.', color: '#F28C28' },
      { icon: '🧡', text: 'Este alimento es altamente balanceado, de calidad y libre de granos.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Agility-Gold-Perros-AdultosPequeños-PielSensible-1.5Kg.png',
      'Imagenes/Agility-Gold-Perros-AdultosPequeños-PielSensible-3kg.png',
      'Imagenes/Agility-Gold-Perros-AdultosPequeños-PielSensible-8kg.jpeg',
      'Imagenes/Agility-Gold-Perros-AdultosPequeños-PielSensible-tabla.jpg',
    ]
  },
/*═══ TARJETA 19: Monello Dog Cachorros ═══ */ 
  'Monello-Dog-Cachorros-1kg': {
    name:     'Monello Dog Cachorros',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$21.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es rico en sustancias que actúan naturalmente en el fortalecimiento del sistema cognitivo de las mascotas.',
    features: [
      { icon: '✅', text: 'Actúan directamente en el mantenimiento de la flora intestinal.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Pollo, aceite de salmón, extracto de Yucca Schidigera y del manano-oligosacárido (MOS).', color: '#1A6FC4' },
      { icon: '💊', text: 'Promueve más absorción, un máximo aprovechamiento de los nutrientes, minerales y proteínas por el organismo de los cachorros.', color: '#F28C28' },
      { icon: '🧡', text: 'La fórmula también beneficia las defensas del cuerpo, aumentando la inmunidad y proporcionando un crecimiento seguro y lleno de energía.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Dog-Cachorros-1kg.jpeg',
      'Imagenes/Monello-Dog-Cachorros-tabla.jpeg',
    ]
  },
/*═══ TARJETA 20: Monello Dog Razas pequeñas ═══ */ 
  'Monello-Dog-Razas-pequeñas-1kg': {
    name:     'Monello Dog Razas pequeñas',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$21.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento es rico en antioxidantes que combaten los radicales libres.',
    features: [
      { icon: '✅', text: 'Previenen el envejecimiento, lo cual aumenta el bienestar y la vitalidad de las mascotas.', color: '#2A9D3B' },
      { icon: '🐟', text: 'Pollo, adición de linaza, aceite de oliva y aceite de girasol, levadura de cerveza, manano-oligosacáridos (MOS) prebiótico.', color: '#1A6FC4' },
      { icon: '💊', text: 'Proporciona más longevidad a los peludos.', color: '#F28C28' },
      { icon: '🧡', text: 'Aumenta el bienestar y la vitalidad de las mascotas.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Monello-Dog-Razas-pequeñas-1kg.jpg',
      'Imagenes/Monello-Dog-Razas-pequeñas-tabla.png',
    ]
  },
/*═══ TARJETA 21: Max Razas Pequeñas Performance═══ */ 
  'Max-Razas-Pequeñas-Performance-2kg': {
    name:     'Max Razas Pequeñas Performance',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$45.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento para adultos razas Pequeñas ',
    features: [
      { icon: '✅', text: 'Fue diseñado pensando en los requerimientos nutricionales de los perros de razas pequeñas.', color: '#2A9D3B' },
      { icon: '🐤', text: 'Pollo y Arroz.', color: '#1A6FC4' },
      { icon: '💊', text: 'Su fórmula posee ingredientes naturales, libres de  colorantes, sabores y aromas artificiales.', color: '#F28C28' },
      { icon: '🧡', text: 'Su objetivo principal es reforzar la vitalidad de los perros adultos de razas pequeñas.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Razas-Pequeñas-performance-2kg.png',
      'Imagenes/Max-Razas-Pequeñas-performance-tabla.png',
    ]
  },
/*═══ TARJETA 22:  Max Adulto Light 2kg ═══ */ 
  'Max-Adulto-Light-2kg': {
    name:     'Max Adulto Light',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$43.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'El control y la prevención de la obesidad son fundamentales para el bienestar y la salud de los perros.',
    features: [
      { icon: '✅', text: 'Conteniendo todos los nutrientes necesarios para mantener a los perros sanos y en buena forma.', color: '#2A9D3B' },
      { icon: '🐤', text: 'Pollo y Arroz.', color: '#1A6FC4' },
      { icon: '💊', text: 'Cuidadosamente elaborado para el control del peso en perros adultos.', color: '#F28C28' },
      { icon: '🧡', text: 'Su formulación posee el equilibrio ideal de fibras, grasa y proteínas.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Adulto-Light-2kg.png',
      'Imagenes/Max-Adulto-Light-tabla.png',
    ]
  },
/*═══ TARJETA 23:  Max Mature Adulto 2kg ═══ */ 
  'Max-Mature-Adulto-2kg': {
    name:     'Max Mature Adulto',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$37.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Es un alimento premium especial nutricionalmente balanceado, desarrollado para perros mayores con más de 7 años de edad.',
    features: [
      { icon: '✅', text: 'Con mayor aporte de proteínas y equilibrio de las fibras.', color: '#2A9D3B' },
      { icon: '🐤', text: 'Pollo y arroz.', color: '#1A6FC4' },
      { icon: '💊', text: 'Lleva además en su composición, prebióticos, para heces más firmes.', color: '#F28C28' },
      { icon: '🧡', text: 'Contiene 24% de proteína de alta calidad.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Max-Mature-Adulto-2kg.png',
      'Imagenes/Max-Mature-Adultos-tabla.png',
    ]
  },
/*═══ TARJETA 24: Nutrecan Perro Adulto Mayor (7+ años)═══ */ 
  'Nutrecan-Perro-Adulto-Mayor': {
    name:     'Nutrecan Perro Adulto Mayor ',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$25.500',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Nutrecan Senior Extruido es el alimento ideal para consentir a tu perro en su etapa dorada.',
    features: [
      { icon: '✅', text: 'Formulado especialmente para perros adultos mayores a partir de 7 años.', color: '#2A9D3B' },
      { icon: '💚', text: 'Solla, alimento 100% completo y equilibrado.', color: '#1A6FC4' },
      { icon: '💊', text: 'Ofrece una nutrición completa y balanceada, adaptada a sus necesidades específicas.', color: '#F28C28' },
      { icon: '🧡', text: 'Tu fiel compañero disfrutará de una vida activa y saludable por más tiempo. Dale el cuidado que se merece.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Nutrecan-Perro-Adulto-Mayor-2kg.png',
      'Imagenes/Nutrecan-Perro-Adulto-Mayor-tabla.png',
    ]
  },
/*═══ TARJETA 25: Nutrecan Cachorro Raza Mediana Y Grande 2kg═══ */ 
  'Nutrecan-Cachorro-Raza-Mediana-Y-Grande-2kg': {
    name:     'Nutrecan Cachorro Raza Mediana Y Grande  ',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$27.000',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Alimento extruido diseñado para satisfacer sus necesidades nutricionales específicas.',
    features: [
      { icon: '✅', text: 'Garantizar heces compactas, secas y sin olor.', color: '#2A9D3B' },
      { icon: '💚', text: '100% completo y balanceado en forma de pequeños y ricos "trocitos" que le encantarán a tu cachorro. ', color: '#1A6FC4' },
      { icon: '💊', text: 'Tiene los nutrientes necesarios para que crezca sano, lindo y fuerte.', color: '#F28C28' },
      { icon: '🧡', text: 'El consumo de proteínas de alta calidad es fundamental para que los cachorros puedan crear nuevo tejido corporal a medida que crecen. ', color: '#D72638' },
    ],
    images: [
      'Imagenes/Nutrecan-Cachorro-Raza-Mediana-Y-Grande-2kg.png',
      'Imagenes/Nutrecan-Cachorro-Raza-Mediana-Y-Grande-tabla.png',
    ]
  },
/*═══ TARJETA 26: Nutrecan Light Adulto Obesos 2kg═══ */ 
  'Nutrecan-Light-Adulto-Obesos-2kg': {
    name:     'Nutrecan Light Adulto Obesos',
    category: '🐶 Nutrición Canina',
    catColor: '#ff012f',
    price:    '$31.500',
    oldPrice: null,
    stars:    5,
    reviews:  47,
    desc:     'Comida balanceada para perros adultos con tendencia a la obesidad.',
    features: [
      { icon: '✅', text: 'Es la solución perfecta para perros adultos que necesitan mantener un peso saludable.', color: '#2A9D3B' },
      { icon: '💚', text: 'Bajo en grasa y calorías, ideal para perros con sobrepeso o baja actividad física.', color: '#1A6FC4' },
      { icon: '💊', text: 'Contribuye a reducir el riesgo de problemas de salud asociados con la obesidad, como artritis, diabetes, enfermedades cardíacas y respiratorias.', color: '#F28C28' },
      { icon: '🧡', text: 'Enriquecido con vitaminas y minerales esenciales para el bienestar general de tu mascota.', color: '#D72638' },
    ],
    images: [
      'Imagenes/Nutrecan-Light-Adulto-Obesos-2kg.png',
      'Imagenes/Nutrecan-Light-Adulto-Obesos-tabla.png',
    ]
  },


/*  'kit-juguetes-x5': {
    name:     'Kit pelotas interactivas X3',
    category: '🎁 Juguetes',
    catColor: '#2A9D3B',
    price:    '$45.000',
    oldPrice: null,
    stars:    4,
    reviews:  29,
    desc:     'Combo pelotas tipo tenis interactivas para Snacks X3',
    features: [
      { icon: '✅', text: 'Están diseñadas para ofrecer diversión, ejercicio y estimulación mental en un solo juguete', color: '#2A9D3B' },
      { icon: '🛡️', text: 'Materiales no tóxicos y seguros', color: '#1A6FC4' },
      { icon: '🐾', text: 'Para gatos y perros pequeños', color: '#F28C28' },
      { icon: '🧠', text: 'Estimulación mental y física', color: '#D72638' },
    ],
    images: [
      'Catalogo productos/Pelota_morada.png',
    ]
  },
  'Shampoo Petys 235ml': {
    name:     'Shampoo Petys 235ml',
    category: '✨ Higiene',
    catColor: '#D72638',
    price:    '$28.000',
    oldPrice: '$38.000',
    stars:    5,
    reviews:  61,
    desc:     'Es el producto ideal para las mascotas, perros y gatos, porque protege y cuida el pelo de tu mascota, es hipo alergénico, reduce las probabilidades de generar alergias o afecciones en la piel.',
    features: [
      { icon: '✅', text: 'Fórmula hipoalergénica pH neutro', color: '#2A9D3B' },
      { icon: '🌿', text: 'Ingredientes naturales sin parabenos', color: '#1A6FC4' },
      { icon: '🐶', text: 'Apto para perros y gatos', color: '#F28C28' },
      { icon: '💧', text: 'Hidrata y suaviza el pelaje', color: '#D72638' },
    ],
    images: [
      'Imagenes/Shampoo_petys.png',
    ]
  }*/
};

/* ── ESTADO ── */
let lbCurrentProduct = null;
let lbCurrentIndex   = 0;

/* ── CREAR ESTRUCTURA HTML DEL LIGHTBOX ── */
function createLightboxHTML() {
  const html = `
    <div class="lb-overlay" id="lbOverlay" onclick="closeLightbox()"></div>
    <button class="lb-close" id="lbClose" onclick="closeLightbox()">✕</button>
    <div class="lb-modal" id="lbModal">
      <div class="lb-box">

        <!-- Galería izquierda -->
        <div class="lb-gallery">
          <div class="lb-main-img">
            <img id="lbMainImg" src="" alt="" />
            <button class="lb-arrow prev" id="lbPrev" onclick="lbNavigate(-1)">‹</button>
            <button class="lb-arrow next" id="lbNext" onclick="lbNavigate(1)">›</button>
            <div class="lb-counter" id="lbCounter">1 / 1</div>
          </div>
          <div class="lb-thumbs" id="lbThumbs"></div>
        </div>

        <!-- Info derecha -->
        <div class="lb-info">
          <div class="lb-category" id="lbCategory"></div>
          <div class="lb-name" id="lbName"></div>
          <div class="lb-stars" id="lbStars"></div>
          <div class="lb-price-row">
            <span class="lb-price" id="lbPrice"></span>
            <span class="lb-price-old" id="lbOldPrice"></span>
          </div>
          <div class="lb-divider"></div>
          <div class="lb-desc-title">Descripción</div>
          <div class="lb-desc" id="lbDesc"></div>
          <div class="lb-desc-title">Características</div>
          <div class="lb-features" id="lbFeatures"></div>
          <button class="lb-add-btn" id="lbAddBtn" onclick="lbAddToCart()">
            🛒 Agregar al carrito
          </button>
        </div>

      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);
}

/* ── ABRIR LIGHTBOX ── */
function openLightbox(productId) {
  const product = PRODUCTOS[productId];
  if (!product) return;

  lbCurrentProduct = productId;
  lbCurrentIndex   = 0;

  // Llenar datos
  document.getElementById('lbCategory').textContent  = product.category;
  document.getElementById('lbCategory').style.color  = product.catColor;
  document.getElementById('lbName').textContent      = product.name;
  document.getElementById('lbPrice').textContent     = product.price;

  const oldEl = document.getElementById('lbOldPrice');
  oldEl.textContent = product.oldPrice || '';

  // Estrellas
  const filled  = '★'.repeat(product.stars);
  const empty   = '☆'.repeat(5 - product.stars);
  document.getElementById('lbStars').innerHTML =
    `<span>${filled}${empty}</span><span class="lb-reviews">(${product.reviews} reseñas)</span>`;

  document.getElementById('lbDesc').textContent = product.desc;

  // Características
  const featEl = document.getElementById('lbFeatures');
  featEl.innerHTML = product.features.map(f => `
    <div class="lb-feature">
      <div class="lb-feature-dot" style="background:${f.color}"></div>
      <span>${f.icon} ${f.text}</span>
    </div>
  `).join('');

  // Imágenes
  renderLbGallery();

  // Reset botón
  const btn = document.getElementById('lbAddBtn');
  btn.textContent = '🛒 Agregar al carrito';
  btn.classList.remove('added');

  // Abrir
  document.getElementById('lbOverlay').classList.add('open');
  document.getElementById('lbClose').classList.add('open');
  document.getElementById('lbModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── CERRAR LIGHTBOX ── */
function closeLightbox() {
  document.getElementById('lbOverlay').classList.remove('open');
  document.getElementById('lbClose').classList.remove('open');
  document.getElementById('lbModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── RENDERIZAR GALERÍA ── */
function renderLbGallery() {
  const product = PRODUCTOS[lbCurrentProduct];
  const images  = product.images;

  // Imagen principal
  const mainImg = document.getElementById('lbMainImg');
  mainImg.src = images[lbCurrentIndex];
  mainImg.alt = product.name;

  // Contador
  document.getElementById('lbCounter').textContent =
    `${lbCurrentIndex + 1} / ${images.length}`;

  // Flechas — ocultar si solo hay 1 foto
  const prev = document.getElementById('lbPrev');
  const next = document.getElementById('lbNext');
  if (images.length <= 1) {
    prev.classList.add('hidden');
    next.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
  }

  // Thumbnails
  const thumbsEl = document.getElementById('lbThumbs');
  thumbsEl.innerHTML = images.map((src, i) => `
    <div class="lb-thumb ${i === lbCurrentIndex ? 'active' : ''}"
         onclick="lbGoTo(${i})">
      <img src="${src}" alt="Foto ${i+1}" loading="lazy" />
    </div>
  `).join('');
}

/* ── NAVEGAR CON FLECHAS ── */
function lbNavigate(dir) {
  const images = PRODUCTOS[lbCurrentProduct].images;
  lbCurrentIndex = (lbCurrentIndex + dir + images.length) % images.length;
  lbChangeImage();
}

/* ── IR A THUMBNAIL ── */
function lbGoTo(index) {
  lbCurrentIndex = index;
  lbChangeImage();
}

/* ── CAMBIAR IMAGEN CON ANIMACIÓN ── */
function lbChangeImage() {
  const mainImg = document.getElementById('lbMainImg');
  mainImg.classList.add('fade');
  setTimeout(() => {
    renderLbGallery();
    mainImg.classList.remove('fade');
  }, 200);
}

/* ── AGREGAR AL CARRITO DESDE LIGHTBOX ── */
function lbAddToCart() {
  if (!lbCurrentProduct) return;

  // Buscar la tarjeta del producto en el DOM y usar la función addToCart existente
  const card = document.querySelector(`[data-product-id="${lbCurrentProduct}"]`);
  if (card) {
    addToCart(
      card.dataset.productId,
      card.dataset.productName,
      card.dataset.productPrice,
      card.dataset.productEmoji || '🐾'
    );
  }

  // Feedback visual en el botón del lightbox
  const btn = document.getElementById('lbAddBtn');
  btn.textContent = '✓ ¡Agregado al carrito!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = '🛒 Agregar al carrito';
    btn.classList.remove('added');
  }, 2000);
}

/* ── CONECTAR CLICKS EN IMÁGENES DE PRODUCTO ── */
function initLightboxTriggers() {
  document.querySelectorAll('.p-img-area, .p-img-contain').forEach(area => {
    area.addEventListener('click', function(e) {
      // No abrir si hicieron clic en el corazón favorito
      if (e.target.closest('.p-fav')) return;
      const card = this.closest('[data-product-id]');
      if (!card) return;
      openLightbox(card.dataset.productId);
    });
  });
}

/* ── CERRAR CON ESC ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  lbNavigate(-1);
  if (e.key === 'ArrowRight') lbNavigate(1);
});

/* ── INICIALIZAR ── */
document.addEventListener('DOMContentLoaded', () => {
  createLightboxHTML();
  initLightboxTriggers();
});