import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import PhotoStrip from "@/app/components/PhotoStrip";
import type { SiteCopy } from "@/app/data/i18n";
import { LOCATION_PHOTOS, SPAZI_PHOTOS } from "@/app/data/photos";

export default function PalazzoLife({ copy }: { copy: SiteCopy["spaces"] }) {
  const spaces = [
    { name: copy.garden[0], desc: copy.garden[1], image: "/foto/location-02.jpg" },
    { name: copy.breakfast[0], desc: copy.breakfast[1], image: SPAZI_PHOTOS[3] },
    { name: copy.terrace[0], desc: copy.terrace[1], image: "/foto/hero-01.jpg" },
    { name: copy.work[0], desc: copy.work[1], image: SPAZI_PHOTOS[4] },
  ];
  return (
    <section id="palazzo" className="bg-[var(--dark)] text-[var(--ink)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-4xl mb-14">
        <h2 className="font-display text-[clamp(3rem,7vw,4.5rem)] leading-[0.94]">
          {copy.title}
        </h2>
        <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mt-6">
          {copy.intro}
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
        {spaces.map((s, i) => (
          <Reveal
            key={s.name}
            delay={i * 90}
            className={[
              i === 0 ? "md:col-span-5 md:row-span-2" : "",
              i === 1 ? "md:col-span-7" : "",
              i === 2 ? "md:col-span-7" : "",
              i === 3 ? "md:col-span-5" : "",
            ].join(" ")}
          >
            <div
              className={[
                "group relative mb-5 overflow-hidden bg-[var(--ink)]/10",
                i === 0 ? "aspect-[4/5] md:aspect-[5/6]" : "",
                i === 1 ? "aspect-[4/3] md:aspect-[16/9]" : "",
                i === 2 ? "aspect-[4/3] md:aspect-[16/9]" : "",
                i === 3 ? "aspect-[4/3] md:aspect-[5/4]" : "",
              ].join(" ")}
            >
              <Image
                src={s.image}
                alt={`${s.name}, Palazzo Vite`}
                fill
                className={[
                  "object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]",
                  i === 2 ? "object-[50%_58%]" : "",
                ].join(" ")}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <h3 className="font-display text-xl md:text-2xl tracking-wide mb-2">{s.name}</h3>
            <p className="font-body font-light text-sm md:text-base text-[var(--ink-soft)] leading-relaxed max-w-md">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Striscia scorribile: interni comuni + terrazza e giardino (esterni condivisi) */}
      <Reveal delay={120} className="mt-16 md:mt-20">
        <PhotoStrip images={[...SPAZI_PHOTOS, ...LOCATION_PHOTOS.slice(4)]} alt={copy.title} />
      </Reveal>
    </section>
  );
}
