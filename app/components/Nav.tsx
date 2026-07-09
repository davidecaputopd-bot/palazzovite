"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import type { Locale, SiteCopy } from "@/app/data/i18n";

export default function Nav({ copy, locale }: { copy: SiteCopy["nav"]; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Testo sempre chiaro (blush): trasparente sull'hero, verde-scuro dopo lo scroll.
  const solid = scrolled || open;
  const links = [
    { href: "#storia", label: copy.story },
    { href: "#stanze", label: copy.rooms },
    { href: "#palazzo", label: copy.palace },
    { href: "#posizione", label: copy.location },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-[var(--blush)] transition-colors duration-500"
      style={{
        backgroundColor: solid ? "var(--dark)" : "transparent",
        backgroundImage: solid
          ? "none"
          : "linear-gradient(180deg, color-mix(in srgb, var(--dark) 55%, transparent), transparent)",
        borderBottom: scrolled && !open ? "1px solid color-mix(in srgb, var(--blush) 14%, transparent)" : "1px solid transparent",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="font-display text-xl md:text-2xl tracking-tight">
          Palazzo Vite
        </a>

        <nav className="hidden md:flex items-center gap-8 font-label text-[11px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--accent)] transition-colors duration-200 ease-out"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="border border-[var(--blush)] px-4 py-2 hover:bg-[var(--accent)] hover:text-[var(--dark)] hover:border-[var(--accent)] active:scale-95 transition-[background-color,color,transform] duration-200 ease-out"
          >
            {copy.availability}
          </a>
          <LanguageSwitcher locale={locale} label={copy.language} color="var(--blush)" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher locale={locale} label={copy.language} color="var(--blush)" />
          <button
            type="button"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="font-label text-[11px] border border-[var(--blush)] px-3 py-2"
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      <nav
        className="md:hidden flex flex-col font-label text-sm px-6 pb-6 gap-1 overflow-hidden transition-[max-height,opacity] ease-out text-[var(--blush)]"
        style={{
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
          transitionDuration: open ? "240ms" : "160ms",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
        inert={!open}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="py-3 border-b border-[var(--blush)]/15 hover:text-[var(--accent)] transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#prenota"
          onClick={() => setOpen(false)}
          className="mt-4 text-center bg-[var(--blush)] text-[var(--dark)] py-3 active:opacity-70 transition-opacity duration-150"
        >
          {copy.availability}
        </a>
      </nav>
    </header>
  );
}
