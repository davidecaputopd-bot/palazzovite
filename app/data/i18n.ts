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
  highlights: { label: string; value: string }[];
  story: {
    eyebrow: string;
    title: [string, string];
    paragraphs: [string, string];
    details: [string, string][];
    imageAlt: string;
    detailImageAlt: string;
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
    intro: string;
    garden: [string, string];
    breakfast: [string, string];
    work: [string, string];
    terrace: [string, string];
    galleryLabel: string;
  };
  practical: {
    eyebrow: string;
    title: string;
    intro: string;
    items: [string, string][];
  };
  location: {
    title: string;
    description: string;
    openMaps: string;
    loadMap: string;
    mapConsent: string;
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
    privacyConsent: string;
    privacyLink: string;
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
    hero: { eyebrow: "Dimora storica · Copertino, Salento", description: "Una dimora dei primi del Novecento nel centro storico di Copertino, tra il Castello Angioino e il verde degli agrumi.", discover: "Scopri la dimora", imageAlt: "Facciata di Palazzo Vite a Copertino" },
    highlights: [{ label: "Suite", value: "5 camere" }, { label: "Esterni", value: "Giardino e terrazza" }, { label: "Arrivo", value: "Parcheggio privato" }, { label: "Intorno", value: "Lecce e costa ionica" }],
    story: { eyebrow: "La Dimora", title: ["Del primo Novecento,", "aperta al presente."], paragraphs: ["Palazzo Vite è una dimora storica dei primi del Novecento nel centro storico di Copertino, appena fuori le mura del Castello Angioino. La scala in pietra, la balaustra in ferro battuto e il soffitto decorato conservano il carattere originario del palazzo. Poco distante, il castello è un rilevante esempio di architettura militare rinascimentale in Puglia.", "Il restauro mette in dialogo questa architettura con un'accoglienza contemporanea. Mobili antichi recuperati, pezzi di design e opere d'arte compongono ambienti riservati, curati senza perdere la loro naturalezza."], details: [["Origine", "Dimora dei primi del Novecento"], ["Carattere", "Arredi restaurati e design"], ["Posizione", "Fuori le mura del Castello"]], imageAlt: "Soffitto decorato sopra la scala originale di Palazzo Vite, dimora storica a Copertino", detailImageAlt: "Dettaglio architettonico di Palazzo Vite" },
    rooms: { eyebrow: "Le Suite", title: ["Cinque suite,", "cinque elementi."], doubleBed: "Letto matrimoniale", twinBeds: "Due letti singoli", bathroom: "Bagno", photoSoon: "Foto in arrivo", request: "Richiedi per questa suite →", bathroomImageAlt: "Bagno della suite", descriptions: roomDescriptions.it },
    spaces: { title: "Gli spazi comuni.", intro: "Palazzo Vite è pensato per alternare la riservatezza delle suite a luoghi condivisi, curati e semplici da vivere durante il soggiorno.", garden: ["Il Giardino", "Un giardino attrezzato tra agrumi e spazi verdi, per la colazione, un aperitivo o una pausa all'aperto."], breakfast: ["Cucina", "La sala colazioni e l'angolo cottura in comune offrono uno spazio raccolto per iniziare la giornata o preparare qualcosa con calma."], work: ["Work room", "Una stanza tranquilla per leggere, lavorare o organizzare le tappe del viaggio nel Salento."], terrace: ["La Terrazza", "Una terrazza attrezzata tra le bouganville, con vista sul Castello Angioino e sui tetti del centro storico."], galleryLabel: "Sfoglia gli ambienti" }, practical: { eyebrow: "Informazioni utili", title: "Vivere Palazzo Vite.", intro: "Il nome racchiude il senso del luogo: a poche centinaia di metri crescono i nostri vigneti, da cui nasce il vino che accompagna la vita di Palazzo Vite. Un invito a rallentare, condividere e sentirsi a casa.", items: [["Check-in", "dalle 14:00 alle 21:00"], ["Check-out", "entro le 10:00"], ["Colazione", "dalle 8:00 alle 10:00"], ["Wi-Fi", "gratuito in tutta la struttura"], ["Parcheggio", "privato, riservato agli ospiti"]] },
    location: { title: "Copertino, nel Salento.", description: "Palazzo Vite si trova nel centro storico di Copertino, appena fuori le mura del Castello Angioino. Da qui si raggiungono facilmente Lecce, Porto Cesareo, Gallipoli e le principali località della costa ionica. Gli ospiti dispongono inoltre di un ampio parcheggio privato.", openMaps: "Apri in Google Maps →", loadMap: "Mostra la mappa", mapConsent: "La mappa è fornita da Google Maps e viene caricata solo dopo il tuo consenso.", mapTitle: "Mappa di Palazzo Vite a Copertino" },
    book: { title: "Richiedi disponibilità.", description: "Indicaci le date, il numero di ospiti e la suite che preferisci. Ti risponderemo entro 24 ore con la disponibilità.", directBooking: "Oppure prenota direttamente su Booking.com", writeTo: "oppure scrivi direttamente a" },
    form: { sent: "Richiesta inviata.", sentText: "Ti risponderemo al più presto con la disponibilità richiesta.", dateError: "La data di partenza deve essere dopo l'arrivo.", name: "Nome e cognome *", email: "Email *", phone: "Telefono", guests: "Numero ospiti", suite: "Suite di interesse", undecided: "Non so ancora", arrival: "Arrivo", departure: "Partenza", message: "Messaggio", placeholder: "Preferenze, orario di arrivo o altre richieste.", privacyConsent: "Dichiaro di aver preso visione dell’informativa privacy per l’invio della richiesta.", privacyLink: "Leggi l’informativa privacy", sendError: "Invio non riuscito. Riprova oppure scrivi a", sending: "Invio in corso...", send: "Invia richiesta" },
    sticky: "Dimora storica · Copertino, Salento",
    meta: { title: "Palazzo Vite · Dimora storica e suite a Copertino", description: "Palazzo Vite è una dimora storica dei primi del Novecento nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato." },
  },
  en: {
    skip: "Skip to content",
    nav: { story: "Story", rooms: "Suites", palace: "The house", location: "Location", availability: "Check availability", openMenu: "Open menu", closeMenu: "Close menu", menu: "Menu", close: "Close", language: "Language" },
    hero: { eyebrow: "Historic house · Copertino, Salento", description: "A early-twentieth-century residence in Copertino's old town, between the Angevin Castle and a garden of citrus trees.", discover: "Discover the house", imageAlt: "Façade of Palazzo Vite in Copertino" },
    highlights: [{ label: "Suites", value: "5 rooms" }, { label: "Outdoors", value: "Garden and terrace" }, { label: "Arrival", value: "Private parking" }, { label: "Nearby", value: "Lecce and Ionian coast" }],
    story: { eyebrow: "The House", title: ["Early twentieth-century,", "open to the present."], paragraphs: ["Palazzo Vite is a historic early-twentieth-century residence in Copertino's old town, just beyond the walls of the Angevin Castle. Its stone staircase, wrought-iron balustrade and decorated ceiling preserve the house's original character. Nearby, the castle stands as a significant example of Renaissance military architecture in Puglia.", "The restoration brings this architecture into conversation with contemporary hospitality. Restored antique furniture, design pieces and works of art shape private, carefully considered rooms that still feel natural and lived in."], details: [["Origins", "Early twentieth-century house"], ["Character", "Restored antiques and design"], ["Position", "Beyond the castle walls"]], imageAlt: "Decorated ceiling above the original staircase at Palazzo Vite in Copertino", detailImageAlt: "Architectural detail at Palazzo Vite" },
    rooms: { eyebrow: "The Suites", title: ["Five suites,", "five elements."], doubleBed: "Double bed", twinBeds: "Two single beds", bathroom: "Bathroom", photoSoon: "Photos coming soon", request: "Enquire about this suite →", bathroomImageAlt: "Bathroom in the", descriptions: roomDescriptions.en },
    spaces: { title: "Shared spaces.", intro: "Palazzo Vite balances the privacy of its suites with shared areas that are considered, quiet and easy to inhabit throughout the stay.", garden: ["The Garden", "A furnished garden among citrus trees and greenery, arranged for breakfast, an aperitivo or a quiet pause outdoors."], breakfast: ["Kitchen", "The breakfast room and shared kitchenette offer an intimate place to start the day or prepare something at an unhurried pace."], work: ["Work room", "A quiet room for reading, working or planning the next stages of a journey through Salento."], terrace: ["The Terrace", "A furnished terrace framed by bougainvillea, overlooking the Angevin Castle and the rooftops of the old town."], galleryLabel: "Browse the spaces" }, practical: { eyebrow: "Useful information", title: "Living at Palazzo Vite.", intro: "The name holds the meaning of the place: a few hundred metres away grow our vineyards, source of the wine that accompanies life at Palazzo Vite. An invitation to slow down, share and feel at home.", items: [["Check-in", "2:00-9:00 pm"], ["Check-out", "by 10:00 am"], ["Breakfast", "served 8:00-10:00 am"], ["Wi-Fi", "free throughout"], ["Parking", "private, for guests"]] },
    location: { title: "Copertino, Salento.", description: "Palazzo Vite is in Copertino's old town, just beyond the walls of the Angevin Castle. Lecce, Porto Cesareo, Gallipoli and the Ionian coast are within easy reach. Guests also have access to a large private car park.", openMaps: "Open in Google Maps →", loadMap: "Show map", mapConsent: "The map is provided by Google Maps and is loaded only after your consent.", mapTitle: "Map of Palazzo Vite in Copertino" },
    book: { title: "Check availability.", description: "Tell us your dates, number of guests and preferred suite. We will reply within 24 hours with availability.", directBooking: "Or book directly on Booking.com", writeTo: "or email us directly at" },
    form: { sent: "Request sent.", sentText: "We will be in touch shortly with the requested availability.", dateError: "Departure must be after arrival.", name: "Full name *", email: "Email *", phone: "Phone", guests: "Number of guests", suite: "Preferred suite", undecided: "Not sure yet", arrival: "Arrival", departure: "Departure", message: "Message", placeholder: "Preferences, arrival time or other requests.", privacyConsent: "I confirm that I have read the privacy notice before sending this request.", privacyLink: "Read the privacy notice", sendError: "We could not send your request. Please try again or email", sending: "Sending...", send: "Send request" },
    sticky: "Historic house · Copertino, Salento",
    meta: { title: "Palazzo Vite · Historic suites in Copertino, Salento", description: "A early-twentieth-century residence in Copertino's old town, near the Angevin Castle, with five suites, a garden, terrace and private parking." },
  },
  fr: {
    skip: "Aller au contenu",
    nav: { story: "Histoire", rooms: "Suites", palace: "La demeure", location: "Situation", availability: "Vérifier les disponibilités", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", menu: "Menu", close: "Fermer", language: "Langue" },
    hero: { eyebrow: "Demeure historique · Copertino, Salento", description: "Une demeure du début du XXe siècle dans le centre historique de Copertino, entre le château angevin et un jardin d'agrumes.", discover: "Découvrir la demeure", imageAlt: "Façade de Palazzo Vite à Copertino" },
    highlights: [{ label: "Suites", value: "5 chambres" }, { label: "Extérieurs", value: "Jardin et terrasse" }, { label: "Arrivée", value: "Parking privé" }, { label: "À proximité", value: "Lecce et côte ionienne" }],
    story: { eyebrow: "La Demeure", title: ["Du début du XXe siècle,", "ouverte au présent."], paragraphs: ["Palazzo Vite est une demeure historique du début du XXe siècle dans le centre ancien de Copertino, juste au-delà des murs du château angevin. L'escalier en pierre, la balustrade en fer forgé et le plafond décoré préservent son caractère d'origine. Tout proche, le château constitue un remarquable exemple d'architecture militaire de la Renaissance dans les Pouilles.", "La restauration fait dialoguer cette architecture avec un accueil contemporain. Meubles anciens restaurés, pièces de design et œuvres d'art composent des espaces intimes et soignés, sans rien perdre de leur naturel."], details: [["Origine", "Demeure du début du XXe siècle"], ["Caractère", "Antiquités restaurées et design"], ["Situation", "Au-delà des murs du château"]], imageAlt: "Plafond décoré au-dessus de l'escalier d'origine de Palazzo Vite à Copertino", detailImageAlt: "Détail architectural de Palazzo Vite" },
    rooms: { eyebrow: "Les Suites", title: ["Cinq suites,", "cinq éléments."], doubleBed: "Lit double", twinBeds: "Deux lits simples", bathroom: "Salle de bains", photoSoon: "Photos à venir", request: "Demander cette suite →", bathroomImageAlt: "Salle de bains de la suite", descriptions: roomDescriptions.fr },
    spaces: { title: "Les espaces communs.", intro: "Palazzo Vite associe l'intimité des suites à des espaces partagés, soignés et faciles à vivre tout au long du séjour.", garden: ["Le Jardin", "Un jardin aménagé parmi les agrumes et la verdure, pour le petit-déjeuner, un apéritif ou une pause en plein air."], breakfast: ["Cuisine", "La salle du petit-déjeuner et la kitchenette commune offrent un lieu intime pour commencer la journée ou préparer quelque chose tranquillement."], work: ["Work room", "Une pièce calme pour lire, travailler ou organiser les étapes d'un voyage dans le Salento."], terrace: ["La Terrasse", "Une terrasse aménagée parmi les bougainvilliers, avec vue sur le château angevin et les toits du centre ancien."], galleryLabel: "Parcourir les espaces" }, practical: { eyebrow: "Informations pratiques", title: "Vivre Palazzo Vite.", intro: "Le nom porte le sens du lieu : à quelques centaines de mètres poussent nos vignes, d'où naît le vin qui accompagne la vie de Palazzo Vite. Une invitation à ralentir, partager et se sentir chez soi.", items: [["Arrivée", "de 14h00 à 21h00"], ["Départ", "avant 10h00"], ["Petit-déjeuner", "servi de 8h00 à 10h00"], ["Wi-Fi", "gratuit partout"], ["Parking", "privé, réservé aux hôtes"]] },
    location: { title: "Copertino, dans le Salento.", description: "Palazzo Vite se trouve dans le centre ancien de Copertino, juste au-delà des murs du château angevin. Lecce, Porto Cesareo, Gallipoli et la côte ionienne sont facilement accessibles. Un grand parking privé est également réservé aux hôtes.", openMaps: "Ouvrir dans Google Maps →", loadMap: "Afficher la carte", mapConsent: "La carte est fournie par Google Maps et n’est chargée qu’après votre consentement.", mapTitle: "Plan de Palazzo Vite à Copertino" },
    book: { title: "Vérifier les disponibilités.", description: "Indiquez vos dates, le nombre de personnes et la suite souhaitée. Nous vous répondrons sous 24 heures.", directBooking: "Ou réserver directement sur Booking.com", writeTo: "ou écrivez-nous à" },
    form: { sent: "Demande envoyée.", sentText: "Nous vous répondrons rapidement avec les disponibilités demandées.", dateError: "La date de départ doit être postérieure à l'arrivée.", name: "Nom et prénom *", email: "E-mail *", phone: "Téléphone", guests: "Nombre de personnes", suite: "Suite souhaitée", undecided: "Je ne sais pas encore", arrival: "Arrivée", departure: "Départ", message: "Message", placeholder: "Préférences, heure d'arrivée ou autre demande.", privacyConsent: "Je confirme avoir pris connaissance de la notice de confidentialité avant l’envoi de cette demande.", privacyLink: "Lire la notice de confidentialité", sendError: "L'envoi a échoué. Réessayez ou écrivez à", sending: "Envoi en cours...", send: "Envoyer la demande" },
    sticky: "Demeure historique · Copertino, Salento",
    meta: { title: "Palazzo Vite · Suites dans une demeure historique à Copertino", description: "Demeure du début du XXe siècle dans le centre ancien de Copertino, près du château angevin, avec cinq suites, jardin, terrasse et parking privé." },
  },
  es: {
    skip: "Saltar al contenido",
    nav: { story: "Historia", rooms: "Suites", palace: "La casa", location: "Ubicación", availability: "Consultar disponibilidad", openMenu: "Abrir menú", closeMenu: "Cerrar menú", menu: "Menú", close: "Cerrar", language: "Idioma" },
    hero: { eyebrow: "Casa histórica · Copertino, Salento", description: "Una casa de principios del siglo XX en el centro histórico de Copertino, entre el Castillo Angevino y un jardín de cítricos.", discover: "Descubrir la casa", imageAlt: "Fachada de Palazzo Vite en Copertino" },
    highlights: [{ label: "Suites", value: "5 habitaciones" }, { label: "Exterior", value: "Jardín y terraza" }, { label: "Llegada", value: "Aparcamiento privado" }, { label: "Cerca", value: "Lecce y costa jónica" }],
    story: { eyebrow: "La Casa", title: ["De principios del siglo XX,", "abierta al presente."], paragraphs: ["Palazzo Vite es una casa histórica de principios del siglo XX en el casco antiguo de Copertino, junto a las murallas del Castillo Angevino. La escalera de piedra, la barandilla de hierro forjado y el techo decorado conservan su carácter original. Muy cerca, el castillo es un destacado ejemplo de arquitectura militar renacentista en Apulia.", "La restauración pone esta arquitectura en diálogo con una hospitalidad contemporánea. Muebles antiguos restaurados, piezas de diseño y obras de arte dan forma a espacios íntimos y cuidados que conservan su naturalidad."], details: [["Origen", "Casa de principios del siglo XX"], ["Carácter", "Antigüedades restauradas y diseño"], ["Ubicación", "Junto a las murallas del castillo"]], imageAlt: "Techo decorado sobre la escalera original de Palazzo Vite en Copertino", detailImageAlt: "Detalle arquitectónico de Palazzo Vite" },
    rooms: { eyebrow: "Las Suites", title: ["Cinco suites,", "cinco elementos."], doubleBed: "Cama doble", twinBeds: "Dos camas individuales", bathroom: "Baño", photoSoon: "Fotos próximamente", request: "Consultar esta suite →", bathroomImageAlt: "Baño de la suite", descriptions: roomDescriptions.es },
    spaces: { title: "Los espacios comunes.", intro: "Palazzo Vite combina la privacidad de sus suites con zonas compartidas cuidadas, tranquilas y fáciles de vivir durante la estancia.", garden: ["El Jardín", "Un jardín acondicionado entre cítricos y zonas verdes, para desayunar, tomar un aperitivo o descansar al aire libre."], breakfast: ["Cocina", "La sala de desayunos y la pequeña cocina compartida ofrecen un lugar íntimo para empezar el día o preparar algo con calma."], work: ["Work room", "Una estancia tranquila para leer, trabajar u organizar las etapas de un viaje por el Salento."], terrace: ["La Terraza", "Una terraza equipada entre buganvillas, con vistas al Castillo Angevino y a los tejados del centro histórico."], galleryLabel: "Recorre los espacios" }, practical: { eyebrow: "Información útil", title: "Vivir Palazzo Vite.", intro: "El nombre encierra el sentido del lugar: a pocos cientos de metros crecen nuestros viñedos, de los que nace el vino que acompaña la vida de Palazzo Vite. Una invitación a ir más despacio, compartir y sentirse en casa.", items: [["Check-in", "de 14:00 a 21:00"], ["Check-out", "antes de las 10:00"], ["Desayuno", "de 8:00 a 10:00"], ["Wi-Fi", "gratis en todo el alojamiento"], ["Aparcamiento", "privado para huéspedes"]] },
    location: { title: "Copertino, en el Salento.", description: "Palazzo Vite se encuentra en el centro histórico de Copertino, junto a las murallas del Castillo Angevino. Lecce, Porto Cesareo, Gallipoli y la costa jónica están a poca distancia. Los huéspedes disponen además de un amplio aparcamiento privado.", openMaps: "Abrir en Google Maps →", loadMap: "Mostrar mapa", mapConsent: "El mapa lo proporciona Google Maps y se carga solo después de tu consentimiento.", mapTitle: "Mapa de Palazzo Vite en Copertino" },
    book: { title: "Consultar disponibilidad.", description: "Indícanos las fechas, el número de huéspedes y la suite que prefieres. Responderemos en un plazo de 24 horas.", directBooking: "O reserva directamente en Booking.com", writeTo: "o escríbenos a" },
    form: { sent: "Solicitud enviada.", sentText: "Te responderemos pronto con la disponibilidad solicitada.", dateError: "La fecha de salida debe ser posterior a la llegada.", name: "Nombre y apellidos *", email: "Correo electrónico *", phone: "Teléfono", guests: "Número de huéspedes", suite: "Suite preferida", undecided: "Aún no lo sé", arrival: "Llegada", departure: "Salida", message: "Mensaje", placeholder: "Preferencias, hora de llegada u otras solicitudes.", privacyConsent: "Declaro haber leído la política de privacidad antes de enviar esta solicitud.", privacyLink: "Leer la política de privacidad", sendError: "No se pudo enviar. Inténtalo de nuevo o escribe a", sending: "Enviando...", send: "Enviar solicitud" },
    sticky: "Casa histórica · Copertino, Salento",
    meta: { title: "Palazzo Vite · Suites en una casa histórica de Copertino", description: "Casa de principios del siglo XX en el centro histórico de Copertino, cerca del Castillo Angevino, con cinco suites, jardín, terraza y aparcamiento privado." },
  },
};

export function localePath(locale: Locale) {
  return locale === "it" ? "/" : `/${locale}`;
}
