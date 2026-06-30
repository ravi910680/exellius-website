import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Plug,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const integrations = [
  {
    toolType: "CRM",
    platforms: "Salesforce, HubSpot, Pipedrive",
  },
  {
    toolType: "Sales Engagement",
    platforms: "Outreach.io, SalesLoft",
  },
  {
    toolType: "Email Marketing",
    platforms: "Mailchimp, ActiveCampaign (via CSV)",
  },
  {
    toolType: "Developer / API",
    platforms:
      "REST API — Email Finder, Lead Enrichment, Contact Verification endpoints",
  },
  {
    toolType: "Bulk Processing",
    platforms:
      "Upload CSV lists for bulk email finding, verification, and phone appending",
  },
]

export default function IntegrationsPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Integrations & Export Destinations"
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

          <span>Integrations & Export Destinations</span>
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
            <Plug className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Integrations & Export Destinations
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Exellius connects with your existing sales stack. Go to{" "}
            <strong>Settings &gt; Integrations</strong> to configure supported
            CRMs, sales engagement tools, email marketing platforms, developer
            APIs, and bulk processing workflows.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#1F5BE3] text-[#9856F2]">
                  <th className="w-[32%] px-5 py-4 text-left font-bold">
                    Tool Type
                  </th>

                  <th className="px-5 py-4 text-left font-bold">
                    Supported Platforms
                  </th>
                </tr>
              </thead>

              <tbody>
                {integrations.map((item) => (
                  <tr
                    key={item.toolType}
                    className="odd:bg-white even:bg-[#F8FAFC]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-5 font-bold text-[#202124] align-top">
                      {item.toolType}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700 align-top">
                      {item.platforms}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Export Tip
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              If direct sync is not configured yet, export your lead list as CSV
              and upload it into HubSpot, Salesforce, Pipedrive, Mailchimp, or
              your preferred outreach tool.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/data-quality-verification"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/pro-tips"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Pro Tips →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}