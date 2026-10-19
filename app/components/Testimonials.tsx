"use client";

import { useState } from "react";
import Reveal from "@/app/components/Reveal";
import type { SiteCopy, Locale } from "@/app/data/i18n";
import { REVIEWS, REVIEW_STATS, type Review } from "@/app/data/reviews";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`tracking-[0.12em] ${className}`}>
      ★★★★★
    </span>
  );
}

// Distinzione di fonte: un piccolo glifo in un cerchio, nel verde del brand
// (lo stesso di stelle e accenti). La differenza tra fonti la fanno la lettera
// e il nome per esteso, senza introdurre colori che stonano con la palette.
const SOURCE_META: Record<Review["source"], { letter: string }> = {
  Google: { letter: "G" },
  Booking: { letter: "B" },
};

function SourceBadge({ source }: { source: Review["source"] }) {
  const meta = SOURCE_META[source];
  return (
    <span className="inline-flex items-center gap-1.5 font-label text-[9px] tracking-[0.16em] uppercase text-[var(--ink-soft)]">
      <span
        aria-hidden
        className="grid place-items-center h-[18px] w-[18px] rounded-full text-[9px] font-semibold leading-none text-[var(--accent-deep)]"
        style={{ boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--accent-deep) 35%, transparent)" }}
      >
        {meta.letter}
      </span>
      {source}
    </span>
  );
}

// Pulsante "Traduci / Mostra originale": compare solo se la recensione è in una
// lingua diversa da quella del sito e ne esiste la traduzione.
function TranslateToggle({
  on,
  toggle,
  copy,
}: {
  on: boolean;
  toggle: () => void;
  copy: SiteCopy["testimonials"];
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="self-start font-label text-[10px] tracking-[0.14em] uppercase text-[var(--ink-soft)] underline underline-offset-4 decoration-[var(--accent-deep)]/50 hover:text-[var(--ink)] hover:decoration-[var(--accent-deep)] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-deep)]"
    >
      {on ? copy.original : copy.translate}
    </button>
  );
}

function useTranslation(r: Review, locale: Locale) {
  const target = r.t[locale];
  const canTranslate = r.lang !== locale && !!target;
  const [on, setOn] = useState(false);
  return {
    text: on && target ? target : r.quote,
    canTranslate,
    on,
    toggle: () => setOn((v) => !v),
  };
}

function ReviewCard({
  r,
  locale,
  copy,
  dup = false,
}: {
  r: Review;
  locale: Locale;
  copy: SiteCopy["testimonials"];
  dup?: boolean;
}) {
  const { text, canTranslate, on, toggle } = useTranslation(r, locale);
  // Il duplicato (per il loop) mostra sempre l'originale e non è interattivo.
  const shownText = dup ? r.quote : text;
  const shownLang = dup ? r.lang : on ? locale : r.lang;

  return (
    <li
      {...(dup ? { "aria-hidden": true } : {})}
      className="rev-card w-[280px] md:w-[340px] shrink-0 rounded-[22px] bg-[var(--dark)] shadow-[var(--shadow-panel)] p-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-3">
        <Stars className="text-[13px] text-[var(--accent-deep)]" />
        <SourceBadge source={r.source} />
      </div>
      <blockquote
        className="rev-quote font-body font-light text-[var(--ink)] leading-relaxed text-[15px]"
        lang={shownLang}
      >
        {shownText}
      </blockquote>
      {!dup && canTranslate && <TranslateToggle on={on} toggle={toggle} copy={copy} />}
      <figcaption className="mt-auto pt-1 font-label text-[10px] tracking-[0.14em] text-[var(--ink-soft)]">
        {r.name} · {r.place} {r.flag}
      </figcaption>
    </li>
  );
}

