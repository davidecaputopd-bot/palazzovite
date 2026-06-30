export type Room = {
  slug: string;
  name: string;
  element: "aria" | "etere" | "fiamma" | "terra" | "mare";
  sqm?: number;
  bed: string;
  floor?: string;
  description: string;
  image: string | null; // null = foto non ancora disponibile
  bathroomImage?: string;
};

// NOTA: sqm e floor vanno completati con i dati reali quando disponibili.
export const rooms: Room[] = [
  {
    slug: "aria",
    name: "Aria",
    element: "aria",
    bed: "Letto matrimoniale",
    description:
      "Pareti chiare, lenzuola bianche, due ritratti dipinti alle pareti. Bagno con specchio ad arco e arredi essenziali.",
    image: "/images/rooms/aria-1.jpg",
    bathroomImage: "/images/rooms/aria-bagno-1.jpg",
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
      "Pavimento in cementine originali, comodino in legno laccato color ocra. Foto in arrivo.",
    image: null,
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "Letto matrimoniale",
    description:
      "Pavimento in cementine originali verdi e marroni, comodino in legno laccato ocra, soffitto verde scuro.",
    image: "/images/rooms/terra-2.jpg",
    bathroomImage: "/images/rooms/terra-bagno.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "Due letti singoli",
    description:
      "Pareti verde salvia chiaro, camino in legno scuro, porta-finestra con persiane bianche.",
    image: "/images/rooms/mare-1.jpg",
    bathroomImage: "/images/rooms/mare-bagno.jpg",
  },
];
