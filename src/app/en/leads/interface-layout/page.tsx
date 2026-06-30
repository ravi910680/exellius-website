import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const zones = [
  {
    name: "Left Filter Panel",
    description:
      "A sidebar containing all searchable filter categories. Expand each section to narrow your lead search.",
  },
  {
    name: "Results Grid (Centre)",
    description:
      "Displays matching leads in a table or card view with name, title, company, location, email status, and phone availability.",
  },
  {
    name: "Action Toolbar (Top)",
    description:
      "Provides actions for saving searches, exporting data, bulk selecting leads, and accessing enrichment tools.",
  },
]

export default function InterfaceLayoutPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Interface Layout"
        subtitle="Exellius Lead Discovery"
        searchPlaceholder="Search Lead Discovery articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en">All Collections</Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/leads">
            Exellius Lead Discovery
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Interface Layout</span>
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
            <LayoutDashboard className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Interface Layout
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The Leads page is designed to help you quickly search, filter,
            review, and manage large sets of B2B leads. Understanding the
            interface will help you work more efficiently.
          </p>

          {/* Screenshot */}

          <Image
  src="/help-center/interface-layout.png"
  alt="Interface Layout"
  width={1}
  height={1}
  sizes="100vw"
  className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
/>

          <p className="mt-3 text-left italic text-gray-500">
            Full left filter panel — Search, filters and Find Leads button
          </p>

          <Image
            src="/help-center/interface-tabs.png"
            alt="People Company Tabs"
            width={1}
  height={1}
  sizes="100vw"
  className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-left italic text-gray-500">
            People / Company tab switcher
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">
              Main Interface Zones
            </h2>

            <p className="mt-3 text-gray-600">
              The Leads page is divided into three primary working areas.
            </p>

            <div className="mt-8 overflow-hidden rounded-xl border border-[#ECE6FF]">
              <table className="w-full border-collapse">

                <thead>
                  <tr className="bg-[#9856F2] text-white">
                    <th className="border border-[#ECE6FF] px-5 py-4 text-left">
                      Zone
                    </th>

                    <th className="border border-[#ECE6FF] px-5 py-4 text-left">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {zones.map((zone) => (
                    <tr
                      key={zone.name}
                      className="odd:bg-white even:bg-[#FCFAFF]"
                    >
                      <td className="border border-[#ECE6FF] px-5 py-5 font-semibold align-top w-72">
                        {zone.name}
                      </td>

                      <td className="border border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700">
                        {zone.description}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-[#F8F3FF] p-6">
            <h3 className="font-bold text-[#202124]">
              Tip
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Most users begin by applying filters in the left panel,
              reviewing matching prospects in the results grid,
              and then using the action toolbar to reveal,
              export, or save leads.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">

            <Link
              href="/en/leads/getting-started"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/search-bar"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next →
            </Link>

          </div>

        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}