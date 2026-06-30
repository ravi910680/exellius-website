import Link from "next/link"
import HelpCenterHero from "../../HelpCenterHero"
import Image from "next/image"
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  HelpCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const statusTiles = [
  {
    title: "Valid Emails",
    count: 0,
    description:
      "Green background and green text. Displays a count with a green circular check-mark icon.",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    icon: CheckCircle2,
  },
  {
    title: "Invalid Emails",
    count: 0,
    description:
      "Light red/pink background and red text. Displays a count with a red circular X icon.",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-600",
    icon: XCircle,
  },
  {
    title: "Risky Emails",
    count: 0,
    description:
      "Light amber background and amber text. Displays a count with an amber circular exclamation icon.",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
    icon: AlertTriangle,
  },
  {
    title: "Unknown Emails",
    count: 0,
    description:
      "Light blue background and blue text. Displays a count with a blue circular question-mark icon.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    icon: HelpCircle,
  },
]

function InfoTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-[#ECE6FF]">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#7C3AED] text-white">
            <th className="w-[36%] px-5 py-4 text-left font-bold">
              UI Element
            </th>
            <th className="px-5 py-4 text-left font-bold">
              What It Shows / Does
            </th>
          </tr>
        </thead>

        <tbody>
          {statusTiles.map((item) => (
            <tr key={item.title} className="odd:bg-white even:bg-[#F8F3FF]">
              <td className="border-t border-[#ECE6FF] px-5 py-4 font-bold text-[#7C3AED] align-top">
                {item.title}
              </td>

              <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatusTile({
  title,
  count,
  bg,
  border,
  text,
  icon: Icon,
}: {
  title: string
  count: number
  bg: string
  border: string
  text: string
  icon: any
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-2xl border p-6 ${bg} ${border}`}
    >
      <div>
        <p className={`font-bold ${text}`}>{title}</p>
        <p className={`mt-3 text-3xl font-bold ${text}`}>{count}</p>
      </div>

      <Icon className={`h-10 w-10 ${text}`} />
    </div>
  )
}

export default function FileVerificationPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="File Verification"
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

          <span>File Verification</span>
        </div>

        <Link
          href="/en/email-verifier"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Email Verifier
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl ">
            <FileCheck2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Card 2 — File Verification
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            This is the second card, positioned below the Email Bounce
            Validation card. It displays the results of any bulk CSV
            verification that has been run.
          </p>

           <Image
                                src="/help-center/verification-count-image.png"
                                alt="Email Verifier Top Status Bar"
                                width={1}
                                height={1}
                                sizes="100vw"
                                className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                              />

          <p className="mt-3 text-sm italic text-gray-500">
            File Verification Full
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.1 Card Title
            </h2>

            <div className="mt-6 rounded-xl bg-[#F8F3FF] px-5 py-4 font-mono text-sm text-[#7C3AED]">
              File Verification
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.2 Four Status Tiles
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Below the title are four colour-coded result tiles, arranged side
              by side in a single row. Each tile pairs a count with a circular
              status icon.
            </p>

           <Image
                                src="/help-center/valid-verification-card.png"
                                alt="Email Verifier Top Status Bar"
                                width={1}
                                height={1}
                                sizes="100vw"
                                className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                              />

<p className="mt-3 text-sm italic text-gray-500">
           Valid Emails Tile
          </p>

           <Image
                                src="/help-center/verification-count-image.png"
                                alt="Email Verifier Top Status Bar"
                                width={1}
                                height={1}
                                sizes="100vw"
                                className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                              />
            <InfoTable />
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              4.3 Empty State Message
            </h2>

            <div className="mt-6 rounded-xl bg-[#F8F3FF] px-5 py-4 font-mono text-sm text-[#7C3AED]">
              No file verification results found yet.
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              This grey text line appears directly below the four status tiles
              when no bulk file has been uploaded and verified yet. It will be
              replaced by a detailed results list or table once a CSV file is
              processed through the Upload CSV button.
            </p>

            <div className="mt-8 rounded-2xl border border-[#ECE6FF] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#202124]">
                File Verification
              </h3>

              <Image
                                src="/help-center/no-verify-file.png"
                                alt="Email Verifier Top Status Bar"
                                width={1}
                                height={1}
                                sizes="100vw"
                                className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
                              />

              <p className="mt-6 text-sm text-gray-500">
                No file verification results found yet.
              </p>
            </div>

            <p className="mt-3 text-sm italic text-gray-500">
              Empty State Message
            </p>
          </section>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/email-bounce-validation"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/email-verifier/using-the-tool"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Using the Tool →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}