import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";
import { SPAZI_PHOTOS } from "@/app/data/photos";

export default function PalazzoLife({ copy }: { copy: SiteCopy["spaces"] }) {
  const spaces = [
    { name: copy.garden[0], desc: copy.garden[1], image: "/foto/location-02.jpg" },
    { name: copy.breakfast[0], desc: copy.breakfast[1], image: SPAZI_PHOTOS[3] },
    { name: copy.work[0], desc: copy.work[1], image: SPAZI_PHOTOS[4] },
    { name: copy.terrace[0], desc: copy.terrace[1], image: "/foto/hero-01.jpg" },
  ];
  return (
    <section id="palazzo" className="bg-[var(--dark)] text-[var(--ink)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-4xl mb-14">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
          {copy.title}
        </h2>
        <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mt-6">
          {copy.intro}
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {spaces.map((s, i) => (
          <Reveal key={s.name} delay={i * 90} className={i % 2 ? "md:mt-10" : ""}>
            <div className="group relative aspect-[3/4] mb-5 overflow-hidden bg-[var(--ink)]/10">
              <Image
                src={s.image}
                alt={`${s.name}, Palazzo Vite`}
                fill
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">{s.name}</h3>
            <p className="font-body font-light text-sm text-[var(--ink-soft)] leading-relaxed">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
