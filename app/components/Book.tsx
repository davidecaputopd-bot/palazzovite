import { BOOKING_URL, CONTACT_EMAIL } from "@/app/data/config";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";

export default function Book() {
  return (
    <section id="prenota" className="bg-[var(--stone-deep)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mx-auto text-center mb-14">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">Prenota</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">
          Richiedi disponibilità.
        </h2>
        <p className="font-body font-light text-[var(--ink-soft)] max-w-md mx-auto">
          Compila il form con le date che ti interessano: ti rispondiamo a
          conferma di disponibilità entro 24 ore.
        </p>
        {BOOKING_URL && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 font-label text-xs underline underline-offset-4"
          >
            Oppure prenota direttamente su Booking.com
          </a>
        )}
      </Reveal>

      <Reveal delay={150}>
        <ContactForm />
      </Reveal>

      <p className="font-label text-[11px] text-[var(--ink-soft)] text-center mt-10">
        oppure scrivi direttamente a {CONTACT_EMAIL}
      </p>
    </section>
  );
}
