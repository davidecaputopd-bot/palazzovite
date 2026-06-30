import { BOOKING_URL, CONTACT_EMAIL } from "@/app/data/config";

export default function Book() {
  return (
    <section id="prenota" className="bg-[var(--stone-deep)] px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">Prenota</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-10">
          Verifica disponibilità.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {BOOKING_URL ? (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="font-label text-xs bg-[var(--ink)] text-[var(--stone)] px-8 py-4 hover:opacity-85 transition-opacity"
            >
              Prenota su Booking.com
            </a>
          ) : null}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-label text-xs border border-[var(--ink)] text-[var(--ink)] px-8 py-4 hover:bg-[var(--ink)] hover:text-[var(--stone)] transition-colors"
          >
            Richiedi informazioni
          </a>
        </div>
      </div>
    </section>
  );
}
