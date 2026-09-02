"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import Logo from "@/app/components/Logo";
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/app/data/config";
import type { Locale, SiteCopy } from "@/app/data/i18n";

export default function Nav({ copy, locale }: { copy: SiteCopy["nav"]; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    const hero = document.querySelector("main > section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: evidenzia la sezione in cui ci si trova ("sei qui" del Trunk Test).
  // Sceglie la sezione più vicina al terzo superiore del viewport.
  useEffect(() => {
    const ids = ["storia", "stanze", "palazzo", "posizione"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Header trasparente sull'hero; dopo lo scroll resta leggero, non una barra piena.
  const solid = scrolled || open;
  const textColor = solid ? "var(--ink)" : "var(--blush)";
  const borderColor = solid ? "var(--ink)" : "var(--blush)";
  const links = [
    { href: "#storia", label: copy.story },
    { href: "#stanze", label: copy.rooms },
    { href: "#palazzo", label: copy.palace },
    { href: "#posizione", label: copy.location },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500"
      style={{
        color: textColor,
        backgroundColor: open
          ? "color-mix(in srgb, var(--dark) 96%, transparent)"
          : scrolled
            ? "color-mix(in srgb, var(--dark) 30%, transparent)"
            : "transparent",
        backgroundImage: "none",
        backdropFilter: solid ? "blur(14px)" : "none",
        WebkitBackdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: scrolled && !open ? "1px solid color-mix(in srgb, var(--ink) 12%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" aria-label="Palazzo Vite — home" className="shrink-0">
          <Logo className="h-14 w-14 md:h-16 md:w-16" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-label text-[11px]">
          {links.map((l) => {
            const active = `#${current}` === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active ? "location" : undefined}
                className={`relative transition-colors duration-200 ease-out hover:text-[var(--accent-deep)] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-current after:transition-[width] after:duration-300 after:ease-out ${
                  active ? "after:w-full" : "after:w-0 opacity-70 hover:opacity-100"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={`tel:+39${CONTACT_PHONE}`}
            className="whitespace-nowrap font-semibold hover:text-[var(--accent-deep)] transition-colors"
          >
            +39 {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href="#prenota"
            className="rounded-full border px-5 py-2.5 hover:bg-[var(--accent-deep)] hover:text-[var(--blush)] hover:border-[var(--accent-deep)] active:scale-[0.98] transition-[background-color,color,border-color,transform] duration-200 ease-out"
            style={{ borderColor }}
          >
            {copy.availability}
          </a>
          <LanguageSwitcher locale={locale} label={copy.language} color={borderColor} />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} label={copy.language} color={borderColor} />
          <button
            type="button"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="font-label text-[11px] min-h-[44px] rounded-full border px-4 py-2.5 active:scale-[0.98] transition-transform"
            style={{ borderColor }}
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      <nav
        className="lg:hidden flex flex-col font-label text-sm px-6 pb-6 gap-1 overflow-hidden transition-[max-height,opacity,transform] ease-out text-[var(--ink)]"
        style={{
          maxHeight: open ? "480px" : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          transitionDuration: open ? "240ms" : "160ms",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
        inert={!open}
      >
        {links.map((l) => {
          const active = `#${current}` === l.href;
          return (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={active ? "location" : undefined}
              className={`py-3 border-b border-[var(--ink)]/15 transition-colors hover:text-[var(--accent-deep)] ${
                active ? "font-semibold" : "opacity-70"
              }`}
            >
              {l.label}
            </a>
          );
        })}
        <a
          href={`tel:+39${CONTACT_PHONE}`}
          onClick={() => setOpen(false)}
          className="mt-4 flex items-center justify-center gap-2.5 rounded-full border border-[var(--ink)]/25 py-3 font-semibold active:scale-[0.98] transition-transform duration-150"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px] shrink-0" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +39 {CONTACT_PHONE_DISPLAY}
        </a>
        <a
          href="#prenota"
          onClick={() => setOpen(false)}
          className="mt-3 text-center rounded-full bg-[image:var(--btn-ink)] text-[var(--blush)] py-3 active:scale-[0.98] active:opacity-80 transition-[transform,opacity] duration-150"
        >
          {copy.availability}
        </a>
      </nav>
    </header>
  );
}
