// Manifest delle 40 foto reali in /public/foto (selezione dallo shooting).
// I nomi camera-* seguono gli slug degli elementi (aria/etere/fiamma/terra/mare).

export const HERO = "/foto/hero-01.jpg";

function seq(prefix: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => `/foto/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`);
}

// Foto camere e bagni sono separate per evitare scambi accidentali nelle gallerie.
export const ROOM_MAIN_PHOTOS: Record<string, string[]> = {
  aria: seq("camera-aria", 4),
  etere: seq("camera-etere", 4),
  mare: seq("camera-mare", 4),
  terra: seq("camera-terra", 4),
  fiamma: seq("camera-fiamma", 4),
};

export const ROOM_BATHROOM_PHOTOS: Record<string, string[]> = {
  aria: ["/foto/camera-aria-05.jpg", "/foto/camera-aria-06.jpg"],
  // Scambio intenzionale: questi due bagni corrispondono alle suite corrette.
  etere: ["/foto/camera-mare-05.jpg", "/foto/camera-mare-06.jpg"],
  mare: ["/foto/camera-etere-05.jpg", "/foto/camera-etere-06.jpg"],
  terra: ["/foto/camera-terra-05.jpg", "/foto/camera-terra-06.jpg"],
  fiamma: ["/foto/camera-fiamma-05.jpg", "/foto/camera-fiamma-06.jpg"],
};

export const ROOM_PHOTOS: Record<string, string[]> = {
  aria: [...ROOM_MAIN_PHOTOS.aria, ...ROOM_BATHROOM_PHOTOS.aria],
  etere: [...ROOM_MAIN_PHOTOS.etere, ...ROOM_BATHROOM_PHOTOS.etere],
  mare: [...ROOM_MAIN_PHOTOS.mare, ...ROOM_BATHROOM_PHOTOS.mare],
  terra: [...ROOM_MAIN_PHOTOS.terra, ...ROOM_BATHROOM_PHOTOS.terra],
  fiamma: [...ROOM_MAIN_PHOTOS.fiamma, ...ROOM_BATHROOM_PHOTOS.fiamma],
};

export const ROOM_BATHROOM_FROM: Record<string, number> = {
  aria: ROOM_MAIN_PHOTOS.aria.length,
  etere: ROOM_MAIN_PHOTOS.etere.length,
  mare: ROOM_MAIN_PHOTOS.mare.length,
  terra: ROOM_MAIN_PHOTOS.terra.length,
  fiamma: ROOM_MAIN_PHOTOS.fiamma.length,
};

// 12 scatti spazi comuni: scala a chiocciola, salone voltato, sala lettura,
// cucina, angolo caffè. 8 location: facciata, giardino, cortile, portale, terrazza.
export const SPAZI_PHOTOS = seq("spazi", 12);
export const LOCATION_PHOTOS = seq("location", 8);

// Foto per ciascuno spazio comune (galleria per tile, come le stanze).
// La scala a chiocciola resta nella sezione Storia, non qui.
export const SPACE_PHOTOS: Record<"garden" | "kitchen" | "terrace" | "work", string[]> = {
  // Giardino murato di agrumi: la prima è quella "featured" nella galleria.
  garden: [
    "/foto/location-07.jpg",
    "/foto/giardino-01.jpg",
    "/foto/giardino-02.jpg",
    "/foto/giardino-04.jpg",
    "/foto/location-08.jpg",
  ],
  // La sala lettura fa parte della cucina: inclusa qui.
  kitchen: ["/foto/spazi-04.jpg", "/foto/spazi-11.jpg", "/foto/spazi-10.jpg", "/foto/spazi-05.jpg", "/foto/spazi-12.jpg"],
  terrace: ["/foto/location-05.jpg", "/foto/location-06.jpg", "/foto/hero-01.jpg"],
  work: ["/foto/spazi-03.jpg", "/foto/spazi-08.jpg", "/foto/spazi-09.jpg"],
};
