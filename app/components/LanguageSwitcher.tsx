"use client";

import { useState } from "react";
import { localeNames, localePath, locales, type Locale } from "@/app/data/i18n";

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
        className="border px-3 py-2 font-label text-[10px] uppercase transition-opacity hover:opacity-60"
        style={{ borderColor: color, color }}
      >
        {locale}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-32 border border-[var(--ink)]/10 bg-[var(--stone)] py-1 text-[var(--ink)]">
          {locales.map((item) => (
            <a
              key={item}
              href={localePath(item)}
              hrefLang={item}
              aria-current={item === locale ? "page" : undefined}
              className="block px-4 py-2 font-label text-[10px] hover:bg-[var(--stone-deep)]"
            >
              {localeNames[item]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