export default function Testimonials({ copy, locale }: { copy: SiteCopy["testimonials"]; locale: Locale }) {
  const [featured, ...rest] = REVIEWS;
  const feat = useTranslation(featured, locale);

  return (
    <section
      id="recensioni"
      className="bg-[var(--stone-deep)] text-[var(--ink)] px-6 md:px-10 py-20 md:py-32 overflow-hidden"
    >
      <Reveal className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.96] text-balance">
              {copy.title}
            </h2>
            <p className="font-body font-light text-[var(--ink-soft)] max-w-md mt-5 text-base md:text-lg leading-relaxed">
              {copy.lead}
            </p>
          </div>

          {/* Doppio badge di fiducia — punteggi aggregati reali */}
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={REVIEW_STATS.google.href}
              target="_blank"
              rel="noreferrer"
              className="trust-badge flex items-center gap-3 rounded-2xl bg-[var(--stone)] shadow-[var(--shadow-panel)] px-5 py-4"
            >
              <span className="font-display text-3xl leading-none">{REVIEW_STATS.google.rating}</span>
              <span className="flex flex-col">
                <Stars className="text-[13px] text-[var(--accent-deep)]" />
                <span className="font-label text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mt-1">
                  Google · {REVIEW_STATS.google.count} {copy.reviews}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-[var(--stone)] shadow-[var(--shadow-panel)] px-5 py-4">
              <span className="font-display text-3xl leading-none">{REVIEW_STATS.booking.rating}</span>
              <span className="flex flex-col">
                <span className="font-label text-[10px] tracking-[0.14em] text-[var(--ink)]">/ 10</span>
                <span className="font-label text-[10px] tracking-[0.14em] text-[var(--ink-soft)] mt-1">
                  Booking · {REVIEW_STATS.booking.count} {copy.reviews}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Citazione in evidenza */}
      <Reveal variant="fade" className="relative max-w-3xl mx-auto text-center mt-16 md:mt-24 mb-14 md:mb-20">
        <Stars className="relative text-[var(--accent-deep)] text-lg" />
        <blockquote
          className="relative font-body italic font-light text-[clamp(1.5rem,3.4vw,2.4rem)] leading-snug text-balance mt-5"
          lang={feat.on ? locale : featured.lang}
        >
          “{feat.text}”
        </blockquote>
        <figcaption className="relative font-label text-[11px] tracking-[0.16em] text-[var(--ink-soft)] mt-7 flex items-center justify-center gap-2">
          <span>
            {featured.name} · {featured.place} {featured.flag}
          </span>
          <span aria-hidden className="text-[var(--ink)]/25">·</span>
          <SourceBadge source={featured.source} />
        </figcaption>
        {feat.canTranslate && (
          <div className="relative mt-4 flex justify-center">
            <TranslateToggle on={feat.on} toggle={feat.toggle} copy={copy} />
          </div>
        )}
      </Reveal>

      {/* Marquee delle recensioni (auto solo su desktop con hover; manuale su touch) */}
      <div className="rev-marquee -mx-6 md:-mx-10 pt-5 pb-12">
        <ul className="rev-track flex w-max items-stretch gap-5 px-6 md:px-10">
          {rest.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} locale={locale} copy={copy} />
          ))}
          {/* duplicato per il loop continuo, nascosto agli screen reader */}
          {rest.map((r, i) => (
            <ReviewCard key={`dup-${r.name}-${i}`} r={r} locale={locale} copy={copy} dup />
          ))}
        </ul>
      </div>

      <style>{`
        /* ---- Badge di fiducia: lieve sollevamento all'hover ---- */
        .trust-badge {
          transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .trust-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 10px -6px color-mix(in srgb, var(--hero-shade) 18%, transparent),
            0 20px 40px -20px color-mix(in srgb, var(--hero-shade) 34%, transparent);
        }

        /* ---- Card recensione: sollevamento morbido all'hover, ombra a due
               strati tinta sul verde della dimora (coerente con --shadow-panel) ---- */
        .rev-card {
          transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        .rev-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 14px -8px color-mix(in srgb, var(--hero-shade) 22%, transparent),
            0 28px 54px -24px color-mix(in srgb, var(--hero-shade) 42%, transparent);
        }
        /* Il focus da tastiera solleva la scheda come l'hover (accessibilità) */
        .rev-card:focus-within {
          transform: translateY(-4px);
          box-shadow: 0 6px 14px -8px color-mix(in srgb, var(--hero-shade) 22%, transparent),
            0 28px 54px -24px color-mix(in srgb, var(--hero-shade) 42%, transparent);
        }
        .rev-quote { text-wrap: pretty; }

        /* ---- Marquee: scorrimento continuo, in pausa all'hover ---- */
        .rev-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent);
        }
        .rev-track {
          animation: revScroll 50s linear infinite;
        }
        .rev-marquee:hover .rev-track { animation-play-state: paused; }
        @keyframes revScroll { to { transform: translateX(-50%); } }

        /* ---- Touch (niente hover) o reduced-motion: niente auto-scroll ---- */
        @media (hover: none), (prefers-reduced-motion: reduce) {
          .rev-marquee {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -webkit-mask-image: none;
            mask-image: none;
            scroll-snap-type: x proximity;
          }
          .rev-track { animation: none; width: auto; }
          .rev-card { scroll-snap-align: start; }
          /* nasconde la seconda metà duplicata quando non c'è il loop automatico */
          .rev-track > .rev-card:nth-child(n + ${rest.length + 1}) { display: none; }
        }

        /* ---- Reduced-motion: nessun sollevamento, solo cambio d'ombra ---- */
        @media (prefers-reduced-motion: reduce) {
          .trust-badge, .rev-card { transition: box-shadow 200ms ease; }
          .trust-badge:hover, .rev-card:hover, .rev-card:focus-within { transform: none; }
        }
      `}</style>
    </section>
  );
}
