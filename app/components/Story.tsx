export default function Story() {
  return (
    <section id="storia" className="px-6 md:px-10 py-24 md:py-36 max-w-3xl mx-auto">
      <p className="font-label text-xs text-[var(--ink-soft)] mb-6">La Storia</p>
      <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-8">
        Costruito nel 1901,
        <br />
        riaperto oggi.
      </h2>
      <div className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] space-y-5">
        <p>
          Palazzo Vite nasce nei primi anni del Novecento nel cuore di Lecce,
          in piena epoca Liberty. [Da completare: chi lo costruì, per chi,
          dettaglio architettonico originale ancora visibile.]
        </p>
        <p>
          Dopo decenni, il palazzo torna ad abitare il presente. Non come
          dimora di famiglia tramandata, ma come un risveglio: una sola
          persona ha scelto di riaprirlo, restaurarlo e renderlo un luogo da
          vivere, mantenendo intatti gli elementi originali del 1901.
        </p>
      </div>
    </section>
  );
}
