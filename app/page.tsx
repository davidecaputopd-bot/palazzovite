import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Story from "@/app/components/Story";
import Rooms from "@/app/components/Rooms";
import PalazzoLife from "@/app/components/PalazzoLife";
import Location from "@/app/components/Location";
import Book from "@/app/components/Book";
import Footer from "@/app/components/Footer";
import StickyBookBar from "@/app/components/StickyBookBar";
import ElementStrip from "@/app/components/ElementStrip";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:font-label focus:text-xs focus:bg-[var(--stone)] focus:text-[var(--ink)] focus:px-4 focus:py-2"
      >
        Salta al contenuto
      </a>
      <Nav />
      <main id="main-content" className="pb-20 md:pb-0">
        <Hero />
        <ElementStrip />
        <Story />
        <Rooms />
        <PalazzoLife />
        <Location />
        <Book />
      </main>
      <ElementStrip />
      <Footer />
      <StickyBookBar />
    </>
  );
}
