import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Highlights from "@/app/components/Highlights";
import Story from "@/app/components/Story";
import Rooms from "@/app/components/Rooms";
import PalazzoLife from "@/app/components/PalazzoLife";
import Location from "@/app/components/Location";
import Book from "@/app/components/Book";
import Footer from "@/app/components/Footer";
import StickyBookBar from "@/app/components/StickyBookBar";
import DocumentLanguage from "@/app/components/DocumentLanguage";
import { copies, type Locale } from "@/app/data/i18n";

export default function SiteHome({ locale }: { locale: Locale }) {
  const copy = copies[locale];

  return (
    <div lang={locale}>
      <DocumentLanguage locale={locale} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:font-label focus:text-xs focus:bg-[var(--stone)] focus:text-[var(--ink)] focus:px-4 focus:py-2"
      >
        {copy.skip}
      </a>
      <Nav copy={copy.nav} locale={locale} />
      <main id="main-content" className="pb-20 md:pb-0">
        <Hero copy={copy.hero} availability={copy.nav.availability} />
        <Highlights items={copy.highlights} />
        <Story copy={copy.story} />
        <Rooms copy={copy.rooms} />
        <PalazzoLife copy={copy.spaces} />
        <Location copy={copy.location} />
        <Book copy={copy.book} formCopy={copy.form} />
      </main>
      <Footer />
      <StickyBookBar availability={copy.nav.availability} subtitle={copy.sticky} />
    </div>
  );
}
