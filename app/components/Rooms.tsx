import Image from "next/image";
import { rooms } from "@/app/data/rooms";
import { ELEMENT_ICONS } from "@/app/components/Icons";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Rooms({ copy }: { copy: SiteCopy["rooms"] }) {
  return (
    <section id="stanze" className="px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-4xl mb-16 md:mb-20">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.92]">
          {copy.title[0]}
          <br />
          {copy.title[1]}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--ink)]/10">
        {rooms.map((room, i) => {
          const Icon = ELEMENT_ICONS[room.element];
          const accentColor = `var(--${room.element})`;
          const inkColor = `var(--${room.element}-ink)`;

          return (
            <Reveal key={room.slug} delay={(i % 2) * 120} className="bg-[var(--stone)] group">
              <article>
              {room.image ? (
                <div className="grid grid-cols-3 gap-px bg-[var(--ink)]/10">
                  <div className="relative aspect-[3/4] col-span-2 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`Suite ${room.name}, Palazzo Vite`}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 66vw, 33vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-[var(--stone)]">
                    {room.bathroomImage ? (
                      <>
                        <Image
                          src={room.bathroomImage}
                          alt={`${copy.bathroomImageAlt} ${room.name}, Palazzo Vite`}
                          fill
                          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 33vw, 16vw"
                        />
                        <span className="absolute bottom-2 left-2 font-label text-[9px] text-[var(--stone)]/70">
                          {copy.bathroom}
                        </span>
                      </>
                    ) : (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ backgroundColor: `color-mix(in srgb, ${accentColor} 20%, var(--stone))` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: inkColor }} />
                        <span className="font-label text-[9px] text-center px-1 text-[var(--ink-soft)]">
                          {copy.photoSoon}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="relative aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${accentColor} 24%, var(--stone))` }}
                >
                  <Icon className="w-10 h-10" style={{ color: inkColor }} />
                  <span className="absolute bottom-4 right-4 font-label text-[10px] text-[var(--ink-soft)]">
                    {copy.photoSoon}
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8" style={{ borderTop: `2px solid ${accentColor}` }}>
                <div className="flex items-baseline justify-between mb-3 gap-4">
                  <h3 className="font-display text-3xl md:text-4xl tracking-wide" style={{ color: inkColor }}>
                    <span className="font-label text-[10px] align-middle mr-3 text-[var(--ink-soft)]">
                      {["I", "II", "III", "IV", "V"][i]}
                    </span>
                    {room.name}
                  </h3>
                  <span className="font-label text-[11px] text-[var(--ink-soft)] text-right">
                    {room.bed === "Due letti singoli" ? copy.twinBeds : copy.doubleBed}
                    {room.sqm ? ` / ${room.sqm} m²` : ""}
                  </span>
                </div>
                <p className="font-body font-light text-[var(--ink-soft)] text-base leading-relaxed mb-5">
                  {copy.descriptions[room.slug]}
                </p>
                <a
                  href={`?room=${room.slug}#prenota`}
                  className="font-label text-[10px] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-150 underline underline-offset-4"
                >
                  {copy.request}
                </a>
              </div>
            </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
