import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  ListChecks,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const workflowA = [
  {
    step: "1",
    title: "Open the Email Bounce Validation page",
    description:
      "Navigate to app.exellius.com/verify/email. The page loads with both cards visible: Email Bounce Validation on top, File Verification below.",
  },
  {
    step: "2",
    title: "Locate the input field",
    description:
      "On the left side of the top card, find the field with placeholder text Enter email address.",
  },
  {
    step: "3",
    title: "Type the email address",
    description:
      "Click into the field and type the full email address you want to validate.",
  },
  {
    step: "4",
    title: "Click Validate Email",
    description:
      "Click the solid purple Validate Email button directly to the right of the input field to run the check.",
  },
]

const workflowB = [
  {
    step: "1",
    title: "Open the Email Bounce Validation page",
    description: "Navigate to app.exellius.com/verify/email.",
  },
  {
    step: "2",
    title: "Locate the Bulk Validation section",
    description:
      "On the right side of the top card, find the section titled Bulk Validation with the CSV file icon.",
  },
  {
    step: "3",
    title: "Click Upload CSV",
    description:
      "Click the solid purple Upload CSV button to open a file picker.",
  },
  {
    step: "4",
    title: "Select your CSV file",
    description:
      "Choose a CSV file from your computer containing the list of email addresses to validate.",
  },
  {
    step: "5",
    title: "Review results in File Verification",
    description:
      "Scroll down to the File Verification card. Once processing completes, the four status tiles update with counts reflecting the results of your file.",
  },
]

interface StepCardItem {
  step: string
  title: string
  description: string
}

function StepCard({ item }: { item: StepCardItem }) {
  return (
    <div className="flex overflow-hidden rounded-lg border border-[#ECE6FF] bg-[#FBF8FF]">
      <div className="flex w-16 shrink-0 items-center justify-center bg-[#7C3AED] text-lg font-bold text-[#9856F2]">
        {item.step}
      </div>

      <div className="p-4">
        <h4 className="font-bold text-[#202124]">{item.title}</h4>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function EmailVerifierUsingToolPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Step-by-Step: Using the Tool"
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
          <span>Step-by-Step: Using the Tool</span>
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
            <ListChecks className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Step-by-Step: Using the Tool
          </h1>

          <div className="mt-8 rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
            <p className="text-lg leading-8 text-gray-700">
              This guide explains how to use the Email Bounce Validation tool to
              validate a single email address or bulk-validate a list of emails
              using a CSV file.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#9856F2]">
              Workflow A — Validate a single email address
            </h2>

            <Image
              src="/help-center/email-verifier-workflow-a.png"
              alt="Workflow A Screenshot"
              width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Workflow A Screenshot
            </p>

            <div className="mt-8 space-y-4">
              {workflowA.map((item) => (
                <StepCard key={item.step} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#9856F2]">
              Workflow B — Bulk-validate a list of emails via CSV
            </h2>

            <Image
              src="/help-center/email-verifier-workflow-b.png"
              alt="Workflow B Screenshot"
               width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Workflow B Screenshot
            </p>

            <div className="mt-8 space-y-4">
              {workflowB.map((item) => (
                <StepCard key={item.step} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 text-[#9856F2]" />
              <div>
                <h3 className="text-lg font-bold text-[#202124]">Summary</h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Use Workflow A when you need to quickly check one email
                  address. Use Workflow B when you have a CSV file containing
                  multiple email addresses and want to verify them in bulk.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/top-status-bar"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous: Top Status Bar
            </Link>

            <Link
              href="/en/email-verifier/quick-reference"
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