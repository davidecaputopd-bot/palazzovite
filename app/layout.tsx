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
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const dmSans = DM_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palazzovite.vercel.app"),
  title: "Palazzo Vite · Dimora storica e suite a Copertino",
  description:
    "Palazzo Vite è una dimora storica ottocentesca nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
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
      "Dimora ottocentesca nel centro storico di Copertino, con cinque suite, giardino e terrazza affacciata sul Castello Angioino.",
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
      "Dimora ottocentesca nel centro storico di Copertino, con cinque suite, giardino e terrazza.",
    images: ["/images/palazzo/facciata.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Palazzo Vite",
  description:
    "Dimora storica ottocentesca nel centro storico di Copertino, vicino al Castello Angioino, con cinque suite, giardino, terrazza e parcheggio privato.",
  url: "https://palazzovite.vercel.app",
  email: "info@palazzovite.com",
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
  logo: "https://palazzovite.vercel.app/images/brand/palazzo-vite-logo.svg",
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
