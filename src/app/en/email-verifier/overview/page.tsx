import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  MailCheck,
  CheckCircle2,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const features = [
  {
    title: "Email Bounce Validation",
    description:
      "The top card lets you validate one email address at a time or upload a CSV file for bulk verification.",
  },
  {
    title: "File Verification",
    description:
      "The bottom card displays summary counts and complete results for previously uploaded bulk verification jobs.",
  },
]

export default function EmailVerifierOverviewPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Email Verifier Overview"
        subtitle="Exellius Email Verifier"
        searchPlaceholder="Search Email Verifier articles..."
      />

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Breadcrumb */}

        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/en" className="hover:text-[#9856F2]">
            All Collections
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href="/en/email-verifier"
            className="hover:text-[#9856F2]"
          >
            Email Verifier
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>Overview</span>
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
            <MailCheck className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Overview
          </h1>

          <div className="mt-8 rounded-2xl border border-[#ECE6FF] bg-[#FBF8FF] p-6">
            <p className="text-lg leading-8 text-gray-700">
              The Email Bounce Validation page
              (<strong>app.exellius.com/verify/email</strong>) is
              Exellius&apos; email verification tool. It checks whether an email
              address is deliverable before you send to it, helping reduce
              bounce rates.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The page is divided into two stacked white cards on a light grey
              background.
            </p>

            <Image
              src="/help-center/email-verifier-overview.png"
              alt="Email Verifier Navigation"
              width={1}
              height={1}
              sizes="100vw"
              className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
            />

            <p className="mt-3 text-sm italic text-gray-500">
              Left Navigation Panel
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#202124]">
              Main Sections
            </h2>

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-[#ECE6FF] bg-[#FBF8FF] p-6"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-[#9856F2]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#9856F2]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Summary
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Email Verifier helps improve email deliverability by validating
              addresses before sending campaigns. You can verify a single email
              instantly or upload large CSV files for bulk verification and
              review detailed verification results.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Back to collection
            </Link>

            <Link
              href="/en/email-verifier/top-status-bar"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Top Status Bar →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}