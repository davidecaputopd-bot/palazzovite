import type { Metadata } from "next";
import { Encode_Sans_Expanded, Playfair_Display, Spectral } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Sostituti open dei font del riferimento "The Hollywood Grande":
// GT America Extended -> Encode Sans Expanded (grottesco esteso, titoli/label)
// Bookmania          -> Playfair Display (serif elegante, sottotitoli/accenti)
// Calluna            -> Spectral (serif da lettura, corpo)
const encode = Encode_Sans_Expanded({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-encode",
});

const playfair = Playfair_Display({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const spectral = Spectral({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palazzovite.vercel.app"),
  title: "Palazzo Vite · Dimora storica e suite a Copertino",
  description:
    "Palazzo Vite è una dimora storica dei primi del Novecento nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/",
      "en-GB": "/en",
      "fr-FR": "/fr",
      "es-ES": "/es",
    },
  },
  openGraph: {
    title: "Palazzo Vite · Dimora storica e suite a Copertino",
    description:
      "Dimora dei primi del Novecento nel centro storico di Copertino, con cinque suite, giardino e terrazza affacciata sul Castello Angioino.",
    url: "https://palazzovite.vercel.app",
    siteName: "Palazzo Vite",
    images: ["/images/palazzo/facciata.jpg"],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palazzo Vite · Dimora storica e suite a Copertino",
    description:
      "Dimora dei primi del Novecento nel centro storico di Copertino, con cinque suite, giardino e terrazza.",
    images: ["/images/palazzo/facciata.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Palazzo Vite",
  description:
    "Dimora storica dei primi del Novecento nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
  url: "https://palazzovite.vercel.app",
  email: "palazzovite@gmail.com",
  telephone: "+393286244934",
  numberOfRooms: 5,
  sameAs: ["https://www.instagram.com/palazzovite/"],
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
      <body className={`${encode.variable} ${playfair.variable} ${spectral.variable}`}>
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
