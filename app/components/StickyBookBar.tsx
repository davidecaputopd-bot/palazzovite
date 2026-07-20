"use client";

import { useEffect, useState } from "react";

export default function StickyBookBar({
  availability,
  subtitle,
}: {
  availability: string;
  subtitle: string;
}) {
  const [visible, setVisible] = useState(false);

  // Il banner sale dal basso solo quando serve davvero:
  // - non sull'hero (l'hero ha già la sua CTA e non va coperto)
  // - non sulla sezione form (chiedere "richiedi disponibilità" mentre la compili è rumore)
  useEffect(() => {
    const hero = document.querySelector("main > section");
    const form = document.getElementById("prenota");
    let pastHero = false;
    let atForm = false;
    const update = () => setVisible(pastHero && !atForm);
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const o = new IntersectionObserver(
        ([e]) => {
          pastHero = !e.isIntersecting;
          update();
        },
        { threshold: 0.08 },
      );
      o.observe(hero);
      observers.push(o);
    }

    if (form) {
      const o = new IntersectionObserver(
        ([e]) => {
          atForm = e.isIntersecting;
          update();
        },
        { threshold: 0 },
      );
      o.observe(form);
      observers.push(o);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out motion-reduce:transition-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(130%)",

      }}
      aria-hidden={!visible}
      inert={!visible}
    >
      <a
        href="#prenota"
        className="flex items-center justify-between gap-4 min-h-[48px] px-5 py-3 bg-[color-mix(in_srgb,var(--dark)_92%,transparent)] text-[var(--ink)] border-t border-[var(--ink)]/12 backdrop-blur-md active:opacity-80 transition-opacity"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <span className="font-label text-[11px]">{availability}</span>
        <span className="hidden min-[390px]:inline font-body font-light text-[11px] text-[var(--ink-soft)] tracking-wide truncate">
          {subtitle}
        </span>
      </a>
    </div>
  );
}
