import Reveal from "@/app/components/Reveal";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/app/data/config";
import type { SiteCopy } from "@/app/data/i18n";

export default function PracticalInfo({ copy }: { copy: SiteCopy["practical"] }) {
  return (
    <section id="informazioni" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-14 md:gap-20 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <p className="font-label text-xs text-[var(--ink-soft)] mb-6">{copy.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.7rem,6vw,4.8rem)] leading-[0.94] mb-7 max-w-lg">
            {copy.title}
          </h2>
          <p className="font-body font-light text-base md:text-lg text-[var(--ink-soft)] leading-relaxed max-w-md">
            {copy.intro}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-y border-[var(--ink)]/15">
            <dl>
              {copy.items.map(([label, value], index) => (
                <div
                  key={label}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.25rem_0.9fr_1.1fr] gap-x-4 md:gap-x-8 py-6 md:py-7 border-b border-[var(--ink)]/10 last:border-b-0"
                >
                  <span className="font-label text-[10px] text-[var(--ink-soft)] pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-label text-[12px] text-[var(--ink)] tracking-[0.16em] pt-1">
                    {label}
                  </dt>
                  <dd className="col-start-2 sm:col-start-auto font-body font-light text-lg md:text-xl leading-snug text-[var(--ink)] mt-2 sm:mt-0">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 font-label text-[11px] text-[var(--ink-soft)]">
            <span className="text-[var(--ink)]/70">{copy.contactLabel}</span>
            <a href={`tel:+39${CONTACT_PHONE}`} className="whitespace-nowrap hover:text-[var(--accent-deep)] transition-colors">
              +39 {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--accent-deep)] transition-colors">
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
