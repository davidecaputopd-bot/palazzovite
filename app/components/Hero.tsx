"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteCopy } from "@/app/data/i18n";
import { HERO } from "@/app/data/photos";

export default function Hero({ copy, availability }: { copy: SiteCopy["hero"]; availability: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const base = "transition-all duration-1000 ease-out";

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--hero-shade)]">
      <Image
        src={HERO}
        alt={copy.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        style={{
          transform: mounted ? "scale(1)" : "scale(1.08)",
          transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
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
