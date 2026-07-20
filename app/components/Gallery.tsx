"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Galleria a griglia con lightbox e lazy loading.
// Prima immagine "featured" (larga), il resto in griglia; hover scale on-image.
export default function Gallery({
  images,
  alt,
  openLabel = "Apri",
  bathroomFrom,
  bathroomLabel,
}: {
  images: string[];
  alt: string;
  openLabel?: string;
  bathroomFrom?: number; // indice da cui in poi gli scatti sono del bagno
  bathroomLabel?: string; // etichetta "Bagno" tradotta
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => {
          const isBath = bathroomFrom !== undefined && i >= bathroomFrom;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${openLabel} - ${alt} ${i + 1}${isBath && bathroomLabel ? ` (${bathroomLabel})` : ""}`}
              className={`group relative overflow-hidden bg-[var(--blush)] ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              <span className="absolute inset-0 bg-[var(--dark)]/0 transition-colors duration-300 group-hover:bg-[var(--dark)]/15" />
              {isBath && bathroomLabel && (
                <span className="absolute bottom-2 left-2 font-label text-[10px] tracking-[0.14em] text-[var(--blush)] bg-[color-mix(in_srgb,var(--hero-shade)_72%,transparent)] px-2 py-1">
                  {bathroomLabel}
                </span>
              )}
            </button>
          );
        })}
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
