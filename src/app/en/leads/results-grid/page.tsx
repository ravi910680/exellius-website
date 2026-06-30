import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Table2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const columns = [
  {
    column: "Name",
    shows:
      "Full name of the contact with a link to their LinkedIn profile if available.",
  },
  {
    column: "Job Title",
    shows: "Current role at the company.",
  },
  {
    column: "Company",
    shows: "Company name, clickable to see all leads at that account.",
  },
  {
    column: "Location",
    shows: "City, State, Country.",
  },
  {
    column: "Email",
    shows:
      "Shows a lock icon if email is available; click to reveal the verified address using credits.",
  },
  {
    column: "Phone",
    shows:
      "Shows a lock icon if phone is available; click to reveal using credits.",
  },
  {
    column: "Verified Badge",
    shows:
      "Green tick = AI + human verified; Blue tick = AI verified only.",
  },
  {
    column: "LinkedIn",
    shows: "Direct profile link for social selling or connection request.",
  },
  {
    column: "Last Updated",
    shows:
      "When the data record was last refreshed. Database updates every 48 hours.",
  },
]

export default function ResultsGridPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Reading the Results Grid"
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

          <span>Reading the Results Grid</span>
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
            <Table2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Reading the Results Grid
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Once you apply filters, the matching leads appear in the central
            grid. Each row represents one contact and shows important details
            such as name, title, company, location, email status, phone
            availability, and verification information.
          </p>

          <Image
            src="/help-center/results-grid.png"
            alt="Results Grid"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Column headers — Name, Title, Email, Phone, Country, Company,
            Industry, Num Employees, Website, Email Status
          </p>

          <Image
            src="/help-center/results-grid-full.png"
            alt="Full Results Grid"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Full results grid with column headers highlighted
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#202124]">
              What Each Column Shows
            </h2>

            <div className="mt-6 overflow-hidden rounded-xl border border-[#ECE6FF]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1F5BE3] text-[#9856F2]">
                    <th className="w-[30%] px-4 py-3 text-left">
                      Column
                    </th>

                    <th className="px-4 py-3 text-left">
                      What It Shows
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {columns.map((item) => (
                    <tr
                      key={item.column}
                      className="odd:bg-white even:bg-[#F8FAFC]"
                    >
                      <td className="border-t border-[#ECE6FF] px-4 py-4 font-semibold align-top text-[#202124]">
                        {item.column}
                      </td>

                      <td className="border-t border-[#ECE6FF] px-4 py-4 leading-7 text-gray-700">
                        {item.shows}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Tip
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use the results grid to quickly review matching prospects before
              spending credits to reveal email addresses or phone numbers.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/filters"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/lead-actions"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Lead Actions →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}