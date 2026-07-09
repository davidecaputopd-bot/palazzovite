import { rooms } from "@/app/data/rooms";
import Reveal from "@/app/components/Reveal";
import Gallery from "@/app/components/Gallery";
import { ROOM_PHOTOS } from "@/app/data/photos";
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {rooms.map((room, i) => {
          const inkColor = `var(--${room.element}-ink)`;

          return (
            <Reveal key={room.slug} delay={(i % 2) * 120} className={i % 2 ? "md:mt-20" : ""}>
              <article className="group">
              <Gallery
                images={ROOM_PHOTOS[room.slug].slice(0, 4)}
                alt={`Suite ${room.name}, Palazzo Vite`}
                openLabel={copy.request.replace(" →", "")}
              />

              <div className="pt-6 md:pt-7">
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
                <p className="font-body font-light text-[var(--ink-soft)] text-base leading-relaxed mb-5 max-w-md">
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
