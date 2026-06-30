"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  BookOpen,
  Building2,
  ChevronRight,
  Globe,
  MailCheck,
  MailSearch,
  Search,
} from "lucide-react"
import HelpCenterFooter from "./HelpCenterFooter"

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

const collections = [
  {
    icon: Building2,
    title: "Exellius Lead Discovery",
    description: "Search, filter, reveal, enrich, and export verified B2B leads.",
    count: "13 articles",
    href: "/en/leads",
  },
  {
    icon: MailSearch,
    title: "Exellius Finder Tool",
    description: "Find professional emails by company domain or person name.",
    count: "9 articles",
    href: "/en/finder",
  },
  {
    icon: MailCheck,
    title: "Email Verifier",
    description: "Validate single emails and bulk CSV files to reduce bounces.",
    count: "7 articles",
    href: "/en/email-verifier",
  },
]

export default function HelpCenterHomePage() {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const filteredArticles = useMemo(() => {
    if (!search.trim()) return HELP_ARTICLES.slice(0, 9)

    const q = search.toLowerCase()

    return HELP_ARTICLES.filter((article) => {
      return (
        article.title.toLowerCase().includes(q) ||
        article.collection.toLowerCase().includes(q) ||
        article.keywords.some((keyword) => keyword.toLowerCase().includes(q))
      )
    }).slice(0, 10)
  }, [search])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (filteredArticles.length > 0) {
      router.push(filteredArticles[0].slug)
    }
  }

  return (
    <section className="min-h-screen bg-[#FAF7FF]">
      <div
        className="relative overflow-hidden pb-10"
        style={{
          background:
            "linear-gradient(180deg,#9856F2 0%,#A96CF6 48%,rgba(247,241,255,0) 100%)",
        }}
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-24 top-28 h-96 w-96 rounded-full bg-[#D7B8FF]/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-48 w-[760px] -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-28 lg:px-8">
          <div className="flex items-center justify-between text-white">
            <Image
              src="/logo.jpg"
              alt="Exellius Logo"
              width={120}
              height={40}
              priority
              className="rounded-xl"
            />

            <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Globe className="h-4 w-4" />
              English
            </button>
          </div>

          <div className="mt-16 max-w-4xl">
            <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl">
              Tutorials, Video Guides & FAQs to Help You Use Exellius
            </h1>

            

            <form onSubmit={handleSubmit} className="mt-6 max-w-5xl">
              <div className="relative">
                

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles, guides, FAQs..."
                  className="h-16 w-full rounded-2xl border border-white/30 bg-white/20 pl-24 pr-6 text-lg  shadow-2xl outline-none backdrop-blur-xl transition placeholder:text-white/70 focus:border-white focus:bg-white/30"
                  style={{paddingLeft: "10px"}}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-16 max-w-6xl  px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-[#ECE6FF] bg-white p-8 shadow-xl md:p-10" style={{borderRadius: "30px"}}>
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-[#9856F2]" />
            <h2 className="text-2xl font-bold text-[#202124]">
              Helpful articles
            </h2>
          </div>

          <div className="mt-8 grid gap-x-12 gap-y-3 lg:grid-cols-2">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <button
                  key={article.slug}
                  onClick={() => router.push(article.slug)}
                  className="flex items-center justify-between gap-4 rounded-xl px-4 py-4 text-left text-[16px] text-[#202124] transition hover:bg-[#F8F3FF] hover:text-[#9856F2]"
                >
                  <span>
                    <span className="font-medium">{article.title}</span>
                    <span className="mt-1 block text-sm text-gray-500">
                      {article.collection}
                    </span>
                  </span>

                  <ChevronRight className="h-4 w-4 shrink-0 text-[#9856F2]" />
                </button>
              ))
            ) : (
              <p className="col-span-full rounded-xl bg-[#F8F3FF] px-4 py-5 text-[#9856F2]">
                No articles found.
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((category) => {
            const Icon = category.icon

            return (
              <button
                key={category.href}
                onClick={() => router.push(category.href)}
                className="group rounded-2xl border border-[#ECE6FF] bg-white p-6 text-left shadow-sm transition hover:-translate-y-2 hover:border-[#9856F2] hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F7F1FF] transition group-hover:bg-[#9856F2]">
                    <Icon className="h-8 w-8 text-[#9856F2] transition group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#202124]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>

                    <p className="mt-3 text-sm font-medium text-[#9856F2]">
                      {category.count}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      <HelpCenterFooter />
    </section>
    
  )
}