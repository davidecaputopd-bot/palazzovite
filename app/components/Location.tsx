import Reveal from "@/app/components/Reveal";

export default function Location() {
  return (
    <section id="posizione" className="px-6 md:px-10 py-24 md:py-36 max-w-3xl mx-auto">
      <Reveal>
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">Posizione</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-8">
          Copertino, Salento.
        </h2>
        <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-xl mb-8">
          Via Amendola, 1 — 73043 Copertino (LE). Nel cuore del basso Salento,
          a pochi minuti da Lecce e con accesso facile alle spiagge ioniche e
          adriatiche della penisola.
        </p>
        <div className="flex flex-wrap gap-px bg-[var(--ink)]/10 mb-10 w-fit">
          {[
            { place: "Lecce", km: "15 km" },
            { place: "Gallipoli", km: "30 km" },
            { place: "Otranto", km: "40 km" },
            { place: "Brindisi", km: "60 km" },
          ].map(({ place, km }) => (
            <div key={place} className="bg-[var(--stone)] px-4 py-3">
              <p className="font-label text-[10px] text-[var(--ink-soft)] mb-0.5">{place}</p>
              <p className="font-display text-lg leading-none">{km}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={150} className="aspect-[16/9] w-full overflow-hidden">
        <iframe
          title="Mappa Palazzo Vite, Via Amendola 1, Copertino"
          src="https://www.google.com/maps?q=Via+Amendola+1,+73043+Copertino+LE&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </section>
  );
}
