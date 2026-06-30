import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Search,
  Lightbulb,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const searchableItems = [
  "A person's name (e.g., John Smith)",
  "A job title (e.g., Marketing Director)",
  "A company name (e.g., Infosys)",
  "A domain (e.g., tata.com)",
  "An industry keyword (e.g., SaaS, healthcare)",
]

export default function SearchBarPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="The Search Bar"
        subtitle="Exellius Lead Discovery"
        searchPlaceholder="Search Lead Discovery articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/leads" className="hover:text-[#9856F2]">
            Exellius Lead Discovery
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>The Search Bar</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lead Discovery
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F6F0FF]">
            <Search className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            The Search Bar
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            At the top of the Leads page is a keyword search bar that helps you
            quickly search for people, companies, domains, job titles, and
            industry keywords.
          </p>

          <Image
            src="/help-center/search-bar.png"
            alt="Search in Leads"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Search in leads — name search field
          </p>

          <div className="mt-10 rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
            <h2 className="text-2xl font-bold text-[#202124]">
              What You Can Search
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              You can type different kinds of keywords into the search bar:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-10 text-lg leading-8 text-gray-700">
              {searchableItems.map((item) => (
                <li  key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 rounded-2xl border border-[#ECE6FF] bg-white p-6">
            <h2 className="text-2xl font-bold text-[#202124]">
              How the Search Bar Works
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              The search bar works in combination with the filters. You can use
              it to narrow results further after applying filter criteria, or
              start with a broad keyword search and refine results step by step.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8F3FF] p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 h-6 w-6 shrink-0 text-[#9856F2]" />

              <div>
                <h3 className="text-lg font-bold text-[#202124]">
                  Best Practice
                </h3>

                <p className="mt-3 leading-7 text-gray-700">
                  For better targeting, combine keyword search with filters such
                  as industry, location, company size, title, role, technology,
                  and email status.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/interface-layout"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/filters"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Filters →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}