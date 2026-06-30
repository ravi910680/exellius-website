import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  LayoutTemplate,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const titleBlockRows = [
  {
    element: "Email icon",
    description:
      "A small envelope icon in a light purple box sits to the left of the page title — visual identifier for the Finder section.",
  },
  {
    element: "Page title",
    description: "Bold black text: Find email by company.",
  },
  {
    element: "Subtitle",
    description:
      "Grey sub-text below the title: Enter a company domain to discover professional email addresses.",
  },
]

const statusBarRows = [
  {
    element: "Starter:",
    description:
      "Text label indicating the current subscription plan is Starter.",
  },
  {
    element: "Dollar icon ($)",
    description:
      "Credit balance indicator — shows remaining search/reveal credits on the account.",
  },
  {
    element: "Envelope icon",
    description:
      "Email-related credit or usage counter shown with a number badge.",
  },
  {
    element: "Tick/check icon",
    description:
      "Verification credits or verified contact quota remaining.",
  },
  {
    element: "Tablet/device icon",
    description: "Device or API usage count badge.",
  },
  {
    element: "Profile avatar",
    description:
      "Circular user avatar in the top-right corner — opens account settings or logout.",
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
            <th className="w-[32%] px-5 py-4 text-left font-bold">
              UI Element
            </th>
            <th className="px-5 py-4 text-left font-bold">
              What It Does
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

function DocImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1}
        height={1}
        sizes="100vw"
        className="mt-6 h-auto w-auto rounded-xl border border-[#ECE6FF]"
      />

      <p className="mt-3 text-sm italic text-gray-500">{caption}</p>
    </>
  )
}

export default function FinderPageHeaderPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Page Header"
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

          <span>Page Header</span>
        </div>

        <Link
          href="/en/finder"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#9856F2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Finder
        </Link>

        <article className="rounded-2xl border border-[#ECE6FF] bg-white p-8 shadow-sm md:p-10">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl">
            <LayoutTemplate className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Page Header
          </h1>

          <DocImage
            src="/help-center/finder-page-header.png"
            alt="Finder page header"
            caption="Page header — email icon, title and subtitle on gradient background"
          />

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The top of the Finder page contains two main areas: the page title
            block on the left and the top-right status bar.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              2.1 Page Title Block (Top-Left)
            </h2>

            <DocImage
              src="/help-center/finder-page-title-block.png"
              alt="Finder page title block"
              caption="Page title: Find email by company, and subtitle highlighted"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Displayed beneath the navigation bar on a gradient background,
              this block identifies the active Finder tool and explains what
              the user can do on the page.
            </p>

            <InfoTable rows={titleBlockRows} />

            <div className="mt-8 rounded-2xl bg-[#F8F3FF] p-6">
              <p className="text-sm italic leading-7 text-gray-700">
                Note: The page title and subtitle update to reflect the
                currently active tab. When the Find email by name tab is active,
                the active tab button is highlighted.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              2.2 Top-Right Status Bar
            </h2>

            <DocImage
              src="/help-center/finder-top-status-bar.png"
              alt="Finder top status bar"
              caption="Top-right status bar — Starter plan and credit badges"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The top-right corner of the screen shows the account status strip
              with plan information, credit badges, profile avatar, and settings.
            </p>

            <InfoTable rows={statusBarRows} />
          </section>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/overview"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/tab-navigation-two-modes"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Tab Navigation →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}