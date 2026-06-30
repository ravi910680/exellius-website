import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const faqs = [
  {
    question: "How do I reveal a lead's email or phone number?",
    answer:
      "Use the reveal option beside the email or phone field in the Leads table. If the contact detail is available, Exellius will reveal the verified email or phone number.",
  },
  {
    question: "Does revealing contact details consume credits?",
    answer:
      "Yes. Revealing an email address or phone number uses credits from your subscription plan. You can check your remaining credits in the top-right status area of the app.",
  },
  {
    question: "Why am I not getting any results after applying filters?",
    answer:
      "Your filters may be too narrow. Try removing some filters, broadening the location or industry, checking spelling, or starting with a wider search before adding more criteria.",
  },
  {
    question: "How do I save a search?",
    answer:
      "After applying your filters, click Save Search. Give the search a name and it will appear in your Saved Searches tab so you can run it again later.",
  },
  {
    question: "How do I export my lead list?",
    answer:
      "Click the Export button in the results toolbar. You can export leads as CSV or Excel, and use the exported file in your CRM, outreach tool, or spreadsheet workflow.",
  },
]

export default function LeadsFaqPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Frequently Asked Questions"
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

          <span>Frequently Asked Questions</span>
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
            <HelpCircle className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Frequently Asked Questions
          </h1>

          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6"
              >
                <h2 className="text-lg font-bold text-[#202124]">
                  Q. {faq.question}
                </h2>

                <p className="mt-4 text-lg leading-8 text-gray-700">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6 text-center">
            <p className="italic leading-7 text-gray-700">
              For support, visit{" "}
              <Link href="/en" className="font-medium text-[#9856F2]">
                exellius.com/help-center
              </Link>{" "}
              or email the Exellius team directly.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/leads/quick-reference"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/leads"
              className="text-sm font-medium text-[#9856F2]"
            >
              Back to collection →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}