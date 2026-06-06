import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emergedigital.in";
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/industries`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/case-studies`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.95, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogSlugs = [
    "hospital-seo-chennai-2024",
    "tamil-content-healthcare",
    "google-ads-hospitals-compliance",
    "whatsapp-marketing-hospitals",
    "google-reviews-hospital",
    "ivf-clinic-marketing",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: now })),
    ...blogRoutes,
  ];
}
