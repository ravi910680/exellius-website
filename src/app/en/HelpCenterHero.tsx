"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Globe, Search } from "lucide-react"

export const HELP_ARTICLES = [
  // ===========================
  // EXELLIUS LEAD DISCOVERY
  // ===========================

  {
    title: "Overview",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/overview",
    keywords: [
      "overview",
      "lead discovery",
      "lead finder",
      "leads",
      "prospects",
      "b2b database",
      "contacts",
      "companies",
      "people",
      "lead search",
      "sales prospecting",
      "getting leads",
      "dashboard",
      "lead database",
      "platform overview",
      "home",
      "main page",
    ],
  },

  {
    title: "Getting Started — Logging In",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/getting-started",
    keywords: [
      "login",
      "sign in",
      "log in",
      "authentication",
      "2fa",
      "two factor",
      "account",
      "password",
      "email login",
      "dashboard",
      "access",
      "start",
      "getting started",
      "credentials",
      "first login",
    ],
  },

  {
    title: "Interface Layout",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/interface-layout",
    keywords: [
      "layout",
      "interface",
      "ui",
      "dashboard layout",
      "filter panel",
      "results grid",
      "toolbar",
      "left panel",
      "company tab",
      "people tab",
      "navigation",
      "screen",
      "page layout",
      "workspace",
    ],
  },

  {
    title: "The Search Bar",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/search-bar",
    keywords: [
      "search",
      "search bar",
      "keyword",
      "domain search",
      "company search",
      "person search",
      "job title",
      "industry",
      "name search",
      "text search",
      "lookup",
      "find leads",
      "query",
    ],
  },

  {
    title: "Filters — Complete Reference",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/filters",
    keywords: [
      "filters",
      "industry",
      "location",
      "country",
      "city",
      "state",
      "technology",
      "company size",
      "employee count",
      "revenue",
      "funding",
      "intent",
      "buying signals",
      "department",
      "job title",
      "management",
      "email filter",
      "phone filter",
      "gdpr",
      "compliance",
      "suppression",
      "linkedin",
      "company keyword",
      "founded year",
      "people filters",
      "company filters",
    ],
  },

  {
    title: "Reading the Results Grid",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/results-grid",
    keywords: [
      "results",
      "grid",
      "columns",
      "lead list",
      "table",
      "verified email",
      "phone",
      "linkedin",
      "company",
      "website",
      "location",
      "verification badge",
      "last updated",
      "rows",
    ],
  },

  {
    title: "Actions You Can Take on Leads",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/lead-actions",
    keywords: [
      "actions",
      "reveal",
      "export",
      "save search",
      "add to list",
      "enrich",
      "bulk action",
      "select",
      "csv",
      "excel",
      "crm",
      "download",
      "credits",
      "reveal email",
      "reveal phone",
    ],
  },

  {
    title: "Data Quality & Verification",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/data-quality-verification",
    keywords: [
      "verification",
      "verified",
      "accuracy",
      "quality",
      "refresh",
      "database",
      "human verification",
      "ai verification",
      "gdpr",
      "can spam",
      "compliance",
      "verified contacts",
      "email verification",
      "phone verification",
    ],
  },

  {
    title: "Integrations & Export Destinations",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/integrations",
    keywords: [
      "integrations",
      "hubspot",
      "salesforce",
      "pipedrive",
      "crm",
      "mailchimp",
      "api",
      "rest api",
      "csv",
      "excel",
      "export",
      "bulk processing",
      "developer",
      "sync",
    ],
  },

  {
    title: "Pro Tips for Best Results",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/pro-tips",
    keywords: [
      "tips",
      "best practices",
      "power user",
      "workflow",
      "prospecting",
      "search tips",
      "lead generation",
      "crm",
      "intent data",
      "technology filter",
      "company size",
      "save searches",
    ],
  },

  {
    title: "Credits & Plan Limits",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/credits-plan-limits",
    keywords: [
      "credits",
      "plan",
      "pricing",
      "billing",
      "starter",
      "usage",
      "records",
      "limits",
      "subscription",
      "credit usage",
      "credit deduction",
    ],
  },

  {
    title: "Quick Reference Card",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/quick-reference",
    keywords: [
      "quick reference",
      "cheatsheet",
      "reference",
      "summary",
      "filters",
      "export",
      "industry",
      "company size",
      "job title",
      "search",
      "location",
    ],
  },

  {
    title: "Frequently Asked Questions",
    collection: "Exellius Lead Discovery",
    slug: "/en/leads/faq",
    keywords: [
      "faq",
      "questions",
      "help",
      "support",
      "email reveal",
      "phone reveal",
      "credits",
      "search",
      "results",
      "export",
      "common questions",
    ],
  },

  // ===========================
  // EXELLIUS FINDER
  // ===========================

  {
    title: "Overview",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/overview",
    keywords: [
      "finder",
      "email finder",
      "find email",
      "overview",
      "company email",
      "person email",
      "professional email",
      "business email",
      "domain lookup",
    ],
  },

  {
    title: "Page Header",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/page-header",
    keywords: [
      "header",
      "page header",
      "starter",
      "credits",
      "status bar",
      "profile",
      "finder header",
    ],
  },

  {
    title: "Tab Navigation — Two Modes",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/tab-navigation-two-modes",
    keywords: [
      "tabs",
      "tab navigation",
      "company tab",
      "name tab",
      "switch tabs",
      "two modes",
    ],
  },

  {
    title: "Find Email by Company",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/find-email-by-company",
    keywords: [
      "company finder",
      "domain",
      "domain search",
      "upload csv",
      "import domains",
      "company emails",
      "email search",
      "search company",
    ],
  },

  {
    title: "Find Email by Name",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/find-email-by-name",
    keywords: [
      "person finder",
      "find person",
      "find email by name",
      "full name",
      "company domain",
      "person lookup",
      "employee email",
    ],
  },

  {
    title: "Shared Interface Elements",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/shared-interface-elements",
    keywords: [
      "shared interface",
      "upload",
      "search button",
      "card",
      "purple button",
      "input",
      "finder ui",
    ],
  },

  {
    title: "Step-by-Step: Using the Finder",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/using-the-finder",
    keywords: [
      "tutorial",
      "workflow",
      "step by step",
      "guide",
      "company workflow",
      "person workflow",
      "how to use finder",
    ],
  },

  {
    title: "Quick Reference — Finder Page at a Glance",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/quick-reference",
    keywords: [
      "quick reference",
      "finder summary",
      "reference",
      "finder cheat sheet",
      "finder overview",
    ],
  },

  {
    title: "Frequently Asked Questions",
    collection: "Exellius Finder Tool",
    slug: "/en/finder/faq",
    keywords: [
      "finder faq",
      "finder questions",
      "company search",
      "person search",
      "credits",
      "upload",
      "support",
    ],
  },

  // ===========================
  // EMAIL VERIFIER
  // ===========================

  {
    title: "Overview",
    collection: "Email Verifier",
    slug: "/en/email-verifier/overview",
    keywords: [
      "email verifier",
      "verification",
      "overview",
      "bounce checker",
      "email validation",
      "email checker",
    ],
  },

  {
    title: "Top Status Bar",
    collection: "Email Verifier",
    slug: "/en/email-verifier/top-status-bar",
    keywords: [
      "status bar",
      "credits",
      "usage",
      "plan",
      "starter",
      "verification credits",
    ],
  },

  {
    title: "Email Bounce Validation",
    collection: "Email Verifier",
    slug: "/en/email-verifier/email-bounce-validation",
    keywords: [
      "bounce",
      "email validation",
      "verify email",
      "smtp",
      "deliverability",
      "valid email",
      "invalid email",
    ],
  },

  {
    title: "File Verification",
    collection: "Email Verifier",
    slug: "/en/email-verifier/file-verification",
    keywords: [
      "csv verification",
      "bulk verification",
      "upload csv",
      "verify file",
      "bulk email checker",
    ],
  },

  {
    title: "Step-by-Step: Using the Tool",
    collection: "Email Verifier",
    slug: "/en/email-verifier/using-the-tool",
    keywords: [
      "tutorial",
      "workflow",
      "guide",
      "step by step",
      "email verification guide",
    ],
  },

  {
    title: "Quick Reference — Page at a Glance",
    collection: "Email Verifier",
    slug: "/en/email-verifier/quick-reference",
    keywords: [
      "quick reference",
      "summary",
      "cheatsheet",
      "verification summary",
    ],
  },

  {
    title: "Frequently Asked Questions",
    collection: "Email Verifier",
    slug: "/en/email-verifier/faq",
    keywords: [
      "faq",
      "questions",
      "bounce",
      "verification",
      "credits",
      "support",
    ],
  },
]

