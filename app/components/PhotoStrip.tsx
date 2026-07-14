"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Striscia orizzontale scorribile (scroll-snap) di fotografie, con lightbox.
// Pensata per gli spazi comuni: si sfoglia col dito/trackpad, click per ingrandire.
export default function PhotoStrip({
  images,
  alt,
  openLabel = "Apri",
}: {
  images: string[];
  alt: string;
  openLabel?: string;
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div
        className="flex gap-px overflow-x-auto snap-x snap-mandatory scroll-px-6 -mx-6 px-6 md:-mx-10 md:px-10 pb-4"
        style={{ scrollbarWidth: "thin" }}
        role="region"
        aria-label={alt}
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${openLabel} — ${alt} ${i + 1}`}
            className="group relative shrink-0 snap-start overflow-hidden bg-[var(--ink)]/10 w-[78vw] sm:w-[46vw] md:w-[32vw] lg:w-[24vw] aspect-[4/5]"
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
              sizes="(max-width: 640px) 78vw, (max-width: 768px) 46vw, (max-width: 1024px) 32vw, 24vw"
            />
            <span className="absolute inset-0 bg-[var(--hero-shade)]/0 transition-colors duration-300 group-hover:bg-[var(--hero-shade)]/15" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
        styles={{ container: { backgroundColor: "color-mix(in srgb, var(--hero-shade) 94%, transparent)" } }}
      />
    </>
  );
}
