import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Highlights({ items }: { items: SiteCopy["highlights"] }) {
  return (
    <section aria-label="Palazzo Vite in breve" className="bg-[var(--stone)] px-6 md:px-10 py-14 md:py-20">
      <Reveal className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-end">
          <div>
            <p className="font-label text-[11px] text-[var(--ink-soft)] mb-6">
              Dimora storica a Copertino
            </p>
            <h2 className="font-display text-[clamp(2.7rem,6vw,5.5rem)] leading-[0.9] max-w-4xl text-[var(--ink)]">
              Una dimora del 1908, aperta al tempo lento del Salento.
            </h2>
          </div>

          <dl className="grid grid-cols-2 gap-3 md:gap-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-[var(--stone-deep)] p-5 md:p-6 transition-colors duration-300 hover:bg-[var(--stone-deep)]"
              >
                <dt className="font-label text-[10px] tracking-[0.16em] uppercase text-[var(--accent-deep)] mb-2.5">
                  {item.label}
                </dt>
                <dd className="font-body text-lg md:text-xl leading-snug text-[var(--ink)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </Reveal>
    </section>
  );
}
