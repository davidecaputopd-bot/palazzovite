import { Suspense } from "react";
import { BOOKING_URL, CONTACT_EMAIL } from "@/app/data/config";
import ContactForm from "@/app/components/ContactForm";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy } from "@/app/data/i18n";

export default function Book({ copy, formCopy }: { copy: SiteCopy["book"]; formCopy: SiteCopy["form"] }) {
  return (
    <section id="prenota" className="bg-[var(--stone-deep)] px-6 md:px-10 py-24 md:py-36">
      <Reveal className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-[0.94] mb-6">
          {copy.title}
        </h2>
        <p className="font-body font-light text-[var(--ink-soft)] max-w-md mx-auto">
          {copy.description}
        </p>
        {BOOKING_URL && (
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 font-label text-xs underline underline-offset-4"
          >
            {copy.directBooking}
          </a>
        )}
      </Reveal>

      <Reveal delay={150}>
        <Suspense fallback={null}>
          <ContactForm copy={formCopy} />
        </Suspense>
      </Reveal>

      <p className="font-label text-[11px] text-[var(--ink-soft)] text-center mt-10">
        {copy.writeTo} {CONTACT_EMAIL}
      </p>
    </section>
  );
}
