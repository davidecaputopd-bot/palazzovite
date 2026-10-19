import type { Metadata, Viewport } from "next";
import { Encode_Sans_Expanded, Spectral } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/app/data/config";
import { REVIEW_STATS, REVIEWS } from "@/app/data/reviews";
import "./globals.css";

// Sostituti open dei font del riferimento "The Hollywood Grande":
// GT America Extended -> Encode Sans Expanded (grottesco esteso, titoli/label)
// Calluna            -> Spectral (serif da lettura, corpo; anche corsivo per gli accenti)
// Il marchio "Palazzo Vite" (logo + titolo hero) usa il font brand Edinburgh, reso
// come artwork vettoriale: vive nei file SVG, non come webfont.
const encode = Encode_Sans_Expanded({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-encode",
});

const spectral = Spectral({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Palazzo Vite · Dimora storica e suite a Copertino",
  description:
    "Palazzo Vite è una dimora storica del 1908 nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-GB": "/en",
      "fr-FR": "/fr",
      "es-ES": "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Palazzo Vite · Dimora storica e suite a Copertino",
    description:
      "Dimora storica del 1908 nel centro storico di Copertino, con cinque suite, giardino e terrazza affacciata sul Castello Angioino.",
    url: SITE_URL,
    siteName: "Palazzo Vite",
    images: ["/foto/hero-01.jpg"],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palazzo Vite · Dimora storica e suite a Copertino",
    description:
      "Dimora storica del 1908 nel centro storico di Copertino, con cinque suite, giardino e terrazza.",
    images: ["/foto/hero-01.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE4",
  colorScheme: "light",
  // Disegna fino ai bordi sotto notch/Dynamic Island e home indicator:
  // attiva env(safe-area-inset-*) usate da nav e barra fissa.
  viewportFit: "cover",
};

// Converte i punteggi in formato italiano ("4,9") in numero per lo schema.
const toNum = (s: string) => Number(s.replace(",", "."));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Palazzo Vite",
  description:
    "Dimora storica del 1908 nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
  url: SITE_URL,
  email: "palazzovite@gmail.com",
  telephone: "+393286244934",
  priceRange: "€€",
  numberOfRooms: 5,
  sameAs: [
    "https://www.instagram.com/palazzovite/",
    "https://www.google.com/maps/place/Palazzo+Vite/@40.2748687,18.0434028,17z",
    "https://www.booking.com/hotel/it/palazzo-vite.it.html",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Giovanni Amendola, 1",
    addressLocality: "Copertino",
    addressRegion: "LE",
    postalCode: "73043",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2748687,
    longitude: 18.0434028,
  },
  hasMap: "https://maps.google.com/?q=Via+Giovanni+Amendola+1,+73043+Copertino+LE",
  checkinTime: "14:00",
  checkoutTime: "10:00",
  availableLanguage: ["it", "en", "fr", "es"],
  petsAllowed: false,
  smokingAllowed: false,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parcheggio privato", value: true },
    { "@type": "LocationFeatureSpecification", name: "Giardino", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrazza", value: true },
    { "@type": "LocationFeatureSpecification", name: "Colazione", value: true },
  ],
  // Punteggio aggregato reale (fonte Google, scala a 5 stelle — la più leggibile
  // da motori e AI). Aggiornare REVIEW_STATS fa aggiornare anche lo schema.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: toNum(REVIEW_STATS.google.rating),
    bestRating: 5,
    ratingCount: REVIEW_STATS.google.count,
  },
  // Alcune recensioni reali Google, attribuite, per densità informativa (GEO).
  review: REVIEWS.filter((r) => r.source === "Google")
    .slice(0, 3)
    .map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: r.quote,
      inLanguage: r.lang,
    })),
  image: [
    `${SITE_URL}/foto/hero-01.jpg`,
    `${SITE_URL}/foto/location-05.jpg`,
    `${SITE_URL}/foto/spazi-01.jpg`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${encode.variable} ${spectral.variable}`}>
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
