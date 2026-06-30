import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Lightbulb,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const tips = [
  "Stack filters progressively — start broad (industry + country), then add role and seniority until you have 200–500 results.",
  "Use Intent Data filters to surface the warmest leads first — they are more likely to respond to cold outreach.",
  "Combine Technology filters with Company Size to find companies using a competitor tool in your target segment.",
  "Save your best-performing filter combinations so you can re-run them weekly as new leads enter the database.",
  "Enrich your existing CRM contacts through the Bulk Task page before running a new campaign — stale data kills deliverability.",
  "Use the GDPR Opt-Out filter every time you target Europe — it is not applied by default for non-EU plans.",
  "Export in CSV and upload to HubSpot or Salesforce using the native import wizard if direct sync is not configured yet.",
]

export default function ProTipsPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Pro Tips for Best Results"
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

          <span>Pro Tips</span>
        </div>

        <Link
          href="/en/leads"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lead Discovery
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl">
            <Lightbulb className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Pro Tips for Best Results
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            These best practices will help you build more accurate prospect
            lists, improve reply rates, and get the most value from your
            Exellius subscription.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#D6E3F5]">
            <div className="bg-[#DCEBFF] px-6 py-4">
              <h2 className="text-2xl font-bold text-[#202124]">
                Power User Tips
              </h2>
            </div>

            <div className="divide-y divide-[#D6E3F5]">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-[#F5FAFF] px-6 py-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold text-[#9856F2] ">
                    {index + 1}
                  </div>

                  <p className="text-lg leading-8 text-gray-800">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Recommendation
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Save your most successful searches and revisit them regularly.
              Since the Exellius database is continuously refreshed, new
              prospects matching your criteria may appear without changing your
              filters.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/integrations"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/credits-plan-limits"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Credits & Plan Limits →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}