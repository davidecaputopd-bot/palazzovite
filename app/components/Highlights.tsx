import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Highlights({ items }: { items: SiteCopy["highlights"] }) {
  return (
    <section aria-label="Palazzo Vite in breve" className="px-6 md:px-10 bg-[var(--stone)]">
      <Reveal className="max-w-6xl mx-auto border-y border-[var(--ink)]/15">
        <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-[var(--ink)]/15">
          {items.map((item) => (
            <div key={item.label} className="py-7 md:py-9 lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <dt className="font-label text-[9px] md:text-[10px] text-[var(--ink-soft)] mb-3">
                {item.label}
              </dt>
              <dd className="font-display text-xl md:text-2xl leading-tight text-[var(--ink)]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
