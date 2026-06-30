"use client"

import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../HelpCenterHero"
import {
  Building2,
  ChevronRight,
  Globe,
  Search,
} from "lucide-react"
import HelpCenterFooter from "../HelpCenterFooter"

const articles = [
  {
    title: "Overview",
    slug: "overview",
  },
  {
    title: "Getting Started — Logging In",
    slug: "getting-started",
  },
  {
    title: "Interface Layout",
    slug: "interface-layout",
  },
  {
    title: "The Search Bar",
    slug: "search-bar",
  },
  {
    title: "Filters — Complete Reference",
    slug: "filters",
  },
  {
    title: "Reading the Results Grid",
    slug: "results-grid",
  },
  {
    title: "Actions You Can Take on Leads",
    slug: "lead-actions",
  },
  {
    title: "Data Quality & Verification",
    slug: "data-quality-verification",
  },
  {
    title: "Integrations & Export Destinations",
    slug: "integrations",
  },
  {
    title: "Pro Tips for Best Results",
    slug: "pro-tips",
  },
  {
    title: "Credits & Plan Limits",
    slug: "credits-plan-limits",
  },
  {
    title: "Quick Reference Card",
    slug: "quick-reference",
  },
  {
    title: "Frequently Asked Questions",
    slug: "faq",
  },
]

export default function LeadsCollectionPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      {/* Hero */}

      <HelpCenterHero
        title="Exellius Lead Discovery"
        subtitle="Exellius Lead Discovery"
        searchPlaceholder="Search Lead articles..."
      />

      {/* Content */}

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Exellius Lead Discovery</span>
        </div>

        <div className="mb-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl ">
            <Building2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Exellius Lead Discovery
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Complete walkthrough of the Leads Discovery platform, including
            searching, filtering, revealing contacts, exporting data, credits,
            integrations, and best practices.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            {articles.length} Articles
          </p>
        </div>

        <div className="rounded-2xl border border-[#ECE6FF] bg-white">
          <div className="border-b px-8 py-6">
            <h2 className="text-2xl font-semibold">
              Exellius Lead Discovery
            </h2>
          </div>

          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/en/leads/${article.slug}`}
              className={`flex items-center justify-between px-8 py-5 transition hover:bg-[#F9F5FF]
              ${index !== articles.length - 1 ? "border-b" : ""}
              `}
            >
              <span className="text-[17px] text-[#202124]">
                {article.title}
              </span>

              <ChevronRight className="h-4 w-4 text-[#9856F2]" />
            </Link>
          ))}
        </div>
      </div>
      <HelpCenterFooter />
    </section>
  )
}