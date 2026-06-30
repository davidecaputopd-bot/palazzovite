"use client";

const LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#stanze", label: "Stanze" },
  { href: "#palazzo", label: "Il Palazzo" },
  { href: "#posizione", label: "Posizione" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 mix-blend-difference">
      <a href="#" className="font-display text-2xl text-[#F4EFE4] tracking-wide">
        Palazzo Vite
      </a>
      <nav className="hidden md:flex items-center gap-8 font-label text-xs text-[#F4EFE4]">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
            {l.label}
          </a>
        ))}
        <a
          href="#prenota"
          className="border border-[#F4EFE4] px-4 py-2 hover:bg-[#F4EFE4] hover:text-[#2B2419] transition-colors"
        >
          Verifica disponibilità
        </a>
      </nav>
      <a
        href="#prenota"
        className="md:hidden font-label text-xs text-[#F4EFE4] border border-[#F4EFE4] px-3 py-2"
      >
        Prenota
      </a>
    </header>
  );
}
