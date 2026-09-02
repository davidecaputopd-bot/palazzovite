import { Suspense } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/app/data/config";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Book({ copy, formCopy }: { copy: SiteCopy["book"]; formCopy: SiteCopy["form"] }) {
  return (
    <section id="prenota" className="bg-[var(--stone-deep)] px-6 md:px-10 py-20 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <h2 className="font-display text-[clamp(2.45rem,6vw,4.5rem)] leading-[0.94] mb-6">
            {copy.title}
          </h2>
          <p className="font-body font-light text-[var(--ink-soft)] max-w-md">
            {copy.description}
          </p>

          <ul className="mt-8 grid gap-2.5 max-w-md">
            {copy.reassurance.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-[var(--stone)] px-4 py-3 font-label text-[11px] leading-relaxed text-[var(--ink-soft)]">
                <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-deep)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={`tel:+39${CONTACT_PHONE}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[image:var(--btn-ink)] text-[var(--blush)] pl-5 pr-6 py-3.5 hover:opacity-90 active:scale-[0.98] transition-[opacity,transform] duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-display text-lg md:text-xl tracking-wide">+39 {CONTACT_PHONE_DISPLAY}</span>
          </a>

          <p className="font-label text-[11px] text-[var(--ink-soft)] mt-6 leading-relaxed">
            {copy.writeTo} {CONTACT_EMAIL}
          </p>
        </Reveal>

        <Reveal delay={90} className="rounded-3xl bg-[var(--stone)]/70 shadow-[var(--shadow-panel)] px-5 py-7 md:p-10">
          <Suspense fallback={null}>
            <ContactForm copy={formCopy} />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
