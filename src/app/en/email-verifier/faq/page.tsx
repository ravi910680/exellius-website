import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, CircleHelp } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"
const faqs = [
  {
    question:
      "What's the difference between validating one email vs. uploading a CSV?",
    answer:
      "The single email field on the left of Card 1 is for checking one address at a time and gives an immediate result for that address. The Bulk Validation section on the right is for checking many addresses at once by uploading a CSV file — results for the whole file appear in the File Verification card below rather than inline next to the input.",
  },
  {
    question:
      "What do the four result categories (Valid, Invalid, Risky, Unknown) mean?",
    answer:
      "Valid Emails are addresses confirmed as deliverable. Invalid Emails are addresses confirmed as undeliverable and likely to bounce. Risky Emails are addresses with uncertain deliverability — they might bounce, so use discretion before sending. Unknown Emails are addresses the tool could not conclusively classify, often because the mail server did not respond clearly during the check.",
  },
  {
    question:
      "Why does the File Verification card show all zeros and an empty-state message?",
    answer:
      "The four tiles show 0 and the message No file verification results found yet. appears whenever no bulk CSV file has been uploaded and processed yet through the Bulk Validation section. As soon as a CSV file is uploaded and verification completes, the tiles should update to reflect the actual counts from that file.",
  },
  {
    question: "Does validating an email consume credits?",
    answer:
      "The top-right status bar shows a Starter plan label with four credit-style counters. This strongly suggests validations draw from a shared credit pool, though the exact cost per single validation versus per bulk-file row was not shown on the screen reviewed. Watch these counters before and after a check to confirm the deduction on your account.",
  },
  {
    question: "What format should my CSV file be in for bulk validation?",
    answer:
      "The Bulk Validation section only specifies Upload CSV file to validate multiple emails as its instruction text — the exact column structure or header requirements were not visible on the screen reviewed. A safe approach is to put one email address per row in a single column and test with a small sample file first to confirm the format Exellius expects before uploading a large list.",
  },
]

export default function EmailVerifierFaqPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Frequently Asked Questions"
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
          <span>FAQ</span>
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
            <CircleHelp className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Frequently Asked Questions
          </h1>

          <div className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6"
              >
                <h3 className="text-lg font-bold text-[#202124]">
                  <span className="text-[#9856F2]">Q.</span> {faq.question}
                </h3>

                <p className="mt-4 leading-7 text-gray-700">
                  <span className="font-bold text-[#202124]">A.</span>{" "}
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">Summary</h3>

            <p className="mt-3 leading-7 text-gray-700">
              These FAQs explain how single email verification, bulk CSV
              validation, verification result categories, empty states, credits,
              and CSV upload format work on the Email Verifier page.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/quick-reference"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous: Quick Reference
            </Link>

            <Link
              href="/en/email-verifier"
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