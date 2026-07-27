"use client";

import { useState } from "react";
import { localeNames, localePath, locales, type Locale } from "@/app/data/i18n";

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
    </svg>
  );
}

export default function LanguageSwitcher({
  locale,
  label,
  color,
}: {
  locale: Locale;
  label: string;
  color: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-[44px] items-center gap-1.5 rounded-full border px-3.5 py-2 font-label text-[11px] uppercase transition-[opacity,transform] hover:opacity-60 active:scale-[0.98]"
        style={{ borderColor: color, color }}
      >
        <GlobeIcon />
        <span>{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-32 overflow-hidden rounded-2xl bg-[var(--stone)] py-1 text-[var(--ink)] shadow-[0_14px_34px_rgb(36_48_31_/_0.16)]">
          {locales.map((item) => (
            <a
              key={item}
              href={localePath(item)}
              hrefLang={item}
              aria-current={item === locale ? "page" : undefined}
              className="block px-4 py-2.5 font-label text-[11px] hover:bg-[var(--stone-deep)] active:bg-[var(--stone-deep)]"
            >
              {localeNames[item]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
