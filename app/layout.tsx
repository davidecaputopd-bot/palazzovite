import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palazzovite.vercel.app"),
  title: "Palazzo Vite — Copertino, 1901",
  description:
    "Affittacamere in un palazzo dei primi del Novecento nel cuore del Salento, a Copertino (LE), con cinque stanze: Aria, Etere, Fiamma, Terra, Mare.",
  openGraph: {
    title: "Palazzo Vite — Copertino, 1901",
    description:
      "Affittacamere in un palazzo dei primi del Novecento nel cuore del Salento, a Copertino (LE).",
    url: "https://palazzovite.vercel.app",
    siteName: "Palazzo Vite",
    images: ["/images/palazzo/facciata.jpg"],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palazzo Vite — Copertino, 1901",
    description:
      "Affittacamere in un palazzo dei primi del Novecento nel cuore del Salento.",
    images: ["/images/palazzo/facciata.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Palazzo Vite",
  description:
    "Affittacamere in un palazzo dei primi del Novecento nel cuore del Salento.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Amendola, 1",
    addressLocality: "Copertino",
    addressRegion: "LE",
    postalCode: "73043",
    addressCountry: "IT",
  },
  image: "https://palazzovite.vercel.app/images/palazzo/facciata.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${bebas.variable} ${dmMono.variable} ${dmSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
