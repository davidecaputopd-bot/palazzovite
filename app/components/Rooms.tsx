import Image from "next/image";
import { rooms } from "@/app/data/rooms";
import { ELEMENT_ICONS } from "@/app/components/Icons";

export default function Rooms() {
  return (
    <section id="stanze" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-3xl mb-14">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">Le Stanze</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
          Cinque stanze,
          <br />
          cinque elementi.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--ink)]/10">
        {rooms.map((room) => {
          const Icon = ELEMENT_ICONS[room.element];
          const accentColor = `var(--${room.element})`;
          const inkColor = `var(--${room.element}-ink)`;

          return (
            <article key={room.slug} className="bg-[var(--stone)] group">
              {room.image ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--ink)]/10">
                  <div className="relative aspect-[3/4] sm:col-span-2 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`Stanza ${room.name}, Palazzo Vite`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] hidden sm:block overflow-hidden bg-[var(--stone)]">
                    {room.bathroomImage ? (
                      <Image
                        src={room.bathroomImage}
                        alt={`Bagno della stanza ${room.name}, Palazzo Vite`}
                        fill
                        className="object-cover"
                        sizes="16vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundColor: accentColor, opacity: 0.18 }}
                      >
                        <Icon className="w-8 h-8" style={{ color: inkColor }} />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="relative aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: accentColor, opacity: 0.22 }}
                >
                  <Icon className="w-10 h-10" style={{ color: inkColor }} />
                  <span className="absolute bottom-4 right-4 font-label text-[10px]" style={{ color: inkColor }}>
                    Foto in arrivo
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl tracking-wide" style={{ color: inkColor }}>
                    {room.name}
                  </h3>
                  <span className="font-label text-[11px] text-[var(--ink-soft)]">
                    {room.bed}
                    {room.sqm ? ` — ${room.sqm} m²` : ""}
                  </span>
                </div>
                <p className="font-body font-light text-[var(--ink-soft)] text-sm md:text-base leading-relaxed">
                  {room.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
