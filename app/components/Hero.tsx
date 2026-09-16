"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteCopy } from "@/app/data/i18n";
import { HERO } from "@/app/data/photos";

export default function Hero({ copy, availability }: { copy: SiteCopy["hero"]; availability: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const wordmark = wordmarkRef.current;
      const desc = descRef.current;
      const cta = ctaRef.current ? Array.from(ctaRef.current.children) : [];
      const halo = haloRef.current;
      const imageWrap = imageWrapRef.current;

      // Reduced motion: tutto già visibile, nessuna animazione né ScrollTrigger.
      if (reduce) {
        gsap.set([wordmark, desc, ...cta, halo], { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        gsap.set(imageWrap, { scale: 1, y: 0 });
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Stati iniziali.
      gsap.set(imageWrap, { scale: 1.12, transformOrigin: "50% 50%", force3D: true });
      gsap.set(wordmark, { autoAlpha: 0, yPercent: 14, scale: 1.05, transformOrigin: "left center", force3D: true });
      gsap.set(desc, { autoAlpha: 0, y: 18 });
      gsap.set(cta, { autoAlpha: 0, y: 14 });
      gsap.set(halo, { autoAlpha: 0 });

      // ── Entrata cinematografica (una regia sola, non micro-interazioni sparse) ──
      const tl = gsap.timeline({ delay: 0.35, defaults: { force3D: true, overwrite: "auto" } });
      tl.to(imageWrap, { scale: 1.08, duration: 1.8, ease: "power2.out" }, 0)
        .to(halo, { autoAlpha: 1, duration: 1.6, ease: "sine.out" }, 0.15)
        // massa che si ferma: expo.out. scala che si assesta a 1, corpo che sale.
        .to(wordmark, { autoAlpha: 1, yPercent: 0, scale: 1, duration: 1.25, ease: "expo.out" }, 0.28)
        .to(desc, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.82")
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12 }, "-=0.62");

      // ── Parallasse allo scroll ──
      // Il contenuto (primo piano) sale più veloce e sfuma: profondità.
      gsap.to(contentRef.current, {
        yPercent: -16,
        autoAlpha: 0.1,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.5 },
      });
      // L'immagine (sfondo) deriva appena verso il basso, dentro l'overscan (scale 1.08 → 4% margine).
      gsap.to(imageWrap, {
        yPercent: 3,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.5 },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--hero-shade)]">
      <div ref={imageWrapRef} className="absolute inset-0" style={{ willChange: "transform" }}>
        <Image src={HERO} alt={copy.imageAlt} fill priority className="object-cover" sizes="100vw" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--hero-shade) 16%, transparent) 0%, color-mix(in srgb, var(--hero-shade) 36%, transparent) 55%, color-mix(in srgb, var(--hero-shade) 78%, transparent) 100%)",
        }}
      />
      {/* Velatura calda: alone morbido dietro titolo e CTA, come luce di una casa vera */}
      <div
        ref={haloRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(58% 46% at 20% 80%, color-mix(in srgb, var(--blush) 30%, transparent) 0%, transparent 62%)",
        }}
      />
      <div
        ref={contentRef}
        className="relative z-10 min-h-[100dvh] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Titolo = wordmark "PALAZZO VITE" nel font brand Edinburgh, ricavato dai
            tracciati vettoriali del logo (nessun font da caricare, nessuna licenza web).
            Reso come CSS mask così il colore arriva dal sito; l'h1 resta accessibile. */}
        <h1 aria-label="Palazzo Vite" className="m-0">
          <span
            ref={wordmarkRef}
            aria-hidden="true"
            className="block"
            style={{
              width: "clamp(280px, 82vw, 620px)",
              aspectRatio: "584 / 86",
              backgroundColor: "var(--blush)",
              WebkitMaskImage: "url(/wordmark-palazzo-vite.svg)",
              maskImage: "url(/wordmark-palazzo-vite.svg)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        </h1>
        <p
          className="font-body font-light text-[var(--blush)]/85 max-w-md mt-6 text-base md:text-lg leading-relaxed"
          ref={descRef}
        >
          {copy.description}
        </p>
        <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-5 md:gap-6">
          <a
            href="#prenota"
            className="font-label text-[11px] rounded-full bg-[image:var(--btn-blush)] text-[var(--ink)] px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_color-mix(in_srgb,var(--hero-shade)_40%,transparent)] active:scale-[0.98] transition-[transform,box-shadow] duration-200 ease-out"
          >
            {availability}
          </a>
          <a
            href="#storia"
            className="inline-flex items-center min-h-[44px] font-label text-[11px] text-[var(--blush)]/70 hover:text-[var(--blush)] active:opacity-50 transition-[color,opacity] duration-200 ease-out underline underline-offset-[6px] decoration-[var(--accent)]"
          >
            {copy.discover}
          </a>
        </div>
      </div>
    </section>
  );
}
