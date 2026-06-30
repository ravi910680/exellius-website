import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronRight,
  Database,
  Download,
  Filter,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Search,
  Sparkles,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const features = [
  {
    icon: Database,
    title: "Search Verified B2B Data",
    description:
      "Search a verified B2B database of millions of companies and decision-makers.",
  },
  {
    icon: Filter,
    title: "Apply Advanced Filters",
    description:
      "Filter leads by industry, role, location, company size, seniority, and more.",
  },
  {
    icon: Mail,
    title: "View Verified Emails",
    description:
      "View verified work email addresses for each lead when available.",
  },
  {
    icon: Phone,
    title: "Discover Phone Numbers",
    description:
      "Reveal phone numbers to support sales calling and multi-channel outreach.",
  },
  {
    icon: Linkedin,
    title: "Access LinkedIn Profiles",
    description:
      "Open LinkedIn profiles for research, social selling, and connection requests.",
  },
  {
    icon: Download,
    title: "Export Lead Lists",
    description:
      "Export lead lists to CSV or Excel for use in your CRM or outreach tools.",
  },
  {
    icon: Sparkles,
    title: "Enrich & Save Prospects",
    description:
      "Enrich, save, and manage your prospect lists in one organized workspace.",
  },
]

export default function LeadsOverviewPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      {/* Hero */}
      <HelpCenterHero />

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/leads" className="hover:text-[#9856F2]">
            Exellius Lead Discovery
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Overview</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lead Discovery
        </Link>

        {/* Article */}
        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <Building2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Overview
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Exellius Lead Discovery
          </p>

          <Image
            src="/help-center/lead-finder.png"
            alt="Leads Overview"
            width={200}
            height={600}    
            quality={100}
            className="mt-8 rounded-xl border border-[#ECE6FF]"
          />

          <div className="mt-10 rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
            <p className="text-sm font-semibold text-[#9856F2]">
              Left navigation panel — Leads Finder highlighted in red
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Exellius Lead Discovery is a B2B lead discovery platform that
              helps sales and marketing teams find, filter, verify, and export
              high-quality prospect data.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              The <strong>/leads</strong> page is the primary search interface
              where you build targeted contact lists using a rich set of
              filters, then take action on the results.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              What You Can Do on This Page
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#ECE6FF]">
              <div className="grid grid-cols-12 bg-[#F8F3FF] px-5 py-4 text-sm font-semibold text-[#202124]">
                <div className="col-span-4">Feature</div>
                <div className="col-span-8">Description</div>
              </div>

              {features.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className={`grid grid-cols-12 items-start gap-4 px-5 py-5 ${
                      index !== features.length - 1
                        ? "border-b border-[#ECE6FF]"
                        : ""
                    }`}
                  >
                    <div className="col-span-12 flex items-center gap-3 md:col-span-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6F0FF]">
                        <Icon className="h-5 w-5 text-[#9856F2]" />
                      </div>

                      <span className="font-semibold text-[#202124]">
                        {feature.title}
                      </span>
                    </div>

                    <div className="col-span-12 flex gap-3 text-gray-600 md:col-span-8">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9856F2]" />
                      <p className="leading-7">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Summary
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use the Leads page when you want to build targeted B2B prospect
              lists, narrow them with filters, reveal verified contact details,
              export them for outreach, and manage enriched prospects in one
              place.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Back to collection
            </Link>

            <Link
              href="/en/leads/getting-started"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Getting Started →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}