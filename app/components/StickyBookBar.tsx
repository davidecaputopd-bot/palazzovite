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
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 transition-transform duration-500 ease-out motion-reduce:transition-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(130%)",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
      aria-hidden={!visible}
      inert={!visible}
    >
      <a
        href="#prenota"
        className="flex flex-col items-center justify-center gap-1 px-5 py-4 min-h-[58px] bg-[var(--dark)] text-[var(--ink)] border border-[var(--ink)]/15 shadow-[0_18px_45px_rgba(43,36,25,0.22)] active:scale-[0.99] transition-transform"
      >
        <span className="font-label text-[12px]">{availability}</span>
        <span className="font-body font-light text-[12px] text-[var(--ink-soft)] tracking-wide">
          {subtitle}
        </span>
      </a>
    </div>
  );
}
