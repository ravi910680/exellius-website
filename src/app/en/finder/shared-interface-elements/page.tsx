import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  PanelsTopLeft,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const sharedElements = [
  {
    element: "Card container",
    description:
      "Both search forms appear inside a white rounded-corner card, centered on the page, sitting on a light grey background.",
  },
  {
    element: "Card title",
    description:
      "Bold black label above the input row: Domain Search in Tab 1 or Email Finder in Tab 2.",
  },
  {
    element: "Purple input border",
    description:
      "The input fields are outlined with a lavender or purple border when focused, consistent with the brand colour.",
  },
  {
    element: "Upload button",
    description:
      "Grey icon button that opens a file picker to import a CSV or text file of domains or names.",
  },
  {
    element: "Purple search button",
    description:
      "Filled purple square with a white magnifying glass icon — the primary action trigger in both tabs.",
  },
  {
    element: "Page background gradient",
    description:
      "The header area has a soft gradient from light lavender on the left to soft pink on the right, behind the title and tab switcher.",
  },
]

export default function SharedInterfaceElementsPage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Shared Interface Elements"
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

          <span>Shared Interface Elements</span>
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
            <PanelsTopLeft className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Shared Interface Elements
          </h1>

          <Image
            src="/help-center/finder-shared-interface.png"
            alt="Shared interface elements"
            width={1}
            height={1}
            sizes="100vw"
            className="mt-8 h-auto w-auto rounded-xl border border-[#ECE6FF]"
          />

          <p className="mt-3 text-sm italic text-gray-500">
            Upload grey button and Search purple button — both highlighted
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The following elements appear identically in both Tab 1 and Tab 2:
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-[#ECE6FF]">
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
                {sharedElements.map((item) => (
                  <tr
                    key={item.element}
                    className="odd:bg-white even:bg-[#F8F3FF]"
                  >
                    <td className="border-t border-[#ECE6FF] px-5 py-5 font-bold text-[#7C3AED] align-top">
                      {item.element}
                    </td>

                    <td className="border-t border-[#ECE6FF] px-5 py-5 leading-7 text-gray-700 align-top">
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
              Whether users search by company or by name, the same visual
              patterns apply: white search card, purple focus states, upload
              import button, and a purple search action button.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/find-email-by-name"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/using-the-finder"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Using the Finder →
            </Link>
          </div>
        </article>
      </div>
      <HelpCenterFooter />
    </section>
  )
}