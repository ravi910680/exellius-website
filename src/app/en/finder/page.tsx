"use client"

import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../HelpCenterHero"
import {
  ChevronRight,
  Globe,
  MailSearch,
  Search,
} from "lucide-react"
import HelpCenterFooter from "../HelpCenterFooter"

const articles = [
  {
    title: "Overview",
    slug: "overview",
  },
  {
    title: "Page Header",
    slug: "page-header",
  },
  {
    title: "Tab Navigation — Two Modes",
    slug: "tab-navigation-two-modes",
  },
  {
    title: "Find Email by Company",
    slug: "find-email-by-company",
  },
  {
    title: "Find Email by Name",
    slug: "find-email-by-name",
  },
  {
    title: "Shared Interface Elements",
    slug: "shared-interface-elements",
  },
  {
    title: "Step-by-Step: Using the Finder",
    slug: "using-the-finder",
  },
  {
    title: "Quick Reference — Finder Page at a Glance",
    slug: "quick-reference",
  },
  {
    title: "Frequently Asked Questions",
    slug: "faq",
  },
]

export default function FinderCollectionPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Exellius Finder Tool"
        subtitle="Exellius Finder Tool"
        searchPlaceholder="Search Finder articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Exellius Finder Tool</span>
        </div>

        <div className="mb-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl ">
            <MailSearch className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Exellius Finder Tool
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Learn how to find verified professional email addresses by company
            domain or by using a person's full name and company domain.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            {articles.length} Articles
          </p>
        </div>

        <div className="rounded-2xl border border-[#ECE6FF] bg-white">
          <div className="border-b px-8 py-6">
            <h2 className="text-2xl font-semibold text-[#202124]">
              Exellius Finder Tool
            </h2>
          </div>

          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/en/finder/${article.slug}`}
              className={`flex items-center justify-between px-8 py-5 transition hover:bg-[#F9F5FF] ${
                index !== articles.length - 1 ? "border-b" : ""
              }`}
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