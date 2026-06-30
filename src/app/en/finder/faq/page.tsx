import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const faqs = [
  {
    question: "What's the difference between searching by company vs. by name?",
    answer:
      "Find email by company returns all professional email addresses associated with a domain you enter. Find email by name returns the specific email for one person using their full name plus the company's domain.",
  },
  {
    question: "Can I search multiple domains or names at once?",
    answer:
      "Yes. In Tab 1, the Domain Search field supports multiple domains. In Tab 2, the name and domain fields show dropdown chevrons, suggesting multi-entry support. For larger lists, use the upload button to import a CSV or text file.",
  },
  {
    question: "What file format should I use for the upload button?",
    answer:
      "Use a CSV or text file. For Tab 1, the file should contain a list of domains. For Tab 2, the file should contain matching pairs of full names and company domains.",
  },
  {
    question: "Why is my domain or name search returning no result?",
    answer:
      "Finder relies on an exact match. Check domain spelling, avoid using www or protocol prefixes if not required, verify the person's full name, and make sure the company domain has indexed contacts.",
  },
  {
    question: "Does each search use a credit, even if it doesn't find a result?",
    answer:
      "The top-right status bar shows account credit counters, but the exact deduction behavior was not visible in the reviewed screen. Check your credit counter before and after searching to confirm deduction behavior.",
  },
]

export default function FinderFaqPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Frequently Asked Questions"
        subtitle="Exellius Finder Tool"
        searchPlaceholder="Search Finder articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link href="/en/finder" className="hover:text-[#9856F2]">
            Exellius Finder Tool
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Frequently Asked Questions</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
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
              href="/en/finder/quick-reference"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder"
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