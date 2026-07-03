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

  // Quando il menu mobile è aperto, forza sempre i colori "scrolled" per leggibilità
  const dark = scrolled || open;
  const textColor = dark ? "var(--ink)" : "#F4EFE4";
  const links = [
    { href: "#storia", label: copy.story },
    { href: "#stanze", label: copy.rooms },
    { href: "#palazzo", label: copy.palace },
    { href: "#posizione", label: copy.location },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: dark ? "var(--stone)" : "transparent",
        backgroundImage: dark
          ? "none"
          : "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0))",
        boxShadow: scrolled && !open ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#" className="font-display text-2xl tracking-wide" style={{ color: textColor }}>
          Palazzo Vite
        </a>

        <nav className="hidden md:flex items-center gap-8 font-label text-xs" style={{ color: textColor }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity duration-150 ease-out">
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="border px-4 py-2 hover:opacity-70 active:scale-95 transition-[opacity,transform] duration-150 ease-out"
            style={{ borderColor: textColor, color: textColor }}
          >
            {copy.availability}
          </a>
          <LanguageSwitcher locale={locale} label={copy.language} color={textColor} />
        </nav>

        <button
          type="button"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-label text-xs border px-3 py-2"
          style={{ color: textColor, borderColor: textColor }}
        >
          {open ? copy.close : copy.menu}
        </button>
      </div>

      <nav
        className="md:hidden flex flex-col font-label text-sm px-6 pb-6 gap-1 overflow-hidden transition-[max-height,opacity] ease-out"
        style={{
          color: "var(--ink)",
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
            className="py-3 border-b border-[var(--ink)]/10"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#prenota"
          onClick={() => setOpen(false)}
          className="mt-4 text-center bg-[var(--ink)] text-[var(--stone)] py-3 active:opacity-70 transition-opacity duration-150"
        >
          {copy.availability}
        </a>
        <div className="mt-3 self-end">
          <LanguageSwitcher locale={locale} label={copy.language} color="var(--ink)" />
        </div>
      </nav>
    </header>
  );
}
