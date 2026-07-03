import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function PalazzoLife({ copy }: { copy: SiteCopy["spaces"] }) {
  const spaces = [
    { name: copy.garden[0], desc: copy.garden[1], image: "/images/palazzo/giardino-1.jpg" },
    { name: copy.staircase[0], desc: copy.staircase[1], image: "/images/palazzo/scala-1.jpg" },
    { name: copy.terrace[0], desc: copy.terrace[1], image: "/images/palazzo/terrazza-1.jpg" },
  ];
  return (
    <section id="palazzo" className="bg-[var(--ink)] text-[var(--stone)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mb-14">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
          {copy.title}
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {spaces.map((s, i) => (
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
