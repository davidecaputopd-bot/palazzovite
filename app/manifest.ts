import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Palazzo Vite · Dimora storica a Copertino",
    short_name: "Palazzo Vite",
    description:
      "Dimora storica del 1908 nel centro storico di Copertino, con cinque suite, giardino, terrazza e parcheggio privato.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE4",
    theme_color: "#F4EFE4",
    lang: "it",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
