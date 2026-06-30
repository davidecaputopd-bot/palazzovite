"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#stanze", label: "Stanze" },
  { href: "#palazzo", label: "Il Palazzo" },
  { href: "#posizione", label: "Posizione" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "var(--ink)" : "#F4EFE4";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "var(--stone)" : "transparent",
        backgroundImage: scrolled
          ? "none"
          : "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0))",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <a href="#" className="font-display text-2xl tracking-wide" style={{ color: textColor }}>
        Palazzo Vite
      </a>
      <nav className="hidden md:flex items-center gap-8 font-label text-xs" style={{ color: textColor }}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
            {l.label}
          </a>
        ))}
        <a
          href="#prenota"
          className="border px-4 py-2 transition-colors"
          style={{
            borderColor: textColor,
            color: textColor,
          }}
        >
          Verifica disponibilità
        </a>
      </nav>
      <a
        href="#prenota"
        className="md:hidden font-label text-xs border px-3 py-2"
        style={{ color: textColor, borderColor: textColor }}
      >
        Verifica disponibilità
      </a>
    </header>
  );
}
