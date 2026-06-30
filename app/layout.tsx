import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";
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
  title: "Palazzo Vite — Lecce, 1901",
  description:
    "Un palazzo dei primi del Novecento nel cuore del Salento, riaperto oggi in cinque stanze: Aria, Etere, Fiamma, Terra, Mare.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${bebas.variable} ${dmMono.variable} ${dmSans.variable}`}>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
