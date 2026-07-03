import Image from "next/image";
import Reveal from "@/app/components/Reveal";

const SPACES = [
  {
    name: "Il Giardino",
    desc: "Un ampio giardino attrezzato tra agrumi e spazi verdi, per la colazione, un aperitivo o una pausa all'aperto.",
    image: "/images/palazzo/giardino-1.jpg",
  },
  {
    name: "La Scala",
    desc: "La scala in pietra e la ringhiera originale conducono agli ambienti comuni: sala colazioni, work room e angolo cottura.",
    image: "/images/palazzo/scala-1.jpg",
  },
  {
    name: "La Terrazza",
    desc: "Una terrazza attrezzata tra le bouganville, con vista sul Castello Angioino e sui tetti del centro storico.",
    image: "/images/palazzo/terrazza-1.jpg",
  },
];

export default function PalazzoLife() {
  return (
    <section id="palazzo" className="bg-[var(--ink)] text-[var(--stone)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mb-14">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
          Gli spazi della dimora.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {SPACES.map((s, i) => (
          <Reveal key={s.name} delay={i * 120} className={i === 1 ? "md:mt-10" : ""}>
            <div className="group relative aspect-[3/4] mb-5 overflow-hidden bg-[var(--stone)]/10">
              <Image
                src={s.image}
                alt={`${s.name}, Palazzo Vite`}
                fill
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
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
