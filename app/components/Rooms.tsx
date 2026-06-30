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
          const color = `var(--${room.element})`;
          return (
            <article key={room.slug} className="bg-[var(--stone)] group">
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: color, opacity: 0.92 }}
              >
                {/* placeholder colore elemento — sostituire con foto reale stanza */}
                <Icon className="absolute bottom-5 right-5 w-10 h-10 text-[var(--stone)] opacity-70" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl tracking-wide" style={{ color }}>
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
