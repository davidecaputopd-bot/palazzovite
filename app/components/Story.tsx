import Image from "next/image";

export default function Story() {
  return (
    <section id="storia" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="font-label text-xs text-[var(--ink-soft)] mb-6">La Storia</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-8">
            Costruito nel 1901,
            <br />
            riaperto oggi.
          </h2>
          <div className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] space-y-5 max-w-md">
            <p>
              Palazzo Vite nasce nei primi anni del Novecento nel cuore di
              Copertino, in piena epoca Liberty. La scala originale in pietra,
              con balaustra in ferro battuto e il soffitto affrescato a
              medaglione, è ancora oggi intatta.
            </p>
            <p>
              Dopo decenni, il palazzo torna ad abitare il presente. Non come
              dimora di famiglia tramandata, ma come un risveglio: una sola
              persona ha scelto di riaprirlo e restaurarlo, mantenendo
              intatti gli elementi originali del 1901.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/images/palazzo/scala-soffitto.jpg"
            alt="Soffitto affrescato a medaglione sopra la scala originale del 1901, Palazzo Vite"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
