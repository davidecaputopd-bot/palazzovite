"use client";

import { useState } from "react";
import type { SiteCopy } from "@/app/data/i18n";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Via+Amendola+1,+73043+Copertino+LE&output=embed";
const MAP_LINK = "https://maps.google.com/?q=Via+Amendola+1,+73043+Copertino+LE";

export default function MapConsent({ copy }: { copy: SiteCopy["location"] }) {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--stone-deep)]">
        <iframe
          title={copy.mapTitle}
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--dark)] text-[var(--on-dark)]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <div>
          <p className="font-label text-[12px] mb-3">Via Amendola, 1 - Copertino (LE)</p>
          <p className="font-body text-base md:text-lg leading-relaxed max-w-xl">
            {copy.mapConsent}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setAccepted(true)}
            className="font-label text-xs bg-[var(--ink)] text-[var(--stone)] px-6 py-4 hover:opacity-85 transition-opacity"
          >
            {copy.loadMap}
          </button>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs underline underline-offset-4 hover:opacity-75"
          >
            {copy.openMaps}
          </a>
        </div>
      </div>
    </div>
  );
}
