import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://sankalpa-giri-portfolio-mcgc.vercel.app/sitemap.xml",
  };
}