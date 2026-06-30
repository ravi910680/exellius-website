import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const referenceRows = [
  {
    element: "Domain Search input",
    tab: "Tab 1 only",
    purpose:
      "Type or paste company domains to retrieve all associated emails.",
  },
  {
    element: "Email Finder — Name field",
    tab: "Tab 2 only",
    purpose: "Enter full name of the target person.",
  },
  {
    element: "Email Finder — Domain field",
    tab: "Tab 2 only",
    purpose: "Enter the company domain the person works at.",
  },
  {
    element: "@ symbol",
    tab: "Tab 2 only",
    purpose:
      "Visual separator showing how name + domain construct an email pattern.",
  },
  {
    element: "Upload button (grey)",
    tab: "Both tabs",
    purpose:
      "Import a CSV/text file of domains or name+domain pairs for bulk search.",
  },
  {
    element: "Search button (purple)",
    tab: "Both tabs",
    purpose: "Execute the search and retrieve verified email results.",
  },
  {
    element: "Dropdown chevron on fields",
    tab: "Tab 2 only",
    purpose:
      "Indicates multi-entry support or type-ahead suggestions in name and domain fields.",
  },
  {
    element: "Starter plan badge (top bar)",
    tab: "Both tabs",
    purpose: "Shows current subscription tier.",
  },
  {
    element: "Credit icons (top bar)",
    tab: "Both tabs",
    purpose:
      "Display remaining credits for email finds, verifications, and other actions.",
  },
  {
    element: "Profile avatar (top right)",
    tab: "Both tabs",
    purpose: "Access account settings and logout.",
  },
]

export default function FinderQuickReferencePage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Quick Reference — Finder Page at a Glance"
        subtitle="Exellius Finder Tool"
        searchPlaceholder="Search Finder articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/finder" className="hover:text-[#9856F2]">
            Exellius Finder Tool
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Quick Reference</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <BookOpen className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Quick Reference — Finder Page at a Glance
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Use this quick reference card to understand which Finder elements
            belong to the company search tab, the name search tab, or both.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#7C3AED] text-[#9856F2]">
                  <th className="w-[28%] px-5 py-4 text-left font-bold">
                    Element
                  </th>

                  <th className="w-[24%] px-5 py-4 text-left font-bold">
                    Tab
                  </th>

                  <th className="px-5 py-4 text-left font-bold">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>
                {referenceRows.map((row) => (
                  <tr
                    key={row.element}
                    className="odd:bg-white even:bg-[#F8F3FF]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-5 font-bold text-[#7C3AED] align-top">
                      {row.element}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700 align-top">
                      {row.tab}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700 align-top">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Summary
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use Tab 1 when searching by company domain. Use Tab 2 when you
              already know the person&apos;s name and company domain. Both tabs
              support upload and search actions.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/using-the-finder"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/faq"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: FAQ →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}