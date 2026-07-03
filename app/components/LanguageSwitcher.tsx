"use client";

import { useState } from "react";
import { localeFlags, localeNames, localePath, locales, type Locale } from "@/app/data/i18n";

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
        className="flex items-center gap-1.5 border px-2.5 py-2 font-label text-[10px] uppercase transition-opacity hover:opacity-60"
        style={{ borderColor: color, color }}
      >
        <span aria-hidden="true" className="text-sm leading-none">{localeFlags[locale]}</span>
        <span>{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-32 border border-[var(--ink)]/10 bg-[var(--stone)] py-1 text-[var(--ink)]">
          {locales.map((item) => (
            <a
              key={item}
              href={localePath(item)}
              hrefLang={item}
              aria-current={item === locale ? "page" : undefined}
              className="flex items-center gap-2.5 px-4 py-2.5 font-label text-[10px] hover:bg-[var(--stone-deep)]"
            >
              <span aria-hidden="true" className="text-sm leading-none">{localeFlags[item]}</span>
              <span>{localeNames[item]}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
