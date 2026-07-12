// Configurazione centrale del sito. Aggiorna qui il link Booking.com
// non appena la struttura ha una pagina attiva sul portale.
export const BOOKING_URL: string | null = null; // null finché non c'è il link reale
export const CONTACT_EMAIL = "info@palazzovite.com";

// Chiave Web3Forms per l'invio del form di contatto senza backend.
// IMPORTANTE: la chiave deve essere generata per l'indirizzo palazzovite@gmail.com
// (Web3Forms recapita alla mail proprietaria della chiave). Genera su https://web3forms.com.
// L'oggetto della mail è strutturato lato client: "Richiesta disponibilità - [Camera] - [Date]".
export const WEB3FORMS_ACCESS_KEY = "INSERISCI_QUI_LA_CHIAVE";
