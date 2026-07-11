"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { SiteCopy } from "@/app/data/i18n";
import { HERO } from "@/app/data/photos";

const HERO_VIDEO = "/video/hero-loop.mp4";

export default function Hero({ copy, availability }: { copy: SiteCopy["hero"]; availability: string }) {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // prefers-reduced-motion: niente video/zoom, solo poster statico.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Avvio esplicito dell'autoplay (Safari iOS a volte ignora l'attributo).
  useEffect(() => {
    if (reduced) return;
    videoRef.current?.play().catch(() => {});
  }, [reduced]);

  // Zoom scroll-linked scale(1.08) -> scale(1.22), solo entro l'altezza dell'hero.
  // Muta il DOM via ref (nessun re-render); listener passivo throttlato con rAF.
  useEffect(() => {
    if (reduced) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = section.offsetHeight || window.innerHeight;
      const p = Math.min(Math.max(window.scrollY / h, 0), 1); // si ferma a 1 oltre l'hero
      video.style.transform = `scale(${(1.08 + p * 0.14).toFixed(4)})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const base = "transition-all duration-1000 ease-out";

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--hero-shade)]">
      {reduced ? (
        <Image
          src={HERO}
          alt={copy.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ transform: "scale(1.08)" }}
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          poster={HERO}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={copy.imageAlt}
          style={{ transform: "scale(1.08)" }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--hero-shade) 16%, transparent) 0%, color-mix(in srgb, var(--hero-shade) 36%, transparent) 55%, color-mix(in srgb, var(--hero-shade) 78%, transparent) 100%)",
        }}
      />
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24">
        <p
          className={`${base} font-label text-[11px] md:text-xs text-[var(--accent)] mb-4`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "200ms",
          }}
        >
          {copy.eyebrow}
        </p>
        <h1
          className={`${base} font-display text-[var(--blush)] leading-[0.92] text-[clamp(2.4rem,8.5vw,5.75rem)]`}
          style={{
            letterSpacing: "-0.01em",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "350ms",
          }}
        >
          Palazzo Vite
        </h1>
        <p
          className={`${base} font-body font-light text-[var(--blush)]/85 max-w-md mt-6 text-base md:text-lg leading-relaxed`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "550ms",
          }}
        >
          {copy.description}
        </p>
        <div
          className={`${base} mt-9 flex flex-wrap items-center gap-5 md:gap-6`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transitionDelay: "750ms",
          }}
        >
          <a
            href="#prenota"
            className="font-label text-[11px] bg-[var(--blush)] text-[var(--ink)] px-7 py-4 hover:bg-[var(--accent)] active:scale-95 transition-[background-color,transform] duration-200 ease-out"
          >
            {availability}
          </a>
          <a
            href="#storia"
            className="font-label text-[11px] text-[var(--blush)]/70 hover:text-[var(--blush)] active:opacity-50 transition-[color,opacity] duration-200 ease-out underline underline-offset-[6px] decoration-[var(--accent)]"
          >
            {copy.discover}
          </a>
        </div>
      </div>
    </section>
  );
}
