"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteCopy } from "@/app/data/i18n";

export default function Hero({ copy, availability }: { copy: SiteCopy["hero"]; availability: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const base = "transition-all duration-1000 ease-out";

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--wood)]">
      <Image
        src="/images/palazzo/facciata.jpg"
        alt={copy.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        style={{
          transform: mounted ? "scale(1)" : "scale(1.08)",
          transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43,36,25,0.08) 0%, rgba(43,36,25,0.45) 60%, rgba(43,36,25,0.82) 100%)",
        }}
      />
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end px-6 md:px-10 pb-14 md:pb-20">
        <p
          className={`${base} font-label text-xs text-[#F4EFE4]/75 mb-3`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "200ms",
          }}
        >
          {copy.eyebrow}
        </p>
        <h1
          className={`${base} font-display text-[17vw] md:text-[8.5vw] leading-[0.88] text-[#F4EFE4]`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "350ms",
          }}
        >
          Palazzo Vite
        </h1>
        <p
          className={`${base} font-body font-light text-[#F4EFE4]/85 max-w-sm mt-5 text-base md:text-lg leading-relaxed`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "550ms",
          }}
        >
          {copy.description}
        </p>
        <div
          className={`${base} mt-8 flex flex-wrap items-center gap-4 md:gap-6`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transitionDelay: "750ms",
          }}
        >
          <a
            href="#prenota"
            className="font-label text-xs bg-[#F4EFE4] text-[var(--ink)] px-6 py-3 hover:opacity-90 active:scale-95 transition-[opacity,transform] duration-150 ease-out"
          >
            {availability}
          </a>
          <a
            href="#storia"
            className="font-label text-xs text-[#F4EFE4]/65 hover:text-[#F4EFE4] active:opacity-50 transition-[color,opacity] duration-150 ease-out underline underline-offset-4"
          >
            {copy.discover}
          </a>
        </div>
      </div>
    </section>
  );
}