interface HelpCenterHeroProps {
  title?: string
  subtitle?: string
  searchPlaceholder?: string
}

export default function HelpCenterHero({
  searchPlaceholder = "Search articles...",
}: HelpCenterHeroProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []

    const q = query.toLowerCase()

    return HELP_ARTICLES.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.collection.toLowerCase().includes(q) ||
        article.keywords.some((keyword) =>
          keyword.toLowerCase().includes(q)
        )
      )
    }).slice(0, 8)
  }, [query])

  const handleSearch = () => {
    if (results.length > 0) {
      router.push(results[0].slug)
    }
  }

  return (
    <section
      className="relative overflow-visible"
      style={{
        background:
          "linear-gradient(180deg,#9856F2 0%,#A96CF6 55%,rgba(247,241,255,0) 100%)",
      }}
    >
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C99EFF]/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-40 w-[600px] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.jpg"
            width={125}
            height={42}
            alt="Exellius"
            className="rounded-xl"
            priority
          />

          <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            <Globe className="h-4 w-4" />
            English
          </button>
        </div>

        <div className="mx-auto mt-24 max-w-4xl pb-16">
          <div className="relative z-50">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setTimeout(() => setIsFocused(false), 200)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch()
              }}
              placeholder={searchPlaceholder}
              className="h-16 w-full rounded-2xl border border-white/20 bg-white/20 pl-5 pr-14  backdrop-blur-xl outline-none transition placeholder:text-white/70 focus:bg-white/25"
            />

            <Search
              onClick={handleSearch}
              className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-white"
            />

            {isFocused && results.length > 0 && (
              <div className="absolute left-0 right-0 top-[76px] overflow-hidden rounded-2xl border border-[#ECE6FF] bg-white shadow-2xl">
                {results.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onMouseDown={() => router.push(item.slug)}
                    className="flex w-full items-center justify-between border-b border-[#F1ECFF] px-5 py-4 text-left transition hover:bg-[#F8F3FF]"
                  >
                    <div>
                      <p className="font-semibold text-[#202124]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.collection}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {isFocused && query.trim() && results.length === 0 && (
              <div className="absolute left-0 right-0 top-[76px] rounded-2xl border border-[#ECE6FF] bg-white px-5 py-4 text-gray-500 shadow-2xl">
                No articles found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}