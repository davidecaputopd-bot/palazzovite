import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Story({ copy }: { copy: SiteCopy["story"] }) {
  return (
    <section id="storia" className="relative px-6 md:px-10 py-20 md:py-36 overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-12 md:gap-16 items-center">
        <Reveal>
          <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] leading-[0.94] mb-8 text-[var(--dark)]">
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
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {copy.details.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl bg-[var(--stone-deep)] p-4 md:p-5"
              >
                <dt className="font-label text-[11px] tracking-[0.14em] uppercase text-[var(--accent-deep)] mb-2">{label}</dt>
                <dd className="font-body text-sm leading-snug text-[var(--ink)]">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={90} className="relative min-h-[520px] md:min-h-[680px]">
          <div className="absolute left-0 top-0 h-[74%] w-[82%] overflow-hidden rounded-2xl md:rounded-3xl bg-[var(--stone-deep)] shadow-[0_28px_60px_-32px_rgb(36_48_31_/_0.5)]">
            <Image
              src="/foto/spazi-01.jpg"
              alt={copy.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 82vw, 42vw"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[42%] w-[54%] overflow-hidden rounded-2xl md:rounded-3xl border-[6px] border-[var(--stone)] bg-[var(--stone-deep)] shadow-[0_24px_50px_-28px_rgb(36_48_31_/_0.55)]">
            <Image
              src="/foto/spazi-02.jpg"
              alt={copy.detailImageAlt}
              fill
              className="object-cover object-[62%_50%]"
              sizes="(max-width: 768px) 54vw, 28vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
