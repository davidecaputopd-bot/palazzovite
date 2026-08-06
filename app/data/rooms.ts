export type Room = {
  slug: string;
  name: string;
  element: "aria" | "etere" | "fiamma" | "terra" | "mare";
  sqm?: number;
  bed: "double" | "twin" | "both" | "double-single";
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
    bed: "double",
    description:
      "Pareti grigio-azzurre, una specchiera antica e la porta-finestra sul balcone affacciato sulla bouganville definiscono il carattere della suite.",
    image: "/foto/camera-etere-01.jpg",
    bathroomImage: "/foto/camera-aria-05.jpg",
  },
  {
    slug: "etere",
    name: "Etere",
    element: "etere",
    bed: "both",
    description:
      "Pareti verde chiaro, cementine decorate e arredi restaurati compongono un ambiente raccolto, predisposto con letto matrimoniale o due letti singoli.",
    image: "/foto/camera-etere-04.jpg",
    bathroomImage: "/foto/camera-mare-05.jpg",
  },
  {
    slug: "fiamma",
    name: "Fiamma",
    element: "fiamma",
    bed: "double-single",
    description:
      "Cementine originali e un comodino in legno laccato color ocra raccontano il carattere della dimora con pochi elementi scelti.",
    image: "/foto/camera-fiamma-01.jpg",
    bathroomImage: "/foto/camera-fiamma-05.jpg",
  },
  {
    slug: "terra",
    name: "Terra",
    element: "terra",
    bed: "double",
    description:
      "Cementine verdi e brune, legno laccato color ocra e un soffitto verde profondo compongono un ambiente raccolto.",
    image: "/foto/camera-terra-03.jpg",
    bathroomImage: "/foto/camera-terra-05.jpg",
  },
  {
    slug: "mare",
    name: "Mare",
    element: "mare",
    bed: "double",
    description:
      "Pareti verde salvia, un camino in legno scuro e la porta-finestra con persiane bianche conservano un'atmosfera domestica.",
    image: "/foto/camera-mare-02.jpg",
    bathroomImage: "/foto/camera-etere-05.jpg",
  },
];
