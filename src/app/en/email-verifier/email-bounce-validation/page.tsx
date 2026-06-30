import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  MailCheck,
  Upload,
  FileText,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const cardTitleRows = [
  {
    element: "Card title",
    description: "Bold black heading: Email Bounce Validation.",
  },
  {
    element: "Subtitle",
    description:
      "Grey sub-text directly below the title: Validate single emails or upload a CSV file for bulk bounce checking.",
  },
]

const singleEmailRows = [
  {
    element: "Input field",
    description:
      "Placeholder text reads: Enter email address. A plain white rectangular text box with a light grey border.",
  },
  {
    element: "Validate Email button",
    description:
      "Solid purple button with white bold text reading Validate Email, positioned directly to the right of the input field.",
  },
]

const bulkRows = [
  {
    element: "CSV file icon",
    description:
      "A small grey document icon with a blue CSV tag sits to the left of the bulk validation text.",
  },
  {
    element: "Section title",
    description: "Bold black text: Bulk Validation.",
  },
  {
    element: "Section subtitle",
    description:
      "Grey text directly below the title: Upload CSV file to validate multiple emails.",
  },
  {
    element: "Upload CSV button",
    description:
      "Solid purple button with white bold text reading Upload CSV, aligned to the far right of this section.",
  },
]

function InfoTable({
  rows,
}: {
  rows: {
    element: string
    description: string
  }[]
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-[#ECE6FF]">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#7C3AED] text-[#9856F2]">
            <th className="w-[34%] px-5 py-4 text-left font-bold">
              UI Element
            </th>
            <th className="px-5 py-4 text-left font-bold">
              What It Shows / Does
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.element} className="odd:bg-white even:bg-[#F8F3FF]">
              <td className="border-t border-[#ECE6FF] px-5 py-4 font-bold text-[#7C3AED] align-top">
                {row.element}
              </td>

              <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SingleEmailMockup() {
  return (
    <Image
                      src="/help-center/single-email-verifier.png"
                      alt="Email Verifier Top Status Bar"
                      width={1}
                      height={1}
                      sizes="100vw"
                      className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                    />
  )
}

function BulkValidationMockup() {
  return (
    <Image
                      src="/help-center/bulk-email-verifier.png"
                      alt="Email Verifier Top Status Bar"
                      width={1}
                      height={1}
                      sizes="100vw"
                      className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                    />
  )
}

export default function EmailBounceValidationPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Email Bounce Validation"
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

          <span>Email Bounce Validation</span>
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
            <MailCheck className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Card 1 — Email Bounce Validation
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            This is the top card on the Email Verifier page. It contains the
            title, subtitle, and two validation methods side by side: single
            email validation and bulk CSV validation.
          </p>

           <Image
                      src="/help-center/email-verifier-main.png"
                      alt="Email Verifier Top Status Bar"
                      width={1}
                      height={1}
                      sizes="100vw"
                      className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                    />
          

          <p className="mt-3 text-sm italic text-gray-500">
            Card 1 Full View
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              3.1 Card Title & Subtitle
            </h2>

            <InfoTable rows={cardTitleRows} />
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              3.2 Single Email Validation (Left Side)
            </h2>

            <SingleEmailMockup />

            <p className="mt-3 text-sm italic text-gray-500">
              Single Email Input
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              On the left side of the card is a single-line input field paired
              with a purple action button.
            </p>

            <InfoTable rows={singleEmailRows} />

            <div className="mt-8 rounded-2xl bg-[#F8F3FF] p-6">
              <h3 className="text-lg font-bold text-[#202124]">
                How to use this field
              </h3>

              <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-gray-700">
                <li>Click inside the Enter email address field.</li>
                <li>
                  Type the full email address you want to check, e.g.
                  name@company.com.
                </li>
                <li>Click the purple Validate Email button to run the check.</li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              3.3 Bulk Validation (Right Side)
            </h2>

            <BulkValidationMockup />

            <p className="mt-3 text-sm italic text-gray-500">
              Bulk Validation Section
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              On the right side of the same card is the bulk upload option for
              validating multiple email addresses through a CSV file.
            </p>

            <InfoTable rows={bulkRows} />

            <div className="mt-8 rounded-2xl bg-[#F8F3FF] p-6">
              <div className="flex gap-4">
                <Upload className="mt-1 h-6 w-6 shrink-0 text-[#9856F2]" />

                <div>
                  <h3 className="text-lg font-bold text-[#202124]">
                    How to use this section
                  </h3>

                  <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-gray-700">
                    <li>Click the purple Upload CSV button.</li>
                    <li>
                      Select a CSV file from your computer containing a list of
                      email addresses.
                    </li>
                    <li>
                      The file is processed and results populate in the File
                      Verification card below.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/top-status-bar"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/email-verifier/file-verification"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: File Verification →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}