const SPACES = [
  {
    name: "Il Giardino",
    desc: "Tavolino in ferro tra gli alberi, colazione all'aperto al mattino.",
  },
  {
    name: "La Scala",
    desc: "Scalinata in pietra a chiocciola, ringhiera originale in ferro e legno.",
  },
  {
    name: "Il Cortile",
    desc: "Ingresso del palazzo, soglia tra la strada e gli ambienti interni.",
  },
];

export default function PalazzoLife() {
  return (
    <section id="palazzo" className="bg-[var(--ink)] text-[var(--stone)] px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-3xl mb-14">
        <p className="font-label text-xs text-[var(--stone)]/60 mb-6">Il Palazzo</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
          Gli spazi comuni.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {SPACES.map((s) => (
          <div key={s.name}>
            <div className="aspect-[3/4] bg-[var(--stone)]/10 mb-5" />
            <h3 className="font-display text-xl tracking-wide mb-2">{s.name}</h3>
            <p className="font-body font-light text-sm text-[var(--stone)]/70 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
