"use client"

import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../HelpCenterHero"
import {
  ChevronRight,
  Globe,
  Search,
  ShieldCheck,

} from "lucide-react"
import HelpCenterFooter from "../HelpCenterFooter"

const articles = [
  {
    title: "Overview",
    slug: "overview",
  },
  {
    title: "Top Status Bar",
    slug: "top-status-bar",
  },
  {
    title: "Email Bounce Validation",
    slug: "email-bounce-validation",
  },
  {
    title: "File Verification",
    slug: "file-verification",
  },
  {
    title: "Step-by-Step: Using the Tool",
    slug: "using-the-tool",
  },
  {
    title: "Quick Reference — Page at a Glance",
    slug: "quick-reference",
  },
  {
    title: "Frequently Asked Questions",
    slug: "faq",
  },
]

export default function EmailVerifierCollectionPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      {/* Hero */}
      <HelpCenterHero
        title="Email Verifier"
        subtitle="Exellius Email Verifier"
        searchPlaceholder="Search Email Verifier articles..."
      />

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Email Bounce Validation</span>
        </div>

        <div className="mb-10">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl ">
            <ShieldCheck className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Email Bounce Validation
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Learn how to validate single email addresses and bulk CSV files,
            understand verification results, and reduce email bounce rates with
            Exellius Email Bounce Validation.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            {articles.length} Articles
          </p>
        </div>

        <div className="rounded-2xl border border-[#ECE6FF] bg-white">
          <div className="border-b px-8 py-6">
            <h2 className="text-2xl font-semibold text-[#202124]">
              Email Bounce Validation
            </h2>
          </div>

          {articles.map((article, index) => (
            <Link
  key={article.slug}
  href={`/en/email-verifier/${article.slug}`}
  className={`group flex items-center justify-between px-8 py-5
transition-all duration-200
hover:bg-[#F8F3FF]
hover:shadow-sm
${
  index !== articles.length - 1
    ? "border-b border-[#ECE6FF]"
    : ""
}`}
>
  <span className="text-[17px] text-[#202124] transition-colors duration-200 group-hover:text-[#9856F2]">
    {article.title}
  </span>

  <ChevronRight className="h-4 w-4 text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#9856F2]" />
</Link>
          ))}
        </div>
      </div>
      <HelpCenterFooter />
    </section>
  )
}