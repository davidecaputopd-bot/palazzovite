import Image from "next/image";
import Reveal from "@/app/components/Reveal";

const SPACES = [
  {
    name: "Il Giardino",
    desc: "Tavolino in ferro tra gli alberi d'arancio, colazione all'aperto al mattino.",
    image: "/images/palazzo/giardino-1.jpg",
  },
  {
    name: "La Scala",
    desc: "Scalinata in pietra a chiocciola, ringhiera originale in ferro battuto del 1901.",
    image: "/images/palazzo/scala-1.jpg",
  },
  {
    name: "La Terrazza",
    desc: "Sedute tra le bouganville, vista sui tetti del centro storico di Copertino.",
    image: "/images/palazzo/terrazza-1.jpg",
  },
];

export default function PalazzoLife() {
  return (
    <section id="palazzo" className="bg-[var(--ink)] text-[var(--stone)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mb-14">
        <p className="font-label text-xs text-[var(--stone)]/60 mb-6">Il Palazzo</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
          Gli spazi comuni.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {SPACES.map((s, i) => (
          <Reveal key={s.name} delay={i * 120}>
            <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-[var(--stone)]/10">
              <Image
                src={s.image}
                alt={`${s.name}, Palazzo Vite`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">{s.name}</h3>
            <p className="font-body font-light text-sm text-[var(--stone)]/70 leading-relaxed">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
