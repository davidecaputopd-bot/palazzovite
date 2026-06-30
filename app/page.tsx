import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Story from "@/app/components/Story";
import Rooms from "@/app/components/Rooms";
import PalazzoLife from "@/app/components/PalazzoLife";
import Location from "@/app/components/Location";
import Book from "@/app/components/Book";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Rooms />
        <PalazzoLife />
        <Location />
        <Book />
      </main>
      <Footer />
    </>
  );
}
