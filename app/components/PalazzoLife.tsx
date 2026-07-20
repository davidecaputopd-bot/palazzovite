import Reveal from "@/app/components/Reveal";
import Gallery from "@/app/components/Gallery";
import type { SiteCopy } from "@/app/data/i18n";
import { SPACE_PHOTOS } from "@/app/data/photos";

export default function PalazzoLife({ copy }: { copy: SiteCopy["spaces"] }) {
  // Ogni spazio comune è una galleria (come le stanze): foto + nome + descrizione.
  // La sala lettura è inclusa nella cucina; la scala resta nella sezione Storia.
  const spaces = [
    { name: copy.garden[0], desc: copy.garden[1], photos: SPACE_PHOTOS.garden },
    { name: copy.breakfast[0], desc: copy.breakfast[1], photos: SPACE_PHOTOS.kitchen },
    { name: copy.terrace[0], desc: copy.terrace[1], photos: SPACE_PHOTOS.terrace },
    { name: copy.work[0], desc: copy.work[1], photos: SPACE_PHOTOS.work },
  ];

  return (
    <section id="palazzo" className="bg-[var(--dark)] text-[var(--ink)] px-6 md:px-10 py-20 md:py-36">
      <Reveal className="max-w-4xl mb-14 md:mb-20">
        <h2 className="font-display text-[clamp(3rem,7vw,4.5rem)] leading-[0.94]">
          {copy.title}
        </h2>
        <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mt-6">
          {copy.intro}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
        {spaces.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 120} className={i % 2 ? "md:mt-20" : ""}>
            <article className="group">
              <Gallery images={s.photos} alt={s.name} openLabel={copy.galleryLabel} mobilePreviewCount={4} />
              <div className="pt-6 md:pt-7">
                <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-2">{s.name}</h3>
                <p className="font-body font-light text-sm md:text-base text-[var(--ink-soft)] leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
