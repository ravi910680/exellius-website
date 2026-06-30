import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, TableProperties } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const quickReference = [
  ["Enter email address field", "Single email input for one-off validation, located in Card 1 (left side)"],
  ["Validate Email button", "Purple button that triggers a single-email validation check"],
  ["Bulk Validation section", "Right side of Card 1 — for uploading a CSV of multiple emails"],
  ["Upload CSV button", "Purple button that opens a file picker to import a CSV for bulk checking"],
  ["File Verification card", "Card 2 — displays summary counts and results from bulk CSV checks"],
  ["Valid Emails tile (green)", "Count of emails confirmed deliverable"],
  ["Invalid Emails tile (red)", "Count of emails confirmed as undeliverable / will bounce"],
  ["Risky Emails tile (amber)", "Count of emails that may bounce — uncertain deliverability"],
  ["Unknown Emails tile (blue)", "Count of emails that could not be conclusively classified"],
  ["Empty state message", "No file verification results found yet. — shown until a bulk file is processed"],
  ["Starter plan badge (top bar)", "Shows current subscription tier"],
  ["Credit badges (top bar)", "Four purple counters next to dollar, envelope, check, and device icons, showing remaining credits/usage"],
]

export default function EmailVerifierQuickReferencePage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Quick Reference — Page at a Glance"
        subtitle="Exellius Email Verifier"
        searchPlaceholder="Search Email Verifier articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/en/email-verifier" className="hover:text-[#9856F2]">
            Email Verifier
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Quick Reference</span>
        </div>

        <Link
          href="/en/email-verifier"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Email Verifier
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl">
            <TableProperties className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Quick Reference — Page at a Glance
          </h1>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-[#9856F2]">
                  <th className="w-[30%] border-r border-white/40 px-3 py-3 font-bold">
                    UI Element
                  </th>
                  <th className="px-3 py-3 font-bold">
                    What It Shows / Does
                  </th>
                </tr>
              </thead>

              <tbody>
                {quickReference.map(([element, description], index) => (
                  <tr
                    key={element}
                    className={index % 2 === 0 ? "bg-[#FBF8FF]" : "bg-white"}
                  >
                    <td className="border-r border-[#ECE6FF] px-3 py-3 font-bold text-[#7C3AED]">
                      {element}
                    </td>
                    <td className="px-3 py-3 leading-6 text-gray-800">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">Summary</h3>
            <p className="mt-3 leading-7 text-gray-700">
              This quick reference table explains each main Email Verifier page
              element and what it does, including single email validation, bulk
              CSV upload, file verification results, and top bar credit badges.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/using-the-tool"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous: Using the Tool
            </Link>

            <Link
              href="/en/email-verifier/faq"
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