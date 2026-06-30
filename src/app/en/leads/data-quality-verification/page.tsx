import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const verificationItems = [
  {
    title: "Human Verification",
    description:
      "C-suite direct dials and founder personal emails are spot-checked by Exellius' data team.",
  },
  {
    title: "Database Refresh",
    description:
      "The full database refreshes every 48 hours; critical fields like email and phone are re-verified quarterly.",
  },
  {
    title: "Accuracy Guarantee",
    description:
      "95%+ accuracy on revealed contact data — helping reduce bounce rates and wasted credits.",
  },
  {
    title: "Compliance",
    description:
      "All data is GDPR and CAN-SPAM compliant; opt-out lists are honored automatically.",
  },
]

export default function DataQualityVerificationPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Data Quality & Verification"
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

          <span>Data Quality & Verification</span>
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
            <ShieldCheck className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Data Quality & Verification
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Exellius verifies and refreshes contact data to help sales and
            marketing teams work with accurate business information.
          </p>

          <Image
            src="/help-center/data-quality-verification.png"
            alt="Top-right status bar"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Top-right status bar — Starter plan and credit badges
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#ECE6FF]">
            <div className="bg-[#EAF4FF] px-6 py-4">
              <h2 className="text-xl font-bold text-[#202124]">
                How Exellius Verifies Contact Data
              </h2>
            </div>

            <div className="divide-y divide-[#DCE7F5] bg-[#F3FAFF]">
              {verificationItems.map((item) => (
                <div key={item.title} className="flex gap-4 px-6 py-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9856F2]" />

                  <p className="text-lg leading-8 text-gray-800">
                    <strong>{item.title}:</strong> {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Why this matters
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Better data quality helps reduce bounced emails, saves credits,
              improves outreach performance, and gives your sales team more
              confidence before contacting prospects.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/lead-actions"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads/integrations"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Integrations →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}