import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import { ArrowLeft, ChevronRight, MousePointer2 } from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const tabs = [
  {
    element: "Find email by company (Tab 1)",
    description:
      "When active: filled purple background, white text, company/group icon on the left. This is the default view when the page loads.",
  },
  {
    element: "Find email by name (Tab 2)",
    description:
      "When active: filled purple background, white text, person/profile icon on the left. Clicking switches the search form below.",
  },
]

export default function FinderTabNavigationPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Tab Navigation — Two Modes"
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

          <span>Tab Navigation — Two Modes</span>
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
            <MousePointer2 className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Tab Navigation — Two Modes
          </h1>

          <Image
            src="/help-center/finder-tab-navigation.png"
            alt="Finder tab navigation"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Tab switcher — Find email by company active and Find email by name
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Directly below the page header is a two-tab switcher. Only one tab
            is active at a time.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#ECE6FF]">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[#7C3AED] text-[#9856F2]">
                  <th className="w-[34%] px-5 py-4 text-left font-bold">
                    UI Element
                  </th>
                  <th className="px-5 py-4 text-left font-bold">
                    What It Does
                  </th>
                </tr>
              </thead>

              <tbody>
                {tabs.map((tab) => (
                  <tr
                    key={tab.element}
                    className="odd:bg-white even:bg-[#F8F3FF]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-5 font-bold text-[#7C3AED] align-top">
                      {tab.element}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700 align-top">
                      {tab.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl bg-[#F8F3FF] p-6">
            <p className="italic leading-7 text-gray-700">
              When a tab is inactive, it appears as a plain white or grey pill
              with dark text and no filled background.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/page-header"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/find-email-by-company"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Find Email by Company →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}