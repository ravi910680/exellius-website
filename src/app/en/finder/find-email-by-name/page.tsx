import Link from "next/link"
import Image from "next/image"
import HelpCenterHero from "../../HelpCenterHero"
import {
  ArrowLeft,
  ChevronRight,
  UserSearch,
} from "lucide-react"
import HelpCenterFooter from "../../HelpCenterFooter"

const splitInputRows = [
  {
    element: "Left field",
    description:
      "Enter full name(s) placeholder text. Accepts one or more person names and has a dropdown chevron suggesting suggestions or multi-entry support.",
  },
  {
    element: "@ separator",
    description:
      "A fixed @ symbol sits in the centre of the row, showing that the fields work together as name @ domain.",
  },
  {
    element: "Right field",
    description:
      "company.com placeholder text. Enter the company domain associated with the person. It also has a dropdown chevron on the right edge.",
  },
  {
    element: "Upload button",
    description:
      "Grey upload icon button that allows importing a name + domain list from a CSV file.",
  },
  {
    element: "Search button",
    description:
      "Filled purple magnifying glass button that runs the lookup after both fields are filled.",
  },
]

const steps = [
  "Click on the left field labelled Enter full name(s).",
  "Type the full name of the person you are searching for.",
  "Click on the right field labelled company.com.",
  "Enter the domain of the company the person works at, e.g. infosys.com.",
  "Click the purple Search button to retrieve the verified email address.",
]

function FinderInfoTable({
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
            <th className="w-[30%] px-5 py-4 text-left font-bold">
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

export default function FindEmailByNamePage() {
  return (
    <section className="min-h-screen bg-[#FAFAFB]">
      <HelpCenterHero
        title="Find Email by Name"
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

          <span>Find Email by Name</span>
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
            <UserSearch className="h-7 w-7 text-[#9856F2]" />
          </div>

          <h1 className="text-4xl font-bold text-[#202124]">
            Find Email by Name
          </h1>

          <DocImage
            src="/help-center/finder-name-tab.png"
            alt="Find email by name tab"
            caption="Tab switcher — Find email by name now active"
          />

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Clicking the <strong>Find email by name</strong> tab switches the
            search form to a person-level lookup. The page title area remains
            the same, but the card below changes its layout and label.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              5.1 Screen Layout
            </h2>

            <DocImage
              src="/help-center/finder-name-screen-layout.png"
              alt="Email Finder card"
              caption="Email Finder card — full view"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The white card now shows:
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-gray-700">
              <li>A card title: Email Finder</li>
              <li>
                A split input row with two fields separated by an{" "}
                <strong>@</strong> symbol
              </li>
              <li>An upload/import button</li>
              <li>A purple search button</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              5.2 Email Finder — Split Input Row
            </h2>

            <DocImage
              src="/help-center/finder-name-split-input.png"
              alt="Email Finder split input row"
              caption="Full split input row — name field, @ separator, domain field, upload and search buttons"
            />

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The input area is a single connected row divided into two sections
              by a vertical separator and the <strong>@</strong> symbol.
            </p>

            <FinderInfoTable rows={splitInputRows} />
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-[#7C3AED]">
              5.3 How to Use — Find Email by Name
            </h2>

            <ol className="mt-6 list-decimal space-y-4 pl-6 text-lg leading-8 text-gray-700">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl bg-[#F8F3FF] p-6">
              <p className="italic leading-7 text-gray-700">
                The dropdown chevron on each field suggests that multiple names
                can be entered, or that the field offers type-ahead suggestions
                as you type.
              </p>
            </div>
          </section>

          <div className="mt-10 flex justify-between border-t border-[#ECE6FF] pt-6">
            <Link
              href="/en/finder/find-email-by-company"
              className="text-sm font-medium text-[#9856F2]"
            >
              ← Previous
            </Link>

            <Link
              href="/en/finder/shared-interface-elements"
              className="text-sm font-medium text-[#9856F2]"
            >
              Next: Shared Interface Elements →
            </Link>
          </div>
        </article>
      </div>
        <HelpCenterFooter />
    </section>
  )
}