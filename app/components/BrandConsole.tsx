"use client";

import { useEffect } from "react";

// Piccola ricompensa per i curiosi che aprono la console del browser.
// Voce del brand, elegante e sobria. Nessun impatto sull'esperienza.
export default function BrandConsole() {
  useEffect(() => {
    try {
      console.log(
        "%cPalazzo Vite",
        "font:600 22px Georgia,serif;color:#2B2419;letter-spacing:0.04em",
      );
      console.log(
        "%cDimora storica dal 1908 · Copertino, Salento\nGrazie per la curiosità — le porte sono aperte.\npalazzovite@gmail.com",
        "color:#5E6B57;font:italic 13px Georgia,serif;line-height:1.7",
      );
    } catch {
      /* console non disponibile: nessun problema */
    }
  }, []);

  return null;
}
