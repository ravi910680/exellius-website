import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  Coins,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const creditItems = [
  "Revealing an email address — 1 credit",
  "Revealing a phone number — 1 credit",
  "Running a bulk email verification — credits per record, varies by plan",
  "Enriching a lead record — 1 credit per field appended",
]

export default function CreditsPlanLimitsPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Credits & Plan Limits"
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

          <span>Credits & Plan Limits</span>
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
            <Coins className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Credits & Plan Limits
          </h1>

          <Image
            src="/help-center/credits-plan-limits.png"
            alt="Credits and plan limits"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            76.1M Records count and 0 Leads selected
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Exellius uses a credit system. Credits are consumed when you reveal,
            verify, or enrich lead data.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#ECE6FF]">
            <div className="bg-[#F8F3FF] px-6 py-4">
              <h2 className="text-xl font-bold text-[#202124]">
                How Credits Are Consumed
              </h2>
            </div>

            <div className="divide-y divide-[#ECE6FF]">
              {creditItems.map((item) => (
                <div key={item} className="flex gap-4 px-6 py-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9856F2]" />
                  <p className="text-lg leading-8 text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Where to View Credits
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Your remaining credits and plan usage are shown in the top-right
              corner of the app dashboard. Upgrade or top-up credits from{" "}
              <strong>Settings &gt; Billing</strong>.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/pro-tips"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/quick-reference"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Quick Reference →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}