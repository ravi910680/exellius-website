import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  MousePointerClick,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const exportFormats = [
  "CSV — Compatible with all CRMs and spreadsheet tools",
  "Excel (.xlsx) — Formatted spreadsheet with all visible columns",
  "CRM Direct Sync — Push directly to Salesforce, HubSpot, or Pipedrive via integration settings",
]

const enrichItems = [
  "Fills in missing email addresses",
  "Appends phone numbers",
  "Updates job titles and company data if the person has changed roles",
  "Adds firmographic fields like revenue and headcount",
]

export default function LeadActionsPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Actions You Can Take on Leads"
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
          <span>Actions You Can Take on Leads</span>
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
            <MousePointerClick className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Actions You Can Take on Leads
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            After finding matching leads, Exellius lets you reveal contact
            details, select leads in bulk, export data, save searches, add leads
            to lists, and enrich records.
          </p>

          <Image
            src="/help-center/find-reset-buttons.png"
            alt="Find Leads and Reset Filter Buttons"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Find Leads and Reset Filter buttons
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.1 Reveal Contact Details
            </h2>

            <Image
              src="/help-center/reveal-contact-details.png"
              alt="Reveal Contact Details"
              width={1}
              height={1}
              sizes="100vw"
              className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Click to reveal buttons — email and phone
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Click the lock icon next to an email or phone number to reveal the
              verified contact information. Each reveal uses one credit from
              your subscription plan. You can reveal email and phone
              independently.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.2 Select & Bulk-Action
            </h2>

            <Image
              src="/help-center/bulk-select.png"
              alt="Bulk Select Checkbox Column"
              width={1}
              height={1}
              sizes="100vw"
              className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Bulk select checkbox column
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>Check the box beside any lead to select it individually.</li>
              <li>
                Use the Select All checkbox at the top to select all visible
                results.
              </li>
              <li>
                With leads selected, the Bulk Action toolbar appears with
                options to export selected, add to list, or enrich selected.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.3 Export Leads
            </h2>

            <Image
              src="/help-center/export-leads.png"
              alt="Export Leads"
              width={1}
              height={1}
              sizes="100vw"
              className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Export button in the top-right toolbar
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Click the Export button at the top-right of the results grid. You
              can export leads in these formats:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              {exportFormats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-[#F8F3FF] p-6">
              <p className="leading-7 text-gray-700">
                Each export includes: Name, Title, Company, Email, Phone,
                LinkedIn URL, Location, Industry, Company Size, and Verified
                Status.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.4 Save a Search
            </h2>

            <Image
              src="/help-center/save-search.png"
              alt="Save a Search"
              width={1}
              height={1}
              sizes="100vw"
              className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Save button in the top-right toolbar
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              After configuring filters, click Save Search. Give the search a
              name and it will appear in your Saved Searches tab. You can re-run
              it any time with one click and set alerts for new matching leads.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.5 Add to a List
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Leads can be added to named lists, similar to folders or
              segments. Use lists to organize prospects by campaign, territory,
              account, or priority tier.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              7.6 Enrich a Lead
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Select one or more leads and click Enrich. This triggers the Data
              Enrichment Suite, which can:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {enrichItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-[#ECE6FF] bg-[#FBF8FF] p-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9856F2]" />
                  <p className="leading-7 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/results-grid"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/data-quality-verification"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Data Quality →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}