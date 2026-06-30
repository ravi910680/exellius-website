"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import {
  BookOpen,
  Building2,
  ChevronRight,
  Globe,
  MailSearch,
  Search,
  ShieldCheck,
} from "lucide-react"
import HelpCenterFooter from "../HelpCenterFooter"

const collections = [
  {
    slug: "exellius-overview",
    title: "Exellius Overview",
    description: "Learn more about Exellius and how the platform works",
    icon: BookOpen,
    articles: [
      {
        title: "What is Exellius?",
        href: "/help-center/what-is-exellius",
      },
    ],
  },
  {
    slug: "leads-finder",
    title: "Leads Finder",
    description: "Find, filter, verify, save, enrich, and export B2B leads",
    icon: Building2,
    articles: [
      {
        title: "Exellius Lead Discovery Complete Walkthrough",
        href: "/help-center/exellius-leads-walkthrough",
      },
      {
        title: "Getting Started with Leads Finder",
        href: "/help-center/exellius-leads-walkthrough#getting-started",
      },
      {
        title: "Using Filters in Leads Finder",
        href: "/help-center/exellius-leads-walkthrough#filters",
      },
      {
        title: "How to Reveal Contact Details",
        href: "/help-center/exellius-leads-walkthrough#reveal-contact-details",
      },
      {
        title: "How to Export Leads",
        href: "/help-center/exellius-leads-walkthrough#export-leads",
      },
      {
        title: "Credits and Plan Limits",
        href: "/help-center/exellius-leads-walkthrough#credits-plan-limits",
      },
    ],
  },
  {
    slug: "finder",
    title: "Finder",
    description: "Find professional email addresses by company or person name",
    icon: MailSearch,
    articles: [
      {
        title: "Exellius Finder Tool Complete Walkthrough",
        href: "/help-center/exellius-finder-tool",
      },
      {
        title: "Find Email by Company",
        href: "/help-center/exellius-finder-tool#find-email-by-company",
      },
      {
        title: "Find Email by Name",
        href: "/help-center/exellius-finder-tool#find-email-by-name",
      },
      {
        title: "Upload Domain or Name Lists",
        href: "/help-center/exellius-finder-tool#upload-import-button",
      },
    ],
  },
  {
    slug: "email-verifier",
    title: "Email Verifier",
    description: "Validate emails and bulk CSV files to reduce bounce rates",
    icon: ShieldCheck,
    articles: [
      {
        title: "Exellius Email Bounce Validation Walkthrough",
        href: "/help-center/exellius-email-bounce-validation",
      },
      {
        title: "Validate a Single Email",
        href: "/help-center/exellius-email-bounce-validation#single-email-validation",
      },
      {
        title: "Bulk Email Verification with CSV",
        href: "/help-center/exellius-email-bounce-validation#bulk-validation",
      },
      {
        title: "Understanding Valid, Invalid, Risky and Unknown Emails",
        href: "/help-center/exellius-email-bounce-validation#file-verification-results",
      },
    ],
  },
]

export default function HelpCenterCollectionPage() {
  const [search, setSearch] = useState("")

  const filteredCollections = useMemo(() => {
    if (!search.trim()) return collections

    const query = search.toLowerCase()

    return collections
      .map((collection) => ({
        ...collection,
        articles: collection.articles.filter((article) =>
          article.title.toLowerCase().includes(query)
        ),
      }))
      .filter(
        (collection) =>
          collection.title.toLowerCase().includes(query) ||
          collection.description.toLowerCase().includes(query) ||
          collection.articles.length > 0
      )
  }, [search])

  const totalArticles = collections.reduce(
    (total, collection) => total + collection.articles.length,
    0
  )

  return (
    <section className="min-h-screen bg-white">
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #9856F2 0%, #A96CF6 45%, #B57CF8 100%)",
        }}
      >
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute top-28 -right-24 h-96 w-96 rounded-full bg-[#D7B8FF]/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <div className="flex items-center justify-between text-white">
            <Image
              src="/logo.jpg"
              alt="Exellius Logo"
              width={120}
              height={40}
              priority
              className="rounded-xl"
            />

            <button className="flex items-center gap-2 text-sm font-medium">
              <Globe className="h-4 w-4" />
              English
            </button>
          </div>

          <div className="mx-auto mt-14 max-w-4xl pb-14">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-white" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for articles..."
                className="h-16 w-full rounded-xl border border-white/20 bg-white/20 pl-14 pr-6 text-lg text-white outline-none backdrop-blur-xl transition placeholder:text-white/80 focus:border-white focus:bg-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <div className="mb-10 text-sm text-gray-500">
          <span className="text-[#202124]">All Collections</span>
          <ChevronRight className="mx-2 inline h-4 w-4" />
          <span>Exellius Help Center</span>
        </div>

        <div className="mb-10">
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F7F1FF]">
            <BookOpen className="h-8 w-8 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Exellius Help Center
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Tutorials, video guides, and FAQs to help you use Exellius
          </p>

          <p className="mt-6 text-sm text-gray-500">
            {totalArticles} articles
          </p>
        </div>

        <div className="space-y-5">
          {filteredCollections.map((collection) => {
            const Icon = collection.icon

            return (
              <div
                key={collection.slug}
                className="rounded-xl border border-[#E8E3F0] bg-white p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F1FF]">
                    <Icon className="h-6 w-6 text-[#9856F2]" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#202124]">
                      {collection.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {collection.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200">
                  {collection.articles.map((article) => (
                    <a
                      key={article.href}
                      href={article.href}
                      className="flex items-center justify-between gap-4 border-b border-gray-100 py-5 text-[16px] text-[#202124] transition hover:text-[#9856F2]"
                    >
                      <span>{article.title}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#9856F2]" />
                    </a>
                  ))}
                </div>
              </div>
            )
          })}

          {filteredCollections.length === 0 && (
            <div className="rounded-xl bg-[#F8F3FF] p-6 text-[#9856F2]">
              No articles found.
            </div>
          )}
        </div>
      </div>
      <HelpCenterFooter />
    </section>
  )
}