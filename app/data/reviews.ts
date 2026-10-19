// Recensioni REALI degli ospiti (fonte: pagine pubbliche Booking).
// Mostrate nella LINGUA ORIGINALE; un pulsante "Traduci" le porta nella lingua
// del sito usando le traduzioni qui sotto (nessun servizio esterno, nessun costo).
// I testi vanno confermati dal titolare prima della pubblicazione.

export const REVIEW_STATS = {
  google: { rating: "4,9", outOf: "5", count: 19, href: "https://www.google.com/maps?q=Palazzo+Vite+Copertino" },
  booking: { rating: "9,6", outOf: "10", count: 15, href: "https://www.booking.com/hotel/it/palazzo-vite.it.html" },
} as const;

export type ReviewLang = "it" | "en" | "fr" | "es" | "hu";

export type Review = {
  quote: string; // testo nella lingua originale
  lang: ReviewLang;
  t: Partial<Record<"it" | "en" | "fr" | "es", string>>; // traduzioni
  name: string;
  place: string;
  flag: string;
  source: "Booking" | "Google";
};

// La prima è la citazione "in evidenza".
export const REVIEWS: Review[] = [
  {
    // Estratto (verbatim) della recensione Booking di Massimo — citazione in evidenza.
    quote:
      "Un'esperienza unica in un antico palazzo nobiliare, ristrutturato e arredato con estremo gusto. A Palazzo Vite vivi fuori dal tempo in un'atmosfera accogliente e confortevole, una casa di altri tempi con il comfort moderno. Fatevi un caffè nella vecchia cucina e godetevelo nel grazioso giardino.",
    lang: "it",
    t: {
      en: "A unique experience in an old noble palazzo, restored and furnished with exquisite taste. At Palazzo Vite you live outside of time, in a warm and welcoming atmosphere: a house of another era with modern comfort. Make yourself a coffee in the old kitchen and enjoy it in the lovely garden.",
      fr: "Une expérience unique dans un ancien palais de maître, restauré et meublé avec un goût exquis. À Palazzo Vite, on vit hors du temps, dans une atmosphère chaleureuse et accueillante : une maison d'autrefois avec le confort moderne. Préparez-vous un café dans la vieille cuisine et savourez-le dans le joli jardin.",
      es: "Una experiencia única en un antiguo palacio noble, restaurado y amueblado con un gusto exquisito. En Palazzo Vite vives fuera del tiempo, en un ambiente acogedor y confortable: una casa de otros tiempos con el confort moderno. Prepárate un café en la vieja cocina y disfrútalo en el bonito jardín.",
    },
    name: "Massimo",
    place: "Italia",
    flag: "🇮🇹",
    source: "Booking",
  },
  {
    // Estratto (verbatim) della recensione Google di Franz Grillo (nel carosello).
    quote:
      "Una splendida dimora storica, ricca di fascino e carattere, curata in ogni minimo dettaglio e capace di conservare il sapore del passato senza rinunciare al comfort e alle comodità di oggi.",
    lang: "it",
    t: {
      en: "A beautiful historic residence, full of charm and character, cared for in every last detail and able to preserve the flavour of the past without giving up the comfort and conveniences of today.",
      fr: "Une splendide demeure historique, pleine de charme et de caractère, soignée dans les moindres détails et capable de conserver la saveur du passé sans renoncer au confort et aux commodités d'aujourd'hui.",
      es: "Una espléndida residencia histórica, llena de encanto y carácter, cuidada hasta el más mínimo detalle y capaz de conservar el sabor del pasado sin renunciar al confort y las comodidades de hoy.",
    },
    name: "Franz Grillo",
    place: "Italia",
    flag: "🇮🇹",
    source: "Google",
  },
  {
    quote:
      "Una dimora storica del periodo liberty, ricercata e curata. Era la nostra prima esperienza nel Salento e ci siamo trovati benissimo.",
    lang: "it",
    t: {
      en: "A historic Liberty-era residence, refined and well cared for. It was our first time in Salento and we had a wonderful stay.",
      fr: "Une demeure historique de style Liberty, raffinée et soignée. C'était notre première fois dans le Salento et nous nous y sommes sentis très bien.",
      es: "Una residencia histórica de estilo Liberty, refinada y cuidada. Era nuestra primera vez en el Salento y nos encontramos de maravilla.",
    },
    name: "Pisacane",
    place: "Italia",
    flag: "🇮🇹",
    source: "Booking",
  },
  {
    quote:
      "Un soggiorno indimenticabile! Posizione eccezionale, arredamento curato e di gran gusto. Grazie per questa straordinaria esperienza, torneremo presto!",
    lang: "it",
    t: {
      en: "An unforgettable stay! Exceptional location, tasteful and beautifully curated interiors. Thank you for this extraordinary experience — we'll be back soon!",
      fr: "Un séjour inoubliable ! Emplacement exceptionnel, décoration soignée et pleine de goût. Merci pour cette expérience extraordinaire, nous reviendrons bientôt !",
      es: "¡Una estancia inolvidable! Ubicación excepcional, decoración cuidada y de gran gusto. ¡Gracias por esta experiencia extraordinaria, volveremos pronto!",
    },
    name: "Camilla",
    place: "Italia",
    flag: "🇮🇹",
    source: "Google",
  },
  {
    quote: "Un vrai coup de cœur ! Un lieu ancien plein de charme, rénové avec goût et modernité, incroyablement confortable.",
    lang: "fr",
    t: {
      it: "Un vero colpo di fulmine! Un luogo antico pieno di fascino, ristrutturato con gusto e modernità, incredibilmente confortevole.",
      en: "A real favourite! An old place full of charm, renovated with taste and modernity, incredibly comfortable.",
      es: "¡Un auténtico flechazo! Un lugar antiguo lleno de encanto, renovado con gusto y modernidad, increíblemente cómodo.",
    },
    name: "Falaize",
    place: "Francia",
    flag: "🇫🇷",
    source: "Booking",
  },
  {
    quote:
      "Palazzo storico in un punto strategico che unisce cultura e mare. Coccolati dal primo all'ultimo minuto dal personale gentilissimo. Esperienza da consigliare.",
    lang: "it",
    t: {
      en: "A historic palazzo in a strategic spot that blends culture and sea. Pampered from the first to the last minute by the wonderful staff. An experience to recommend.",
      fr: "Un palais historique idéalement situé, entre culture et mer. Choyés de la première à la dernière minute par un personnel adorable. Une expérience à recommander.",
      es: "Un palacio histórico en un punto estratégico que une cultura y mar. Mimados desde el primer hasta el último minuto por un personal amabilísimo. Una experiencia para recomendar.",
    },
    name: "Ruggero",
    place: "Italia",
    flag: "🇮🇹",
    source: "Google",
  },
  {
    quote:
      "The property was exquisite — a beautiful old home with architecture you can't find in new builds. Breakfast in the garden was wonderful. Would return.",
    lang: "en",
    t: {
      it: "La struttura era splendida — una bella casa antica con un'architettura che non si trova nelle nuove costruzioni. La colazione in giardino è stata meravigliosa. Ci torneremmo.",
      fr: "L'établissement était exquis — une belle maison ancienne avec une architecture introuvable dans le neuf. Le petit-déjeuner au jardin était merveilleux. Nous reviendrions.",
      es: "La propiedad era exquisita — una hermosa casa antigua con una arquitectura que no se encuentra en las construcciones nuevas. El desayuno en el jardín fue maravilloso. Volveríamos.",
    },
    name: "Levi",
    place: "Stati Uniti",
    flag: "🇺🇸",
    source: "Booking",
  },
  {
    quote:
      "Soggiorno fantastico, struttura storica e accogliente, personale molto disponibile. Posizione comodissima per il mare e il centro storico. Torneremo sicuramente.",
    lang: "it",
    t: {
      en: "A fantastic stay — a historic, welcoming property with very helpful staff. A very convenient base for the sea and the old town. We'll definitely be back.",
      fr: "Un séjour fantastique — une demeure historique et accueillante, un personnel très disponible. Un emplacement très pratique pour la mer et le centre historique. Nous reviendrons sûrement.",
      es: "Una estancia fantástica — un alojamiento histórico y acogedor, personal muy atento. Una ubicación muy cómoda para el mar y el centro histórico. Volveremos sin duda.",
    },
    name: "Marica",
    place: "Italia",
    flag: "🇮🇹",
    source: "Google",
  },
  {
    quote:
      "Un'esperienza davvero piacevole. Personale estremamente gentile e disponibile fin dall'arrivo: ci siamo sentiti subito a casa.",
    lang: "it",
    t: {
      en: "A truly pleasant experience. The staff were extremely kind and helpful from the moment we arrived: we felt at home right away.",
      fr: "Une expérience vraiment agréable. Un personnel extrêmement gentil et disponible dès l'arrivée : on s'est sentis chez nous tout de suite.",
      es: "Una experiencia realmente agradable. El personal, muy amable y atento desde la llegada: nos sentimos como en casa enseguida.",
    },
    name: "Vincenzo",
    place: "Italia",
    flag: "🇮🇹",
    source: "Booking",
  },
  {
    quote: "Je recommande vivement. Un accueil chaleureux, des chambres spacieuses et confortables, une jolie salle de bain.",
    lang: "fr",
    t: {
      it: "Consiglio vivamente. Accoglienza calorosa, camere spaziose e confortevoli, un bel bagno.",
      en: "Highly recommended. A warm welcome, spacious and comfortable rooms, a lovely bathroom.",
      es: "Lo recomiendo encarecidamente. Una acogida cálida, habitaciones amplias y cómodas, un bonito baño.",
    },
    name: "Agnès",
    place: "Francia",
    flag: "🇫🇷",
    source: "Booking",
  },
  {
    quote: "Struttura eccellente, pulita e accogliente. Personale gentilissimo, un palazzo splendido.",
    lang: "it",
    t: {
      en: "Excellent property, clean and welcoming. Wonderfully kind staff, a splendid palazzo.",
      fr: "Établissement excellent, propre et accueillant. Personnel très gentil, un palais splendide.",
      es: "Alojamiento excelente, limpio y acogedor. Personal amabilísimo, un palacio espléndido.",
    },
    name: "Isabella",
    place: "Italia",
    flag: "🇮🇹",
    source: "Booking",
  },
  {
    quote:
      "Ez egy csodálatos régi épület, ami ötvözi a múltat és a jelent! A szobák gyönyörűek, az ágy kényelmes, a fürdőszoba modern. Roberto vendégszeretete rendkívüli!",
    lang: "hu",
    t: {
      it: "Un edificio antico meraviglioso che unisce passato e presente! Le camere sono splendide, il letto comodo, il bagno moderno. L'ospitalità di Roberto è straordinaria!",
      en: "A wonderful old building that blends past and present! The rooms are beautiful, the bed comfortable, the bathroom modern. Roberto's hospitality is extraordinary!",
      fr: "Un merveilleux bâtiment ancien qui allie passé et présent ! Les chambres sont magnifiques, le lit confortable, la salle de bain moderne. L'hospitalité de Roberto est extraordinaire !",
      es: "¡Un maravilloso edificio antiguo que une pasado y presente! Las habitaciones son preciosas, la cama cómoda, el baño moderno. ¡La hospitalidad de Roberto es extraordinaria!",
    },
    name: "Csizmadia",
    place: "Ungheria",
    flag: "🇭🇺",
    source: "Booking",
  },
  {
    quote: "Personale gentile, accogliente e professionale. Consiglio la location.",
    lang: "it",
    t: {
      en: "Kind, welcoming and professional staff. I recommend the place.",
      fr: "Personnel gentil, accueillant et professionnel. Je recommande l'endroit.",
      es: "Personal amable, acogedor y profesional. Recomiendo el lugar.",
    },
    name: "Andrea",
    place: "Italia",
    flag: "🇮🇹",
    source: "Booking",
  },
];
