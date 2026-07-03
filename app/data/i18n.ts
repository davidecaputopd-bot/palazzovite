export const locales = ["it", "en", "fr", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

export type SiteCopy = {
  skip: string;
  nav: {
    story: string;
    rooms: string;
    palace: string;
    location: string;
    availability: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    close: string;
    language: string;
  };
  hero: { eyebrow: string; description: string; discover: string; imageAlt: string };
  story: {
    eyebrow: string;
    title: [string, string];
    paragraphs: [string, string];
    imageAlt: string;
  };
  rooms: {
    eyebrow: string;
    title: [string, string];
    doubleBed: string;
    twinBeds: string;
    bathroom: string;
    photoSoon: string;
    request: string;
    bathroomImageAlt: string;
    descriptions: Record<string, string>;
  };
  spaces: {
    title: string;
    garden: [string, string];
    staircase: [string, string];
    terrace: [string, string];
  };
  location: {
    title: string;
    description: string;
    openMaps: string;
    mapTitle: string;
  };
  book: {
    title: string;
    description: string;
    directBooking: string;
    writeTo: string;
  };
  form: {
    sent: string;
    sentText: string;
    dateError: string;
    name: string;
    email: string;
    phone: string;
    guests: string;
    suite: string;
    undecided: string;
    arrival: string;
    departure: string;
    message: string;
    placeholder: string;
    sendError: string;
    sending: string;
    send: string;
  };
  sticky: string;
  meta: { title: string; description: string };
};

const roomDescriptions = {
  it: {
    aria: "Toni chiari, biancheria bianca e ritratti alle pareti. Il bagno, essenziale e curato, è definito da un grande specchio ad arco.",
    etere: "Pareti grigio-azzurre, una cassettiera antica con specchio originale e una porta-finestra sul balcone privato affacciato sulla bouganville.",
    fiamma: "Cementine originali e un comodino in legno laccato color ocra raccontano il carattere della dimora con pochi elementi scelti.",
    terra: "Cementine verdi e brune, legno laccato color ocra e un soffitto verde profondo compongono un ambiente raccolto.",
    mare: "Pareti verde salvia, un camino in legno scuro e la porta-finestra con persiane bianche conservano un'atmosfera domestica.",
  },
  en: {
    aria: "Soft tones, crisp white linen and portraits on the walls. The carefully pared-back bathroom is defined by a large arched mirror.",
    etere: "Blue-grey walls, an antique chest with its original mirror, and French doors opening onto a private balcony overlooking the bougainvillea.",
    fiamma: "Original cement tiles and an ochre-lacquered wooden bedside table express the house's character through a few considered details.",
    terra: "Green and brown cement tiles, ochre-lacquered wood and a deep green ceiling create an intimate atmosphere.",
    mare: "Sage-green walls, a dark wood fireplace and French doors with white shutters retain the ease of a private home.",
  },
  fr: {
    aria: "Tons clairs, linge blanc et portraits aux murs. Sobre et soignée, la salle de bains se distingue par un grand miroir cintré.",
    etere: "Murs bleu-gris, commode ancienne avec son miroir d'origine et porte-fenêtre ouvrant sur un balcon privé face aux bougainvilliers.",
    fiamma: "Carreaux de ciment d'origine et chevet en bois laqué ocre expriment le caractère de la demeure avec quelques détails choisis.",
    terra: "Carreaux de ciment verts et bruns, bois laqué ocre et plafond vert profond composent une atmosphère intime.",
    mare: "Murs vert sauge, cheminée en bois sombre et porte-fenêtre aux volets blancs conservent l'esprit d'une maison particulière.",
  },
  es: {
    aria: "Tonos claros, ropa de cama blanca y retratos en las paredes. El baño, sobrio y cuidado, se define por un gran espejo arqueado.",
    etere: "Paredes azul grisáceo, cómoda antigua con su espejo original y puerta acristalada a un balcón privado con vistas a la buganvilla.",
    fiamma: "Baldosas hidráulicas originales y una mesilla de madera lacada en ocre expresan el carácter de la casa con pocos detalles escogidos.",
    terra: "Baldosas verdes y marrones, madera lacada en ocre y un techo verde profundo crean un ambiente recogido.",
    mare: "Paredes verde salvia, chimenea de madera oscura y puerta acristalada con contraventanas blancas conservan el aire de una casa privada.",
  },
};

export const copies: Record<Locale, SiteCopy> = {
  it: {
    skip: "Salta al contenuto",
    nav: { story: "Storia", rooms: "Suite", palace: "La dimora", location: "Posizione", availability: "Richiedi disponibilità", openMenu: "Apri menu", closeMenu: "Chiudi menu", menu: "Menu", close: "Chiudi", language: "Lingua" },
    hero: { eyebrow: "Dimora storica · Copertino, Salento", description: "Una dimora ottocentesca nel centro storico di Copertino, tra il Castello Angioino e il verde degli agrumi.", discover: "Scopri la dimora", imageAlt: "Facciata di Palazzo Vite a Copertino" },
    story: { eyebrow: "La Dimora", title: ["Ottocentesca,", "aperta al presente."], paragraphs: ["Palazzo Vite è una dimora storica ottocentesca nel centro storico di Copertino, appena fuori le mura del Castello Angioino. La scala in pietra, la balaustra in ferro battuto e il soffitto decorato conservano il carattere originario del palazzo. Poco distante, il castello è un rilevante esempio di architettura militare rinascimentale in Puglia.", "Il restauro mette in dialogo questa architettura con un'accoglienza contemporanea. Mobili antichi recuperati, pezzi di design e opere d'arte compongono ambienti riservati, curati senza perdere la loro naturalezza."], imageAlt: "Soffitto decorato sopra la scala originale di Palazzo Vite, dimora storica a Copertino" },
    rooms: { eyebrow: "Le Suite", title: ["Cinque suite,", "cinque elementi."], doubleBed: "Letto matrimoniale", twinBeds: "Due letti singoli", bathroom: "Bagno", photoSoon: "Foto in arrivo", request: "Richiedi per questa suite →", bathroomImageAlt: "Bagno della suite", descriptions: roomDescriptions.it },
    spaces: { title: "Gli spazi della dimora.", garden: ["Il Giardino", "Un ampio giardino attrezzato tra agrumi e spazi verdi, per la colazione, un aperitivo o una pausa all'aperto."], staircase: ["La Scala", "La scala in pietra e la ringhiera originale conducono agli ambienti comuni: sala colazioni, work room e angolo cottura."], terrace: ["La Terrazza", "Una terrazza attrezzata tra le bouganville, con vista sul Castello Angioino e sui tetti del centro storico."] },
    location: { title: "Copertino, nel Salento.", description: "Palazzo Vite si trova nel centro storico di Copertino, appena fuori le mura del Castello Angioino. Da qui si raggiungono facilmente Lecce, Porto Cesareo, Gallipoli e le principali località della costa ionica. Gli ospiti dispongono inoltre di un ampio parcheggio privato.", openMaps: "Apri in Google Maps →", mapTitle: "Mappa di Palazzo Vite a Copertino" },
    book: { title: "Richiedi disponibilità.", description: "Indicaci le date, il numero di ospiti e la suite che preferisci. Ti risponderemo entro 24 ore con la disponibilità.", directBooking: "Oppure prenota direttamente su Booking.com", writeTo: "oppure scrivi direttamente a" },
    form: { sent: "Richiesta inviata.", sentText: "Ti risponderemo al più presto con la disponibilità richiesta.", dateError: "La data di partenza deve essere dopo l'arrivo.", name: "Nome e cognome *", email: "Email *", phone: "Telefono", guests: "Numero ospiti", suite: "Suite di interesse", undecided: "Non so ancora", arrival: "Arrivo", departure: "Partenza", message: "Messaggio", placeholder: "Preferenze, orario di arrivo o altre richieste.", sendError: "Invio non riuscito. Riprova oppure scrivi a", sending: "Invio in corso...", send: "Invia richiesta" },
    sticky: "Dimora storica · Copertino, Salento",
    meta: { title: "Palazzo Vite · Dimora storica e suite a Copertino", description: "Palazzo Vite è una dimora storica ottocentesca nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato." },
  },
  en: {
    skip: "Skip to content",
    nav: { story: "Story", rooms: "Suites", palace: "The house", location: "Location", availability: "Check availability", openMenu: "Open menu", closeMenu: "Close menu", menu: "Menu", close: "Close", language: "Language" },
    hero: { eyebrow: "Historic house · Copertino, Salento", description: "A nineteenth-century residence in Copertino's old town, between the Angevin Castle and a garden of citrus trees.", discover: "Discover the house", imageAlt: "Façade of Palazzo Vite in Copertino" },
    story: { eyebrow: "The House", title: ["Nineteenth-century,", "open to the present."], paragraphs: ["Palazzo Vite is a historic nineteenth-century residence in Copertino's old town, just beyond the walls of the Angevin Castle. Its stone staircase, wrought-iron balustrade and decorated ceiling preserve the house's original character. Nearby, the castle stands as a significant example of Renaissance military architecture in Puglia.", "The restoration brings this architecture into conversation with contemporary hospitality. Restored antique furniture, design pieces and works of art shape private, carefully considered rooms that still feel natural and lived in."], imageAlt: "Decorated ceiling above the original staircase at Palazzo Vite in Copertino" },
    rooms: { eyebrow: "The Suites", title: ["Five suites,", "five elements."], doubleBed: "Double bed", twinBeds: "Two single beds", bathroom: "Bathroom", photoSoon: "Photos coming soon", request: "Enquire about this suite →", bathroomImageAlt: "Bathroom in the", descriptions: roomDescriptions.en },
    spaces: { title: "Spaces to share.", garden: ["The Garden", "A generous garden among citrus trees and greenery, arranged for breakfast, an aperitivo or a quiet pause outdoors."], staircase: ["The Staircase", "The stone staircase and original balustrade lead to the shared kitchen corner, breakfast room and dedicated work room."], terrace: ["The Terrace", "A furnished terrace framed by bougainvillea, overlooking the Angevin Castle and the rooftops of the old town."] },
    location: { title: "Copertino, Salento.", description: "Palazzo Vite is in Copertino's old town, just beyond the walls of the Angevin Castle. Lecce, Porto Cesareo, Gallipoli and the Ionian coast are within easy reach. Guests also have access to a large private car park.", openMaps: "Open in Google Maps →", mapTitle: "Map of Palazzo Vite in Copertino" },
    book: { title: "Check availability.", description: "Tell us your dates, number of guests and preferred suite. We will reply within 24 hours with availability.", directBooking: "Or book directly on Booking.com", writeTo: "or email us directly at" },
    form: { sent: "Request sent.", sentText: "We will be in touch shortly with the requested availability.", dateError: "Departure must be after arrival.", name: "Full name *", email: "Email *", phone: "Phone", guests: "Number of guests", suite: "Preferred suite", undecided: "Not sure yet", arrival: "Arrival", departure: "Departure", message: "Message", placeholder: "Preferences, arrival time or other requests.", sendError: "We could not send your request. Please try again or email", sending: "Sending...", send: "Send request" },
    sticky: "Historic house · Copertino, Salento",
    meta: { title: "Palazzo Vite · Historic suites in Copertino, Salento", description: "A nineteenth-century residence in Copertino's old town, near the Angevin Castle, with five suites, a garden, terrace and private parking." },
  },
  fr: {
    skip: "Aller au contenu",
    nav: { story: "Histoire", rooms: "Suites", palace: "La demeure", location: "Situation", availability: "Vérifier les disponibilités", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", menu: "Menu", close: "Fermer", language: "Langue" },
    hero: { eyebrow: "Demeure historique · Copertino, Salento", description: "Une demeure du XIXe siècle dans le centre historique de Copertino, entre le château angevin et un jardin d'agrumes.", discover: "Découvrir la demeure", imageAlt: "Façade de Palazzo Vite à Copertino" },
    story: { eyebrow: "La Demeure", title: ["Du XIXe siècle,", "ouverte au présent."], paragraphs: ["Palazzo Vite est une demeure historique du XIXe siècle dans le centre ancien de Copertino, juste au-delà des murs du château angevin. L'escalier en pierre, la balustrade en fer forgé et le plafond décoré préservent son caractère d'origine. Tout proche, le château constitue un remarquable exemple d'architecture militaire de la Renaissance dans les Pouilles.", "La restauration fait dialoguer cette architecture avec un accueil contemporain. Meubles anciens restaurés, pièces de design et œuvres d'art composent des espaces intimes et soignés, sans rien perdre de leur naturel."], imageAlt: "Plafond décoré au-dessus de l'escalier d'origine de Palazzo Vite à Copertino" },
    rooms: { eyebrow: "Les Suites", title: ["Cinq suites,", "cinq éléments."], doubleBed: "Lit double", twinBeds: "Deux lits simples", bathroom: "Salle de bains", photoSoon: "Photos à venir", request: "Demander cette suite →", bathroomImageAlt: "Salle de bains de la suite", descriptions: roomDescriptions.fr },
    spaces: { title: "Les espaces de la demeure.", garden: ["Le Jardin", "Un grand jardin aménagé parmi les agrumes et la verdure, pour le petit-déjeuner, un apéritif ou une pause en plein air."], staircase: ["L'Escalier", "L'escalier en pierre et sa balustrade d'origine mènent à la kitchenette commune, à la salle du petit-déjeuner et à l'espace de travail."], terrace: ["La Terrasse", "Une terrasse aménagée parmi les bougainvilliers, avec vue sur le château angevin et les toits du centre ancien."] },
    location: { title: "Copertino, dans le Salento.", description: "Palazzo Vite se trouve dans le centre ancien de Copertino, juste au-delà des murs du château angevin. Lecce, Porto Cesareo, Gallipoli et la côte ionienne sont facilement accessibles. Un grand parking privé est également réservé aux hôtes.", openMaps: "Ouvrir dans Google Maps →", mapTitle: "Plan de Palazzo Vite à Copertino" },
    book: { title: "Vérifier les disponibilités.", description: "Indiquez vos dates, le nombre de personnes et la suite souhaitée. Nous vous répondrons sous 24 heures.", directBooking: "Ou réserver directement sur Booking.com", writeTo: "ou écrivez-nous à" },
    form: { sent: "Demande envoyée.", sentText: "Nous vous répondrons rapidement avec les disponibilités demandées.", dateError: "La date de départ doit être postérieure à l'arrivée.", name: "Nom et prénom *", email: "E-mail *", phone: "Téléphone", guests: "Nombre de personnes", suite: "Suite souhaitée", undecided: "Je ne sais pas encore", arrival: "Arrivée", departure: "Départ", message: "Message", placeholder: "Préférences, heure d'arrivée ou autre demande.", sendError: "L'envoi a échoué. Réessayez ou écrivez à", sending: "Envoi en cours...", send: "Envoyer la demande" },
    sticky: "Demeure historique · Copertino, Salento",
    meta: { title: "Palazzo Vite · Suites dans une demeure historique à Copertino", description: "Demeure du XIXe siècle dans le centre ancien de Copertino, près du château angevin, avec cinq suites, jardin, terrasse et parking privé." },
  },
  es: {
    skip: "Saltar al contenido",
    nav: { story: "Historia", rooms: "Suites", palace: "La casa", location: "Ubicación", availability: "Consultar disponibilidad", openMenu: "Abrir menú", closeMenu: "Cerrar menú", menu: "Menú", close: "Cerrar", language: "Idioma" },
    hero: { eyebrow: "Casa histórica · Copertino, Salento", description: "Una casa del siglo XIX en el centro histórico de Copertino, entre el Castillo Angevino y un jardín de cítricos.", discover: "Descubrir la casa", imageAlt: "Fachada de Palazzo Vite en Copertino" },
    story: { eyebrow: "La Casa", title: ["Del siglo XIX,", "abierta al presente."], paragraphs: ["Palazzo Vite es una casa histórica del siglo XIX en el casco antiguo de Copertino, junto a las murallas del Castillo Angevino. La escalera de piedra, la barandilla de hierro forjado y el techo decorado conservan su carácter original. Muy cerca, el castillo es un destacado ejemplo de arquitectura militar renacentista en Apulia.", "La restauración pone esta arquitectura en diálogo con una hospitalidad contemporánea. Muebles antiguos restaurados, piezas de diseño y obras de arte dan forma a espacios íntimos y cuidados que conservan su naturalidad."], imageAlt: "Techo decorado sobre la escalera original de Palazzo Vite en Copertino" },
    rooms: { eyebrow: "Las Suites", title: ["Cinco suites,", "cinco elementos."], doubleBed: "Cama doble", twinBeds: "Dos camas individuales", bathroom: "Baño", photoSoon: "Fotos próximamente", request: "Consultar esta suite →", bathroomImageAlt: "Baño de la suite", descriptions: roomDescriptions.es },
    spaces: { title: "Los espacios de la casa.", garden: ["El Jardín", "Un amplio jardín acondicionado entre cítricos y zonas verdes, para desayunar, tomar un aperitivo o descansar al aire libre."], staircase: ["La Escalera", "La escalera de piedra y la barandilla original conducen a la cocina compartida, la sala de desayunos y la zona de trabajo."], terrace: ["La Terraza", "Una terraza equipada entre buganvillas, con vistas al Castillo Angevino y a los tejados del centro histórico."] },
    location: { title: "Copertino, en el Salento.", description: "Palazzo Vite se encuentra en el centro histórico de Copertino, junto a las murallas del Castillo Angevino. Lecce, Porto Cesareo, Gallipoli y la costa jónica están a poca distancia. Los huéspedes disponen además de un amplio aparcamiento privado.", openMaps: "Abrir en Google Maps →", mapTitle: "Mapa de Palazzo Vite en Copertino" },
    book: { title: "Consultar disponibilidad.", description: "Indícanos las fechas, el número de huéspedes y la suite que prefieres. Responderemos en un plazo de 24 horas.", directBooking: "O reserva directamente en Booking.com", writeTo: "o escríbenos a" },
    form: { sent: "Solicitud enviada.", sentText: "Te responderemos pronto con la disponibilidad solicitada.", dateError: "La fecha de salida debe ser posterior a la llegada.", name: "Nombre y apellidos *", email: "Correo electrónico *", phone: "Teléfono", guests: "Número de huéspedes", suite: "Suite preferida", undecided: "Aún no lo sé", arrival: "Llegada", departure: "Salida", message: "Mensaje", placeholder: "Preferencias, hora de llegada u otras solicitudes.", sendError: "No se pudo enviar. Inténtalo de nuevo o escribe a", sending: "Enviando...", send: "Enviar solicitud" },
    sticky: "Casa histórica · Copertino, Salento",
    meta: { title: "Palazzo Vite · Suites en una casa histórica de Copertino", description: "Casa del siglo XIX en el centro histórico de Copertino, cerca del Castillo Angevino, con cinco suites, jardín, terraza y aparcamiento privado." },
  },
};

export function localePath(locale: Locale) {
  return locale === "it" ? "/" : `/${locale}`;
}
