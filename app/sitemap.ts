import type { MetadataRoute } from "next";

const BASE = "https://palazzovite.vercel.app";

const languages = {
  it: BASE,
  en: `${BASE}/en`,
  fr: `${BASE}/fr`,
  es: `${BASE}/es`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = Object.values(languages).map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: url === BASE ? 1 : 0.9,
    alternates: { languages },
  }));

  return [
    ...home,
    {
      url: `${BASE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
