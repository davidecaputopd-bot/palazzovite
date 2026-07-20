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
              Una casa del 1908, aperta al tempo lento del Salento.
            </h2>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--ink)]/15 pt-7 lg:border-t-0 lg:pt-0">
            {items.map((item) => (
              <div key={item.label} className="border-t border-[var(--ink)]/12 pt-4">
                <dt className="font-label text-[10px] text-[var(--ink-soft)] mb-2">
                  {item.label}
                </dt>
                <dd className="font-body text-base md:text-lg leading-snug text-[var(--ink)]">
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
