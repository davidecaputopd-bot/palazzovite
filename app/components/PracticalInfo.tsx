import Reveal from "@/app/components/Reveal";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/app/data/config";
import type { SiteCopy } from "@/app/data/i18n";

export default function PracticalInfo({ copy }: { copy: SiteCopy["practical"] }) {
  return (
    <section id="informazioni" className="px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mb-14 md:mb-16">
        <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
        <h2 className="font-display text-[clamp(2.6rem,6vw,4rem)] leading-[0.96] mb-6">{copy.title}</h2>
        <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
          {copy.intro}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-9 md:gap-y-11 max-w-4xl">
          {copy.items.map(([label, value]) => (
            <div key={label} className="border-t border-[var(--ink)]/15 pt-4">
              <dt className="font-label text-[11px] text-[var(--ink-soft)] mb-1.5">{label}</dt>
              <dd className="font-body text-base md:text-lg text-[var(--ink)]">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-label text-[11px] text-[var(--ink-soft)]">
          <a href={`tel:+39${CONTACT_PHONE}`} className="hover:text-[var(--accent-deep)] transition-colors">
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--accent-deep)] transition-colors">
            {CONTACT_EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
