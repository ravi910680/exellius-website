import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, Activity } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const statusItems = [
  {
    element: "Starter:",
    description: "Text label indicating the current subscription plan is Starter.",
  },
  {
    element: "Dollar icon ($) — 25",
    description:
      "Credit balance badge showing 25 next to a dollar icon, inside a purple circular counter.",
  },
  {
    element: "Envelope icon — 25",
    description:
      "Email-related credit counter, also showing 25 in a purple badge.",
  },
  {
    element: "Check icon — 25",
    description:
      "Verification credit counter, also showing 25 in a purple badge.",
  },
  {
    element: "Device/tablet icon — 6",
    description: "Device or API usage counter, showing 6 in a purple badge.",
  },
  {
    element: "Profile avatar",
    description: "Circular user avatar in the top-right corner.",
  },
  {
    element: "Settings gear icon",
    description:
      "A grey settings icon sits to the right of the profile avatar and opens account or app settings.",
  },
]

export default function EmailVerifierTopStatusBarPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Top Status Bar"
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

          <span>Top Status Bar</span>
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
            <Activity className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Top Status Bar
          </h1>

          <Image
            src="/help-center/email-verifier-top-status-bar.png"
            alt="Email Verifier Top Status Bar"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Top Status Bar
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            The top-right corner of the screen shows the account status strip,
            consistent with other Exellius tool pages.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#7C3AED] text-[#9856F2]">
                  <th className="w-[32%] px-5 py-4 text-left font-bold">
                    UI Element
                  </th>
                  <th className="px-5 py-4 text-left font-bold">
                    What It Shows / Does
                  </th>
                </tr>
              </thead>

              <tbody>
                {statusItems.map((item) => (
                  <tr
                    key={item.element}
                    className="odd:bg-white even:bg-[#F8F3FF]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-4 font-bold text-[#7C3AED] align-top">
                      {item.element}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-4 leading-7 text-gray-700 align-top">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F8F3FF] p-6">
            <h3 className="text-lg font-bold text-[#202124]">
              Summary
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Use the top status bar to quickly check your current plan,
              remaining credits, profile avatar, and settings access.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/email-verifier/overview"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/email-verifier/email-bounce-validation"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Email Bounce Validation →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}