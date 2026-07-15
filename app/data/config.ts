// Configurazione centrale del sito. Aggiorna qui il link Booking.com
// non appena la struttura ha una pagina attiva sul portale.
export const BOOKING_URL: string | null = null; // null finché non c'è il link reale

// Contatti ufficiali Palazzo Vite.
export const CONTACT_EMAIL = "palazzovite@gmail.com";
export const CONTACT_PHONE = "3286244934"; // anche WhatsApp
export const CONTACT_PHONE_DISPLAY = "328 624 4934";

// Il form richiesta disponibilità invia via FormSubmit (nessuna chiave/backend):
// la mail arriva a CONTACT_EMAIL. Alla PRIMA richiesta FormSubmit invia una mail
// di attivazione una tantum a quell'indirizzo: va cliccato il link una volta,
// poi tutte le richieste vengono recapitate.
