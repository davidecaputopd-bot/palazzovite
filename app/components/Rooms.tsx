import { rooms } from "@/app/data/rooms";
import Reveal from "@/app/components/Reveal";
import Gallery from "@/app/components/Gallery";
import { ROOM_BATHROOM_FROM, ROOM_PHOTOS } from "@/app/data/photos";
import type { SiteCopy } from "@/app/data/i18n";

export default function Rooms({ copy }: { copy: SiteCopy["rooms"] }) {
  return (
    <section id="stanze" className="px-6 md:px-10 py-20 md:py-36">
      <Reveal className="max-w-4xl mb-14 md:mb-20">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
        <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.94]">
          {copy.title[0]}
          <br />
          {copy.title[1]}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
        {rooms.map((room, i) => {
          const inkColor = `var(--${room.element}-ink)`;
          const roomFacts: string[] = [
            room.bed === "Due letti singoli" ? copy.twinBeds : copy.doubleBed,
            copy.privateBathroom,
            copy.wifi,
            room.sqm ? `${room.sqm} m²` : null,
            room.floor ?? null,
          ].filter((fact): fact is string => Boolean(fact));

          return (
            <Reveal key={room.slug} delay={(i % 2) * 120} className={i % 2 ? "md:mt-20" : ""}>
              <article className="group">
              <Gallery
                images={ROOM_PHOTOS[room.slug]}
                alt={`Suite ${room.name}, Palazzo Vite`}
                openLabel={copy.request.replace(" →", "")}
                bathroomFrom={ROOM_BATHROOM_FROM[room.slug]}
                bathroomLabel={copy.bathroom}
                mobilePreviewCount={5}
              />

              <div className="pt-6 md:pt-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 mb-3">
                  <h3 className="font-display text-3xl md:text-4xl tracking-wide" style={{ color: inkColor }}>
                    <span className="font-label text-[12px] align-middle mr-3 text-[var(--ink-soft)]">
                      {["I", "II", "III", "IV", "V"][i]}
                    </span>
                    {room.name}
                  </h3>
                  <span className="font-label text-[11px] text-[var(--ink-soft)] text-right">{copy.bathroom}</span>
                </div>
                <p className="font-body font-light text-[var(--ink-soft)] text-base leading-relaxed mb-5 max-w-md">
                  {copy.descriptions[room.slug]}
                </p>
                <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-2 font-label text-[11px] text-[var(--ink-soft)]">
                  {roomFacts.map((fact) => (
                    <li key={fact} className="border-t border-[var(--ink)]/15 pt-2">
                      {fact}
                    </li>
                  ))}
                </ul>
                <a
                  href={`?room=${room.slug}#prenota`}
                  className="font-label text-[12px] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors duration-150 underline underline-offset-4"
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
