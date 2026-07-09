import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Story({ copy }: { copy: SiteCopy["story"] }) {
  return (
    <section id="storia" className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <Reveal>
          <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
          <h2 className="font-display text-[2.4rem] sm:text-5xl md:text-7xl leading-[0.92] mb-8 text-[var(--dark)]">
            {copy.title[0]}
            <br />
            {copy.title[1]}
          </h2>
          <div className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] space-y-5 max-w-md">
            <p>
              {copy.paragraphs[0]}
            </p>
            <p>
              {copy.paragraphs[1]}
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative aspect-[3/4] w-full overflow-hidden md:mt-20">
          <Image
            src="/foto/spazi-01.jpg"
            alt={copy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
