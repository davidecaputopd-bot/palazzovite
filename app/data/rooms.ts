export type Room = {
  slug: string;
  name: string;
  element: "aria" | "etere" | "fiamma" | "terra" | "mare";
  sqm?: number;
  bed: string;
  floor?: string;
  description: string;
  image: string;
};

// NOTA: sqm, floor e image vanno completati/sostituiti con i dati reali
// e le foto del fotografo non appena disponibili.
export const rooms: Room[] = [
  {
    slug: "aria",
    name: "Aria",
    element: "aria",
    bed: "Letto matrimoniale",
    description:
      "Pareti chiare, lenzuola bianche, due ritratti dipinti alle pareti. Bagno con specchio ad arco e arredi essenziali.",
    image: "/images/rooms/aria-1.jpg",
  },
  {
    slug: "etere",
    name: "Etere",
    element: "etere",
    bed: "Letto matrimoniale",
    description:
      "Pareti grigio-azzurre, cassettiera antica con specchio originale, porta-finestra sul balcone privato affacciato sulla bouganville.",
    image: "/images/rooms/etere-1.jpg",
  },
  {
    slug: "fiamma",
    name: "Fiamma",
    element: "fiamma",
    bed: "Letto matrimoniale",
    description:
      "Pavimento in cementine originali, comodino in legno laccato color ocra.",
    image: "/images/rooms/fiamma.jpg",
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "Letto matrimoniale",
    description:
      "Pavimento in cementine originali verdi e marroni, comodino in legno laccato ocra, soffitto verde scuro. Bagno con doccia, box in vetro e pareti verde salvia.",
    image: "/images/rooms/terra-2.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "Due letti singoli",
    description:
      "Pareti verde salvia chiaro, camino in legno scuro, porta-finestra con persiane bianche. Bagno con piastrelle grigio-blu e specchio tondo.",
    image: "/images/rooms/mare-1.jpg",
  },
];
