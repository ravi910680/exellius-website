import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  ClipboardList,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const referenceRows = [
  {
    filter: "Search bar",
    options: "Name, title, company, domain, keyword",
    purpose: "Quick broad search before filtering",
  },
  {
    filter: "Industry",
    options: "Multi-select from 20+ verticals",
    purpose: "Vertical targeting",
  },
  {
    filter: "Company Size",
    options: "1–10 to 5000+ employees",
    purpose: "Startup vs. enterprise focus",
  },
  {
    filter: "Revenue",
    options: "Under $1M to $100M+",
    purpose: "Deal-size alignment",
  },
  {
    filter: "Job Title",
    options: "Free-text or dropdown",
    purpose: "Role-based targeting",
  },
  {
    filter: "Seniority",
    options: "C-Level to Entry",
    purpose: "Hierarchy targeting",
  },
  {
    filter: "Department",
    options: "Sales / Marketing / IT / etc.",
    purpose: "Departmental focus",
  },
  {
    filter: "Location",
    options: "Country > State > City",
    purpose: "Geo targeting",
  },
  {
    filter: "Has Email",
    options: "Toggle",
    purpose: "Email-ready leads only",
  },
  {
    filter: "Has Phone",
    options: "Toggle",
    purpose: "Call-ready leads only",
  },
  {
    filter: "Intent Data",
    options: "High / Medium / Low",
    purpose: "Buying signal priority",
  },
  {
    filter: "Funding Stage",
    options: "Seed to IPO",
    purpose: "Budget signal targeting",
  },
  {
    filter: "Tech Stack",
    options: "Multi-select tools",
    purpose: "Competitive/complementary targeting",
  },
  {
    filter: "GDPR Filter",
    options: "Toggle (EU contacts)",
    purpose: "Compliance for EU outreach",
  },
  {
    filter: "Export",
    options: "CSV / Excel / CRM sync",
    purpose: "Get leads into your workflow",
  },
]

export default function QuickReferencePage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Quick Reference Card"
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

          <span>Quick Reference Card</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lead Discovery
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <ClipboardList className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Quick Reference Card
          </h1>

          <Image
            src="/help-center/quick-reference-headers.png"
            alt="Column headers"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Column headers — Name, Title, Email, Phone, Country, Company,
            Industry, Num Employees, Website, Email Status
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#1F5BE3] text-[#9856F2]">
                  <th className="w-[28%] px-5 py-4 text-left font-bold">
                    Filter
                  </th>
                  <th className="w-[40%] px-5 py-4 text-left font-bold">
                    Options / Values
                  </th>
                  <th className="w-[32%] px-5 py-4 text-left font-bold">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>
                {referenceRows.map((row) => (
                  <tr
                    key={row.filter}
                    className="odd:bg-white even:bg-[#F8FAFC]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-4 font-bold text-[#202124] align-top">
                      {row.filter}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                      {row.options}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              How to Use This Reference
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use this card as a quick guide when building lead searches. Start
              with broad filters like industry and location, then narrow results
              using role, seniority, contact availability, intent data, and
              export options.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/credits-plan-limits"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/faq"
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