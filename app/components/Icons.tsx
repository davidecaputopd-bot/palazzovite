// Icone lineari minimali, una per elemento. Stroke = currentColor, così ereditano
// sempre il colore della stanza che le usa.

export function IconAria({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path d="M6 18h26a6 6 0 1 0-5-9.3" strokeLinecap="round" />
      <path d="M6 30h32a6 6 0 1 1-5 9.3" strokeLinecap="round" />
      <path d="M6 24h22" strokeLinecap="round" />
    </svg>
  );
}

export function IconEtere({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="1.4" fill="currentColor" stroke="none" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6" strokeLinecap="round" />
    </svg>
  );
}

export function IconFiamma({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path
        d="M24 6c4 6-3 9-3 15a7 7 0 0 0 14 0c0-3-1.5-5-3-7 1 6-2 7-3 5 1-5-2-8-5-13Z"
        strokeLinejoin="round"
      />
      <path d="M20 30a8 8 0 0 0 14.5 4.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconTerra({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path d="M6 34h36" strokeLinecap="round" />
      <path d="M11 34 24 11l13 23" strokeLinejoin="round" />
      <path d="M18 34l6-11 6 11" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMare({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      <path d="M4 20c4-4 8-4 12 0s8 4 12 0 8-4 12 0" strokeLinecap="round" />
      <path d="M4 28c4-4 8-4 12 0s8 4 12 0 8-4 12 0" strokeLinecap="round" />
    </svg>
  );
}

export const ELEMENT_ICONS = {
  aria: IconAria,
  etere: IconEtere,
  fiamma: IconFiamma,
  terra: IconTerra,
  mare: IconMare,
} as const;

export type ElementKey = keyof typeof ELEMENT_ICONS;
