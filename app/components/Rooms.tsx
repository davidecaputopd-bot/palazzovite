import { rooms } from "@/app/data/rooms";
import Reveal from "@/app/components/Reveal";
import Gallery from "@/app/components/Gallery";
import { ROOM_BATHROOM_FROM, ROOM_PHOTOS } from "@/app/data/photos";
import type { SiteCopy } from "@/app/data/i18n";

export default function Rooms({ copy }: { copy: SiteCopy["rooms"] }) {
  return (
    <section id="stanze" className="px-6 md:px-10 py-20 md:py-36">
      <div className="max-w-6xl mx-auto">
      <Reveal className="max-w-4xl mb-12 md:mb-20">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
        <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.94]">
          {copy.title[0]}
          <br />
          {copy.title[1]}
        </h2>
        <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-xl mt-6">
          {copy.chooseHint}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
        {rooms.map((room, i) => {
          const roomFacts: string[] = [
            room.bed === "twin" ? copy.twinBeds : room.bed === "both" ? copy.doubleOrTwin : copy.doubleBed,
            copy.privateBathroom,
            copy.wifi,
            room.sqm ? `${room.sqm} m²` : null,
            room.floor ?? null,
          ].filter((fact): fact is string => Boolean(fact));

          return (
            <Reveal key={room.slug} delay={(i % 2) * 80} className={i % 2 ? "md:mt-20" : ""}>
              <article className="group rounded-3xl bg-[var(--dark)] p-4 md:p-5">
                <Gallery
                  images={ROOM_PHOTOS[room.slug]}
                  alt={`Suite ${room.name}, Palazzo Vite`}
                  openLabel={copy.galleryLabel}
                  bathroomFrom={ROOM_BATHROOM_FROM[room.slug]}
                  bathroomLabel={copy.bathroom}
                  mobilePreviewCount={5}
                  moreLabel={copy.morePhotos}
                />

                <div className="px-1 pt-6 md:px-2 md:pt-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-2 font-label text-[11px] bg-[var(--ink)] text-[var(--dark)]">
                        {["I", "II", "III", "IV", "V"][i]}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl tracking-wide text-[var(--ink)]">
                        {room.name}
                      </h3>
                    </div>
                    <span className="font-label text-[11px] text-[var(--ink)]/60">{copy.bathroom}</span>
                  </div>

                  <p className="font-body font-light text-[var(--ink)]/80 text-base leading-relaxed mb-5 max-w-md">
                    {copy.descriptions[room.slug]}
                  </p>

                  <ul className="mb-5 grid grid-cols-2 gap-2 font-label text-[10px] text-[var(--ink)] sm:flex sm:flex-wrap sm:gap-x-3 sm:gap-y-2">
                    {roomFacts.map((fact) => (
                      <li key={fact} className="rounded-full bg-[var(--stone)] px-3.5 py-2 text-center sm:text-left">
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`?room=${room.slug}#prenota`}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[var(--ink)] text-[var(--stone)] px-6 py-3 font-label text-[11px] hover:bg-[var(--hero-shade)] active:scale-[0.98] transition-[background-color,transform] duration-200"
                  >
                    {copy.request}
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      </div>
    </section>
  );
}
