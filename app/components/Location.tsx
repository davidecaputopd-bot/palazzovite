import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";
import { LOCATION_PHOTOS } from "@/app/data/photos";

export default function Location({ copy }: { copy: SiteCopy["location"] }) {
  return (
    <section id="posizione" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-[0.94] mb-8 text-[var(--dark)]">
            {copy.title}
          </h2>
          <p className="font-body font-light text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-xl mb-8">
            {copy.description}
          </p>
          <div className="grid grid-cols-2 gap-5 mb-10">
            {[
              { place: "Lecce", km: "15 km" },
              { place: "Porto Cesareo", km: "17 km" },
              { place: "Gallipoli", km: "30 km" },
              { place: "Brindisi", km: "60 km" },
            ].map(({ place, km }) => (
              <div key={place} className="border-t border-[var(--dark)]/15 pt-4">
                <p className="font-label text-[12px] text-[var(--ink-soft)] mb-2">{place}</p>
                <p className="font-display text-2xl md:text-4xl leading-none" style={{ textWrap: "nowrap" }}>{km}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--stone-deep)] md:mt-12">
          <Image
            src={LOCATION_PHOTOS[3]}
            alt="Ingresso di Palazzo Vite nel centro storico di Copertino"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
      <Reveal delay={150} className="relative aspect-[16/9] w-full max-w-6xl mx-auto mt-14 overflow-hidden bg-[var(--stone-deep)]">
        <iframe
          title={copy.mapTitle}
          src="https://www.google.com/maps?q=Via+Amendola+1,+73043+Copertino+LE&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        {/* Fallback visibile se l'iframe non carica (ad es. in locale o con blocchi CSP) */}
        <a
          href="https://maps.google.com/?q=Via+Amendola+1,+73043+Copertino+LE"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
          aria-label={copy.openMaps.replace(" →", "")}
        >
          <span className="font-label text-[12px] text-[var(--ink-soft)]">Via Amendola, 1 - Copertino (LE)</span>
          <span className="font-label text-[12px] text-[var(--ink-soft)] underline underline-offset-4 pointer-events-auto">
            {copy.openMaps}
          </span>
        </a>
      </Reveal>
    </section>
  );
}
