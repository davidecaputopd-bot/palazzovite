import Reveal from "@/app/components/Reveal";

export default function Location() {
  return (
    <section id="posizione" className="px-6 md:px-10 py-24 md:py-36 max-w-3xl mx-auto">
      <Reveal>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.92] mb-8">
          Copertino, nel Salento.
        </h2>
        <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-xl mb-8">
          Palazzo Vite si trova nel centro storico di Copertino, appena fuori
          le mura del Castello Angioino. Da qui si raggiungono facilmente
          Lecce, Porto Cesareo, Gallipoli e le principali località della costa
          ionica. Gli ospiti dispongono inoltre di un ampio parcheggio privato.
        </p>
        <div className="grid grid-cols-4 gap-px bg-[var(--ink)]/10 mb-10">
          {[
            { place: "Lecce", km: "15 km" },
            { place: "Gallipoli", km: "30 km" },
            { place: "Otranto", km: "40 km" },
            { place: "Brindisi", km: "60 km" },
          ].map(({ place, km }) => (
            <div key={place} className="bg-[var(--stone)] px-3 py-4 md:px-4 md:py-5">
              <p className="font-label text-[9px] text-[var(--ink-soft)] mb-2">{place}</p>
              <p className="font-display text-2xl md:text-4xl leading-none" style={{ textWrap: "nowrap" }}>{km}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={150} className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--stone-deep)]">
        <iframe
          title="Mappa Palazzo Vite, Via Amendola 1, Copertino"
          src="https://www.google.com/maps?q=Via+Amendola+1,+73043+Copertino+LE&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        {/* Fallback visibile se l'iframe non carica (ad es. in locale o con blocchi CSP) */}
        <a
          href="https://maps.google.com/?q=Via+Amendola+1,+73043+Copertino+LE"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
          aria-label="Apri in Google Maps"
        >
          <span className="font-label text-[10px] text-[var(--ink-soft)]">Via Amendola, 1 - Copertino (LE)</span>
          <span className="font-label text-[10px] text-[var(--ink)]/40 underline underline-offset-4 pointer-events-auto">
            Apri in Google Maps →
          </span>
        </a>
      </Reveal>
    </section>
  );
}
