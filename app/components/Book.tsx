import { Suspense } from "react";
import { BOOKING_URL, CONTACT_EMAIL } from "@/app/data/config";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Book({ copy, formCopy }: { copy: SiteCopy["book"]; formCopy: SiteCopy["form"] }) {
  return (
    <section id="prenota" className="bg-[var(--stone-deep)] px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <h2 className="font-display text-[clamp(2.45rem,6vw,4.5rem)] leading-[0.94] mb-6">
            {copy.title}
          </h2>
          <p className="font-body font-light text-[var(--ink-soft)] max-w-md">
            {copy.description}
          </p>
          {BOOKING_URL && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 font-label text-xs underline underline-offset-4 hover:text-[var(--accent-deep)] transition-colors"
            >
              {copy.directBooking}
            </a>
          )}

          <p className="font-label text-[11px] text-[var(--ink-soft)] mt-10 leading-relaxed">
            {copy.writeTo} {CONTACT_EMAIL}
          </p>
        </Reveal>

        <Reveal delay={150} className="bg-[var(--stone)]/55 px-5 py-7 md:p-10 border border-[var(--ink)]/10">
          <Suspense fallback={null}>
            <ContactForm copy={formCopy} />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
