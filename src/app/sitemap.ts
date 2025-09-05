import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.exellius.com"

  const routes = [
    "/",
    "/lead-discovery",
    "/domain-search",
    "/professional-email-finder",
    "/advanced-email-verifier",
    "/phone-number-finder",
    "/website-technology-checker",
    "/data-enrichment-suite",
    "/data-platform",
    "/bulk-task",
    "/developer-api-hub",
    "/amazon-seller-data",
    "/pricing",
    "/blogs",
    "/customer-stories",
    "/templates",
    "/help-center",
    "/about-us",
    "/our-data",
    "/careers",
    "/contact-us",
    "/thank-you",
    "/terms-and-conditions",
    "/privacy-policy",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
