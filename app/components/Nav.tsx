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
        <a href="#" className="font-display text-xl md:text-2xl tracking-tight">
          Palazzo Vite
        </a>

        <nav className="hidden md:flex items-center gap-8 font-label text-[11px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--accent-deep)] transition-colors duration-200 ease-out"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            className="border px-4 py-2 hover:bg-[var(--accent-deep)] hover:text-[var(--blush)] hover:border-[var(--accent-deep)] active:scale-95 transition-[background-color,color,border-color,transform] duration-200 ease-out"
            style={{ borderColor }}
          >
            {copy.availability}
          </a>
          <LanguageSwitcher locale={locale} label={copy.language} color={borderColor} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher locale={locale} label={copy.language} color={borderColor} />
          <button
            type="button"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="font-label text-[11px] border px-3 py-2"
            style={{ borderColor }}
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      <nav
        className="md:hidden flex flex-col font-label text-sm px-6 pb-6 gap-1 overflow-hidden transition-[max-height,opacity] ease-out text-[var(--ink)]"
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
            className="py-3 border-b border-[var(--ink)]/15 hover:text-[var(--accent-deep)] transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#prenota"
          onClick={() => setOpen(false)}
          className="mt-4 text-center bg-[var(--ink)] text-[var(--blush)] py-3 active:opacity-70 transition-opacity duration-150"
        >
          {copy.availability}
        </a>
      </nav>
    </header>
  );
}
